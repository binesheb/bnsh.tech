# Updating bnsh.tech

This repository is the source of truth for the BNSH website.

## Manual update

Use a clean checkout and review the incoming changes before updating:

```bash
git fetch origin
git status --short
git log --oneline HEAD..origin/main
git pull --ff-only origin main
npm install
npm run build
```

If `git status --short` reports local changes, resolve or commit them before updating. `--ff-only` prevents an unattended merge commit or history rewrite.

## Rollback

Record the current revision before updating:

```bash
git rev-parse HEAD
```

If the new revision fails validation, return to the known-good revision:

```bash
git checkout <known-good-commit>
npm install
npm run build
```

For production, deploy only revisions that have passed the project's normal build validation.

## Automatic updates

This repository is a website, not an installed application. It intentionally has no self-update mechanism. Deployment automation should publish a validated commit; the running site must not fetch and replace its own source code at runtime.
