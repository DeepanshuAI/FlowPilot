# FlowPilot AI Interface Concept

FlowPilot is a frontend concept for a workflow automation product. It contains marketing pages and an interactive, client-side workflow preview built with React, Vite, Tailwind CSS, and Framer Motion.

## Implemented in this repository

- Home, product, pricing, contact, and not-found pages using React Router.
- A workflow preview with three selectable presets and timed UI steps.
- FAQ controls, navigation, and responsive page sections.
- Page metadata and structured data helpers.
- A reduced-motion preference hook and visible focus styles on several controls.

## Demo content and limitations

The workflow preview advances through local preset data in the browser. It does not connect to AI models, CRMs, payment systems, email, Slack, or other external services. Step durations and time-saved figures shown in the preview are illustrative interface content, not measured results. Product copy, customer names/logos, testimonials, pricing, and business claims are placeholder concept content and do not describe real customers or a production service.

There is no backend, real account or payment flow, automated test script, or formal accessibility audit in this repository. Accessibility and performance claims should not be inferred from the presence of UI patterns alone.

## Stack and structure

- React and React DOM
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- `src/pages/`: routed page views
- `src/components/sections/`: workflow preview and page sections
- `src/data/content.js`: page and demo content
- `src/utils/seo.js`: metadata and schema helpers

## Run locally

Prerequisites: Node.js supported by the installed Vite version and npm.

```bash
npm install
npm run dev
```

Vite prints the development URL in the terminal. No environment variables are required by the current client app.

## Build and lint

```bash
npm run build
npm run lint
```

There is no test script in `package.json`.

## Maintainer

Deepanshu Yadav · [GitHub](https://github.com/DeepanshuAI) · [Portfolio](https://portfo1io-ashen.vercel.app/)
