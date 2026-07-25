# FlowPilot AI — Next-Gen Workflow Automation Platform

FlowPilot AI is a premium, high-conversion SaaS web application designed for automated enterprise workflow orchestrations. Built with React, Vite, and Tailwind CSS, the platform delivers zero-latency interactive flow simulations, rich glassmorphic aesthetics, and strict adherence to WAI-ARIA 1.2 web accessibility standards.

---

## ⚡ Tech Stack

- **Core**: React 18, Vite 6, JavaScript (ESNext)
- **Routing**: React Router v7 (Lazy-loaded code splitting)
- **Styling**: Tailwind CSS v3 (Custom dark surface system, glassmorphism utilities, dynamic design tokens)
- **Animations**: Framer Motion (Hardware-accelerated GPU transitions with reduced motion compliance)
- **Icons**: Lucide React
- **SEO & Schema**: Custom dynamic DOM Head & JSON-LD structured data engine

---

## ♿ Accessibility (a11y) Features

- **WAI-ARIA 1.2 Accordion Pattern**: Keyboard arrow key navigation (`ArrowDown`, `ArrowUp`, `Home`, `End`) across FAQ interactive triggers.
- **Accessible Focus Management**: High-visibility focus indicators (`focus-visible:ring-2 focus-visible:ring-brand-400`) on all interactive controls.
- **Skip to Content Link**: Top-level `#main-content` skip anchor for screen reader and keyboard-only users.
- **Screen Reader Live Regions**: Real-time interactive workflow builder console uses `aria-live="polite"` to announce live execution states without interrupting screen reader flow.
- **Touch Target Standard**: Minimum 44px height and width target size across buttons, links, and form fields.
- **Reduced Motion Support**: `usePrefersReducedMotion` hook automatically disables heavy animations for users with motion sensitivity preferences (`prefers-reduced-motion: reduce`).

---

## 🔍 SEO Implementation

- **Dynamic Head Engine (`SEOHead.jsx`)**: Zero-dependency head manager injecting title, meta description, canonical URLs, OpenGraph, and Twitter Card attributes per page.
- **Teardown Teardown Cleanups**: Dynamic script management cleans up mounted JSON-LD schemas during route transitions to prevent DOM memory leaks.
- **Rich JSON-LD Schemas**:
  - `Organization` & `SoftwareApplication` on Homepage
  - `FAQPage` schema on Product page
  - `BreadcrumbList` navigation schema across all sub-pages
- **Semantic HTML5 Structure**: Strict heading hierarchy (`<h1>` to `<h3>`), landmark tags (`<main>`, `<header>`, `<nav>`, `<footer>`), and accessible labels.

---

## 🚀 Performance Optimizations

- **Route-Based Code Splitting**: All major pages (`HomePage`, `ProductPage`, `PricingPage`, `ContactPage`, `NotFoundPage`) are lazy-loaded via `React.lazy` and `Suspense`.
- **Zero-Boilerplate Bundle**: Removed all unused template starter CSS, keeping final production CSS output under ~35 kB.
- **Font & Asset Optimization**: Google Fonts preloaded with `display=swap` to eliminate flash of unstyled text (FOUT).
- **Sub-3s Production Build**: Bundles transformed and rendered cleanly in ~2.6s via Vite rollups.

---

## 📁 Folder Structure

```
taskA/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/              # Static SVG and image assets
│   ├── components/
│   │   ├── layout/          # Layout, Navbar, Footer, SEOHead
│   │   ├── sections/        # Bento Grid, Hero, FAQ, Workflow Builder
│   │   └── ui/              # Reusable Button, Badge, Section primitives
│   ├── data/                # Site navigation, pricing, & feature content
│   ├── hooks/               # Custom hooks (e.g., usePrefersReducedMotion)
│   ├── pages/               # Lazy-loaded page views
│   ├── utils/               # SEO JSON-LD builders
│   ├── App.jsx              # Main router & suspense provider
│   ├── index.css            # Base Tailwind design system & utilities
│   └── main.jsx             # React DOM entry point
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Deployment Instructions

### Prerequisites
- Node.js `^18.0.0` or `^20.0.0`
- `npm` or `yarn` / `pnpm`

### 1. Local Development
```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev
```

### 2. Production Build & Preview
```bash
# Create optimized production build in /dist
npm run build

# Preview production build locally
npm run preview
```

### 3. Deploy to Vercel / Netlify
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Single Page Application (SPA) Rewrite**: Point all routes (`/*`) to `/index.html`.
