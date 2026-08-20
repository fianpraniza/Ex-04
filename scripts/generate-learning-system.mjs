import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { milestones, tickets, epics, labels, projectName, issueBody } from './lib/learning-system-data.mjs';

const root = resolve(import.meta.dirname, '..');
const write = async (relative, content) => {
  const target = resolve(root, relative);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, `${content.trim()}\n`);
};
const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const milestonesById = new Map(milestones.map((m) => [m.id, m]));
const issueLinks = (id) => tickets.filter((t) => t.milestone === id || (t.id.startsWith('CAP-') && t.milestone === id)).map((t) => `- [${t.id} - ${t.action}](../planning/tickets.md#${slug(t.id)})`).join('\n');

await write('.gitignore', '.DS_Store\n.env\n.venv/\n__pycache__/\n*.py[cod]\n.pytest_cache/\n.mypy_cache/\n.coverage\nhtmlcov/\nmlruns/\nartifacts/\nmodels/\ndata/raw/\ndata/processed/\n*.mlmodel\n*.mlpackage\nDerivedData/');

await write('README.md', `# Production ML Engineering Learning System

This repository is an evidence-driven execution system for becoming a **Production ML Engineer specializing in On-Device ML / Apple ML**. It turns learning into observable engineering work: curriculum -> milestone -> epic -> ticket -> experiment -> benchmark -> evidence -> reflection.

## Career Objective

Build ML systems from dataset and model development through optimization, Core ML conversion, iOS integration, physical-device profiling, and production-oriented trade-offs.

## Curriculum Map

${milestones.map((m) => `- [${m.id} - ${m.title}](curriculum/${m.file})`).join('\n')}
- [Capstone - Real-time Shrimp Detection on iPhone](projects/capstone.md)

## GitHub Project Workflow

The **${projectName}** Project uses these states: **BACKLOG -> READY -> IN PROGRESS -> BLOCKED -> REVIEW -> DONE**. The remote bootstrap creates the project, an Epic field, a Learning Status field, and adds every ticket. The intended views are All Work, Current / Active Work, Backlog, By Milestone, and Evidence / Completed Work. GitHub currently does not expose Project view creation through its public CLI/API, so the bootstrap records the required views in [project configuration](projects/github-project-config.md) for the one UI-only step after authentication.

## Executing Tickets

Open the current ticket, meet every acceptance criterion, create the required experiment/benchmark/evidence artifacts, link them in the issue, add a reflection when applicable, then move it through REVIEW to DONE. Reading alone never completes a ticket.

## Recording Work

- Use [experiment template](templates/experiment.md) for hypotheses and decisions.
- Use [benchmark template](templates/benchmark.md) for measurements; enter \`N/A\` with a reason rather than invent values.
- Use [evidence guide](evidence/README.md) to prove completion with code, commits, reports, models, captures, or demos.
- Use [reflection template](templates/reflection.md) to capture changed understanding and next capability.
- Use the reusable [production gate](projects/production-gate.md) for major projects.

## Definition of Done

A ticket is DONE only when its measurable acceptance criteria pass, its expected evidence is linked, relevant experiment/benchmark records exist, limitations are stated, and reflection is complete or explicitly N/A with rationale. Milestone-specific Definitions of Done are in each curriculum document.

## Topic Switching and Curiosity

The current ticket remains the focus. Capture unrelated ideas using the [curiosity backlog](projects/curiosity-backlog.md) as \`IDEA-001\`, \`IDEA-002\`, and so on. Ideas do not interrupt a milestone unless they become relevant during milestone review.

## Progression

Proceed in order: **M0 -> M1 -> M2 -> M3 -> M4 -> M5 -> M6 -> M7 -> M8**, then complete the cross-milestone capstone. The [four-month academy plan](projects/four-month-academy.md) provides the intended pacing.

## Current Starting Ticket

**Start with: [M0-001 - Establish the production-style repository baseline](planning/tickets.md#m0-001).**

The current state is maintained in [agent/current-context.md](agent/current-context.md).`);

