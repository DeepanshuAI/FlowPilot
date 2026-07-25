import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Shield, Zap, Globe } from 'lucide-react';
import SEOHead from '@/components/layout/SEOHead';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FeaturesSection from '@/components/sections/FeaturesSection';
import IntegrationsGrid from '@/components/sections/IntegrationsGrid';
import SecuritySection from '@/components/sections/SecuritySection';
import CTASection from '@/components/sections/CTASection';
import { pageMeta, organizationSchema, softwareApplicationSchema } from '@/utils/seo';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const apiEndpoints = [
  { method: 'POST', path: '/v1/workflows/trigger', desc: 'Trigger a workflow programmatically' },
  { method: 'GET',  path: '/v1/workflows',        desc: 'List all workflows in your account' },
  { method: 'GET',  path: '/v1/runs/{id}',        desc: 'Fetch details of a specific run' },
  { method: 'POST', path: '/v1/agents/run',       desc: 'Run an AI agent with a prompt' },
];

const methodColors = {
  GET: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  POST: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
};

export default function ProductPage() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      <SEOHead
        title={pageMeta.product.title}
        description={pageMeta.product.description}
        canonical={pageMeta.product.canonical}
        ogType={pageMeta.product.ogType}
        schemas={[organizationSchema, softwareApplicationSchema]}
      />

      {/* Product Hero */}
      <section
        aria-labelledby="product-hero-heading"
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="brand" className="mb-6">Platform Overview</Badge>
            <h1 id="product-hero-heading" className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              The complete AI automation platform
            </h1>
            <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto">
              From simple task automation to complex multi-step AI pipelines —
              FlowPilot AI handles it all with no code required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Start Free Trial <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <Button as={Link} to="/pricing" variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <Section aria-labelledby="dashboard-heading">
        <h2 id="dashboard-heading" className="sr-only">Dashboard preview</h2>
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-surface-950/80"
          aria-label="FlowPilot AI product dashboard preview"
        >
          <div className="flex items-center gap-2 px-5 h-11 bg-surface-800 border-b border-white/[0.06]" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-rose-500/60" />
            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
            <div className="flex-1 mx-8 text-center">
              <span className="text-xs text-white/30">app.flowpilot.ai</span>
            </div>
          </div>
          <div className="bg-surface-900 grid md:grid-cols-[220px,1fr]">
            {/* Sidebar */}
            <aside
              className="hidden md:flex flex-col border-r border-white/[0.06] p-4 gap-1"
              aria-label="Dashboard sidebar navigation"
            >
              {['Dashboard', 'Workflows', 'AI Agents', 'Integrations', 'Reports', 'Settings'].map((item, i) => (
                <div
                  key={item}
                  className={[
                    'px-3 py-2 rounded-lg text-xs font-medium cursor-default',
                    i === 0 ? 'bg-brand-600/20 text-brand-300' : 'text-white/40 hover:text-white/70',
                  ].join(' ')}
                >
                  {item}
                </div>
              ))}
            </aside>
            {/* Main content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-white/60">Active Workflows</h3>
                <div className="px-3 py-1 rounded-md bg-brand-600 text-xs text-white font-semibold">+ New</div>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Client Onboarding Pipeline', status: 'Active', runs: '2,341', last: '2m ago' },
                  { name: 'Weekly Report Generator', status: 'Active', runs: '156', last: '12h ago' },
                  { name: 'Lead Qualifier Agent', status: 'Active', runs: '892', last: '5m ago' },
                  { name: 'CRM Sync — HubSpot', status: 'Paused', runs: '4,210', last: '2d ago' },
                ].map((wf) => (
                  <div key={wf.name} className="glass-card p-4 flex items-center gap-4">
                    <div className={['w-2 h-2 rounded-full flex-shrink-0', wf.status === 'Active' ? 'bg-emerald-400 animate-pulse' : 'bg-white/20'].join(' ')} aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate">{wf.name}</p>
                      <p className="text-[11px] text-muted mt-0.5">{wf.runs} runs · last {wf.last}</p>
                    </div>
                    <span className={['text-[10px] px-2 py-0.5 rounded-full font-semibold', wf.status === 'Active' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-white/5 text-white/30'].join(' ')}>
                      {wf.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Features */}
      <FeaturesSection />

      {/* Integrations */}
      <IntegrationsGrid />

      {/* Security */}
      <SecuritySection />

      {/* API Section */}
      <Section id="api" aria-labelledby="api-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="emerald" className="mb-4">Developer API</Badge>
            <h2 id="api-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Programmable by design
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              Everything you can do in the UI, you can do via our REST API. Full OpenAPI spec included.
            </p>
          </div>
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-2 px-5 h-10 bg-surface-800 border-b border-white/[0.06]" aria-hidden="true">
              <Code2 size={14} className="text-brand-400" />
              <span className="text-xs text-white/40 font-mono">FlowPilot REST API — v1</span>
            </div>
            <div className="p-5 font-mono">
              <table className="w-full text-sm" aria-label="Available API endpoints">
                <caption className="sr-only">FlowPilot AI REST API endpoints</caption>
                <thead>
                  <tr>
                    <th scope="col" className="text-left text-[10px] text-white/30 uppercase tracking-widest pb-4 font-semibold">Method</th>
                    <th scope="col" className="text-left text-[10px] text-white/30 uppercase tracking-widest pb-4 font-semibold">Endpoint</th>
                    <th scope="col" className="text-left text-[10px] text-white/30 uppercase tracking-widest pb-4 font-semibold hidden md:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {apiEndpoints.map((ep) => (
                    <tr key={ep.path} className="hover:bg-white/[0.02]">
                      <td className="py-3 pr-4">
                        <span className={['text-[11px] font-bold px-2 py-1 rounded border', methodColors[ep.method]].join(' ')}>
                          {ep.method}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-xs text-white/70">{ep.path}</td>
                      <td className="py-3 text-xs text-muted hidden md:table-cell">{ep.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button as="a" href="#" variant="outline" size="md" target="_blank" rel="noopener noreferrer">
              View API Docs
              <Globe size={15} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>

      <CTASection
        headline="See FlowPilot AI in action"
        subline="Book a 30-minute demo tailored to your workflows and team size."
        primaryLabel="Book a Demo"
        secondaryLabel="Explore Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
