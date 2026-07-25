import Section from '@/components/ui/Section';
import { FeatureCard } from './FeatureCard';
import { features } from '@/data/content';

export default function FeaturesSection() {
  return (
    <Section aria-labelledby="features-heading">
      <div className="text-center mb-16">
        <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Everything You Need to Automate at Scale
        </h2>
        <p className="text-lg text-secondary max-w-xl mx-auto font-normal">
          A complete automation platform — from simple tasks to complex multi-step AI pipelines.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            index={i}
            isFeatured={i === 0 || i === 3}
          />
        ))}
      </div>
    </Section>
  );
}

