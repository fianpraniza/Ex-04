# GitHub Bootstrap Status

## Current status

Remote creation is pending a valid GitHub CLI authentication session. The local GitHub bootstrap is ready to create the remote repository and all API-supported objects in one command.

## SAFE IMPLEMENTATION DECISIONS

- Repository name defaults to the current directory name (`Ex-04`).
- Repository visibility defaults to private; pass `--public` to change it.
- Epic traceability uses a GitHub Project single-select field and every issue body, avoiding an excessive epic-label taxonomy.
- M0-001 is READY; all other tickets are BACKLOG.

## OPEN DECISION

No curriculum-affecting decisions are deferred. Public visibility remains configurable because it was not specified.

## Required authentication repair

Run `gh auth login -h github.com -s repo,project`, then run `node scripts/bootstrap-github.mjs`. This is the only manual action required; the script creates all available GitHub objects.

## GitHub technical limitation

GitHub's public CLI and GraphQL API do not provide mutations to create or configure Project views. After bootstrap, create the five views exactly as specified in [project configuration](../projects/github-project-config.md).
