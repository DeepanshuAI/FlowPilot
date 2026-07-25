import { Quote } from 'lucide-react';
import Section from '@/components/ui/Section';
import { testimonials } from '@/data/content';

function Testimonial({ testimonial }) {
  return (
    <figure className="glass-card p-7 hover:bg-white/[0.04] transition-all duration-300 transform-gpu flex flex-col gap-5 rounded-3xl">
      <Quote size={24} className="text-brand-500/60 flex-shrink-0" aria-hidden="true" />
      <blockquote className="text-sm md:text-base text-secondary leading-relaxed flex-1 font-normal">
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
          <p className="text-sm font-semibold text-white tracking-tight">{testimonial.author}</p>
          <p className="text-xs text-secondary font-medium">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <Section aria-labelledby="testimonials-heading">
      <div className="text-center mb-14">
        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Loved by teams worldwide
        </h2>
        <p className="text-secondary max-w-xl mx-auto text-base font-normal">
          Over 1,200 agencies and growing businesses run on FlowPilot AI.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Testimonial key={t.author} testimonial={t} />
        ))}
      </div>
    </Section>
  );
}
