# Ticket Catalog

This is the canonical local source for the GitHub issue bodies. The GitHub bootstrap uses the same data module to create issues, labels, milestones, and Project items.

<a id="m0-001"></a>

## M0-001 — Establish the production-style repository baseline

**Milestone:** M0  
**Epic:** Repository Foundation  
**Type:** implementation  
**Priority:** high

# Objective

Establish the production-style repository baseline.

## Context

The workspace starts as a learning-system repository and needs an executable ML-project shape.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not train a model or implement future curriculum features. Preserve deterministic local setup.

## Dependencies

None.

## Acceptance Criteria

- [ ] A package-oriented source layout, dependency/environment instructions, configuration location, .gitignore, and README setup path exist; a clean clone can identify the intended commands.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Repository tree, setup commands, configuration sample, and commit.

## Related Milestone

M0

## Related Epic

Repository Foundation


---

<a id="m0-002"></a>

## M0-002 — Build a configuration-driven training CLI

**Milestone:** M0  
**Epic:** Repository Foundation  
**Type:** implementation  
**Priority:** high

# Objective

Build a configuration-driven training CLI.

## Context

Training must become a repeatable command rather than notebook state.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use explicit configuration and actionable errors; do not depend on hidden local paths.

## Dependencies

M0-001.

## Acceptance Criteria

- [ ] A documented training command accepts a configuration; it records seed, configuration, code revision when available, and output location; invalid configuration fails clearly.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

CLI source, example config, command output, and test.

## Related Milestone

M0

## Related Epic

Repository Foundation


---

<a id="m0-003"></a>

## M0-003 — Implement reproducible evaluation and inference commands

**Milestone:** M0  
**Epic:** Repository Foundation  
**Type:** implementation  
**Priority:** high

# Objective

Implement reproducible evaluation and inference commands.

## Context

Evaluation and inference must be independently runnable from a selected model artifact.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Keep interfaces separate from training; inputs and outputs must be documented.

## Dependencies

M0-001, M0-002.

## Acceptance Criteria

- [ ] Documented evaluation and inference commands run from explicit inputs; each writes machine-readable results; missing artifacts and invalid inputs produce actionable errors.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

CLI source, sample result artifacts, and integration-test output.

## Related Milestone

M0

## Related Epic

Repository Foundation


---

<a id="m0-004"></a>

## M0-004 — Add automated verification and engineering documentation

**Milestone:** M0  
**Epic:** Quality and Delivery  
**Type:** documentation  
**Priority:** medium

# Objective

Add automated verification and engineering documentation.

## Context

The workflow needs confidence checks and a human-readable operating guide.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Tests must be fast enough for routine use; do not claim coverage that was not measured.

## Dependencies

M0-001, M0-002, M0-003.

## Acceptance Criteria

- [ ] Unit tests cover core configuration and utility behavior; an integration test covers one command path; README explains setup, train, evaluate, infer, and troubleshooting entry points.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Test report, README paths, and CI-ready command.

## Related Milestone

M0

## Related Epic

Quality and Delivery


---

<a id="m0-005"></a>

## M0-005 — Run the engineering reproducibility gate

**Milestone:** M0  
**Epic:** Quality and Delivery  
**Type:** benchmark  
**Priority:** high

# Objective

Run the engineering reproducibility gate.

## Context

M0 must prove that the project is repeatable before model-selection work begins.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Run from a clean environment or clearly state remaining host-specific limitations.

## Dependencies

M0-002, M0-003, M0-004.

## Acceptance Criteria

- [ ] A fresh environment follows the documented path; training, evaluation, and inference run; tests pass; discrepancies are recorded and resolved or accepted with rationale.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Reproducibility report, command logs, test results, and reflection.

## Related Milestone

M0

## Related Epic

Quality and Delivery


---

<a id="m1-001"></a>

## M1-001 — Create a versioned dataset contract and reproducible split

**Milestone:** M1  
**Epic:** Data and Baselines  
**Type:** implementation  
**Priority:** high

# Objective

Create a versioned dataset contract and reproducible split.

## Context

Model comparisons need a stable dataset definition and leakage-resistant split.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not change data between candidate runs without recording a new version.

## Dependencies

M0-005.

## Acceptance Criteria

- [ ] Dataset source/version, schema, validation checks, class distribution, split seed, and leakage checks are documented; the split can be regenerated.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Dataset contract, validation output, split manifest, and code.

## Related Milestone

M1

## Related Epic

Data and Baselines


---

<a id="m1-002"></a>

## M1-002 — Establish candidate-model baselines

**Milestone:** M1  
**Epic:** Data and Baselines  
**Type:** experiment  
**Priority:** high

# Objective

Establish candidate-model baselines.

## Context

