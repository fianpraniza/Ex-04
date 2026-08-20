# M4 - Model Optimization

## Objective

Make models smaller, faster, and resource-efficient while preserving sufficient quality.

## Why This Milestone Exists

On-device deployment begins with measurable optimization trade-offs.

## Competencies

L1 explain numeric formats and compression; L2 produce optimized variants; L3 debug conversion and quality regressions; L4 benchmark and choose variants; L5 justify an optimization strategy.

## Concepts

FP32, FP16, INT8, quantization, pruning, distillation, compression, palettization, efficient architectures.

## Required Projects

Optimize the selected shrimp-detection model for Apple deployment.

## Required Experiments

Compare FP32, FP16, INT8, and one additional optimization candidate.

## Required Evidence

Benchmark records for size, accuracy, latency, memory, conversion logs, and decision record.

## Expected Outputs

A benchmarked optimized model with explicit trade-offs.

## Dependencies

M1 selected model and M2 reproducible lineage.

## Definition of Done

FP32, FP16, INT8, and optimized variants are compared on size, accuracy, latency, and memory with a documented selection.

## Related Issues

- [M4-001 — Establish the optimization baseline](../planning/tickets.md#m4-001)
- [M4-002 — Create and benchmark an FP16 model variant](../planning/tickets.md#m4-002)
- [M4-003 — Implement and benchmark INT8 quantization](../planning/tickets.md#m4-003)
- [M4-004 — Evaluate one additional optimization strategy](../planning/tickets.md#m4-004)
- [M4-005 — Select the optimization strategy for Apple deployment](../planning/tickets.md#m4-005)
- [CAP-004 — Optimize the capstone model](../planning/tickets.md#cap-004)
