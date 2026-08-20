# GitHub Project Configuration

## Project

Name: **Production ML Engineering - Learning System**

## Fields

- **Learning Status** (single select): BACKLOG, READY, IN PROGRESS, BLOCKED, REVIEW, DONE
- **Epic** (single select): Repository Foundation, Quality and Delivery, Data and Baselines, Model Selection, Tracking Foundation, Model Lineage, Serving and Packaging, Operational Readiness, Optimization Baseline, Quantization and Selection, Core ML Conversion, iOS Integration, Failure Reproduction, Mitigation and Casebook, End-to-End Profiling, Pipeline Optimization, Elective Exploration, Advanced Optimization, Capstone: Real-time Shrimp Detection on iPhone, Capstone: Real-time Shrimp Detection on iPhone, Capstone: Real-time Shrimp Detection on iPhone, Capstone: Real-time Shrimp Detection on iPhone, Capstone: Real-time Shrimp Detection on iPhone
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
- Tickets are linked to exactly one milestone, an Epic, priority, type, and `evidence-required`.

## API Limitation

GitHub Project view creation and editing are not exposed by the public GitHub CLI or GraphQL API. The bootstrap creates the project, fields, and items; configure the five views once through the Project UI using this exact table.
