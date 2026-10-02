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

The public homepage retains its terminal-inspired identity with a compact shared navbar aligned to the same `max-w-4xl` content width: cloud branding on the left, navigation in the middle, and theme/account controls on the right. The curriculum, community, Research Hub, Research Charter, open-source blog, and Safaricom CTF 2025 pages use this same navbar, with an inline theme toggle instead of a duplicate floating toggle. Blog loading, error, list, and article views retain the navbar; the narrower article reading width and existing footer are unchanged. The charter's contents navigation and section anchors account for the sticky navbar, and a **Back to Research Hub** link above its title returns to `/research`. The Safaricom CTF page retains its back-to-curriculum and writeup navigation. Signed-in users can open their account dropdown to access the learning dashboard, certificate, or sign out; visitors can sign in with GitHub. The landing page has no announcement bar or duplicate floating theme toggle.

The **View Curriculum** link opens `/get-started`, which contains a course overview, a highlighted beginner starting point, numbered core and optional advanced modules, past hackathons, and CTF writeups. Section anchors account for the sticky navbar. Module descriptions and challenge metadata use stronger, readable text in both themes. Advanced modules are explicitly marked as optional for the completion certificate. **Paths available to start** lives on the landing page and includes engineering, the Research Hub, and blogs. The Research Hub links to the existing public `/research` page; pentesting labs remain available at `/pentesting-labs`. The **Community** navbar link opens the dedicated public `/community` page, including member browsing, the join action, and story carousel. Old `/#community` links redirect there. Curriculum-to-path links scroll to their target section without being hidden by the sticky header. Individual modules and protected paths retain their existing sign-in requirements. The latest-blog panel supports pagination and explicit loading, empty, and retryable error states.

Light mode is the default for visitors without a saved theme preference; existing dark-mode choices are respected. The theme is applied before React renders, and the toggle persists the choice in `scx-theme`. Light-theme text colors are adjusted independently of status backgrounds so muted text and accent links remain readable. The community background follows the homepage palette in both themes. The signed-in dashboard structure is unchanged.

Research Hub publication cards use larger, medium-weight body text and metadata of at least 12px. Published badges have explicit light and dark palettes, and upcoming publications remain readable rather than being faded out.

Curriculum challenge and CTF cards share a minimal resource layout with topic tags, access or event details, and explicit navigation actions. The Forgotten Secret Lab remains sign-in protected; Safaricom CTF writeups remain public. The Safaricom card reflects the single published Real IP Heist writeup rather than counting the coming-soon placeholder. Both the Safaricom competition page and Real IP Heist writeup use the shared site navbar and a single inline theme toggle, while retaining their back navigation.

Pricing, terms of service, and changelog pages also use the shared navbar. Forgotten Secret Lab uses the standalone site layout without the dashboard sidebar, but its route still uses `ProtectedRoute` and requires sign-in. Other dashboard and module routes retain their existing authenticated layout.

Apply [the community members migration](supabase/migrations/20260910_community_members.sql) in the Supabase SQL editor before deploying the community section. The public `get_community_members` function returns every registered GitHub member, newest first, with only their public GitHub identifier, display name, and avatar. It does not expose emails, sign-in activity, progress, or the admin dashboard. GitHub avatar URLs are restricted to `avatars.githubusercontent.com`.

The section handles loading, empty results, unavailable profiles, and failed avatar images. Names appear on portrait hover or keyboard focus. Confirm that publishing these GitHub profiles is consistent with your community's privacy notice before enabling the endpoint.

The story carousel currently features the curriculum and community blog, not member testimonials. Replace the `STORIES` entries in [LandingCommunity.jsx](src/pages/landing/LandingCommunity.jsx) with approved success stories when available. Its cybersecurity illustrations are original, locally hosted SVGs in `public/images/`; story backgrounds and inset images do not require external image requests.


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