A shared evaluation path is required before fair comparison.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use the M1 dataset contract and a fixed budget per candidate.

## Dependencies

M1-001.

## Acceptance Criteria

- [ ] At least three viable candidate approaches are defined; each has a baseline run using the same dataset split, metrics, and recorded configuration.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment records, checkpoints/artifact references, and baseline metrics.

## Related Milestone

M1

## Related Epic

Data and Baselines


---

<a id="m1-003"></a>

## M1-003 — Compare three model approaches with engineering metrics

**Milestone:** M1  
**Epic:** Model Selection  
**Type:** experiment  
**Priority:** high

# Objective

Compare three model approaches with engineering metrics.

## Context

Accuracy alone cannot select the model intended for later deployment.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Keep evaluation consistent; report unavailable measurements as N/A with reason.

## Dependencies

M1-002.

## Acceptance Criteria

- [ ] A comparison includes accuracy, precision, recall, F1 or mAP as applicable, latency, model size, and memory; the same dataset and test protocol are used.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Comparison report, benchmark records, and experiment links.

## Related Milestone

M1

## Related Epic

Model Selection


---

<a id="m1-004"></a>

## M1-004 — Analyze failure cases and select a model

**Milestone:** M1  
**Epic:** Model Selection  
**Type:** debug  
**Priority:** medium

# Objective

Analyze failure cases and select a model.

## Context

A candidate must be chosen through observed behavior, not aggregate score alone.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not hide poor classes or edge cases; state uncertainty.

## Dependencies

M1-003.

## Acceptance Criteria

- [ ] Error slices and confusion or detection analysis identify meaningful failure modes; one model is selected or selection is explicitly deferred; alternatives and trade-offs are recorded.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Error analysis, decision record, and selected-model reference.

## Related Milestone

M1

## Related Epic

Model Selection


---

<a id="m1-005"></a>

## M1-005 — Publish the ML engineering decision record

**Milestone:** M1  
**Epic:** Model Selection  
**Type:** documentation  
**Priority:** medium

# Objective

Publish the ML engineering decision record.

## Context

The baseline choice must remain understandable for optimization and deployment work.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use evidence from completed M1 experiments; no unmeasured claims.

## Dependencies

M1-004.

## Acceptance Criteria

- [ ] The record answers why the dataset, architecture, metrics, and selected version were chosen; known limitations and next risks are explicit.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Decision record, linked experiments, benchmark, and reflection.

## Related Milestone

M1

## Related Epic

Model Selection


---

<a id="m2-001"></a>

## M2-001 — Design the experiment and artifact tracking contract

**Milestone:** M2  
**Epic:** Tracking Foundation  
**Type:** implementation  
**Priority:** high

# Objective

Design the experiment and artifact tracking contract.

## Context

M1 produced runs that now require systematic traceability.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use MLflow or an equivalent tool; preserve local/offline operation when practical.

## Dependencies

M1-005.

## Acceptance Criteria

- [ ] The contract defines required run parameters, metrics, dataset/code identifiers, artifact paths, model naming, and retention rules.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Tracking design document and configuration.

## Related Milestone

M2

## Related Epic

Tracking Foundation


---

<a id="m2-002"></a>

## M2-002 — Track training runs and artifacts

**Milestone:** M2  
**Epic:** Tracking Foundation  
**Type:** implementation  
**Priority:** high

# Objective

Track training runs and artifacts.

## Context

The selected workflow needs automatic run capture.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not store secrets or large binary artifacts directly in Git.

## Dependencies

M2-001.

## Acceptance Criteria

- [ ] Training logs parameters, metrics, dataset reference, code revision when available, checkpoints, and evaluation artifacts to the chosen tracker.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Run link/export, source changes, and artifact references.

## Related Milestone

M2

## Related Epic

Tracking Foundation


---

<a id="m2-003"></a>

## M2-003 — Register candidate models and document selection

**Milestone:** M2  
**Epic:** Model Lineage  
**Type:** implementation  
**Priority:** medium

# Objective

Register candidate models and document selection.

## Context

Model versions must be comparable and recoverable.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Registration must point to an immutable or versioned artifact reference.

## Dependencies

M2-002.

## Acceptance Criteria

- [ ] Candidate models have version identifiers, source-run links, stage/selection state, and a documented promotion rule.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Registry evidence, lineage diagram/table, and decision record.

## Related Milestone

M2

## Related Epic

Model Lineage


---

<a id="m2-004"></a>

## M2-004 — Reproduce the selected model from lineage

**Milestone:** M2  
**Epic:** Model Lineage  
**Type:** experiment  
**Priority:** high

# Objective

Reproduce the selected model from lineage.

## Context

Lineage is only useful if it can recreate an observed result.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Record unavoidable nondeterminism and hardware variation.

## Dependencies

M2-003.