for (const m of milestones) {
  await write(`curriculum/${m.file}`, `# ${m.id} - ${m.title}

## Objective

${m.objective}

## Why This Milestone Exists

${m.why}

## Competencies

${m.competencies}

## Concepts

${m.concepts}

## Required Projects

${m.projects}

## Required Experiments

${m.experiments}

## Required Evidence

${m.evidence}

## Expected Outputs

${m.outputs}

## Dependencies

${m.dependencies}

## Definition of Done

${m.done}

## Related Issues

${issueLinks(m.id)}`);
}

await write('projects/four-month-academy.md', `# Four-Month Academy Plan

## Month 1 - Engineering + ML

**Output:** Production-style ML repository.

**Focus:** Python engineering, Git, testing, data pipeline, training pipeline, evaluation, experiment tracking. Execute M0, M1, and begin M2.

## Month 2 - Production ML

**Output:** Reproducible and deployable model.

**Focus:** experiment tracking, model registry, FastAPI, Docker, CI/CD, monitoring. Complete M2 and M3.

## Month 3 - Model Optimization

**Output:** One seriously optimized model.

**Focus:** FP16, INT8, quantization, pruning, distillation, benchmarking, latency, memory. Complete M4 and begin the capstone.

## Month 4 - Apple On-Device ML

**Output:** Optimized model running on iPhone.

**Focus:** Core ML, conversion, Vision, Swift integration, profiling, CPU/GPU/Neural Engine, real-time inference. Complete M5 through M7, capstone, then optionally M8.`);

