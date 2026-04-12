---
layout: post
title: "Oops! I Committed Secrets to Git — Now What?"
date: 2025-07-13
author: s!rr0nn3y
categories:
  - git
  - security
  - incident-response
associated_lab_title: Forgotten Secret Lab
associated_lab_path: /forgotten-secret-lab
---
We all make mistakes. Here's how to respond like a security pro when secrets get committed.

## You Made the Commit. Now What?

You've committed a file like this:

```env
API_KEY=SECRET-TOKEN-KEY
```

You panic. You delete the file.

But Git still remembers it. Forever. 

## Step-by-Step: Fix It Fast

### 1. Revoke the Key Immediately

Go to the service (e.g. Azure, Stripe, Firebase...) and:

- Disable or delete the key
- Create a new one  
- Update it securely in your app (via env vars, secret manager, etc.)

### 2. Clean Your Git History

Removing it in a new commit is not enough.

You need to rewrite history using one of these tools:

### Option 1: git filter-repo (Recommended)

```bash
git filter-repo --path .env --invert-paths
```

### Option 2: BFG Repo Cleaner

```bash
bfg --delete-files .env
```

⚠️ Warning: This rewrites history. All collaborators must re-clone after!

### 3. Force Push (If Necessary)

```bash
git push --force
```

Be careful! This can cause issues if others are working on the repo.

### 4. Scan Your Repo

Use a secret scanner to double-check your fix:

```bash
gitleaks detect --source .
```

Or:

```bash
trufflehog git file://.
```

### Bonus: Add .env to .gitignore

```bash
echo ".env" >> .gitignore
git add .gitignore
git commit -m "ignore env files"
```

## Proactive Measures for the Future

- Add pre-commit hooks with `git-secrets`
- Scan your repos with Gitleaks in CI/CD
- Use secret managers (Azure Key Vault, AWS Secrets Manager, etc.)

## Try it yourself

I created a real repo where a `.env` file was committed and then deleted:

Try the [Forgotten Secret Lab](/forgotten-secret-lab)

## Final Thought

Everyone leaks something eventually.

What matters is how fast you detect, how smart you respond, and how well you prevent it next time. I understand some commands here are not explained explicitly what they do.