## Acceptance Criteria

- [ ] A clean reproduction uses the recorded dataset, code, and parameters; metrics are compared against the original using stated tolerance; deviations are investigated.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Reproduction report, run links, and comparison output.

## Related Milestone

M2

## Related Epic

Model Lineage


---

<a id="m2-005"></a>

## M2-005 — Complete the model lifecycle audit

**Milestone:** M2  
**Epic:** Model Lineage  
**Type:** documentation  
**Priority:** medium

# Objective

Complete the model lifecycle audit.

## Context

The lifecycle must answer provenance questions without relying on memory.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Audit a selected model, not a hypothetical workflow.

## Dependencies

M2-004.

## Acceptance Criteria

- [ ] The audit answers dataset, code version, parameters, experiment, artifact, and selection rationale for the selected model; any gaps have owners and follow-ups.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Lifecycle audit, linked evidence, and reflection.

## Related Milestone

M2

## Related Epic

Model Lineage


---

<a id="m3-001"></a>

## M3-001 — Serve the selected model through a versioned FastAPI contract

**Milestone:** M3  
**Epic:** Serving and Packaging  
**Type:** implementation  
**Priority:** high

# Objective

Serve the selected model through a versioned FastAPI contract.

## Context

The tracked model needs a consumable inference boundary.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Keep model loading and request validation explicit; no hidden model choice.

## Dependencies

M2-005.

## Acceptance Criteria

- [ ] The service exposes documented prediction and health endpoints; requests are validated; responses include model version; tests cover valid and invalid requests.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

API source, OpenAPI output, tests, and example requests.

## Related Milestone

M3

## Related Epic

Serving and Packaging


---

<a id="m3-002"></a>

## M3-002 — Containerize reproducible inference service

**Milestone:** M3  
**Epic:** Serving and Packaging  
**Type:** implementation  
**Priority:** high

# Objective

Containerize reproducible inference service.

## Context

Local deployment behavior should be repeatable outside the development shell.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use minimal runtime dependencies and avoid embedding credentials.

## Dependencies

M3-001.

## Acceptance Criteria

- [ ] A documented container build runs the service; health and prediction endpoints work in the container; model artifact acquisition/version is explicit.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Containerfile, build log, run commands, and endpoint evidence.

## Related Milestone

M3

## Related Epic

Serving and Packaging


---

<a id="m3-003"></a>

## M3-003 — Add CI verification for service and model contract

**Milestone:** M3  
**Epic:** Operational Readiness  
**Type:** implementation  
**Priority:** medium

# Objective

Add CI verification for service and model contract.

## Context

Changes need automated protection against training/service contract regression.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Keep CI scoped to checks that can execute in the repository environment.

## Dependencies

M3-001, M3-002.

## Acceptance Criteria

- [ ] CI runs lint/type/test or equivalent checks, service contract tests, and container build verification; failures are actionable.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Workflow file, CI run URL, and test output.

## Related Milestone

M3

## Related Epic

Operational Readiness


---

<a id="m3-004"></a>

## M3-004 — Implement logging, health, monitoring hooks, and rollback procedure

**Milestone:** M3  
**Epic:** Operational Readiness  
**Type:** implementation  
**Priority:** medium

# Objective

Implement logging, health, monitoring hooks, and rollback procedure.

## Context

A service needs diagnosability and a safe response to a bad model release.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use privacy-safe structured logs and state what is not monitored.

## Dependencies

M3-002.

## Acceptance Criteria

- [ ] Structured logs identify request outcome and model version; health/readiness behavior is documented; a rollback from one model version to another is exercised or simulated.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Log samples, health evidence, rollback runbook, and test/demo.

## Related Milestone

M3

## Related Epic

Operational Readiness


---

<a id="m3-005"></a>

## M3-005 — Run the production ML readiness demonstration

**Milestone:** M3  
**Epic:** Operational Readiness  
**Type:** documentation  
**Priority:** high

# Objective

Run the production ML readiness demonstration.

## Context

M3 completion requires a coherent service lifecycle proof.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not introduce Kubernetes as a prerequisite.

## Dependencies

M3-003, M3-004.

## Acceptance Criteria

- [ ] A reproducible deployment path, automated checks, model versioning, observability, health behavior, and rollback evidence are demonstrated; residual operational risks are recorded.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Readiness report, deployment commands, CI evidence, and reflection.

## Related Milestone

M3

## Related Epic

Operational Readiness


---

<a id="m4-001"></a>

## M4-001 — Establish the optimization baseline

**Milestone:** M4  
**Epic:** Optimization Baseline  
**Type:** benchmark  
**Priority:** high

# Objective

Establish the optimization baseline.

## Context

Optimization needs a trustworthy FP32 reference for quality and resource comparisons.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Fix model version, evaluation set, runtime, and hardware details.

