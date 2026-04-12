# Contributing a Lab

Labs live in `public/labs/` as markdown files. Unlike blog posts, each lab also needs a metadata entry registered in `src/data/openSourceContent.js`.

## Steps

### 1. Create the lab file

Add a `.md` file to `public/labs/your-lab-name.md`. Use kebab-case matching your title.

Suggested structure:

```markdown
# Lab Title

Brief intro explaining what this lab covers.

## Overview

What the learner will do and why it matters.

## Prerequisites

- Tools or knowledge required

## Steps

1. Step one
2. Step two

## Exercises

Hands-on tasks for the learner.

## Further Reading

Links to additional resources.
```

### 2. Register the lab

Add an entry to the `labFiles` array in `src/data/openSourceContent.js`:

```js
{
  filename: "your-lab-name.md",
  title: "Your Lab Title",
  difficulty: "Beginner",        // Beginner | Intermediate | Advanced
  category: "Web Security",      // any descriptive category
  estimatedTime: "60",           // minutes
  tools: ["tool1", "tool2"],
  description: "One sentence describing what the lab covers.",
}
```

### 3. Submit

```bash
git checkout -b lab/your-lab-name
git add public/labs/your-lab-name.md src/data/openSourceContent.js
git commit -m "feat(lab): add your-lab-name"
git push origin lab/your-lab-name
# open a pull request
```

## Guidelines

- All commands and examples must be tested and working
- Use isolated/legal environments — never test on systems you don't own
- No real credentials, no malware, no promotion of illegal activity
- Content should be practical and educational
