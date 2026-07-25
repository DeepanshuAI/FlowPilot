import { Zap, TrendingUp, Shield, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import { benefits } from '@/data/content';

const iconMap = { Zap, TrendingUp, Shield, Users };

export default function BenefitsSection() {
  return (
    <Section aria-labelledby="benefits-heading">
      <div className="text-center mb-16">
        <h2 id="benefits-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Why teams choose FlowPilot AI
        </h2>
        <p className="text-secondary max-w-xl mx-auto text-base font-normal">
          From solo freelancers to 100-person agencies — FlowPilot AI grows with you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
        {benefits.map((benefit) => {
          const Icon = iconMap[benefit.icon];
          return (
            <article
              key={benefit.title}
              role="listitem"
              className="glass-card-interactive p-6 group transition-all duration-300 transform-gpu"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/25 flex items-center justify-center mb-4 group-hover:bg-brand-600/30 transition-colors">
                <Icon size={20} className="text-brand-400" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">{benefit.title}</h3>
              <p className="text-sm text-secondary leading-relaxed font-normal">{benefit.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