## Dependencies

M1-005, M2-005.

## Acceptance Criteria

- [ ] The FP32 baseline records model size, accuracy, latency distribution, memory, device/runtime, input size, and measurement method.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Benchmark record and baseline artifact reference.

## Related Milestone

M4

## Related Epic

Optimization Baseline


---

<a id="m4-002"></a>

## M4-002 — Create and benchmark an FP16 model variant

**Milestone:** M4  
**Epic:** Optimization Baseline  
**Type:** experiment  
**Priority:** high

# Objective

Create and benchmark an FP16 model variant.

## Context

FP16 is a measurable compression and runtime candidate.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Record conversion tooling/version and parity limitations.

## Dependencies

M4-001.

## Acceptance Criteria

- [ ] An FP16 variant is produced; quality, size, latency, and memory are compared to FP32 using the same protocol; conversion issues are logged.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment, benchmark, model artifact reference, and conversion logs.

## Related Milestone

M4

## Related Epic

Optimization Baseline


---

<a id="m4-003"></a>

## M4-003 — Implement and benchmark INT8 quantization

**Milestone:** M4  
**Epic:** Quantization and Selection  
**Type:** experiment  
**Priority:** high

# Objective

Implement and benchmark INT8 quantization.

## Context

INT8 must be evaluated as a trade-off, not assumed to be beneficial.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Choose calibration/evaluation data deliberately and document it.

## Dependencies

M4-001.

## Acceptance Criteria

- [ ] An INT8 candidate is created or a documented blocker is reproduced; model size, quality, latency, and memory are compared with FP32 and FP16.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment, benchmark, calibration notes, and logs.

## Related Milestone

M4

## Related Epic

Quantization and Selection


---

<a id="m4-004"></a>

## M4-004 — Evaluate one additional optimization strategy

**Milestone:** M4  
**Epic:** Quantization and Selection  
**Type:** experiment  
**Priority:** medium

# Objective

Evaluate one additional optimization strategy.

## Context

Pruning, distillation, palettization, compression, or an efficient architecture may improve the chosen trade-off.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Select one method with a justified hypothesis; do not add complexity without a baseline comparison.

## Dependencies

M4-001.

## Acceptance Criteria

- [ ] The method, hypothesis, procedure, and before/after metrics are recorded; the result is compared to FP32, FP16, and INT8 where available.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment, benchmark, artifact/reference, and analysis.

## Related Milestone

M4

## Related Epic

Quantization and Selection


---

<a id="m4-005"></a>

## M4-005 — Select the optimization strategy for Apple deployment

**Milestone:** M4  
**Epic:** Quantization and Selection  
**Type:** documentation  
**Priority:** high

# Objective

Select the optimization strategy for Apple deployment.

## Context

A single deployment candidate must be chosen from measured variants.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Decision must respect quality floor and target device constraints.

## Dependencies

M4-002, M4-003, M4-004.

## Acceptance Criteria

- [ ] A comparison table covers FP32, FP16, INT8, and optimized candidate; a selected variant, rejected variants, quality floor, risks, and follow-up measurements are explicit.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Optimization decision record, benchmark links, and reflection.

## Related Milestone

M4

## Related Epic

Quantization and Selection


---

<a id="m5-001"></a>

## M5-001 — Convert the selected model to Core ML

**Milestone:** M5  
**Epic:** Core ML Conversion  
**Type:** implementation  
**Priority:** high

# Objective

Convert the selected model to Core ML.

## Context

The chosen optimization must enter the Apple runtime with a repeatable conversion path.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Pin conversion-tool and source-model versions; record unsupported operations.

## Dependencies

M4-005.

## Acceptance Criteria

- [ ] A Core ML model is generated from the selected source artifact; conversion command/configuration, model metadata, and limitations are recorded.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Converted model, conversion script/log, and model inspection output.

## Related Milestone

M5

## Related Epic

Core ML Conversion


---

<a id="m5-002"></a>

## M5-002 — Validate Core ML prediction parity

**Milestone:** M5  
**Epic:** Core ML Conversion  
**Type:** benchmark  
**Priority:** high

# Objective

Validate Core ML prediction parity.

## Context

Conversion success does not prove output correctness.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use representative fixed samples and tolerance appropriate to the model/precision.

## Dependencies

M5-001.

## Acceptance Criteria

- [ ] Source and Core ML predictions are compared on a documented sample set; preprocessing/postprocessing parity and acceptable deviations are explained.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Parity report, test fixtures, and comparison output.

## Related Milestone

M5

## Related Epic

Core ML Conversion


---

<a id="m5-003"></a>

## M5-003 — Integrate Core ML and Vision into an iOS inference flow

**Milestone:** M5  
**Epic:** iOS Integration  
**Type:** implementation  
**Priority:** high

