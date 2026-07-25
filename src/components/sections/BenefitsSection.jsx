import { motion } from 'framer-motion';
import { Zap, TrendingUp, Shield, Users } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Section from '@/components/ui/Section';
import { benefits } from '@/data/content';

const iconMap = { Zap, TrendingUp, Shield, Users };

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function BenefitsSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Section aria-labelledby="benefits-heading">
      <div className="text-center mb-16">
        <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why teams choose FlowPilot AI
        </h2>
        <p className="text-secondary max-w-xl mx-auto">
          From solo freelancers to 100-person agencies — FlowPilot AI grows with you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
        {benefits.map((benefit, i) => {
          const Icon = iconMap[benefit.icon];
          return (
            <motion.article
              key={benefit.title}
              role="listitem"
              variants={itemVariant}
              initial={reducedMotion ? 'show' : 'hidden'}
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/25 flex items-center justify-center mb-4 group-hover:bg-brand-600/30 transition-colors">
                <Icon size={20} className="text-brand-400" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
