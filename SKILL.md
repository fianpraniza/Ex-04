# Production ML Engineering Learning System
## Codex Implementation Specification

Version: 1.0  
Status: Initial System Design

---

# 0. ROLE

You are an expert software architect and learning-system engineer.

Your task is to implement a GitHub-based, evidence-driven learning system for a learner whose long-term goal is:

> Become a production-ready ML Engineer specializing in On-Device ML / Apple ML.

The system must support:

- structured ML engineering curriculum
- milestone tracking
- actionable engineering tickets
- hands-on projects
- experiments
- benchmarks
- evidence collection
- reflections
- AI-agent-assisted learning
- persistent learning context
- prevention of uncontrolled topic switching

The system is NOT merely a documentation repository.

It is a personal engineering learning environment.

---

# 1. NORTH STAR

The learner's target capability is:

> Take an ML problem from dataset/model development through evaluation, optimization, deployment, profiling, and production-oriented engineering, with specialization in running ML efficiently on Apple devices.

The learning system must therefore optimize for:

1. Understanding
2. Implementation
3. Debugging
4. Experimentation
5. Benchmarking
6. Engineering judgment
7. Production readiness

Do NOT optimize merely for:

- number of courses completed
- number of technologies learned
- number of tutorials followed
- number of GitHub repositories created

---

# 2. CORE LEARNING PHILOSOPHY

Use:

> One Concept → One Experiment → One Artifact

Every meaningful learning activity should produce evidence.

Possible evidence:

- code
- experiment
- benchmark
- model artifact
- technical report
- profiling result
- deployed service
- iOS application
- pull request
- issue resolution
- architecture decision
- reflection

The system must make it easy to answer:

> "What did I actually learn, build, test, and prove?"

---

# 3. COMPETENCY MODEL

Every milestone should map to five competency levels.

## L1 — Understand

Can explain the concept.

## L2 — Implement

Can implement the concept using documentation/reference material.

## L3 — Debug

Can solve problems not directly covered by tutorials.

## L4 — Optimize

Can benchmark alternatives and make engineering decisions based on evidence.

## L5 — Engineer

Can design and operate an end-to-end production-oriented system with explicit trade-offs.

Target after the first four months:

- On-device ML: L4
- Production ML / MLOps: L3–L4
- General ML engineering: L3–L4

Do not require L5 across every domain.

---

# 4. SYSTEM ARCHITECTURE

The system should use GitHub as the primary execution and tracking platform.

Conceptual architecture:

```text
                    CURRICULUM
                        |
                        v
                    MILESTONE
                        |
                        v
                       EPIC
                        |
                        v
                      TICKET
                        |
                        v
                    EXPERIMENT
                        |
                        v
                    BENCHMARK
                        |
                        v
                     EVIDENCE
                        |
                        v
                    REFLECTION
```

The AI agent interacts with these artifacts.

GitHub is the source of truth for:

- curriculum documentation
- current milestone
- current work
- tickets
- project state
- experiments
- evidence
- progress history

The AI agent must NOT become the source of truth.

---

# 5. INFORMATION HIERARCHY

Implement the following hierarchy.

## Level 1 — Curriculum

Answers:

> What should I learn?

Contains:

- milestones
- objectives
- competencies
- concepts
- expected outcomes
- prerequisites
- Definition of Done

---

## Level 2 — Milestone

Answers:

> What capability am I trying to obtain?

Examples:

- M0 — Engineering Foundation
- M1 — ML Engineering
- M2 — Experiment Tracking & Model Lifecycle
- M3 — Production ML / MLOps
- M4 — Model Optimization
- M5 — On-Device ML / Apple
- M6 — Hard Problems
- M7 — ML Systems
- M8 — Advanced Apple AI

---

## Level 3 — Epic

Answers:

> What major body of work will prove this capability?

Example:

```text
M4 — Model Optimization

EPIC:
Optimize YOLO for Apple deployment
```

---

## Level 4 — Ticket

Answers:

> What exactly should I do next?

Examples:

```text
M4-001 — Establish baseline benchmark
M4-002 — Convert model to FP16
M4-003 — Benchmark FP16 model
M4-004 — Investigate INT8 quantization
M4-005 — Implement INT8
```

---

## Level 5 — Experiment

Answers:

