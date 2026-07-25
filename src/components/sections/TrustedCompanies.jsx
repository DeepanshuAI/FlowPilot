import Section from '@/components/ui/Section';
import { trustedCompanies } from '@/data/content';

export default function TrustedCompanies() {
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
        {trustedCompanies.map((name) => (
          <div
            key={name}
            role="listitem"
            className="text-sm font-semibold text-white/40 hover:text-white/80 transition-colors cursor-default tracking-wide"
          >
            {name}
          </div>
        ))}
      </div>
    </Section>
  );
}
