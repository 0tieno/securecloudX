# secureCloudX

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-teal.svg)](https://tailwindcss.com/)

An open source platform for learning Azure cloud security engineering. 9 structured modules — from IAM and network security to DevSecOps and Kubernetes — with hands-on labs, progress tracking, and curated resources. Free, practical, and community-driven.

**Live site:** [securecloudx.xyz](https://securecloudx.xyz)

## Get started

```bash
git clone https://github.com/0tieno/securecloudX.git
cd securecloudX
cp .env.example .env   # fill in your Supabase keys
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Tech stack

- **React 19 + Vite 6** — frontend
- **Tailwind CSS 4** — styling
- **Supabase** — auth (GitHub OAuth), progress tracking, certificates
- **react-router-dom v7** — routing
- **ReactMarkdown + remark-gfm** — markdown rendering

## Modules

Modules 1–7 form the **Core Path** — complete all seven to earn your certificate. Modules 8–9 are **Advanced Topics** (optional, no cert gate).

| # | Module | Topics | Path |
|---|--------|--------|------|
| 1 | Identity & Access Management | Entra ID, RBAC, Conditional Access, PIM | Core |
| 2 | Network Security | NSGs, Azure Firewall, Private Link, DDoS Protection | Core |
| 3 | Data Protection | Encryption, Key Vault, storage security, DLP | Core |
| 4 | Threat Detection | Microsoft Sentinel, Defender for Cloud, KQL | Core |
| 5 | Security Monitoring | Log Analytics, workbooks, alerting pipelines | Core |
| 6 | Incident Response | NIST framework, playbooks, containment, forensics | Core |
| 7 | Capstone Project | End-to-end secure architecture deployment | Core |
| 8 | DevSecOps Fundamentals | CI/CD security, SAST, SCA, secret scanning, IaC scanning | Advanced |
| 9 | Kubernetes & AKS Security | K8s primer, AKS security planes, RBAC, Network Policies, Pod Security Admission, Falco, image supply chain | Advanced |

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
│   ├── contexts/        # Auth context (Supabase)
│   ├── data/            # Static data (changelog, pricing, resources, etc.)
│   ├── hooks/           # useProgress, useStepProgress, etc.
│   ├── lib/             # Supabase client
│   ├── pages/           # Route-level components + module pages
│   ├── routes/          # Route config
│   └── utils/           # Helpers (frontmatter parser, etc.)
├── CONTRIBUTING_BLOGS.md
├── CONTRIBUTING_LABS.md
├── LICENCE.md
└── SECURITY.md
```

## Blog system

Blog posts live in `Docs/blogs/` as plain markdown files. The build pipeline syncs them to `public/blog/` and generates `blog-manifest.json` automatically.

To publish a post: add a `.md` file with frontmatter to `Docs/blogs/`. See [CONTRIBUTING_BLOGS.md](CONTRIBUTING_BLOGS.md).

## Contributing

- **Blog posts** → [CONTRIBUTING_BLOGS.md](CONTRIBUTING_BLOGS.md)
- **Labs** → [CONTRIBUTING_LABS.md](CONTRIBUTING_LABS.md)

## Security

Found a vulnerability? Please report it responsibly — see [SECURITY.md](SECURITY.md).

## Contact

- [Founder's profile](https://linkedin.com/in/ronney-otieno)
- Email: securecloudx.learn@gmail.com
- GitHub: [github.com/0tieno/securecloudX](https://github.com/0tieno/securecloudX)
- Twitter/X: [@securecloudX](https://x.com/securecloudX)

## License

[MIT](LICENCE.md) © 2025-present Ronney Otieno

