# secureCloudX

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-teal.svg)](https://tailwindcss.com/)

An open source platform for learning cloud security engineering and penetration testing. Free, practical, and community-driven.

## Get started

```bash
git clone https://github.com/0tieno/securecloudX.git
cd securecloudX
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Tech stack

- **React 19 + Vite 6** — frontend
- **Tailwind CSS 4** — styling
- **react-router-dom v7** — routing
- **ReactMarkdown + remark-gfm** — markdown rendering

## Project structure

```
securecloudX/
├── Docs/blogs/          # Blog posts (markdown with frontmatter)
├── public/blog/         # Auto-generated — do not edit manually
├── scripts/
│   ├── blog-pipeline.js # Syncs Docs/blogs/ → public/blog/ at build time
│   └── blog-manager.js  # CLI helper for creating posts
├── src/
│   ├── components/      # Shared UI components
│   ├── data/            # Static data (changelog, pricing, resources, etc.)
│   ├── pages/           # Route-level components
│   ├── routes/          # Route config
│   └── utils/           # Helpers (frontmatter parser, etc.)
├── CONTRIBUTING_BLOGS.md
├── CONTRIBUTING_LABS.md
└── LICENCE.md
```

## Blog system

Blog posts live in `Docs/blogs/` as plain markdown files. The build pipeline syncs them to `public/blog/` and generates `blog-manifest.json` automatically.

To publish a post: add a `.md` file with frontmatter to `Docs/blogs/`. See [CONTRIBUTING_BLOGS.md](CONTRIBUTING_BLOGS.md).

## Contributing

- **Blog posts** → [CONTRIBUTING_BLOGS.md](CONTRIBUTING_BLOGS.md)
- **Labs** → [CONTRIBUTING_LABS.md](CONTRIBUTING_LABS.md)

## Contact

- [Founder's profile](https://linkedin.com/in/ronney-otieno)
- Email: securecloudx.learn@gmail.com
- GitHub: [github.com/0tieno/securecloudX](https://github.com/0tieno/securecloudX)
- Twitter/X: [@securecloudX](https://x.com/securecloudX)


[Creator's Note: This project is a labor of love and a gift to the community. If you find it useful, please consider sharing it with others who might benefit from it. Your support means a lot!]

[Read License](LICENCE.md)

