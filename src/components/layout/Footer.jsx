import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { company } from '@/data/content';

// Inline SVG social icons — avoids lucide version naming inconsistencies
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);


const footerLinks = {
  Product: [
    { label: 'Features', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/product#integrations' },
    { label: 'Security', href: '/product#security' },
    { label: 'API', href: '/product#api' },
  ],
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '/product#security' },
  ],
};

const socialLinks = [
  { href: company.social.twitter, label: 'Follow FlowPilot AI on Twitter', Icon: TwitterIcon },
  { href: company.social.linkedin, label: 'Follow FlowPilot AI on LinkedIn', Icon: LinkedinIcon },
  { href: company.social.github, label: 'FlowPilot AI on GitHub', Icon: GithubIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-surface-950/90 backdrop-blur-xl relative"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link
              to="/"
              aria-label="FlowPilot AI — homepage"
              className="inline-flex items-center gap-2.5 mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-xl"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-md shadow-brand-950/60">
                <Zap size={18} className="text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                FlowPilot <span className="text-brand-400">AI</span>
              </span>
            </Link>
            <p className="text-sm text-secondary leading-relaxed max-w-xs font-normal">
              The AI workflow automation platform built for agencies and growing businesses.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-brand-500/20 hover:border-brand-400/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav key={heading} aria-label={`${heading} links`}>
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-5">
                {heading}
              </h3>
              <ul className="space-y-3.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary font-medium">
            &copy; {year} FlowPilot AI, Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-medium">
            Built with precision. Automated with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