# Objective

Integrate Core ML and Vision into an iOS inference flow.

## Context

The model needs a real application path from input through user-visible output.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Keep preprocessing and postprocessing measurable and avoid simulator-only proof.

## Dependencies

M5-002.

## Acceptance Criteria

- [ ] The app loads the Core ML model, accepts image or camera input, performs prediction, renders output, and handles errors; integration instructions exist.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

iOS source paths, demo capture, and integration tests or manual test record.

## Related Milestone

M5

## Related Epic

iOS Integration


---

<a id="m5-004"></a>

## M5-004 — Measure inference on a physical Apple device

**Milestone:** M5  
**Epic:** iOS Integration  
**Type:** benchmark  
**Priority:** high

# Objective

Measure inference on a physical Apple device.

## Context

Specialization evidence requires actual hardware behavior.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Record device, OS, thermal/power conditions when known, runtime, input size, and sample count.

## Dependencies

M5-003.

## Acceptance Criteria

- [ ] Physical-device measurements record model size, latency distribution, memory, device performance, and selected compute configuration; N/A values include reasons.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Device benchmark, profiler capture or logs, and device details.

## Related Milestone

M5

## Related Epic

iOS Integration


---

<a id="m5-005"></a>

## M5-005 — Publish the Apple deployment evidence package

**Milestone:** M5  
**Epic:** iOS Integration  
**Type:** documentation  
**Priority:** medium

# Objective

Publish the Apple deployment evidence package.

## Context

M5 must leave a traceable deployment narrative for future debugging and capstone work.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

State limitations including unsupported devices or runtime configurations.

## Dependencies

M5-004.

## Acceptance Criteria

- [ ] The package links conversion, parity, iOS integration, device benchmark, selected configuration, known failures, and next risks.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Deployment report, evidence index, and reflection.

## Related Milestone

M5

## Related Epic

iOS Integration


---

<a id="m6-001"></a>

## M6-001 — Build a deployment failure-case suite

**Milestone:** M6  
**Epic:** Failure Reproduction  
**Type:** debug  
**Priority:** high

# Objective

Build a deployment failure-case suite.

## Context

Hard-problem work needs reproducible non-happy-path cases before mitigation.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use safe synthetic or captured inputs; do not fabricate failures.

## Dependencies

M5-005.

## Acceptance Criteria

- [ ] At least two realistic challenge cases are reproducible with expected failure signatures and baseline behavior.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Test fixtures, logs, minimal reproduction, and case index.

## Related Milestone

M6

## Related Epic

Failure Reproduction


---

<a id="m6-002"></a>

## M6-002 — Investigate an unsupported operator or conversion failure

**Milestone:** M6  
**Epic:** Failure Reproduction  
**Type:** debug  
**Priority:** high

# Objective

Investigate an unsupported operator or conversion failure.

## Context

A conversion failure should be understood before bypassing it.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Follow Problem, Baseline, Investigation, Hypothesis, Experiment, Benchmark, Solution, Trade-off, Limitation.

## Dependencies

M6-001.

## Acceptance Criteria

- [ ] Root cause is evidenced; at least one mitigation is tested; supportedness, quality, and maintainability trade-offs are recorded.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Investigation report, logs, experiment, and decision.

## Related Milestone

M6

## Related Epic

Failure Reproduction


---

<a id="m6-003"></a>

## M6-003 — Investigate an accuracy degradation after optimization or conversion

**Milestone:** M6  
**Epic:** Mitigation and Casebook  
**Type:** debug  
**Priority:** medium

# Objective

Investigate an accuracy degradation after optimization or conversion.

## Context

Parity gaps can make a deployable artifact unsuitable.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use representative samples and distinguish preprocessing, numerical, and postprocessing causes.

## Dependencies

M6-001, M5-002.

## Acceptance Criteria

- [ ] A degradation baseline, hypothesis, isolation steps, mitigation, and resulting quality metrics are recorded; remaining limitation is explicit.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment, benchmark, regression fixtures, and reflection.

## Related Milestone

M6

## Related Epic

Mitigation and Casebook


---

<a id="m6-004"></a>

## M6-004 — Mitigate an observed latency or memory failure

**Milestone:** M6  
**Epic:** Mitigation and Casebook  
**Type:** debug  
**Priority:** medium

# Objective

Mitigate an observed latency or memory failure.

## Context

Resource failures require an end-to-end, measured response.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not report model latency as app latency; preserve a before/after protocol.

## Dependencies

M6-001, M5-004.

## Acceptance Criteria

- [ ] One latency or memory problem is reproduced; at least one mitigation is benchmarked; side effects on quality and usability are documented.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Profiler evidence, before/after benchmark, and decision.

## Related Milestone