> What hypothesis am I testing?

Example:

```text
Hypothesis:
INT8 quantization can reduce model size by >50%
while keeping accuracy degradation below 2%.
```

---

## Level 6 — Benchmark

Answers:

> What happened?

Record:

- accuracy
- precision
- recall
- F1
- mAP
- model size
- latency
- memory
- FPS
- energy when relevant

---

## Level 7 — Evidence

Answers:

> What proves I can do this?

Examples:

- Git commit
- Pull request
- benchmark report
- experiment report
- model file
- iOS implementation
- profiling screenshot/report
- deployed endpoint
- technical decision record

---

## Level 8 — Reflection

Answers:

> What did I learn and what should I do differently next time?

---

# 6. REPOSITORY STRUCTURE

Create a repository with a clean structure similar to:

```text
production-ml-engineering/
│
├── README.md
│
├── curriculum/
│   ├── 00-engineering-foundation.md
│   ├── 01-ml-engineering.md
│   ├── 02-model-lifecycle.md
│   ├── 03-production-ml.md
│   ├── 04-model-optimization.md
│   ├── 05-on-device-apple-ml.md
│   ├── 06-hard-problems.md
│   ├── 07-ml-systems.md
│   └── 08-advanced-apple-ai.md
│
├── projects/
│
├── experiments/
│
├── benchmarks/
│
├── evidence/
│
├── reflections/
│
├── decisions/
│
├── templates/
│
├── agent/
│   ├── skills.md
│   ├── current-context.md
│   └── protocols/
│
└── .github/
    ├── ISSUE_TEMPLATE/
    ├── workflows/
    └── ...
```

Do not create unnecessary directories.

Prefer simple and discoverable structures.

---

# 7. CURRICULUM

Implement these milestones.

---

## M0 — Engineering Foundation

Objective:

Move from:

```text
notebook → train → model → done
```

to:

```text
reproducible software project
```

Topics:

- Python package structure
- virtual environments
- typing
- logging
- configuration
- error handling
- CLI
- testing
- Git
- Linux / CLI
- modular architecture
- separation of concerns
- documentation

Project:

Refactor an existing ML project into a production-style repository.

Definition of Done:

- reproducible environment
- reproducible training
- reproducible evaluation
- reproducible inference
- tests
- README
- modular code

---

## M1 — ML Engineering

Objective:

Build a reproducible ML workflow and select models using engineering trade-offs.

Topics:

### Data

- dataset versioning
- validation
- leakage detection
- preprocessing
- reproducible splits

### Training

- configuration-based training
- checkpointing
- early stopping
- hyperparameter management
- reproducibility

### Evaluation

- accuracy
- precision
- recall
- F1
- mAP
- confusion matrix
- inference latency
- model size
- memory

Required experiment:

Compare at least three models.

Do not select using accuracy alone.

---

## M2 — Experiment Tracking & Model Lifecycle

Objective:

Understand model artifacts, experiment lineage, versioning, and reproducibility.

Topics:

- experiment tracking
- artifacts
- model versioning
- model registry
- lineage
- reproducibility

Preferred tooling:

MLflow or equivalent.

Required outcome:

Be able to answer:

- Which dataset produced this model?
- Which code version?
- Which parameters?
- Which experiment?
- Why was this version selected?

---

## M3 — Production ML / MLOps Foundation

Objective:

Understand how ML moves from local development to production.

Topics:

- REST API
- FastAPI
- Docker
- CI/CD
- cloud deployment
- logging
- monitoring
- health checks
- model versioning
- rollback

Do not over-focus on Kubernetes.

The goal is lifecycle understanding.

---

## M4 — Model Optimization

This is the primary specialization.

Objective:

Make models:

- smaller
- faster
- resource-efficient
- sufficiently accurate

Topics:

- FP32
- FP16
- INT8
- quantization
- pruning
- knowledge distillation
- weight compression
- palettization
- efficient architectures

Required metrics:

- model size
- accuracy
- latency
- memory

Required output:

A comparison such as:

```text
FP32
FP16
INT8
Optimized
```

with measurable trade-offs.

---

## M5 — On-Device ML / Apple

Objective:

Deploy real ML models on Apple devices.

Topics:

