# Production ML Engineering Learning System

This repository is an evidence-driven execution system for becoming a **Production ML Engineer specializing in On-Device ML / Apple ML**. It turns learning into observable engineering work: curriculum -> milestone -> epic -> ticket -> experiment -> benchmark -> evidence -> reflection.

## Career Objective

Build ML systems from dataset and model development through optimization, Core ML conversion, iOS integration, physical-device profiling, and production-oriented trade-offs.

## Curriculum Map

- [M0 - Engineering Foundation](curriculum/00-engineering-foundation.md)
- [M1 - ML Engineering](curriculum/01-ml-engineering.md)
- [M2 - Experiment Tracking & Model Lifecycle](curriculum/02-model-lifecycle.md)
- [M3 - Production ML / MLOps Foundation](curriculum/03-production-ml.md)
- [M4 - Model Optimization](curriculum/04-model-optimization.md)
- [M5 - On-Device ML / Apple](curriculum/05-on-device-apple-ml.md)
- [M6 - Hard Problems](curriculum/06-hard-problems.md)
- [M7 - ML Systems](curriculum/07-ml-systems.md)
- [M8 - Advanced Apple AI](curriculum/08-advanced-apple-ai.md)
- [Capstone - Real-time Shrimp Detection on iPhone](projects/capstone.md)

## GitHub Project Workflow

The **Production ML Engineering - Learning System** Project uses these states: **BACKLOG -> READY -> IN PROGRESS -> BLOCKED -> REVIEW -> DONE**. The remote bootstrap creates the project, an Epic field, a Learning Status field, and adds every ticket. The intended views are All Work, Current / Active Work, Backlog, By Milestone, and Evidence / Completed Work. GitHub currently does not expose Project view creation through its public CLI/API, so the bootstrap records the required views in [project configuration](projects/github-project-config.md) for the one UI-only step after authentication.

## Executing Tickets

Open the current ticket, meet every acceptance criterion, create the required experiment/benchmark/evidence artifacts, link them in the issue, add a reflection when applicable, then move it through REVIEW to DONE. Reading alone never completes a ticket.

## Recording Work

- Use [experiment template](templates/experiment.md) for hypotheses and decisions.
- Use [benchmark template](templates/benchmark.md) for measurements; enter `N/A` with a reason rather than invent values.
- Use [evidence guide](evidence/README.md) to prove completion with code, commits, reports, models, captures, or demos.
- Use [reflection template](templates/reflection.md) to capture changed understanding and next capability.
- Use the reusable [production gate](projects/production-gate.md) for major projects.

## Definition of Done

A ticket is DONE only when its measurable acceptance criteria pass, its expected evidence is linked, relevant experiment/benchmark records exist, limitations are stated, and reflection is complete or explicitly N/A with rationale. Milestone-specific Definitions of Done are in each curriculum document.

## Topic Switching and Curiosity

The current ticket remains the focus. Capture unrelated ideas using the [curiosity backlog](projects/curiosity-backlog.md) as `IDEA-001`, `IDEA-002`, and so on. Ideas do not interrupt a milestone unless they become relevant during milestone review.

## Progression

Proceed in order: **M0 -> M1 -> M2 -> M3 -> M4 -> M5 -> M6 -> M7 -> M8**, then complete the cross-milestone capstone. The [four-month academy plan](projects/four-month-academy.md) provides the intended pacing.

## Current Starting Ticket

**Start with: [M0-001 — Establish the production-style repository baseline](planning/tickets.md#m0-001).**

The current state is maintained in [agent/current-context.md](agent/current-context.md).
