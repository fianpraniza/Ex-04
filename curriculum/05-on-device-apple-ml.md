# M5 - On-Device ML / Apple

## Objective

Deploy and measure a real ML model on Apple hardware.

## Why This Milestone Exists

The target specialization requires conversion, integration, and physical-device evidence rather than simulator-only success.

## Competencies

L1 explain Core ML and hardware paths; L2 convert and integrate a model; L3 debug parity and runtime issues; L4 profile alternatives; L5 ship a documented on-device pipeline.

## Concepts

Core ML, Core ML Tools, conversion, loading, prediction, preprocessing, postprocessing, Vision, CPU, GPU, Neural Engine, iOS integration.

## Required Projects

Run shrimp detection in an iOS app on a physical device.

## Required Experiments

Compare model parity and hardware/runtime configurations on device.

## Required Evidence

Core ML model, conversion report, iOS source/demo, device benchmark and profiling capture.

## Expected Outputs

Real device inference with measurable resource behavior.

## Dependencies

M4 selected optimized model.

## Definition of Done

The PyTorch/framework-to-Core-ML-to-iOS-to-physical-device pipeline works and size, latency, memory, and device performance are recorded.

## Related Issues

- [M5-001 — Convert the selected model to Core ML](../planning/tickets.md#m5-001)
- [M5-002 — Validate Core ML prediction parity](../planning/tickets.md#m5-002)
- [M5-003 — Integrate Core ML and Vision into an iOS inference flow](../planning/tickets.md#m5-003)
- [M5-004 — Measure inference on a physical Apple device](../planning/tickets.md#m5-004)
- [M5-005 — Publish the Apple deployment evidence package](../planning/tickets.md#m5-005)
- [CAP-005 — Convert the capstone model to Core ML](../planning/tickets.md#cap-005)
- [CAP-006 — Integrate capstone inference into an iOS camera flow](../planning/tickets.md#cap-006)
