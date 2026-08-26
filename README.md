# Agri Experience

Professional website for **Agri Experience** — an agricultural consulting firm transforming seed systems and agricultural value chains across 21 African countries.

**[agri-experience.com](https://agri-experience.com)**

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Internationalization](#internationalization)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About

Agri Experience is a Nairobi-based consulting firm specializing in crop seed sector development throughout sub-Saharan Africa. The website serves as the organization's primary digital presence, showcasing services, impact, and published resources across East, West, Central, and Southern Africa.

### Key Features

- **Interactive Mapbox Map** — Drill-down map of 21 countries with active projects, regional filtering, and project-level detail
- **Bilingual (EN/FR)** — Full internationalization with `next-intl`, auto-translation pipeline, and locale-aware routing
- **Resource Library** — Downloadable PDFs including case studies, toolkits, and scoping reports with in-browser preview
- **SDG Alignment** — Visual mapping of organizational impact to UN Sustainable Development Goals
- **Motion Design** — Scroll-driven animations, page transitions, and interactive UI powered by Framer Motion and GSAP
- **Responsive** — Mobile-first layouts optimized for all viewports

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) · [GSAP](https://gsap.com/) |
| Maps | [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) |
| i18n | [next-intl](https://next-intl.dev/) |
| PDF Rendering | [react-pdf](https://react-pdf.org/) |
| Package Manager | [pnpm](https://pnpm.io/) |

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/<org>/agri-experience.git
cd agri-experience

# Install dependencies
pnpm install

# Set up environment variables
cp .env .env.local
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox GL JS public access token | Yes |

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Project Structure

```
├── app/
│   └── [locale]/                # Locale-scoped routes (en, fr)
│       ├── page.tsx             # Home
│       ├── about/               # Mission, values, company journey
│       ├── our-work/            # Services overview
│       │   ├── capacity-building/
│       │   ├── client-advisory/
│       │   ├── digital-platforms/
│       │   ├── project-implementation/
│       │   ├── stakeholder-convenings/
│       │   └── technical-studies/
│       ├── our-results/         # Key metrics and outcomes
│       ├── our-impact/          # SDG alignment and impact areas
│       ├── our-team/            # Leadership team
│       ├── map/                 # Full-page interactive map
│       ├── resources/           # Downloadable publications
│       ├── insights/            # Articles and blog
│       ├── gallery/             # Photo gallery
│       ├── contact/             # Contact form and offices
│       ├── newsletter/          # Newsletter signup
│       ├── privacy/             # Privacy policy
│       └── terms/               # Terms of service
│
├── components/
│   ├── header.tsx               # Sticky nav with mobile menu
│   ├── footer.tsx               # Site footer
│   ├── interactive-map.tsx      # Map entry point
│   ├── client-logos.tsx         # Partner logo marquee
│   ├── map/                     # Mapbox map components
│   ├── motion/                  # Animated section components
│   ├── liquid-glass/            # Header glass-morphism effect
│   └── ui/                      # shadcn/ui primitives
│
├── lib/                         # Utilities and data
├── i18n/                        # next-intl routing and config
├── messages/                    # Translation files (en.json, fr.json)
├── public/                      # Static assets
│   ├── flags/                   # Country flag images
│   ├── office-plants/           # Gallery photos
│   ├── resources/               # Downloadable PDFs
│   ├── SDG-images/              # SDG background images (en, fr)
│   ├── SDGs/                    # SDG icon SVGs
│   ├── team/                    # Team member photos
│   └── Videos/                  # Hero video
│
└── scripts/
    └── auto-translate.js        # Auto-translation pipeline (pre-commit)
```

## Internationalization

The site supports **English** and **French** with locale-prefixed routing (`/en/...`, `/fr/...`).

- Translation files live in `messages/en.json` and `messages/fr.json`
- A **pre-commit hook** (via [Husky](https://typicode.github.io/husky/)) runs `scripts/auto-translate.js` to keep French translations in sync
- Translation results are cached in `.translation-cache.json` to avoid redundant API calls

To manually trigger translation:

```bash
pnpm translate
```

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#3ab44a` | CTAs, active states |
| Primary Blue | `#2484c6` | Links, accents |
| Dark Green | `#0f3d1e` | Headings, dark sections |
| Cream | `#f5efe0` | Backgrounds |
| Dark Gray | `#1c2b22` | Body text |
| Mint | `#eef5f1` | Subtle backgrounds |
| Gold | `#c8a44a` | Highlights, badges |

### Typography

| Role | Font | Category |
|------|------|----------|
| Headings | Playfair Display | Serif |
| Body | DM Sans | Sans-serif |
| Data / Numbers | Bebas Neue | Display |
| Accent | Space Grotesk | Sans-serif |

Design tokens are defined in [`app/globals.css`](app/globals.css).

## Deployment

The app is configured for deployment on [Vercel](https://vercel.com):

```bash
pnpm build
```

Ensure the `NEXT_PUBLIC_MAPBOX_TOKEN` environment variable is set in your hosting provider's dashboard.

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure `pnpm build` passes with no errors
4. Ensure translations are up to date (`pnpm translate`)
5. Open a pull request

## License

All rights reserved © Agri Experience