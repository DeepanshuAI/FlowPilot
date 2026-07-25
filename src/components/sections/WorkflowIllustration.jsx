import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import InteractiveWorkflowBuilder from './InteractiveWorkflowBuilder';

export default function WorkflowIllustration() {
  return (
    <Section
      className="bg-gradient-to-b from-transparent via-surface-900/60 to-transparent"
      aria-labelledby="workflow-heading"
    >
      <div className="text-center mb-12">
        <h2 id="workflow-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          How FlowPilot AI Works
        </h2>
        <p className="text-lg text-secondary max-w-xl mx-auto font-normal">
          Test drive an end-to-end automation pipeline live before setting up your first workflow.
        </p>
      </div>

      <InteractiveWorkflowBuilder />

      {/* Bottom CTA hint */}
      <p className="text-center text-xs sm:text-sm text-white/50 mt-10 font-medium">
        Average setup time: <span className="text-brand-300 font-bold">under 15 minutes</span> &nbsp;·&nbsp; No coding knowledge required
      </p>
    </Section>
  );
}

