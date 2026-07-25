import { Lock, FileCheck, UserCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Section from '@/components/ui/Section';
import { securityFeatures } from '@/data/content';

const iconMap = { Lock, FileCheck, UserCheck, Activity };

export default function SecuritySection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Section
      id="security"
      className="bg-gradient-to-b from-transparent via-surface-900/40 to-transparent"
      aria-labelledby="security-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="security-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise-grade security
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Your data is private, encrypted, and always under your control.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
          {securityFeatures.map((feat, i) => {
            const Icon = iconMap[feat.icon];
            return (
              <motion.article
                key={feat.title}
                role="listitem"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 flex gap-5"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{feat.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feat.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
