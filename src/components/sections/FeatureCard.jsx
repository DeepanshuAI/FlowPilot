import { motion } from 'framer-motion';
import { Bot, GitBranch, BarChart2, Database, Mail, Cpu } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Badge from '@/components/ui/Badge';

const iconMap = { Bot, GitBranch, BarChart2, Database, Mail, Cpu };
const badgeVariants = { Core: 'brand', Popular: 'emerald', New: 'amber', '': 'slate' };

export function FeatureCard({ feature, index, isFeatured = false }) {
  const reducedMotion = usePrefersReducedMotion();
  const Icon = iconMap[feature.icon];

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'glass-card-interactive p-8 group flex flex-col justify-between rounded-3xl',
        isFeatured
          ? 'md:col-span-2 bg-gradient-to-br from-brand-950/40 via-surface-900/90 to-surface-950 border-brand-400/40 shadow-glow'
          : 'md:col-span-1',
      ].join(' ')}
    >
      <div>
        <div className="flex items-start justify-between mb-6">
          <div className={[
            'rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-inner-light',
            isFeatured ? 'w-14 h-14 bg-brand-500/20 border-brand-400/40' : 'w-12 h-12 bg-white/5 border-white/10',
          ].join(' ')}>
            <Icon size={isFeatured ? 28 : 24} className="text-brand-300 group-hover:text-white transition-colors" aria-hidden="true" />
          </div>
          {feature.badge && (
            <Badge variant={badgeVariants[feature.badge] || 'brand'}>
              {feature.badge}
            </Badge>
          )}
        </div>
        <h3 className={[
          'font-extrabold text-white mb-3 tracking-tight group-hover:text-brand-300 transition-colors',
          isFeatured ? 'text-2xl md:text-3xl' : 'text-xl',
        ].join(' ')}>
          {feature.title}
        </h3>
        <p className={[
          'text-secondary leading-relaxed font-normal',
          isFeatured ? 'text-base md:text-lg max-w-xl' : 'text-sm',
        ].join(' ')}>
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}


