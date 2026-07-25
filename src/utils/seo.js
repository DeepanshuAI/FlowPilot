// ─── Structured Data Schemas ──────────────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FlowPilot AI',
  url: 'https://flowpilot.ai',
  logo: 'https://flowpilot.ai/favicon.svg',
  description:
    'AI-powered workflow automation platform for agencies and growing businesses.',
  foundingDate: '2023',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-888-456-7890',
    contactType: 'customer support',
    email: 'hello@flowpilot.ai',
  },
  sameAs: [
    'https://twitter.com/flowpilotai',
    'https://linkedin.com/company/flowpilotai',
    'https://github.com/flowpilotai',
  ],
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FlowPilot AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '49',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '49',
      priceCurrency: 'USD',
      unitText: 'MONTH',
    },
  },
  description:
    'AI workflow automation platform for agencies and growing businesses. Automate client management, CRM updates, reporting, and internal workflows.',
  url: 'https://flowpilot.ai',
  screenshot: 'https://flowpilot.ai/og-image.png',
  featureList: [
    'AI Agent Builder',
    'Workflow Automation',
    'CRM Integration',
    'Automated Reporting',
    'Client Management',
  ],
};

export function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Page meta configurations ─────────────────────────────────────────────────

export const pageMeta = {
  home: {
    title: 'FlowPilot AI — Automate Your Agency Workflows',
    description:
      'FlowPilot AI is the AI workflow automation platform for agencies and businesses. Automate client management, CRM updates, reporting, and internal ops.',
    canonical: 'https://flowpilot.ai/',
    ogType: 'website',
  },
  product: {
    title: 'Product — FlowPilot AI Workflow Automation Platform',
    description:
      'Explore FlowPilot AI\'s AI Agent Builder, smart workflow engine, 100+ integrations, and enterprise security. Built for agencies that scale.',
    canonical: 'https://flowpilot.ai/product',
    ogType: 'website',
  },
  pricing: {
    title: 'Pricing — FlowPilot AI Plans Starting at $49/mo',
    description:
      'Simple, transparent pricing for agencies of every size. Start free for 14 days. No credit card required.',
    canonical: 'https://flowpilot.ai/pricing',
    ogType: 'website',
  },
  contact: {
    title: 'Contact FlowPilot AI — Book a Demo or Get in Touch',
    description:
      'Talk to our team, book a product demo, or get help with your account. We\'re here for you.',
    canonical: 'https://flowpilot.ai/contact',
    ogType: 'website',
  },
};