await write('projects/capstone.md', `# Capstone - Real-time Shrimp Detection on iPhone

## Pipeline

Dataset -> Dataset Version -> Model Experiments -> Model Selection -> Optimization -> FP16 / INT8 / Pruning -> Core ML -> iOS App -> Camera -> Preprocessing -> Inference -> Postprocessing -> UI -> Benchmark

## Required Answers

- Why this architecture?
- Why this dataset?
- What optimization was used?
- How much did accuracy change?
- What is latency?
- What is memory usage?
- What device was tested?
- What are the limitations?

## Capstone Tickets

${tickets.filter((t) => t.id.startsWith('CAP-')).map((t) => `- [${t.id} - ${t.action}](../planning/tickets.md#${slug(t.id)}) (${t.milestone})`).join('\n')}`);

await write('projects/production-gate.md', `# Production Gate

Use this checklist for a major project. Mark inapplicable items \`N/A\` and explain why in the project evidence index.

- [ ] Reproducible training
- [ ] Dataset versioned
- [ ] Experiment tracked
- [ ] Model versioned
- [ ] Automated tests
- [ ] Evaluation pipeline
- [ ] Model converted
- [ ] Model optimized
- [ ] Model size measured
- [ ] Latency measured
- [ ] Memory measured
- [ ] Device tested
- [ ] Failure cases tested
- [ ] Logging implemented
- [ ] Documentation written
- [ ] Deployment reproducible`);

await write('projects/curiosity-backlog.md', `# Curiosity Backlog

Capture interesting but non-current work here or as a GitHub issue titled \`IDEA-### - ...\` with the \`type:learning\` label and no curriculum milestone until promoted.

## Rules

- The current ticket remains the focus.
- Ideas are recorded, not started automatically.
- Review the backlog at milestone boundaries or when an idea directly resolves a current blocker.
- Promote an idea only by creating or linking an actionable ticket with evidence expectations.

## Examples

- IDEA-001 - Explore lightweight Vision Transformers
- IDEA-002 - Explore Metal custom kernels
- IDEA-003 - Explore on-device LLM inference`);

await write('projects/github-project-config.md', `# GitHub Project Configuration

## Project

Name: **${projectName}**

## Fields

- **Learning Status** (single select): BACKLOG, READY, IN PROGRESS, BLOCKED, REVIEW, DONE
- **Epic** (single select): ${epics.map((e) => e.title).join(', ')}
- Built-in GitHub **Milestone** and **Labels** retain native issue traceability.

## Required Views

| View | Layout | Filter / grouping |
| --- | --- | --- |
| All Work | Table | All project items; show Learning Status, Epic, Milestone, Priority |
| Current / Active Work | Board | Learning Status is READY, IN PROGRESS, BLOCKED, or REVIEW; group by Learning Status |
| Backlog | Board | Learning Status is BACKLOG; group by Epic |
| By Milestone | Table | Group by Milestone; show Epic and Learning Status |
| Evidence / Completed Work | Table | Learning Status is DONE; show Labels and linked evidence |

## Initial State

- M0-001 is **READY**.
- All other tickets are **BACKLOG**.
- Tickets are linked to exactly one milestone, an Epic, priority, type, and \`evidence-required\`.

## API Limitation

GitHub Project view creation and editing are not exposed by the public GitHub CLI or GraphQL API. The bootstrap creates the project, fields, and items; configure the five views once through the Project UI using this exact table.`);

await write('experiments/README.md', `# Experiments

Create one Markdown record per hypothesis using [the experiment template](../templates/experiment.md). Name files \`YYYY-MM-DD-<ticket-id>-<slug>.md\`. Link the source issue, dataset/model versions, benchmark, and resulting decision.`);
await write('benchmarks/README.md', `# Benchmarks

Create one Markdown record per measurement protocol using [the benchmark template](../templates/benchmark.md). Name files \`YYYY-MM-DD-<ticket-id>-<slug>.md\`. Record \`N/A\` with a reason when a metric is irrelevant or unavailable.`);
await write('evidence/README.md', `# Evidence

Evidence answers: **How can I prove I can do this?**

Create an index entry or folder for each completed ticket. Link evidence from the GitHub issue and include paths or URLs for code, commits, pull requests, experiment reports, benchmark reports, model artifacts, profiling captures, deployments, demos, screenshots, decision records, and reflections.

Use [the evidence template](../templates/evidence.md). Evidence must identify the ticket, claim, artifact, verification method, limitations, and durable location.`);
await write('reflections/README.md', `# Reflections

Create one reflection per meaningful ticket, experiment, benchmark, or milestone using [the reflection template](../templates/reflection.md). Name files \`YYYY-MM-DD-<ticket-id>-reflection.md\`. Reflection is evidence of changed engineering judgment, not a completion substitute.`);
await write('decisions/README.md', `# Decisions

Record material engineering decisions as \`YYYY-MM-DD-<slug>.md\`. Each decision should state context, options, evidence, decision, trade-offs, limitations, and links to related tickets, experiments, benchmarks, and evidence.`);

const templates = {
  'templates/milestone.md': '# Milestone\n\n## Objective\n\n## Why This Milestone Exists\n\n## Competencies\n\n## Concepts\n\n## Required Projects\n\n## Required Experiments\n\n## Required Evidence\n\n## Expected Outputs\n\n## Dependencies\n\n## Definition of Done\n\n## Related Issues',
  'templates/epic.md': '# Epic\n\n## Capability\n\n## Milestone\n\n## Outcome\n\n## Scope\n\n## Tickets\n\n## Dependencies\n\n## Evidence of Completion',
  'templates/ticket.md': '# Objective\n\n## Context\n\n## Task\n\n## Constraints\n\n## Dependencies\n\n## Acceptance Criteria\n\n- [ ] \n\n## Expected Evidence\n\n## Related Milestone\n\n## Related Epic',
  'templates/experiment.md': '# Experiment\n\n## Question\n\n## Hypothesis\n\n## Baseline\n\n## Variables\n\n## Method\n\n## Metrics\n\n## Result\n\n## Interpretation\n\n## Decision\n\n## Evidence',
  'templates/benchmark.md': '# Benchmark\n\n## Model\n\n## Version\n\n## Device\n\n## OS\n\n## Runtime\n\n## Input Size\n\n## Accuracy\n\n## Precision\n\n## Recall\n\n## F1 / mAP\n\n## Model Size\n\n## Latency\n\n## P50 Latency\n\n## P95 Latency\n\n## Memory\n\n## FPS / Throughput\n\n## Energy\n\n## Notes',
  'templates/evidence.md': '# Evidence\n\n## Ticket\n\n## Claim\n\n## Artifact\n\n## Location\n\n## Verification Method\n\n## Result\n\n## Limitations\n\n## Related Experiment / Benchmark / Decision',
  'templates/reflection.md': '# Reflection\n\n## What I thought before\n\n## What actually happened\n\n## What surprised me\n\n## Root cause\n\n## What I learned\n\n## Engineering trade-off\n\n## What I would do differently\n\n## What I can now do independently\n\n## Next capability',
};
for (const [path, content] of Object.entries(templates)) await write(path, content);

const issueTemplates = {
  'learning-implementation.md': `---\nname: Learning or implementation ticket\nabout: Create actionable learning or implementation work\ntitle: 'M?-??? - '\nlabels: ['type:implementation', 'evidence-required']\n---\n\n${templates['templates/ticket.md']}`,
  'experiment.md': `---\nname: Experiment\nabout: Record a hypothesis-driven experiment\ntitle: 'EXP - '\nlabels: ['type:experiment', 'evidence-required']\n---\n\n${templates['templates/experiment.md']}`,
  'benchmark.md': `---\nname: Benchmark\nabout: Record a repeatable measurement\ntitle: 'BENCH - '\nlabels: ['type:benchmark', 'evidence-required']\n---\n\n${templates['templates/benchmark.md']}`,
  'debug-investigation.md': `---\nname: Debug or investigation\nabout: Investigate a reproducible non-happy-path problem\ntitle: 'INV - '\nlabels: ['type:debug', 'evidence-required']\n---\n\n# Problem\n\n## Baseline\n\n## Investigation\n\n## Hypothesis\n\n## Experiment\n\n## Benchmark\n\n## Solution\n\n## Trade-off\n\n## Limitation\n\n## Evidence`,
  'reflection.md': `---\nname: Reflection\nabout: Capture engineering judgment after completed work\ntitle: 'REF - '\nlabels: ['type:reflection']\n---\n\n${templates['templates/reflection.md']}`,
};
for (const [name, content] of Object.entries(issueTemplates)) await write(`.github/ISSUE_TEMPLATE/${name}`, content);

await write('agent/current-context.md', `# Current Learning Context

## Current Milestone

M0

## Current Epic

Repository Foundation

## Current Ticket

M0-001 - Establish the production-style repository baseline

## Current Project

Production ML Engineering Learning System

## Current Objective

Establish a production-style repository baseline before hands-on ML work begins.

## Current State

Ready to start

## Current Blocker

None

## Current Hypothesis

A documented package, configuration, environment, and execution baseline will make all later ML work reproducible.

## Last Completed Work

Learning-system setup completed; no curriculum ticket has been started.

## Next Intended Action

Open M0-001, inspect the existing ML project assets, and create the production-style project baseline described by its acceptance criteria.

## Relevant Evidence

Learning-system documents, ticket catalog, and GitHub bootstrap configuration.`);

const protocols = {
  'debugging.md': '# Debugging Protocol\n\n1. Restate the observed problem and expected behavior.\n2. Capture a minimal reproducible baseline with environment, input, logs, and artifact versions.\n3. Form a falsifiable hypothesis.\n4. Change one meaningful variable at a time.\n5. Measure the result and preserve evidence.\n6. Record solution, trade-off, limitation, and prevention test.\n7. Link the investigation, benchmark, evidence, and reflection to the ticket.',
  'experiment.md': '# Experiment Protocol\n\n1. Create an experiment record before execution.\n2. Define question, hypothesis, baseline, variables, method, and success metrics.\n3. Version data, code, configuration, and model inputs.\n4. Run the planned comparison.\n5. Record result, interpretation, decision, and evidence.\n6. Create a benchmark when resource or quality claims are made.',
  'benchmark.md': '# Benchmark Protocol\n\n1. State model/version, device, OS, runtime, input size, workload, and repeat count.\n2. Separate end-to-end stages from model-only latency.\n3. Capture quality, size, P50/P95 latency, memory, throughput, and energy when available.\n4. Use N/A with an explanation rather than fabricated values.\n5. Preserve raw measurements or profiler captures and compare against a baseline.',
  'ticket-completion.md': '# Ticket Completion Protocol\n\n1. Confirm every acceptance criterion is objectively met.\n2. Link code, commits, experiment, benchmark, evidence, decision, and reflection artifacts.\n3. State remaining limitations and N/A rationale.\n4. Move the Project item to REVIEW.\n5. Review evidence against the issue.\n6. Move to DONE only when completion is defensible.\n7. Update current context and identify the next ready ticket.',
  'context-update.md': '# Context Update Protocol\n\nUpdate agent/current-context.md after each completed ticket, material blocker, selected model/optimization decision, or milestone transition. Keep it compact: current milestone, epic, ticket, project, objective, blocker, hypothesis, last completed work, next action, and evidence. Do not duplicate the curriculum or issue body.',
};
for (const [name, content] of Object.entries(protocols)) await write(`agent/protocols/${name}`, content);

await write('planning/epics.md', `# Epic Map

${epics.map((e) => `## ${e.milestone} - ${e.title}\n\n${tickets.filter((t) => t.milestone === e.milestone && t.epic === e.title).map((t) => `- [${t.id} - ${t.action}](tickets.md#${slug(t.id)})`).join('\n')}`).join('\n\n')}`);
await write('planning/tickets.md', `# Ticket Catalog

This is the canonical local source for the GitHub issue bodies. The GitHub bootstrap uses the same data module to create issues, labels, milestones, and Project items.

${tickets.map((t) => `<a id="${slug(t.id)}"></a>\n\n## ${t.id} - ${t.action}\n\n**Milestone:** ${t.milestone}  \n**Epic:** ${t.epic}  \n**Type:** ${t.type}  \n**Priority:** ${t.priority}\n\n${issueBody(t)}`).join('\n\n---\n\n')}`);
await write('planning/github-bootstrap-status.md', `# GitHub Bootstrap Status

## Current status

Remote creation is pending a valid GitHub CLI authentication session. The local GitHub bootstrap is ready to create the remote repository and all API-supported objects in one command.

## SAFE IMPLEMENTATION DECISIONS

- Repository name defaults to the current directory name (\`Ex-04\`).
- Repository visibility defaults to private; pass \`--public\` to change it.
- Epic traceability uses a GitHub Project single-select field and every issue body, avoiding an excessive epic-label taxonomy.
- M0-001 is READY; all other tickets are BACKLOG.

## OPEN DECISION

No curriculum-affecting decisions are deferred. Public visibility remains configurable because it was not specified.

## Required authentication repair

Run \`gh auth login -h github.com -s repo,project\`, then run \`node scripts/bootstrap-github.mjs\`. This is the only manual action required; the script creates all available GitHub objects.

## GitHub technical limitation

GitHub's public CLI and GraphQL API do not provide mutations to create or configure Project views. After bootstrap, create the five views exactly as specified in [project configuration](../projects/github-project-config.md).`);
await write('planning/github-labels.json', JSON.stringify(labels, null, 2));

console.log(`Generated ${milestones.length} curriculum documents, ${tickets.length} ticket definitions, ${epics.length} epics, and ${Object.keys(issueTemplates).length} issue templates.`);
