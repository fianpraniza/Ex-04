#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { labels, milestones, tickets, epics, projectName, issueBody } from './lib/learning-system-data.mjs';

const root = resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const option = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
};
const repoName = option('--repo') ?? basename(root);
const visibility = args.includes('--public') ? '--public' : '--private';
const dryRun = args.includes('--dry-run');

const run = (command, commandArgs, options = {}) => {
  if (dryRun) {
    console.log(`[dry-run] ${command} ${commandArgs.join(' ')}`);
    return '';
  }
  try {
    return execFileSync(command, commandArgs, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      ...options,
    }).trim();
  } catch (error) {
    const stderr = error.stderr?.toString().trim();
    const stdout = error.stdout?.toString().trim();
    throw new Error(`${command} ${commandArgs.join(' ')} failed${stderr ? `: ${stderr}` : stdout ? `: ${stdout}` : ''}`);
  }
};
const json = (command, commandArgs, options) => JSON.parse(run(command, commandArgs, options));
const api = (path, method = 'GET', body) => {
  const apiArgs = ['api', path, '--method', method];
  if (body !== undefined) apiArgs.push('--input', '-');
  return run('gh', apiArgs, body === undefined ? {} : { input: JSON.stringify(body) });
};
const milestoneTitle = (m) => `${m.id} - ${m.title}`;

if (args.includes('--help')) {
  console.log('Usage: node scripts/bootstrap-github.mjs [--repo OWNER/NAME|NAME] [--public|--private] [--dry-run]');
  process.exit(0);
}

if (!dryRun) {
  try {
    run('gh', ['auth', 'status']);
  } catch {
    throw new Error('GitHub authentication is required. Run: gh auth login -h github.com -s repo,project');
  }
}

const viewer = dryRun ? 'OWNER' : json('gh', ['api', 'user']).login;
const fullRepo = repoName.includes('/') ? repoName : `${viewer}/${repoName}`;
const [owner, name] = fullRepo.split('/');

if (!dryRun) {
  try {
    run('gh', ['repo', 'view', fullRepo]);
  } catch {
    run('gh', ['repo', 'create', fullRepo, visibility, '--source', '.', '--remote', 'origin', '--description', 'Evidence-driven Production ML Engineering learning system for On-Device Apple ML']);
  }
  try {
    run('git', ['remote', 'get-url', 'origin']);
  } catch {
    run('git', ['remote', 'add', 'origin', `https://github.com/${fullRepo}.git`]);
  }
  run('git', ['push', '--set-upstream', 'origin', 'main']);
}

const existingMilestones = dryRun ? [] : json('gh', ['api', `repos/${fullRepo}/milestones?state=all&per_page=100`]);
const milestoneNumbers = new Map(existingMilestones.map((m) => [m.title, m.number]));
for (const milestone of milestones) {
  const title = milestoneTitle(milestone);
  if (!milestoneNumbers.has(title)) {
    const created = dryRun ? { number: 0 } : JSON.parse(api(`repos/${fullRepo}/milestones`, 'POST', {
      title,
      description: `${milestone.objective}\n\nDefinition of Done: ${milestone.done}`,
    }));
    milestoneNumbers.set(title, created.number);
  }
}

for (const label of labels) {
  run('gh', ['label', 'create', label.name, '--repo', fullRepo, '--color', label.color, '--description', label.description, '--force']);
}

const existingIssues = dryRun ? [] : json('gh', ['api', `repos/${fullRepo}/issues?state=all&per_page=100`]);
const issuesByTitle = new Map(existingIssues.filter((issue) => !issue.pull_request).map((issue) => [issue.title, issue]));
const issueResults = [];
for (const ticket of tickets) {
  const title = `${ticket.id} - ${ticket.action}`;
  let issue = issuesByTitle.get(title);
  const wantedLabels = [`milestone:${ticket.milestone.toLowerCase()}`, `type:${ticket.type}`, `priority:${ticket.priority}`, 'evidence-required'];
  if (!issue) {
    issue = dryRun ? { number: 0, html_url: `https://github.com/${fullRepo}/issues/0` } : JSON.parse(api(`repos/${fullRepo}/issues`, 'POST', {
      title,
      body: issueBody(ticket),
      labels: wantedLabels,
      milestone: milestoneNumbers.get(milestoneTitle(milestones.find((m) => m.id === ticket.milestone))),
    }));
  } else if (!dryRun) {
    issue = JSON.parse(api(`repos/${fullRepo}/issues/${issue.number}`, 'PATCH', {
      body: issueBody(ticket),
      labels: wantedLabels,
      milestone: milestoneNumbers.get(milestoneTitle(milestones.find((m) => m.id === ticket.milestone))),
    }));
  }
  issueResults.push({ ...ticket, number: issue.number, url: issue.html_url });
}

