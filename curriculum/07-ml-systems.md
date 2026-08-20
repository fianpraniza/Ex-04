# M7 - ML Systems

## Objective

Understand and optimize end-to-end inference performance.

## Why This Milestone Exists

App latency includes data movement, preprocessing, scheduling, postprocessing, and UI, not merely model execution.

## Competencies

L1 explain pipeline cost; L2 instrument stages; L3 diagnose bottlenecks; L4 optimize with measurements; L5 make end-to-end system decisions.

## Concepts

CPU/GPU/Neural Engine, memory, allocation, scheduling, batching, asynchronous inference, preprocessing, postprocessing, loading, caching, profiling, energy.

## Required Projects

Profile the full real-time shrimp-detection pipeline.

## Required Experiments

Measure camera/input through UI latency under competing execution strategies.

## Required Evidence

Stage timings, profiler capture, memory/energy evidence, before/after benchmarks, system decision record.

## Expected Outputs

An end-to-end performance profile and an evidence-backed optimization.

## Dependencies

M5 integrated iOS application.

## Definition of Done

Input, preprocessing, inference, postprocessing, and UI costs are measured; a bottleneck is improved or a limitation is documented.

## Related Issues

- [M7-001 — Instrument the full inference pipeline](../planning/tickets.md#m7-001)
- [M7-002 — Profile CPU, GPU, and Neural Engine execution paths](../planning/tickets.md#m7-002)
- [M7-003 — Optimize preprocessing and postprocessing bottlenecks](../planning/tickets.md#m7-003)
- [M7-004 — Evaluate scheduling, loading, and caching strategy](../planning/tickets.md#m7-004)
- [M7-005 — Publish the ML systems performance decision](../planning/tickets.md#m7-005)
- [CAP-007 — Profile the capstone on a physical iPhone](../planning/tickets.md#cap-007)
- [CAP-008 — Benchmark real-time shrimp detection trade-offs](../planning/tickets.md#cap-008)
- [CAP-010 — Pass the final production gate](../planning/tickets.md#cap-010)
