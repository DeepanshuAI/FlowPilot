import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden"
    >
      {/* Multi-layered ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-hero-glow pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/15 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Modern subtle grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          {/* Eyebrow badge */}
          <div>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs sm:text-sm font-semibold tracking-wide shadow-glow mb-8 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" aria-hidden="true" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-400" aria-hidden="true" />
              </span>
              Now with AI Agent Builder — try it free
            </span>
          </div>

          {/* H1 — Paints immediately (0ms render delay for LCP) */}
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] max-w-5xl"
          >
            Automate Everything.{' '}
            <span className="gradient-text">Grow Faster.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed font-normal">
            FlowPilot AI replaces hours of manual work with intelligent automation.
            Built for agencies, marketing teams, and SaaS companies ready to scale.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button as={Link} to="/contact" variant="primary" size="xl">
              Start Free Trial
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button as={Link} to="/product" variant="secondary" size="xl">
              <Play size={16} aria-hidden="true" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof micro-copy */}
          <p className="mt-8 text-xs sm:text-sm text-white/50 font-medium tracking-wide">
            No credit card required &nbsp;·&nbsp; 14-day free trial &nbsp;·&nbsp; Cancel anytime
          </p>

          {/* Dashboard mockup */}
          <div className="mt-16 w-full max-w-5xl mx-auto transform-gpu">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-surface-900/90 shadow-card-hover backdrop-blur-xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 h-11 bg-surface-800/90 border-b border-white/10" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
                <div className="flex-1 mx-8">
                  <div className="max-w-56 h-5 rounded-lg bg-white/8 mx-auto border border-white/5" />
                </div>
              </div>
              {/* Dashboard content */}
              <div className="bg-surface-900/95 p-6 md:p-10" aria-label="FlowPilot AI dashboard preview">
                {/* Top stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Runs Today', value: '1,284', delta: '+12%', color: 'emerald' },
                    { label: 'Active Flows', value: '47', delta: '+3', color: 'brand' },
                    { label: 'Time Saved', value: '38 hrs', delta: 'this week', color: 'brand' },
                    { label: 'Success Rate', value: '99.7%', delta: 'all time', color: 'emerald' },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card p-5 text-left transition-all duration-300 hover:border-brand-500/30 hover:bg-white/5">
                      <p className="text-xs text-muted font-medium mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                      <p className={`text-xs font-semibold mt-1 ${stat.color === 'emerald' ? 'text-emerald-400' : 'text-brand-400'}`}>{stat.delta}</p>
                    </div>
                  ))}
                </div>
                {/* Workflow pipeline */}
                <div className="glass-card p-6 text-left">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span className="text-xs font-bold tracking-wider text-white/70 uppercase">CLIENT ONBOARDING PIPELINE — LIVE</span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                    {['Webhook Trigger', 'AI Extract', 'HubSpot Update', 'Send Welcome', 'Notify Team'].map((step, i, arr) => (
                      <div key={step} className="flex items-center gap-3 flex-shrink-0">
                        <div className="px-4 py-2.5 rounded-xl bg-brand-500/15 border border-brand-400/30 text-xs text-brand-300 font-semibold shadow-inner-light whitespace-nowrap">
                          {step}
                        </div>
                        {i < arr.length - 1 && (
                          <div className="w-8 h-0.5 bg-gradient-to-r from-brand-500/50 to-white/20 flex-shrink-0" aria-hidden="true" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Reflection / glow under card */}
            <div
              aria-hidden="true"
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-brand-600/30 blur-3xl rounded-full pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
