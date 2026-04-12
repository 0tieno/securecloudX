# Contributing a Blog Post

Drop a `.md` file into `Docs/blogs/` — the build pipeline picks it up automatically.

## Frontmatter

Every post needs a frontmatter block at the top:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-08-31
author: your-handle
categories:
  - azure
  - security
---

Your content starts here.
```

| Field | Required | Notes |
|---|---|---|
| `layout` | yes | always `post` |
| `title` | yes | displayed as the post heading |
| `date` | yes | `YYYY-MM-DD` format |
| `author` | no | defaults to `s!rr0nn3y` |
| `categories` | no | used for filtering on the blog page |

## Optional: Link to a lab

```markdown
associated_lab_title: Forgotten Secret Lab
associated_lab_path: /forgotten-secret-lab
# or for a module number:
associated_lab_title: Data Security
associated_lab_day: 3
```

## File naming

Use lowercase kebab-case matching your title:

```
my-post-title.md  ✓
My Post Title.md  ✗
```

## Submit

```bash
git checkout -b blog/your-topic
# add your file to Docs/blogs/
git add Docs/blogs/your-post.md
git commit -m "feat(blog): add post on your topic"
git push origin blog/your-topic
# open a pull request
```

That's it. No config files to edit, no arrays to update.


3. **Final Approval**
   - Content merged to main branch
   - Blog post goes live
   - Author attribution added

## 🏆 Recognition

### Contributor Benefits

- **Author bio** on published posts
- **GitHub profile** linked in contributor section
- **Social media shoutouts** for quality content
- **Priority review** for future submissions
- **Community recognition** in our Hall of Fame

---

Happy blogging!
