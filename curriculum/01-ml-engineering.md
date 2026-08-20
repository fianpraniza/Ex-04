# M1 - ML Engineering

## Objective

Build reproducible ML workflows and select models through explicit engineering trade-offs.

## Why This Milestone Exists

A useful model is selected using data quality, error behavior, latency, size, and repeatability, not accuracy alone.

## Competencies

L1 explain leakage and evaluation metrics; L2 implement config-driven training and evaluation; L3 diagnose data and model failure modes; L4 compare alternatives with evidence; L5 select a model with explicit trade-offs.

## Concepts

Dataset versioning, validation, leakage detection, preprocessing, splits, checkpointing, early stopping, hyperparameters, accuracy, precision, recall, F1, mAP, latency, size, memory.

## Required Projects

Create the shrimp detection model-selection workflow.

## Required Experiments

Compare at least three candidate approaches on the same versioned dataset and split.

## Required Evidence

Dataset contract, run records, comparison table, error analysis, decision record.

## Expected Outputs

A selected baseline model and documented rationale beyond accuracy.

## Dependencies

M0 reproducible repository and execution commands.

## Definition of Done

Dataset and split reproducible; three approaches compared; metrics include quality and resource trade-offs; selection and failure cases documented.

## Related Issues

- [M1-001 - Create a versioned dataset contract and reproducible split](../planning/tickets.md#m1-001)
- [M1-002 - Establish candidate-model baselines](../planning/tickets.md#m1-002)
- [M1-003 - Compare three model approaches with engineering metrics](../planning/tickets.md#m1-003)
- [M1-004 - Analyze failure cases and select a model](../planning/tickets.md#m1-004)
- [M1-005 - Publish the ML engineering decision record](../planning/tickets.md#m1-005)
- [CAP-001 - Define the shrimp dataset and capstone baseline](../planning/tickets.md#cap-001)
- [CAP-002 - Train candidate shrimp-detection models](../planning/tickets.md#cap-002)
- [CAP-003 - Select the capstone model](../planning/tickets.md#cap-003)
