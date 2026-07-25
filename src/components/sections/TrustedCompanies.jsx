import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Section from '@/components/ui/Section';
import { trustedCompanies } from '@/data/content';

export default function TrustedCompanies() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Section tight aria-label="Trusted by leading companies">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/30 mb-8">
        Trusted by agencies and teams at
      </p>
      <div
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        role="list"
        aria-label="Companies using FlowPilot AI"
      >
        {trustedCompanies.map((name, i) => (
          <motion.div
            key={name}
            role="listitem"
            initial={reducedMotion ? { opacity: 0.6 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ opacity: 1 }}
            className="text-sm font-semibold text-white/40 hover:text-white/70 transition-colors cursor-default tracking-wide"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
