import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import { integrations } from '@/data/content';

const categoryColors = {
  CRM: 'brand',
  Comms: 'emerald',
  Productivity: 'amber',
  Analytics: 'brand',
  Ads: 'amber',
  Payments: 'emerald',
  Database: 'brand',
  Automation: 'emerald',
  Dev: 'slate',
  Support: 'slate',
};

export default function IntegrationsGrid() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Section id="integrations" aria-labelledby="integrations-heading">
      <div className="text-center mb-14">
        <h2 id="integrations-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Connects with your entire stack
        </h2>
        <p className="text-lg text-secondary max-w-xl mx-auto font-normal">
          100+ native integrations. More added every week.
        </p>
      </div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        role="list"
        aria-label="Available integrations"
      >
        {integrations.map((integration, i) => (
          <motion.div
            key={integration.name}
            role="listitem"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: (i % 4) * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-card-interactive p-4.5 flex items-center justify-between gap-3 cursor-default"
          >
            <span className="text-sm font-semibold text-white tracking-tight">{integration.name}</span>
            <Badge variant={categoryColors[integration.category] || 'slate'}>
              {integration.category}
            </Badge>
          </motion.div>
        ))}
        {/* "100+ more" card */}
        <div className="glass-card p-4.5 flex items-center justify-center border-brand-500/30 bg-brand-500/10 col-span-2 sm:col-span-1 shadow-inner-light">
          <span className="text-sm font-bold text-brand-300 tracking-wide">+ 88 more</span>
        </div>
      </div>
    </Section>
  );
}

