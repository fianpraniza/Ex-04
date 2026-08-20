# M2 - Experiment Tracking & Model Lifecycle

## Objective

Establish experiment, artifact, model, and lineage traceability.

## Why This Milestone Exists

Model decisions are not defensible when dataset, code, parameters, and artifacts cannot be traced.

## Competencies

L1 explain lineage; L2 track runs and artifacts; L3 reproduce a selected model; L4 compare lifecycle candidates; L5 operate an auditable selection process.

## Concepts

Experiment tracking, artifacts, model versioning, registry, lineage, reproducibility, MLflow or equivalent.

## Required Projects

Add lifecycle tracking to the shrimp-detection workflow.

## Required Experiments

Re-run a selected experiment from its recorded dataset, code, and parameters.

## Required Evidence

Run links or exports, artifact references, model version, lineage report, reproduction result.

## Expected Outputs

A traceable selected model with an auditable lifecycle.

## Dependencies

M1 selected baseline and repeatable training.

## Definition of Done

Every selected model answers which dataset, code version, parameters, experiment, and selection rationale produced it.

## Related Issues

- [M2-001 - Design the experiment and artifact tracking contract](../planning/tickets.md#m2-001)
- [M2-002 - Track training runs and artifacts](../planning/tickets.md#m2-002)
- [M2-003 - Register candidate models and document selection](../planning/tickets.md#m2-003)
- [M2-004 - Reproduce the selected model from lineage](../planning/tickets.md#m2-004)
- [M2-005 - Complete the model lifecycle audit](../planning/tickets.md#m2-005)
