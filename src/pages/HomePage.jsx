import SEOHead from '@/components/layout/SEOHead';
import Hero from '@/components/sections/Hero';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WorkflowIllustration from '@/components/sections/WorkflowIllustration';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { pageMeta, organizationSchema, buildFaqSchema } from '@/utils/seo';
import { homeFaqs } from '@/data/content';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title={pageMeta.home.title}
        description={pageMeta.home.description}
        canonical={pageMeta.home.canonical}
        ogType={pageMeta.home.ogType}
        schemas={[organizationSchema, buildFaqSchema(homeFaqs)]}
      />
      <Hero />
      <TrustedCompanies />
      <BenefitsSection />
      <FeaturesSection />
      <WorkflowIllustration />
      <TestimonialsSection />
      <FAQSection
        faqs={homeFaqs}
        headingId="home-faq-heading"
        title="Frequently asked questions"
      />
      <CTASection />
    </>
  );
}
