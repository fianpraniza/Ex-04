# Epic Map

## M0 - Repository Foundation

- [M0-001 — Establish the production-style repository baseline](tickets.md#m0-001)
- [M0-002 — Build a configuration-driven training CLI](tickets.md#m0-002)
- [M0-003 — Implement reproducible evaluation and inference commands](tickets.md#m0-003)

## M0 - Quality and Delivery

- [M0-004 — Add automated verification and engineering documentation](tickets.md#m0-004)
- [M0-005 — Run the engineering reproducibility gate](tickets.md#m0-005)

## M1 - Data and Baselines

- [M1-001 — Create a versioned dataset contract and reproducible split](tickets.md#m1-001)
- [M1-002 — Establish candidate-model baselines](tickets.md#m1-002)

## M1 - Model Selection

- [M1-003 — Compare three model approaches with engineering metrics](tickets.md#m1-003)
- [M1-004 — Analyze failure cases and select a model](tickets.md#m1-004)
- [M1-005 — Publish the ML engineering decision record](tickets.md#m1-005)

## M2 - Tracking Foundation

- [M2-001 — Design the experiment and artifact tracking contract](tickets.md#m2-001)
- [M2-002 — Track training runs and artifacts](tickets.md#m2-002)

## M2 - Model Lineage

- [M2-003 — Register candidate models and document selection](tickets.md#m2-003)
- [M2-004 — Reproduce the selected model from lineage](tickets.md#m2-004)
- [M2-005 — Complete the model lifecycle audit](tickets.md#m2-005)

## M3 - Serving and Packaging

- [M3-001 — Serve the selected model through a versioned FastAPI contract](tickets.md#m3-001)
- [M3-002 — Containerize reproducible inference service](tickets.md#m3-002)

## M3 - Operational Readiness

- [M3-003 — Add CI verification for service and model contract](tickets.md#m3-003)
- [M3-004 — Implement logging, health, monitoring hooks, and rollback procedure](tickets.md#m3-004)
- [M3-005 — Run the production ML readiness demonstration](tickets.md#m3-005)

## M4 - Optimization Baseline

- [M4-001 — Establish the optimization baseline](tickets.md#m4-001)
- [M4-002 — Create and benchmark an FP16 model variant](tickets.md#m4-002)

## M4 - Quantization and Selection

- [M4-003 — Implement and benchmark INT8 quantization](tickets.md#m4-003)
- [M4-004 — Evaluate one additional optimization strategy](tickets.md#m4-004)
- [M4-005 — Select the optimization strategy for Apple deployment](tickets.md#m4-005)

## M5 - Core ML Conversion

- [M5-001 — Convert the selected model to Core ML](tickets.md#m5-001)
- [M5-002 — Validate Core ML prediction parity](tickets.md#m5-002)

## M5 - iOS Integration

- [M5-003 — Integrate Core ML and Vision into an iOS inference flow](tickets.md#m5-003)
- [M5-004 — Measure inference on a physical Apple device](tickets.md#m5-004)
- [M5-005 — Publish the Apple deployment evidence package](tickets.md#m5-005)

## M6 - Failure Reproduction

- [M6-001 — Build a deployment failure-case suite](tickets.md#m6-001)
- [M6-002 — Investigate an unsupported operator or conversion failure](tickets.md#m6-002)

## M6 - Mitigation and Casebook

- [M6-003 — Investigate an accuracy degradation after optimization or conversion](tickets.md#m6-003)
- [M6-004 — Mitigate an observed latency or memory failure](tickets.md#m6-004)
- [M6-005 — Publish the deployment troubleshooting casebook](tickets.md#m6-005)

## M7 - End-to-End Profiling

- [M7-001 — Instrument the full inference pipeline](tickets.md#m7-001)
- [M7-002 — Profile CPU, GPU, and Neural Engine execution paths](tickets.md#m7-002)

## M7 - Pipeline Optimization

- [M7-003 — Optimize preprocessing and postprocessing bottlenecks](tickets.md#m7-003)
- [M7-004 — Evaluate scheduling, loading, and caching strategy](tickets.md#m7-004)
- [M7-005 — Publish the ML systems performance decision](tickets.md#m7-005)

## M8 - Elective Exploration

- [M8-001 — Define a bounded advanced Apple AI investigation](tickets.md#m8-001)
- [M8-002 — Prototype the selected Apple Silicon or PyTorch ecosystem workflow](tickets.md#m8-002)

## M8 - Advanced Optimization

- [M8-003 — Profile the advanced workflow or tooling path](tickets.md#m8-003)
- [M8-004 — Test one advanced optimization only when justified](tickets.md#m8-004)
- [M8-005 — Publish the advanced Apple AI adoption decision](tickets.md#m8-005)

## M1 - Capstone: Real-time Shrimp Detection on iPhone

- [CAP-001 — Define the shrimp dataset and capstone baseline](tickets.md#cap-001)
- [CAP-002 — Train candidate shrimp-detection models](tickets.md#cap-002)
- [CAP-003 — Select the capstone model](tickets.md#cap-003)

## M4 - Capstone: Real-time Shrimp Detection on iPhone

- [CAP-004 — Optimize the capstone model](tickets.md#cap-004)

## M5 - Capstone: Real-time Shrimp Detection on iPhone

- [CAP-005 — Convert the capstone model to Core ML](tickets.md#cap-005)
- [CAP-006 — Integrate capstone inference into an iOS camera flow](tickets.md#cap-006)

## M7 - Capstone: Real-time Shrimp Detection on iPhone

- [CAP-007 — Profile the capstone on a physical iPhone](tickets.md#cap-007)
- [CAP-008 — Benchmark real-time shrimp detection trade-offs](tickets.md#cap-008)
- [CAP-010 — Pass the final production gate](tickets.md#cap-010)

## M3 - Capstone: Real-time Shrimp Detection on iPhone

- [CAP-009 — Document capstone production trade-offs](tickets.md#cap-009)