M6

## Related Epic

Mitigation and Casebook


---

<a id="m6-005"></a>

## M6-005 — Publish the deployment troubleshooting casebook

**Milestone:** M6  
**Epic:** Mitigation and Casebook  
**Type:** documentation  
**Priority:** medium

# Objective

Publish the deployment troubleshooting casebook.

## Context

Hard-problem knowledge should be reusable rather than trapped in one debugging session.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Include only investigated cases with evidence; state unknowns.

## Dependencies

M6-002, M6-003, M6-004.

## Acceptance Criteria

- [ ] Each case contains problem through limitation, links to evidence, and a recommendation for when to use or avoid its mitigation.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Casebook, evidence index, and reflection.

## Related Milestone

M6

## Related Epic

Mitigation and Casebook


---

<a id="m7-001"></a>

## M7-001 — Instrument the full inference pipeline

**Milestone:** M7  
**Epic:** End-to-End Profiling  
**Type:** implementation  
**Priority:** high

# Objective

Instrument the full inference pipeline.

## Context

System optimization needs stage-level timing rather than a single model number.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Measure input/camera, preprocessing, inference, postprocessing, and UI separately where possible.

## Dependencies

M5-005.

## Acceptance Criteria

- [ ] Instrumentation produces repeatable timings for each pipeline stage and identifies measurement boundaries and overhead.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Instrumentation source, trace/log sample, and methodology note.

## Related Milestone

M7

## Related Epic

End-to-End Profiling


---

<a id="m7-002"></a>

## M7-002 — Profile CPU, GPU, and Neural Engine execution paths

**Milestone:** M7  
**Epic:** End-to-End Profiling  
**Type:** benchmark  
**Priority:** high

# Objective

Profile CPU, GPU, and Neural Engine execution paths.

## Context

Hardware selection must be based on observed system behavior.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Document availability, fallback behavior, device, OS, thermal state if known, and repeat count.

## Dependencies

M7-001.

## Acceptance Criteria

- [ ] Available compute configurations are profiled for stage latency, memory, throughput, and energy when available; unavailable modes are N/A with reason.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Profiler captures, benchmark records, and configuration table.

## Related Milestone

M7

## Related Epic

End-to-End Profiling


---

<a id="m7-003"></a>

## M7-003 — Optimize preprocessing and postprocessing bottlenecks

**Milestone:** M7  
**Epic:** Pipeline Optimization  
**Type:** experiment  
**Priority:** high

# Objective

Optimize preprocessing and postprocessing bottlenecks.

## Context

Non-model work can dominate app latency.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Preserve correctness and document input/output parity checks.

## Dependencies

M7-001.

## Acceptance Criteria

- [ ] A measured bottleneck is identified; one change is implemented and benchmarked end-to-end; correctness and trade-offs are reported.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Before/after trace, benchmark, source changes, and test evidence.

## Related Milestone

M7

## Related Epic

Pipeline Optimization


---

<a id="m7-004"></a>

## M7-004 — Evaluate scheduling, loading, and caching strategy

**Milestone:** M7  
**Epic:** Pipeline Optimization  
**Type:** experiment  
**Priority:** medium

# Objective

Evaluate scheduling, loading, and caching strategy.

## Context

Cold start, allocation, and execution scheduling affect perceived performance.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Avoid premature batching or concurrency; choose a realistic interactive workload.

## Dependencies

M7-002.

## Acceptance Criteria

- [ ] At least one scheduling/loading/caching strategy is compared to baseline using defined workload; impacts on latency, memory, energy, and complexity are recorded.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment, profiler capture, benchmark, and decision notes.

## Related Milestone

M7

## Related Epic

Pipeline Optimization


---

<a id="m7-005"></a>

## M7-005 — Publish the ML systems performance decision

**Milestone:** M7  
**Epic:** Pipeline Optimization  
**Type:** documentation  
**Priority:** high

# Objective

Publish the ML systems performance decision.

## Context

The capstone requires a defensible end-to-end performance plan.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not claim a universal best compute unit; scope the decision to measured device/workload.

## Dependencies

M7-003, M7-004.

## Acceptance Criteria

- [ ] The decision identifies bottlenecks, selected execution strategy, measured gains, residual risks, and device/workload boundaries.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

System decision record, evidence links, and reflection.

## Related Milestone

M7

## Related Epic

Pipeline Optimization


---

<a id="m8-001"></a>

## M8-001 — Define a bounded advanced Apple AI investigation

**Milestone:** M8  
**Epic:** Elective Exploration  
**Type:** learning  
**Priority:** low

# Objective

Define a bounded advanced Apple AI investigation.

## Context

Advanced work should solve a capstone-relevant question rather than become topic switching.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

This elective must not block capstone progress; place unrelated ideas in the curiosity backlog.

