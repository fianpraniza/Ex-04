# M3 - Production ML / MLOps Foundation

## Objective

Move an ML model from local development into a reproducible service lifecycle.

## Why This Milestone Exists

Production readiness requires deployment, observability, tests, versioning, and rollback behavior.

## Competencies

L1 explain service lifecycle; L2 serve and containerize a model; L3 debug CI and deployment failures; L4 assess operational trade-offs; L5 demonstrate a production-oriented release path.

## Concepts

REST, FastAPI, Docker, CI/CD, deployment, logging, monitoring, health checks, model versioning, rollback.

## Required Projects

Package the selected shrimp-detection model as a deployable inference service.

## Required Experiments

Compare local and containerized inference behavior and operational overhead.

## Required Evidence

API contract, container build, CI run, logs, health endpoint, rollback exercise, deployment notes.

## Expected Outputs

A reproducible deployable model service.

## Dependencies

M2 model lineage and selected model artifact.

## Definition of Done

Service is tested, containerized, observable, versioned, and has a documented deployment and rollback path.

## Related Issues

- [M3-001 — Serve the selected model through a versioned FastAPI contract](../planning/tickets.md#m3-001)
- [M3-002 — Containerize reproducible inference service](../planning/tickets.md#m3-002)
- [M3-003 — Add CI verification for service and model contract](../planning/tickets.md#m3-003)
- [M3-004 — Implement logging, health, monitoring hooks, and rollback procedure](../planning/tickets.md#m3-004)
- [M3-005 — Run the production ML readiness demonstration](../planning/tickets.md#m3-005)
- [CAP-009 — Document capstone production trade-offs](../planning/tickets.md#cap-009)
