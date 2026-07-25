import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from '@/components/ui/Section';

function FAQItem({ faq, index, containerRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  const handleKeyDown = (e) => {
    if (!containerRef.current) return;
    const buttons = Array.from(containerRef.current.querySelectorAll('button[aria-controls]'));
    const currentIndex = buttons.indexOf(e.currentTarget);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % buttons.length;
      buttons[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      buttons[prevIndex]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      buttons[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      buttons[buttons.length - 1]?.focus();
    }
  };

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-500/40 bg-white/[0.05] shadow-glow' : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'}`}>
      <h3>
        <button
          id={id}
          aria-expanded={isOpen}
          aria-controls={panelId}
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          onKeyDown={handleKeyDown}
          className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left text-base font-semibold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-inset"
        >
          <span className="tracking-tight">{faq.question}</span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-500/20 text-brand-300 rotate-180' : 'bg-white/5 text-white/60'}`}>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="flex-shrink-0"
            />
          </div>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`grid transition-all duration-300 ease-out-expo ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-7 pb-6 text-base text-secondary leading-relaxed border-t border-white/10 pt-4 font-normal">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ faqs, headingId = 'faq-heading', title = 'Frequently asked questions' }) {
  const containerRef = useRef(null);

  return (
    <Section aria-labelledby={headingId}>
      <div className="max-w-3xl mx-auto" ref={containerRef}>
        <div className="text-center mb-12">
          <h2 id={headingId} className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {title}
          </h2>
        </div>
        <div className="space-y-4" role="list">
          {faqs.map((faq, i) => (
            <div key={i} role="listitem">
              <FAQItem faq={faq} index={i} containerRef={containerRef} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
