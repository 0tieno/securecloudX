---
layout: post
title: "Git Tools Every Security Learner Should Know"
date: 2025-07-13
author: s!rr0nn3y
categories:
  - git
  - security
  - tools
associated_lab_title: Forgotten Secret Lab
associated_lab_path: /forgotten-secret-lab
---
Want to think like a hacker? Start by mastering Git history.

## Why This Matters

Git isn't just for saving code — it's a forensic tool.

Secrets. Mistakes. Deleted files.  
They're all still there — if you know how to look.

## Core Git Commands for Secret Discovery

Here are essential Git commands that every security-minded developer or learner should know:

### 🔹 `git log -p`

Shows commit history + the actual diffs (changes made):

```bash
git log -p
```

Use it to spot files that were added/removed — like secrets.

### 🔹 `git show <commit>`

Shows exactly what changed in a specific commit:

```bash
git show HEAD~1
git show 14c1d625f66b5f41a8fbb51cfa9b8561db1b8c89
```

Also works for deleted files:

```bash
git show HEAD~1:.env
```

### 🔹 `git grep`

Searches for patterns across your working directory.

```bash
git grep "SECRET"
```

To search entire Git history, use:

```bash
git grep "SECRET" $(git rev-list --all)
```

### 🔹 `git rev-list --all`

Lists every commit in your repo.

Useful with other commands like:

```bash
git show $(git rev-list --all)
```

Or with grep as shown above.

### 🔹 `git cat-file -p <blob-sha>`

Used to inspect raw Git objects (like old .env files):

```bash
git cat-file -p 3323962
```

Get the blob SHA from a command like:

```bash
git log --all --pretty=format: --name-only | sort -u
```

### 🔹 `git log --diff-filter=D --summary`

Finds deleted files:

```bash
git log --diff-filter=D --summary
```

Great for catching someone who deleted `.env` too late 😅

## Bonus Tools to Automate It

| Tool | Use Case |
|------|----------|
| gitleaks | Scans commits for secrets |
| truffleHog | Finds secrets by entropy analysis |
| git-secrets | Prevents committing common secret patterns |
| BFG | Deletes secrets from history |
| filter-repo | Rewrites Git history precisely |

## Practice in SecureCloudX

Use these tools in the [Forgotten Secret Lab](/forgotten-secret-lab) to find a real leaked API key:

1. Search Git history
2. Extract .env from an old commit  
3. Access a real deployed API to complete the challenge

## Final Thought

You don't need to hack the cloud to learn security.

Start by hacking Git history — because Git never forgets.