- Core ML
- Core ML Tools
- conversion
- model loading
- prediction
- preprocessing
- postprocessing
- Vision
- CPU
- GPU
- Neural Engine
- iOS integration

Required pipeline:

```text
PyTorch / Framework
        ↓
Core ML
        ↓
iOS
        ↓
Real Device
        ↓
Real Inference
```

Measure:

- model size
- latency
- memory
- device performance

---

## M6 — Hard Problems

Objective:

Solve real deployment problems rather than only following successful conversion tutorials.

Challenge categories:

- oversized models
- failed conversion
- unsupported operators
- accuracy degradation
- slow inference
- excessive memory
- unexpected hardware performance

Every challenge must contain:

```text
Problem
↓
Baseline
↓
Investigation
↓
Hypothesis
↓
Experiment
↓
Benchmark
↓
Solution
↓
Trade-off
↓
Limitation
```

---

## M7 — ML Systems

Objective:

Understand end-to-end inference performance.

Topics:

- CPU/GPU/Neural Engine
- memory
- tensor allocation
- inference scheduling
- batching
- asynchronous inference
- preprocessing
- postprocessing
- model loading
- caching
- profiling
- energy

Required thinking:

Do not assume:

```text
app latency = model latency
```

Measure:

```text
camera/input
→ preprocessing
→ inference
→ postprocessing
→ UI
```

---

## M8 — Advanced Apple AI

Elective only.

Topics:

- Core AI
- Apple Silicon workflows
- PyTorch Apple ecosystem
- optimization tooling
- debugging
- profiling
- Metal
- custom kernels

Do not prioritize this before M0–M7 fundamentals.

---

# 8. CAPSTONE

Create:

# Real-time Shrimp Detection on iPhone

Pipeline:

```text
Dataset
↓
Dataset Version
↓
Model Experiments
↓
Model Selection
↓
Optimization
↓
FP16 / INT8 / Pruning
↓
Core ML
↓
iOS App
↓
Camera
↓
Preprocessing
↓
Inference
↓
Postprocessing
↓
UI
↓
Benchmark
```

Required questions:

- Why this architecture?
- Why this dataset?
- What optimization was used?
- How much accuracy changed?
- What is latency?
- What is memory usage?
- What device was used?
- What are limitations?

---

# 9. TICKET DESIGN

Every actionable ticket must have:

```markdown
# Title

## Objective

What capability/problem is being addressed?

## Context

What is the current state?

## Task

What should be done?

## Constraints

What limitations exist?

## Acceptance Criteria

What must be true before this ticket is complete?

## Expected Evidence

What artifact should prove completion?

## Related Milestone

M#

## Related Epic

Epic name

## Dependencies

Previous tickets if any.
```

---

# 10. TICKET QUALITY RULE

Avoid tickets like:

```text
Learn quantization
Study Core ML
Learn Docker
Learn Swift
```

Prefer:

```text
Quantize the current YOLO model to INT8 and benchmark accuracy, latency, memory, and model size.
```

The ticket must describe an action and an observable result.

---

# 11. ISSUE NAMING

Use:

```text
M{milestone}-{number} — {action}
```

Examples:

```text
M0-001 — Refactor training pipeline
M0-002 — Add inference CLI
M1-001 — Establish model baseline
M4-001 — Establish optimization baseline
M4-002 — Convert model to FP16
M4-003 — Benchmark FP16 model
M5-001 — Convert model to Core ML
M6-001 — Investigate unsupported operator
```

---

# 12. ISSUE LABELS

Create a minimal label system.

Recommended:

```text
milestone:m0
milestone:m1
milestone:m2
milestone:m3
milestone:m4
milestone:m5
milestone:m6
milestone:m7
milestone:m8

type:learning
type:implementation
type:experiment
type:benchmark
type:debug
type:documentation
type:reflection

status:blocked
status:in-progress
status:review

priority:high
priority:medium
priority:low

evidence-required
```

Do not create excessive labels.

---

# 13. TICKET STATES

Use:

```text
BACKLOG
↓
READY
↓
IN PROGRESS
↓
BLOCKED
↓
REVIEW
↓
DONE
```

A ticket may only be marked DONE when its Acceptance Criteria are satisfied.

---

# 14. DEFINITION OF DONE

Never define completion as:

> "Code runs."

A ticket is complete when:

