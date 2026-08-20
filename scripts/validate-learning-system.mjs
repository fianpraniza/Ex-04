import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { milestones, tickets, labels, epics, issueBody, issueTitle } from './lib/learning-system-data.mjs';

const root = resolve(import.meta.dirname, '..');
const failures = [];
const requiredPaths = [
  'README.md', '.gitignore', 'projects/four-month-academy.md', 'projects/capstone.md', 'projects/production-gate.md',
  'projects/curiosity-backlog.md', 'projects/github-project-config.md', 'experiments/README.md', 'benchmarks/README.md',
  'evidence/README.md', 'reflections/README.md', 'decisions/README.md', 'agent/current-context.md',
  'agent/protocols/debugging.md', 'agent/protocols/experiment.md', 'agent/protocols/benchmark.md',
  'agent/protocols/ticket-completion.md', 'agent/protocols/context-update.md', 'planning/epics.md', 'planning/tickets.md',
  'planning/github-bootstrap-status.md', 'scripts/bootstrap-github.mjs',
  'templates/milestone.md', 'templates/epic.md', 'templates/ticket.md', 'templates/experiment.md', 'templates/benchmark.md', 'templates/evidence.md', 'templates/reflection.md',
  '.github/ISSUE_TEMPLATE/learning-implementation.md', '.github/ISSUE_TEMPLATE/experiment.md', '.github/ISSUE_TEMPLATE/benchmark.md',
  '.github/ISSUE_TEMPLATE/debug-investigation.md', '.github/ISSUE_TEMPLATE/reflection.md', '.github/workflows/learning-system-validation.yml',
];
const requiredCurriculumSections = ['## Objective', '## Why This Milestone Exists', '## Competencies', '## Concepts', '## Required Projects', '## Required Experiments', '## Required Evidence', '## Expected Outputs', '## Dependencies', '## Definition of Done', '## Related Issues'];

for (const path of requiredPaths) {
  try { await access(resolve(root, path)); } catch { failures.push(`Missing required path: ${path}`); }
}
if (milestones.length !== 9) failures.push(`Expected 9 milestones, found ${milestones.length}`);
if (tickets.length !== 55) failures.push(`Expected 55 tickets, found ${tickets.length}`);
if (new Set(tickets.map((ticket) => ticket.id)).size !== tickets.length) failures.push('Duplicate ticket IDs detected');
if (new Set(tickets.map(issueTitle)).size !== tickets.length) failures.push('Duplicate issue titles detected');
if (labels.length !== 23) failures.push(`Expected 23 minimal labels, found ${labels.length}`);
if (epics.length < 18) failures.push(`Expected at least 18 milestone epics, found ${epics.length}`);

const ids = new Set(tickets.map((ticket) => ticket.id));
for (const milestone of milestones) {
  const file = resolve(root, 'curriculum', milestone.file);
  try {
    const content = await readFile(file, 'utf8');
    for (const section of requiredCurriculumSections) if (!content.includes(section)) failures.push(`${milestone.id} is missing ${section}`);
  } catch { failures.push(`Cannot read curriculum file for ${milestone.id}`); }
  const milestoneTickets = tickets.filter((ticket) => ticket.milestone === milestone.id && !ticket.id.startsWith('CAP-'));
  if (milestoneTickets.length < 5 || milestoneTickets.length > 15) failures.push(`${milestone.id} has ${milestoneTickets.length} non-capstone tickets; expected 5-15`);
  const milestoneEpics = new Set(milestoneTickets.map((ticket) => ticket.epic));
  if (milestoneEpics.size < 2 || milestoneEpics.size > 5) failures.push(`${milestone.id} has ${milestoneEpics.size} non-capstone epics; expected 2-5`);
}

for (const ticket of tickets) {
  if (!/^(M[0-8]-\d{3}|CAP-\d{3})$/.test(ticket.id)) failures.push(`Invalid deterministic ticket ID: ${ticket.id}`);
  if (!ticket.action || !ticket.context || !ticket.constraints || !ticket.acceptance || !ticket.evidence) failures.push(`${ticket.id} has incomplete actionable content`);
  const body = issueBody(ticket);
  for (const section of ['# Objective', '## Context', '## Task', '## Constraints', '## Dependencies', '## Acceptance Criteria', '## Expected Evidence', '## Related Milestone', '## Related Epic']) if (!body.includes(section)) failures.push(`${ticket.id} issue body is missing ${section}`);
  if (!body.includes('- [ ]')) failures.push(`${ticket.id} does not have a checkbox acceptance criterion`);
  const dependencies = ticket.dependencies.match(/(?:M[0-8]-\d{3}|CAP-\d{3})/g) ?? [];
  for (const dependency of dependencies) if (!ids.has(dependency)) failures.push(`${ticket.id} references unknown dependency ${dependency}`);
}

const first = tickets.find((ticket) => ticket.id === 'M0-001');
const readme = await readFile(resolve(root, 'README.md'), 'utf8');
const context = await readFile(resolve(root, 'agent/current-context.md'), 'utf8');
const ticketCatalog = await readFile(resolve(root, 'planning/tickets.md'), 'utf8');
if (!readme.includes(first.action)) failures.push('README does not identify M0-001 as starting ticket');
if (!context.includes(first.action) || !context.includes('Ready to start')) failures.push('Current context does not identify the ready starting ticket');
for (const ticket of tickets) if (!ticketCatalog.includes(`<a id="${ticket.id.toLowerCase()}"></a>`)) failures.push(`${ticket.id} is missing its local traceability anchor`);

if (failures.length) {
  console.error(`Learning-system validation failed with ${failures.length} problem(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`PASS: local learning system validated (${milestones.length} milestones, ${epics.length} epics, ${tickets.length} tickets, ${labels.length} labels, 5 issue templates).`);
