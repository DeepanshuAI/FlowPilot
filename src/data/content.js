// ─── Centralized content data ────────────────────────────────────────────────
// Keeping content separate from layout ensures components stay reusable and
// testable. All page copy lives here; components receive it as props.

export const company = {
  name: 'FlowPilot AI',
  tagline: 'Automate Everything. Grow Faster.',
  description:
    'The AI-powered workflow automation platform built for agencies and growing businesses.',
  url: 'https://flowpilot.ai',
  email: 'hello@flowpilot.ai',
  phone: '+1 (888) 456-7890',
  address: '340 Pine Street, Suite 800, San Francisco, CA 94104',
  social: {
    twitter: 'https://twitter.com/flowpilotai',
    linkedin: 'https://linkedin.com/company/flowpilotai',
    github: 'https://github.com/flowpilotai',
  },
};

export const navigation = [
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const trustedCompanies = [
  'Acme Agency',
  'NovaSpark',
  'PulseMedia',
  'GridFlow',
  'Meridian Labs',
  'Zenith Growth',
];

export const benefits = [
  {
    icon: 'Zap',
    title: '10× Faster Operations',
    description:
      'Replace manual repetitive tasks with intelligent AI pipelines that run 24/7 without human intervention.',
  },
  {
    icon: 'TrendingUp',
    title: 'Revenue You Can Measure',
    description:
      'Teams using FlowPilot AI report 40% more capacity and a 3× improvement in client delivery speed.',
  },
  {
    icon: 'Shield',
    title: 'Enterprise-Grade Security',
    description:
      'SOC 2 Type II certified, end-to-end encrypted, with full audit logs and role-based access control.',
  },
  {
    icon: 'Users',
    title: 'Built for Teams',
    description:
      'Real-time collaboration, shared workflow templates, and granular permission management.',
  },
];

export const features = [
  {
    icon: 'Bot',
    label: 'AI Agent Builder',
    title: 'Build Autonomous AI Agents',
    description:
      'Drag-and-drop agent creation with natural language instructions. No code required. Connect to any tool in your stack.',
    badge: 'Core',
  },
  {
    icon: 'GitBranch',
    label: 'Smart Workflows',
    title: 'Logic-Based Workflow Automation',
    description:
      'If-this-then-that logic with conditional branches, loops, delays, and human-in-the-loop approvals.',
    badge: 'Core',
  },
  {
    icon: 'BarChart2',
    label: 'Auto Reporting',
    title: 'Automated Client Reporting',
    description:
      'Pull data from GA4, Meta Ads, HubSpot, and 100+ sources. Generate white-label PDF reports on a schedule.',
    badge: 'Popular',
  },
  {
    icon: 'Database',
    label: 'CRM Sync',
    title: 'Real-Time CRM Automation',
    description:
      'Keep Salesforce, HubSpot, or Pipedrive perfectly in sync. Auto-update leads, contacts, and deal stages.',
    badge: '',
  },
  {
    icon: 'Mail',
    label: 'Client Management',
    title: 'Automated Client Communication',
    description:
      'Trigger personalized emails, Slack messages, or Notion updates based on project milestones or events.',
    badge: '',
  },
  {
    icon: 'Cpu',
    label: 'AI Extraction',
    title: 'Document & Data Extraction',
    description:
      'Extract structured data from PDFs, emails, and forms using AI. Route it directly to your tools.',
    badge: 'New',
  },
];

export const workflowSteps = [
  { id: 1, label: 'Trigger', icon: 'Play', description: 'Webhook, schedule, or app event' },
  { id: 2, label: 'AI Process', icon: 'Cpu', description: 'Extract, classify, summarize' },
  { id: 3, label: 'Route', icon: 'GitBranch', description: 'Conditional logic & branching' },
  { id: 4, label: 'Act', icon: 'Zap', description: 'Update CRM, send report, notify team' },
];

export const testimonials = [
  {
    quote:
      'FlowPilot AI cut our client reporting time from 8 hours per week to 20 minutes. It is the single best investment our agency has made.',
    author: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'NovaSpark Agency',
    avatar: 'SC',
  },
  {
    quote:
      'We automated our entire onboarding pipeline — contract signing to CRM update to welcome email — in one afternoon. Absolutely transformative.',
    author: 'Marcus Reid',
    role: 'Head of Operations',
    company: 'GridFlow Inc.',
    avatar: 'MR',
  },
  {
    quote:
      'The AI agent builder is genuinely unlike anything else in the market. We built and deployed a lead qualification agent in under an hour.',
    author: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Meridian Labs',
    avatar: 'PN',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 },
    description: 'Perfect for freelancers and small teams getting started.',
    highlight: false,
    badge: '',
    features: [
      '5 active workflows',
      '2,500 automation runs/month',
      '3 integrations',
      'Email support',
      'Basic analytics',
      'Community access',
    ],
    notIncluded: [
      'AI Agent Builder',
      'White-label reports',
      'API access',
      'SSO & SAML',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    price: { monthly: 149, annual: 119 },
    description: 'For growing agencies managing multiple clients.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Unlimited workflows',
      '25,000 automation runs/month',
      '20 integrations',
      'Priority email & chat support',
      'Advanced analytics dashboard',
      'AI Agent Builder',
      'White-label PDF reports',
      'API access (10k calls/mo)',
      'Team collaboration (5 seats)',
    ],
    notIncluded: [
      'Dedicated CSM',
      'SSO & SAML',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'Custom solutions for large teams with complex needs.',
    highlight: false,
    badge: '',
    features: [
      'Unlimited workflows',
      'Unlimited automation runs',
      'Unlimited integrations',
      'Dedicated Customer Success Manager',
      'SLA-backed uptime (99.99%)',
      'SOC 2 / HIPAA reports',
      'SSO & SAML',
      'Custom API rate limits',
      'Unlimited seats',
      'On-premise deployment option',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
  },
];

export const comparisonFeatures = [
  { feature: 'Active workflows', starter: '5', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Automation runs/mo', starter: '2,500', growth: '25,000', enterprise: 'Unlimited' },
  { feature: 'Integrations', starter: '3', growth: '20', enterprise: 'Unlimited' },
  { feature: 'AI Agent Builder', starter: false, growth: true, enterprise: true },
  { feature: 'White-label reports', starter: false, growth: true, enterprise: true },
  { feature: 'API access', starter: false, growth: true, enterprise: true },
  { feature: 'Team seats', starter: '1', growth: '5', enterprise: 'Unlimited' },
  { feature: 'Analytics', starter: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
  { feature: 'Support', starter: 'Email', growth: 'Priority chat', enterprise: 'Dedicated CSM' },
  { feature: 'SSO & SAML', starter: false, growth: false, enterprise: true },
  { feature: 'SLA uptime', starter: '99.9%', growth: '99.9%', enterprise: '99.99%' },
  { feature: 'SOC 2 reports', starter: false, growth: false, enterprise: true },
];

export const integrations = [
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Slack', category: 'Comms' },
  { name: 'Notion', category: 'Productivity' },
  { name: 'Google Analytics', category: 'Analytics' },
  { name: 'Meta Ads', category: 'Ads' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Airtable', category: 'Database' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Jira', category: 'Dev' },
  { name: 'Pipedrive', category: 'CRM' },
  { name: 'Intercom', category: 'Support' },
];

export const securityFeatures = [
  { icon: 'Lock', title: 'End-to-End Encryption', description: 'AES-256 encryption at rest and TLS 1.3 in transit for all your data.' },
  { icon: 'FileCheck', title: 'SOC 2 Type II', description: 'Audited annually by an independent third party. Reports available on request.' },
  { icon: 'UserCheck', title: 'Role-Based Access', description: 'Fine-grained permissions with owner, admin, member, and viewer roles.' },
  { icon: 'Activity', title: 'Full Audit Logs', description: 'Every action is logged with user, timestamp, and IP for compliance.' },
];

export const homeFaqs = [
  {
    question: 'What types of workflows can I automate with FlowPilot AI?',
    answer:
      'FlowPilot AI can automate virtually any repetitive business process: client onboarding, CRM updates, report generation, lead qualification, invoice processing, internal notifications, data syncs, and more. If it involves moving data or sending a message, it can be automated.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No coding is required. Our visual workflow builder and AI Agent Builder use drag-and-drop interfaces and natural language. For advanced users, we offer a full REST API and webhook support.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'Most teams launch their first automated workflow within the first hour. We offer guided onboarding, a template library with 80+ pre-built workflows, and live chat support.',
  },
  {
    question: 'Can FlowPilot AI integrate with my existing tools?',
    answer:
      'Yes. We offer native integrations with 100+ tools including HubSpot, Salesforce, Slack, Notion, Google Analytics, Meta Ads, Stripe, and more. Custom integrations are available via our REST API.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. FlowPilot AI is SOC 2 Type II certified, uses AES-256 encryption at rest, TLS 1.3 in transit, and provides full audit logs. We never train AI models on your data.',
  },
];

export const pricingFaqs = [
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. All plans include a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    question: 'What counts as an automation run?',
    answer:
      'Each time a workflow executes from trigger to completion counts as one run. A workflow with 10 steps still counts as one run.',
  },
  {
    question: 'Do you offer discounts for nonprofits or startups?',
    answer:
      'Yes. We offer a 30% discount for registered nonprofits and a startup program for companies under 2 years old with < $1M ARR. Contact us to apply.',
  },
];

export const contactFaqs = [
  {
    question: 'How long does the demo take?',
    answer:
      'Our product demos are 30 minutes. We tailor each demo to your specific use case and team size.',
  },
  {
    question: 'What should I prepare for the demo?',
    answer:
      'Just come with your pain points! We will do the rest. Optionally, think about the top 3 workflows you want to automate.',
  },
  {
    question: 'Do you offer custom implementation support?',
    answer:
      'Yes. Enterprise customers get a dedicated Customer Success Manager who can assist with implementation, workflow design, and ongoing optimization.',
  },
];
