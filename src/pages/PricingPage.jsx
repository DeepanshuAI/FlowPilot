import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/layout/SEOHead';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import PricingCard from '@/components/sections/PricingCard';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { pageMeta, organizationSchema, buildFaqSchema } from '@/utils/seo';
import { pricingPlans, pricingFaqs } from '@/data/content';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      <SEOHead
        title={pageMeta.pricing.title}
        description={pageMeta.pricing.description}
        canonical={pageMeta.pricing.canonical}
        ogType={pageMeta.pricing.ogType}
        schemas={[organizationSchema, buildFaqSchema(pricingFaqs)]}
      />

      {/* Hero */}
      <section
        aria-labelledby="pricing-hero-heading"
        className="relative pt-32 pb-16 text-center overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="brand" className="mb-6">Transparent Pricing</Badge>
            <h1 id="pricing-hero-heading" className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
              Simple pricing, no surprises
            </h1>
            <p className="text-lg text-secondary mb-10">
              Start free for 14 days. No credit card required. Cancel anytime.
            </p>

            {/* Toggle */}
            <div
              className="inline-flex items-center gap-3 bg-surface-800 border border-white/[0.08] rounded-xl p-1"
              role="group"
              aria-label="Billing period selection"
            >
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                aria-pressed={!isAnnual}
                className={[
                  'px-5 py-2 rounded-lg text-sm font-semibold transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                  !isAnnual
                    ? 'bg-white text-surface-950 shadow-sm'
                    : 'text-white/50 hover:text-white/80',
                ].join(' ')}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                aria-pressed={isAnnual}
                className={[
                  'px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                  isAnnual
                    ? 'bg-white text-surface-950 shadow-sm'
                    : 'text-white/50 hover:text-white/80',
                ].join(' ')}
              >
                Annual
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500 text-white font-bold">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <Section aria-labelledby="plans-heading" tight>
        <h2 id="plans-heading" className="sr-only">Pricing plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
        <p className="text-center text-xs text-white/30 mt-8">
          All prices in USD. Annual plans billed yearly.
        </p>
      </Section>

      {/* Comparison table */}
      <ComparisonTable />

      {/* FAQ */}
      <FAQSection
        faqs={pricingFaqs}
        headingId="pricing-faq-heading"
        title="Pricing questions answered"
      />

      {/* CTA */}
      <CTASection
        headline="Start your free 14-day trial"
        subline="No credit card. Full access. Cancel anytime."
        primaryLabel="Get Started Free"
        secondaryLabel="Talk to Sales"
      />
    </>
  );
}
