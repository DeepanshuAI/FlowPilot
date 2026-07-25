import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CTASection({
  headline = 'Ready to automate your business?',
  subline = 'Join 1,200+ agencies already saving 20+ hours per week with FlowPilot AI.',
  primaryLabel = 'Start Free Trial',
  primaryHref = '/contact',
  secondaryLabel = 'Book a Demo',
  secondaryHref = '/contact',
}) {
  return (
    <Section
      className="relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cta-glow pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center glass-card p-10 md:p-16 border-brand-500/30 shadow-glow-lg rounded-3xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
          Get started today
        </div>
        <h2 id="cta-heading" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
          {headline}
        </h2>
        <p className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
          {subline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button as={Link} to={primaryHref} variant="primary" size="xl">
            {primaryLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button as={Link} to={secondaryHref} variant="secondary" size="xl">
            {secondaryLabel}
          </Button>
        </div>
        <p className="mt-8 text-xs sm:text-sm text-white/50 font-medium">
          14-day free trial &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Cancel anytime
        </p>
      </div>
    </Section>
  );
}