## Dependencies

M7-005.

## Acceptance Criteria

- [ ] One advanced area is selected with a question, hypothesis, success metric, timebox, and relevance statement.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Investigation brief and issue links.

## Related Milestone

M8

## Related Epic

Elective Exploration


---

<a id="m8-002"></a>

## M8-002 — Prototype the selected Apple Silicon or PyTorch ecosystem workflow

**Milestone:** M8  
**Epic:** Elective Exploration  
**Type:** implementation  
**Priority:** low

# Objective

Prototype the selected Apple Silicon or PyTorch ecosystem workflow.

## Context

A bounded prototype tests whether the advanced area has practical value.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Keep the prototype isolated and reproducible; do not replace the established path without evidence.

## Dependencies

M8-001.

## Acceptance Criteria

- [ ] A minimal prototype runs with documented environment and expected behavior; integration boundaries are clear.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Prototype source, setup notes, and output.

## Related Milestone

M8

## Related Epic

Elective Exploration


---

<a id="m8-003"></a>

## M8-003 — Profile the advanced workflow or tooling path

**Milestone:** M8  
**Epic:** Advanced Optimization  
**Type:** benchmark  
**Priority:** low

# Objective

Profile the advanced workflow or tooling path.

## Context

Advanced techniques require the same evidence standard as core optimization.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use a comparison baseline and report N/A measurements honestly.

## Dependencies

M8-002.

## Acceptance Criteria

- [ ] The prototype is profiled for the relevant quality, latency, memory, energy, or developer-cost metrics against a baseline.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Benchmark, profiler evidence, and methodology.

## Related Milestone

M8

## Related Epic

Advanced Optimization


---

<a id="m8-004"></a>

## M8-004 — Test one advanced optimization only when justified

**Milestone:** M8  
**Epic:** Advanced Optimization  
**Type:** experiment  
**Priority:** low

# Objective

Test one advanced optimization only when justified.

## Context

Metal, custom kernels, or advanced tooling should be driven by a measured bottleneck.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not proceed if M8-003 provides no credible hypothesis; document the stop decision instead.

## Dependencies

M8-003.

## Acceptance Criteria

- [ ] A justified optimization is implemented and compared, or a documented decision explains why further optimization is not justified.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment or stop-decision record, benchmark, and code if applicable.

## Related Milestone

M8

## Related Epic

Advanced Optimization


---

<a id="m8-005"></a>

## M8-005 — Publish the advanced Apple AI adoption decision

**Milestone:** M8  
**Epic:** Advanced Optimization  
**Type:** reflection  
**Priority:** low

# Objective

Publish the advanced Apple AI adoption decision.

## Context

The elective should yield engineering judgment, even when the result is rejection.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Keep conclusions scoped to the tested hardware and workload.

## Dependencies

M8-004.

## Acceptance Criteria

- [ ] The record states what was tried, measured result, complexity cost, adoption/rejection decision, and next capability.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Decision record, evidence index, and reflection.

## Related Milestone

M8

## Related Epic

Advanced Optimization


---

<a id="cap-001"></a>

## CAP-001 — Define the shrimp dataset and capstone baseline

**Milestone:** M1  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** implementation  
**Priority:** high

# Objective

Define the shrimp dataset and capstone baseline.

## Context

The capstone needs a bounded data contract and initial measurable target.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use M1 standards for versioning, leakage checks, and split reproducibility.

## Dependencies

M1-001.

## Acceptance Criteria

- [ ] Dataset scope, labeling policy, version, split, quality target, latency target, and baseline model are defined.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Dataset contract, baseline run, and capstone brief.

## Related Milestone

Capstone ticket mapped to M1

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-002"></a>

## CAP-002 — Train candidate shrimp-detection models

**Milestone:** M1  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** experiment  
**Priority:** high

# Objective

Train candidate shrimp-detection models.

## Context

Capstone model selection needs comparable candidates.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use the fixed capstone dataset and tracked experiment protocol.

## Dependencies

CAP-001, M2-002.

## Acceptance Criteria

- [ ] At least three candidate training runs are tracked with quality and resource metrics.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Experiment records, artifacts, and comparison table.

## Related Milestone

Capstone ticket mapped to M1

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-003"></a>

## CAP-003 — Select the capstone model

**Milestone:** M1  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** documentation  
**Priority:** high

# Objective

Select the capstone model.

## Context

A model must be selected before deployment optimization.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Do not select on accuracy alone.

## Dependencies

CAP-002, M1-004.

## Acceptance Criteria

- [ ] The selected architecture and version are justified using accuracy, error cases, latency, size, memory, and data constraints.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Decision record and evidence links.

## Related Milestone

Capstone ticket mapped to M1

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-004"></a>

## CAP-004 — Optimize the capstone model

