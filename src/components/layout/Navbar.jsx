import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { navigation } from '@/data/content';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll detection for navbar background
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!isOpen) return;
    const focusable = mobileMenuRef.current?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        hamburgerRef.current?.focus();
      }
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    first.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open & auto-close on resize to desktop
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);


  return (
    <header
      role="banner"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu',
        scrolled
          ? 'bg-surface-950/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/60 py-1'
          : 'bg-transparent py-2.5',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            aria-label="FlowPilot AI — go to homepage"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-xl p-1"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-md shadow-brand-950/60 group-hover:scale-105 transition-transform duration-200">
              <Zap size={18} className="text-white" aria-hidden="true" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-brand-300 transition-colors">
              FlowPilot <span className="text-brand-400">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1.5 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md shadow-inner-light">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ease-out-expo',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                    isActive
                      ? 'text-white bg-brand-600/30 border border-brand-500/40 shadow-sm shadow-brand-950'
                      : 'text-white/75 hover:text-white hover:bg-white/8',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button as={Link} to="/contact" variant="ghost" size="sm">
              Sign In
            </Button>
            <Button as={Link} to="/contact" variant="primary" size="sm">
              Get Started Free
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-white/80 hover:text-white hover:bg-white/10 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-colors"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed inset-0 top-16 bg-surface-950/98 backdrop-blur-2xl border-t border-white/10 z-40 animate-fade-in"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-2 px-6 py-8"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                className={({ isActive }) =>
                  [
                    'px-5 py-4 rounded-2xl text-base font-semibold transition-all',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
                    isActive
                      ? 'text-white bg-brand-600/30 border border-brand-500/40'
                      : 'text-white/80 hover:text-white hover:bg-white/8',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-8 flex flex-col gap-3.5">
              <Button
                as={Link}
                to="/contact"
                variant="secondary"
                size="lg"
                className="w-full justify-center"
              >
                Sign In
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Get Started Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