const projects = dryRun ? [] : json('gh', ['project', 'list', '--owner', owner, '--limit', '100', '--format', 'json']);
let project = projects.find((item) => item.title === projectName);
if (!project) {
  project = dryRun ? { number: 0 } : json('gh', ['project', 'create', '--owner', owner, '--title', projectName, '--format', 'json']);
}
if (!dryRun) run('gh', ['project', 'link', String(project.number), '--owner', owner, '--repo', fullRepo]);

const projectFields = dryRun ? [] : json('gh', ['project', 'field-list', String(project.number), '--owner', owner, '--limit', '100', '--format', 'json']);
const fieldNames = new Set(projectFields.map((field) => field.name));
const epicOptions = [...new Set(epics.map((epic) => epic.title))].join(',');
if (!fieldNames.has('Learning Status')) {
  run('gh', ['project', 'field-create', String(project.number), '--owner', owner, '--name', 'Learning Status', '--data-type', 'SINGLE_SELECT', '--single-select-options', 'BACKLOG,READY,IN PROGRESS,BLOCKED,REVIEW,DONE']);
}
if (!fieldNames.has('Epic')) {
  run('gh', ['project', 'field-create', String(project.number), '--owner', owner, '--name', 'Epic', '--data-type', 'SINGLE_SELECT', '--single-select-options', epicOptions]);
}

const projectItems = dryRun ? [] : json('gh', ['project', 'item-list', String(project.number), '--owner', owner, '--limit', '100', '--format', 'json']);
const projectIssueUrls = new Set(projectItems.map((item) => item.content?.url).filter(Boolean));
for (const issue of issueResults) {
  if (!projectIssueUrls.has(issue.url)) {
    run('gh', ['project', 'item-add', String(project.number), '--owner', owner, '--url', issue.url]);
  }
  run('gh', ['project', 'item-edit', String(project.number), '--owner', owner, '--url', issue.url, '--field', 'Learning Status', '--value', issue.id === 'M0-001' ? 'READY' : 'BACKLOG']);
  run('gh', ['project', 'item-edit', String(project.number), '--owner', owner, '--url', issue.url, '--field', 'Epic', '--value', issue.epic]);
}

if (!dryRun) {
  const verification = {
    repository: fullRepo,
    project: { number: project.number, title: projectName },
    milestoneCount: json('gh', ['api', `repos/${fullRepo}/milestones?state=all&per_page=100`]).filter((m) => milestones.some((expected) => milestoneTitle(expected) === m.title)).length,
    labelCount: json('gh', ['api', `repos/${fullRepo}/labels?per_page=100`]).filter((label) => labels.some((expected) => expected.name === label.name)).length,
    issueCount: json('gh', ['api', `repos/${fullRepo}/issues?state=all&per_page=100`]).filter((issue) => tickets.some((ticket) => issue.title === `${ticket.id} - ${ticket.action}`)).length,
    projectItemCount: json('gh', ['project', 'item-list', String(project.number), '--owner', owner, '--limit', '100', '--format', 'json']).length,
    createdAt: new Date().toISOString(),
  };
  await mkdir(resolve(root, 'planning'), { recursive: true });
  await writeFile(resolve(root, 'planning/github-bootstrap-result.json'), `${JSON.stringify(verification, null, 2)}\n`);
  console.log(JSON.stringify(verification, null, 2));
} else {
  console.log(`Dry run validated the creation plan for ${milestones.length} milestones, ${labels.length} labels, ${tickets.length} issues, and one Project.`);
}
