# Capstone - Real-time Shrimp Detection on iPhone

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

- [CAP-001 — Define the shrimp dataset and capstone baseline](../planning/tickets.md#cap-001) (M1)
- [CAP-002 — Train candidate shrimp-detection models](../planning/tickets.md#cap-002) (M1)
- [CAP-003 — Select the capstone model](../planning/tickets.md#cap-003) (M1)
- [CAP-004 — Optimize the capstone model](../planning/tickets.md#cap-004) (M4)
- [CAP-005 — Convert the capstone model to Core ML](../planning/tickets.md#cap-005) (M5)
- [CAP-006 — Integrate capstone inference into an iOS camera flow](../planning/tickets.md#cap-006) (M5)
- [CAP-007 — Profile the capstone on a physical iPhone](../planning/tickets.md#cap-007) (M7)
- [CAP-008 — Benchmark real-time shrimp detection trade-offs](../planning/tickets.md#cap-008) (M7)
- [CAP-009 — Document capstone production trade-offs](../planning/tickets.md#cap-009) (M3)
- [CAP-010 — Pass the final production gate](../planning/tickets.md#cap-010) (M7)
