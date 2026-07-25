import { Lock, FileCheck, UserCheck, Activity } from 'lucide-react';
import Section from '@/components/ui/Section';
import { securityFeatures } from '@/data/content';

const iconMap = { Lock, FileCheck, UserCheck, Activity };

export default function SecuritySection() {
  return (
    <Section
      id="security"
      className="bg-gradient-to-b from-transparent via-surface-900/40 to-transparent"
      aria-labelledby="security-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="security-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Enterprise-grade security
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-base font-normal">
            Your data is private, encrypted, and always under your control.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
          {securityFeatures.map((feat) => {
            const Icon = iconMap[feat.icon];
            return (
              <article
                key={feat.title}
                role="listitem"
                className="glass-card p-6 flex gap-5 transition-all duration-300 transform-gpu hover:border-emerald-500/30 hover:bg-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 tracking-tight">{feat.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed font-normal">{feat.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
