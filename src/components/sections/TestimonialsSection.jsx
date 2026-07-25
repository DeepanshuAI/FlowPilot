import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Section from '@/components/ui/Section';
import { testimonials } from '@/data/content';

function Testimonial({ testimonial, index }) {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <motion.figure
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-card p-7 hover:bg-white/[0.04] transition-colors flex flex-col gap-5"
    >
      <Quote size={24} className="text-brand-500/60 flex-shrink-0" aria-hidden="true" />
      <blockquote className="text-sm md:text-base text-secondary leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-brand-600/25 border border-brand-500/20 flex items-center justify-center text-sm font-bold text-brand-400 flex-shrink-0"
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.author}</p>
          <p className="text-xs text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function TestimonialsSection() {
  return (
    <Section aria-labelledby="testimonials-heading">
      <div className="text-center mb-14">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          Loved by teams worldwide
        </h2>
        <p className="text-secondary max-w-xl mx-auto">
          Over 1,200 agencies and growing businesses run on FlowPilot AI.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Testimonial key={t.author} testimonial={t} index={i} />
        ))}
      </div>
    </Section>
  );
}