1. Implementation exists
2. Relevant tests exist
3. Expected behavior is verified
4. Metrics are measured when relevant
5. Evidence is recorded
6. Trade-offs are documented when relevant
7. The learner can explain the solution

---

# 15. EXPERIMENT PROTOCOL

Every meaningful ML experiment should use:

```markdown
# Experiment

## Question

What are we trying to discover?

## Hypothesis

What do we expect?

## Baseline

What is the current result?

## Variables

What changes?

## Method

How will we test it?

## Metrics

What will we measure?

## Result

What happened?

## Interpretation

Why?

## Decision

What should we do next?

## Evidence

Links to artifacts.
```

---

# 16. BENCHMARK PROTOCOL

Benchmarks should record relevant metrics.

For model optimization:

```text
Model
Version
Device
OS
Runtime
Input size

Accuracy
Precision
Recall
F1
mAP

Model size
Latency
P50 latency
P95 latency
Memory
FPS
Energy if relevant
```

Do not invent metrics that cannot be measured reliably.

---

# 17. REFLECTION PROTOCOL

After meaningful milestones or difficult experiments, create a reflection.

Template:

```markdown
# Reflection

## What I thought before

## What actually happened

## What surprised me

## Root cause

## What I learned

## Engineering trade-off

## What I would do differently

## What I can now do independently

## Next capability
```

---

# 18. CURRENT CONTEXT

Maintain:

```text
agent/current-context.md
```

This file is the compact state of the learner.

It should contain:

```markdown
# Current Learning Context

## Current Milestone

M#

## Current Epic

...

## Current Ticket

...

## Current Project

...

## Current Objective

...

## Current Blocker

...

## Current Hypothesis

...

## Last Completed Work

...

## Next Intended Action

...

## Relevant Evidence

...
```

This file should be updated whenever the active learning state materially changes.

Do not duplicate the entire curriculum here.

This is STATE, not DOCUMENTATION.

---

# 19. AI AGENT ROLE

The AI agent is:

> Senior ML Engineering Mentor + Pair Programmer + Debugger + Experiment Reviewer.

The agent is NOT:

- an autocomplete engine
- a code vending machine
- a replacement for engineering judgment
- the source of truth for progress

---

# 20. AI AGENT TEACHING PROTOCOL

When the learner asks for help:

## Step 1 — Determine context

Read:

1. `agent/current-context.md`
2. current ticket
3. relevant milestone documentation
4. relevant project code
5. recent experiment/benchmark artifacts

Do not ask the learner to repeat context already available.

---

## Step 2 — Identify problem

Before writing code, determine:

- What is failing?
- What is expected?
- What evidence exists?
- What has already been tried?

---

## Step 3 — Form hypothesis

Help the learner reason about possible causes.

---

## Step 4 — Investigate

Prefer:

- logs
- metrics
- code inspection
- documentation
- minimal experiments
- profiling

over guessing.

---

## Step 5 — Implement

Only after understanding the problem.

---

## Step 6 — Verify

Run appropriate tests or benchmarks.

---

## Step 7 — Explain

Explain:

- what changed
- why it works
- trade-offs
- limitations

---

## Step 8 — Update learning state

If the work changes the learning state:

- update ticket
- update `current-context.md`
- record evidence
- create follow-up ticket if needed

---

# 21. ANTI-JUMPING PROTOCOL

The learner historically tends to jump between:

- SwiftUI
- business logic
- UI/UX
- research
- ML
- other technologies

The system must protect focus without suppressing curiosity.

When the learner introduces a new topic, classify it:

### A — Directly relevant

Do it now.

### B — Relevant but not current

Create a backlog ticket.

### C — Interesting but unrelated

Create an idea/backlog item and return to the current ticket.

### D — Required dependency

Pause current work and create a dependency ticket.

Do NOT automatically switch milestones.

---

# 22. CURIOSITY BACKLOG

Maintain a backlog for interesting ideas.

Example:

```text
IDEA-001 — Explore Vision Transformer
IDEA-002 — Explore Metal Performance Shaders
IDEA-003 — Explore LLM inference on-device
```

These ideas must not interrupt the current milestone unless they become necessary.

---

# 23. PRODUCTION MINDSET

For relevant engineering decisions always consider:

