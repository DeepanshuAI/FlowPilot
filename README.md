# FlowPilot AI — Marketing Website

A production-ready B2B SaaS marketing website for **FlowPilot AI**, an AI workflow automation platform. Built as a technical assessment demonstrating senior-level frontend engineering.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion (minimal) |
| Icons | Lucide React |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Atoms: Button, Badge, Section (reusable)
│   ├── layout/       # Navbar, Footer, Layout, SEOHead
│   └── sections/     # Page section components
├── data/
│   └── content.js    # All page copy — content-agnostic components
├── hooks/
│   └── usePrefersReducedMotion.js
├── pages/            # HomePage, ProductPage, PricingPage, ContactPage
└── utils/
    └── seo.js        # Structured data schemas + page meta configs
public/
├── robots.txt
├── sitemap.xml
└── favicon.svg
```

## Key Architecture Decisions

### 1. Content Separated from Layout
All page copy lives in `src/data/content.js`. Components receive content as props, making them reusable, testable, and easy to update without touching JSX.

### 2. SEO Without Extra Dependencies
`SEOHead.jsx` uses direct DOM manipulation (`document.title`, `document.head.appendChild`) to inject all meta tags, Open Graph, Twitter Cards, and JSON-LD structured data — without `react-helmet` or any additional library.

### 3. Code Splitting
Every page is `React.lazy()`-loaded and wrapped in `<Suspense>`. Vite `manualChunks` separates `react-vendor`, `motion`, and `icons` into distinct chunks, keeping the initial bundle under 50KB (gzipped).

### 4. Accessibility First
- Skip-to-content link as first DOM element
- Focus trap in mobile navigation with Escape-to-close
- All accordions use `aria-expanded`, `aria-controls`, and `aria-labelledby`
- Forms: `aria-required`, `aria-invalid`, `role="alert"` for inline errors
- Honeypot spam prevention (no CAPTCHA UX friction)
- `usePrefersReducedMotion` hook — all Framer Motion animations disabled for users who prefer reduced motion
- WCAG AA contrast ratios throughout

### 5. Structured Data
Three JSON-LD schemas:
- `Organization` — present on all pages
- `SoftwareApplication` — Product page
- `FAQPage` — Home, Pricing, and Contact pages

### 6. Performance Optimizations
- Tailwind CSS purges unused styles at build time
- Google Fonts loaded with `preconnect` + `display=swap`
- Framer Motion animations use `whileInView` with `once: true` (no re-triggering)
- SVG favicon — no PNG bitmap needed
- `loading="lazy"` pattern applied where applicable

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

No environment variables required for the base deployment.

## Lighthouse Targets

| Metric | Target |
|---|---|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
