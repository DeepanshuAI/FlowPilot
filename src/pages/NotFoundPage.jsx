import { Link } from 'react-router-dom';
import SEOHead from '@/components/layout/SEOHead';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found | FlowPilot AI"
        description="The page you are looking for does not exist or has been moved."
        canonical="https://flowpilot.ai/404"
      />
      <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-20 h-20 rounded-3xl bg-brand-500/10 border border-brand-400/30 flex items-center justify-center mb-6 shadow-glow">
          <span className="text-4xl font-black text-brand-300">404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-secondary max-w-md mb-8 text-base font-normal">
          The page you are looking for doesn't exist, has been moved, or the URL was mistyped.
        </p>
        <Button
          as={Link}
          to="/"
          variant="primary"
          size="lg"
        >
          Back to Homepage
        </Button>
      </div>
    </>
  );
}