- correctness
- reproducibility
- maintainability
- model size
- latency
- memory
- energy
- device constraints
- testability
- observability
- deployment
- rollback
- failure modes

Do not optimize one metric blindly.

Always discuss trade-offs.

---

# 24. APPLE ON-DEVICE MINDSET

When evaluating an ML model for iOS, do not ask only:

> "Does it run?"

Ask:

```text
Can it run?
How fast?
How large?
How much memory?
Which hardware?
What preprocessing cost?
What postprocessing cost?
Can it run continuously?
What happens to battery?
What happens on older devices?
What happens when conversion changes accuracy?
```

---

# 25. PRODUCTION GATE

A major project is not complete until the relevant checks are satisfied.

Checklist:

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
- [ ] Deployment reproducible

Not every item applies to every project.

Mark N/A explicitly rather than pretending it was completed.

---

# 26. 4-MONTH ACADEMY PLAN

## Month 1

Engineering + ML

Output:

Production-style ML repository.

Focus:

- Python engineering
- Git
- testing
- data pipeline
- training pipeline
- evaluation
- experiment tracking

---

## Month 2

Production ML

Output:

Reproducible and deployable model.

Focus:

- experiment tracking
- model registry
- FastAPI
- Docker
- CI/CD
- monitoring

---

## Month 3

Model Optimization

Output:

One seriously optimized model.

Focus:

- FP16
- INT8
- quantization
- pruning
- distillation
- benchmarking
- latency
- memory

Start capstone here.

---

## Month 4

Apple On-Device ML

Output:

Optimized model running on iPhone.

Focus:

- Core ML
- conversion
- Vision
- Swift integration
- profiling
- CPU/GPU/Neural Engine
- real-time inference

---

# 27. CAPSTONE PRODUCTION GATE

The final capstone should demonstrate:

```text
DATA
↓
TRAINING
↓
EVALUATION
↓
MODEL SELECTION
↓
OPTIMIZATION
↓
CONVERSION
↓
iOS INTEGRATION
↓
REAL DEVICE
↓
PROFILING
↓
BENCHMARK
↓
DOCUMENTATION
```

The learner must be able to explain every stage.

---

# 28. IMPLEMENTATION STRATEGY

Do not build the entire system blindly in one pass.

Implement incrementally.

## Phase 1 — Repository foundation

Create:

- README
- curriculum
- templates
- agent instructions
- current context

## Phase 2 — GitHub workflow

Create:

- labels
- issue templates
- project board
- milestone structure

## Phase 3 — Curriculum population

Create all M0–M8 documentation.

## Phase 4 — Initial ticket generation

Generate M0 tickets only.

Do NOT generate hundreds of tickets for all future milestones.

Future milestones should initially contain high-level epics/tasks.

Detailed tickets should be generated when the learner approaches the milestone.

## Phase 5 — Agent integration

Configure Codex to:

- read current context
- inspect current ticket
- inspect repository
- assist with implementation
- update state

## Phase 6 — Validate workflow

Run the system through M0 manually.

Identify friction.

Improve the system.

Only then scale it to later milestones.

---

# 29. AVOID OVER-ENGINEERING

This system itself is not the learning goal.

Do NOT spend weeks building:

- complex dashboards
- custom web applications
- unnecessary automation
- complicated databases
- elaborate agent orchestration
- unnecessary MCP servers

Prefer:

```text
Markdown
+
GitHub Issues
+
GitHub Projects
+
Git
+
Codex
```

before introducing additional infrastructure.

The learning system must remain simpler than the engineering problems it is designed to support.

---

# 30. SUCCESS CRITERIA FOR THIS SYSTEM

The system is successful if the learner can start a session with:

> "Continue."

and the agent can determine:

```text
Where am I?
What milestone?
What epic?
What ticket?
What did I do last?
What is blocked?
What should happen next?
What evidence is required?
```

without asking the learner to restate the entire context.

The learner should only need to explain information that is genuinely new.

---

# 31. FINAL PRINCIPLE

The system exists to transform:

```text
"I want to learn ML."
```

into:

```text
"I am currently solving M4-005.
My hypothesis is X.
My baseline is Y.
I tested Z.
The result is A.
The trade-off is B.
My next action is C."
```

That transition is the actual objective.

Build the system around that behavior.
