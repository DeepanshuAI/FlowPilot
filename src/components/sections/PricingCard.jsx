import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function PricingCard({ plan, isAnnual }) {
  const reducedMotion = usePrefersReducedMotion();
  const price = isAnnual ? plan.price.annual : plan.price.monthly;

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`${plan.name} plan`}
      className={[
        'relative flex flex-col rounded-3xl border transition-all duration-300 transform-gpu',
        plan.highlight
          ? 'border-brand-400/50 bg-gradient-to-b from-brand-950/50 via-surface-900/90 to-surface-950 shadow-glow-lg hover:shadow-brand-500/30 hover:-translate-y-1'
          : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 backdrop-blur-xl',
      ].join(' ')}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="emerald">{plan.badge}</Badge>
        </div>
      )}

      <div className="p-8 pb-0">
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
        <p className="text-sm text-secondary mb-7 leading-relaxed">{plan.description}</p>

        <div className="flex items-end gap-2 mb-8">
          {price !== null ? (
            <>
              <span className="text-5xl font-black text-white tracking-tight">
                ${price}
              </span>
              <span className="text-secondary pb-1.5 text-sm font-medium">/month</span>
            </>
          ) : (
            <span className="text-4xl font-extrabold text-white tracking-tight">Custom</span>
          )}
        </div>

        <Button
          as={Link}
          to="/contact"
          variant={plan.highlight ? 'primary' : 'secondary'}
          size="lg"
          className="w-full justify-center mb-8 shadow-md"
        >
          {plan.cta}
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>

      <hr className="border-white/10 mx-8" />

      <div className="p-8 flex-1">
        <ul className="space-y-3.5" role="list" aria-label={`${plan.name} plan features`}>
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-sm text-secondary font-medium">
              <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-emerald-300" aria-hidden="true" />
              </div>
              <span>{feat}</span>
            </li>
          ))}
          {plan.notIncluded.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-sm text-muted">
              <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X size={12} className="text-white/30" aria-hidden="true" />
              </div>
              <span className="line-through decoration-white/20">{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

