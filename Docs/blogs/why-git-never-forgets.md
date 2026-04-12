---
layout: post
title: "Why Git Never Forgets"
date: 2025-07-13
author: s!rr0nn3y
categories:
  - git
  - security
  - secrets
associated_lab_title: Forgotten Secret Lab
associated_lab_path: /forgotten-secret-lab
---
Learn how secrets live on in your code history — even after you hit delete.

## Hook
You added a secret API key to a .env file, committed it, and later deleted it.

Problem solved? Not even close. Because Git never forgets.

## What's Really Happening?

Git is a version control system, not a file system. That means when you commit something, Git saves a snapshot — permanently — in its history. Even if you delete the file in the next commit, the earlier snapshot still contains it.

So when someone runs:

```bash
git log -p
```

or:

```bash
git show HEAD~1:.env
```

—they can see what was there before.

## Real Attack Scenario

1. You commit a `.env` file with a secret:

```ini
API_KEY=SECRET-TOKEN-KEY
```

2. You realize your mistake and delete the file.

But Git has already stored it in:
- The blob  (raw file content)
- The tree  (directory structure)  
- The commit  (full snapshot)

Anyone who clones the repo and runs:

```bash
git grep "SECRET" $(git rev-list --all)
```

can find your exposed credentials.

## Why This Matters

Secrets leaked in Git can lead to:
- Compromised APIs
- Unauthorized access to cloud resources
- Massive security incidents Even private repos are not safe  if someone has access to your history.

## What You Can Do Instead

1. Add sensitive files  (like `.env`) to `.gitignore` before  committing
2. Use `git-secrets`, `gitleaks`, or `truffleHog`  to scan commits
3. If you leak a secret 
   - Revoke the key
   - Rotate it
   - Rewrite Git history with `git filter-repo` or BFG

## Try It Yourself

Clone the [forgotten-secret-lab](https://github.com/0tieno/forgotten-secret-lab), and try these commands to uncover a real secret from history:

```bash
git show HEAD~1:.env
```

## 🔚 Final Thought

Git was built to remember everything — but that makes it a goldmine for attackers.

Use that knowledge to defend smarter.