**Milestone:** M4  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** experiment  
**Priority:** high

# Objective

Optimize the capstone model.

## Context

The selected model must meet realistic iPhone constraints.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Compare FP16, INT8, and a justified additional method where supported.

## Dependencies

CAP-003, M4-005.

## Acceptance Criteria

- [ ] Optimized candidates are compared against baseline for quality, size, latency, and memory; one is selected for conversion.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Optimization experiments, benchmarks, and selected artifact.

## Related Milestone

Capstone ticket mapped to M4

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-005"></a>

## CAP-005 — Convert the capstone model to Core ML

**Milestone:** M5  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** implementation  
**Priority:** high

# Objective

Convert the capstone model to Core ML.

## Context

The optimized artifact must enter the Apple runtime.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Pin source and conversion versions; record all conversion limitations.

## Dependencies

CAP-004, M5-001.

## Acceptance Criteria

- [ ] A repeatable Core ML conversion produces an inspected model and passes documented parity checks.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Model artifact, conversion logs, and parity report.

## Related Milestone

Capstone ticket mapped to M5

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-006"></a>

## CAP-006 — Integrate capstone inference into an iOS camera flow

**Milestone:** M5  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** implementation  
**Priority:** high

# Objective

Integrate capstone inference into an iOS camera flow.

## Context

The application must run an end-to-end real-time path.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use physical-device-ready camera, preprocessing, inference, postprocessing, and UI boundaries.

## Dependencies

CAP-005, M5-003.

## Acceptance Criteria

- [ ] The iOS app processes camera frames, renders detections, handles errors, and exposes model/version configuration.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

iOS source, demo capture, and integration test/manual test record.

## Related Milestone

Capstone ticket mapped to M5

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-007"></a>

## CAP-007 — Profile the capstone on a physical iPhone

**Milestone:** M7  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** benchmark  
**Priority:** high

# Objective

Profile the capstone on a physical iPhone.

## Context

The capstone needs end-to-end device evidence.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Record device, OS, runtime, input size, and thermal conditions when available.

## Dependencies

CAP-006, M7-002.

## Acceptance Criteria

- [ ] Physical-device profiling records stage latency, P50/P95, memory, FPS/throughput, energy when available, and compute configuration.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Benchmark, profiler capture, and device notes.

## Related Milestone

Capstone ticket mapped to M7

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-008"></a>

## CAP-008 — Benchmark real-time shrimp detection trade-offs

**Milestone:** M7  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** benchmark  
**Priority:** high

# Objective

Benchmark real-time shrimp detection trade-offs.

## Context

The final performance claim must be reproducible and comparable.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

Use a stable workload and distinguish model from application latency.

## Dependencies

CAP-007.

## Acceptance Criteria

- [ ] A benchmark reports quality, model size, P50/P95 latency, memory, FPS, energy when available, and failure behavior; N/A is explained.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Final benchmark report and raw measurement references.

## Related Milestone

Capstone ticket mapped to M7

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-009"></a>

## CAP-009 — Document capstone production trade-offs

**Milestone:** M3  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** documentation  
**Priority:** high

# Objective

Document capstone production trade-offs.

## Context

The portfolio needs a clear engineering narrative, not only a demo.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

State limits, test environment, model/data provenance, and unresolved risks.

## Dependencies

CAP-008, M3-005, M6-005.

## Acceptance Criteria

- [ ] Documentation answers architecture, dataset, optimization, accuracy change, latency, memory, tested device, limitations, logging/monitoring boundaries, and rollback/versioning approach.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Architecture/decision documentation, evidence index, and reflection.

## Related Milestone

Capstone ticket mapped to M3

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone


---

<a id="cap-010"></a>

## CAP-010 — Pass the final production gate

**Milestone:** M7  
**Epic:** Capstone: Real-time Shrimp Detection on iPhone  
**Type:** documentation  
**Priority:** high

# Objective

Pass the final production gate.

## Context

Capstone completion requires traceable end-to-end evidence.

## Task

Complete the stated action, record decisions in the appropriate experiment, benchmark, evidence, or reflection artifact, and link all resulting evidence before moving the ticket to DONE.

## Constraints

N/A gate items require an explanation; unresolved risks must be explicit.

## Dependencies

CAP-009.

## Acceptance Criteria

- [ ] The production gate is completed with evidence for applicable items, final demo evidence is linked, and every major claim is traceable to an artifact.
- [ ] Evidence is linked in the issue using the repository evidence convention.
- [ ] A reflection is attached or explicitly marked N/A with rationale.

## Expected Evidence

Completed gate, evidence index, final benchmark, demo, and retrospective.

## Related Milestone

Capstone ticket mapped to M7

## Related Epic

Capstone: Real-time Shrimp Detection on iPhone
