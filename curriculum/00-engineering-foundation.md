# M0 - Engineering Foundation

## Objective

Move from a notebook-first workflow to a reproducible software project.

## Why This Milestone Exists

Production ML work depends on reliable engineering practices before model complexity matters.

## Competencies

L1 explain project reproducibility; L2 build a package, CLI, and tests; L3 debug environment and execution failures; L4 measure repeatability; L5 apply an engineering gate.

## Concepts

Python packages, virtual environments, typing, logging, configuration, error handling, CLI design, Git discipline, Linux/CLI, unit and integration testing, documentation.

## Required Projects

Refactor the existing shrimp-detection work into a production-style repository.

## Required Experiments

Repeat training and inference from a clean environment and compare emitted metadata and metrics.

## Required Evidence

Install instructions, configuration, training/evaluation/inference commands, tests, commits, and reproducibility report.

## Expected Outputs

A cloneable, installable ML repository with reproducible training, evaluation, and inference.

## Dependencies

None. This is the entry milestone.

## Definition of Done

Cloneable; installable; training, evaluation, and inference reproducible; automated tests and documentation present.

## Related Issues

- [M0-001 - Establish the production-style repository baseline](../planning/tickets.md#m0-001)
- [M0-002 - Build a configuration-driven training CLI](../planning/tickets.md#m0-002)
- [M0-003 - Implement reproducible evaluation and inference commands](../planning/tickets.md#m0-003)
- [M0-004 - Add automated verification and engineering documentation](../planning/tickets.md#m0-004)
- [M0-005 - Run the engineering reproducibility gate](../planning/tickets.md#m0-005)
