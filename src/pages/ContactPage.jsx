import { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '@/components/layout/SEOHead';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FAQSection from '@/components/sections/FAQSection';
import { pageMeta, organizationSchema, buildFaqSchema } from '@/utils/seo';
import { company, contactFaqs } from '@/data/content';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const INITIAL = { name: '', email: '', company: '', role: '', message: '', _hp: '' };

function FormField({ id, label, required, error, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-white/80">
        {label}
        {required && <span className="text-brand-400 ml-1" aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="flex items-center gap-1.5 text-xs text-rose-400 mt-1">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email.';
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function ContactPage() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const reducedMotion = usePrefersReducedMotion();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Honeypot check
    if (values._hp) return;
    const errs = validate(values);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate async submission
    setTimeout(() => {
      setStatus('success');
      setValues(INITIAL);
    }, 1200);
  };

  const inputClass = (field) => [
    'w-full px-4 py-3 rounded-xl bg-surface-800 border text-white text-sm placeholder:text-white/30 transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
    errors[field] ? 'border-rose-500/70' : 'border-white/[0.08] hover:border-white/[0.15]',
  ].join(' ');

  return (
    <>
      <SEOHead
        title={pageMeta.contact.title}
        description={pageMeta.contact.description}
        canonical={pageMeta.contact.canonical}
        ogType={pageMeta.contact.ogType}
        schemas={[organizationSchema, buildFaqSchema(contactFaqs)]}
      />

      {/* Page hero */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative pt-32 pb-10 overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="brand" className="mb-5">Get in Touch</Badge>
            <h1 id="contact-hero-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Let's talk automation
            </h1>
            <p className="text-secondary text-lg">
              Book a demo, ask a question, or talk to sales. We typically respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <Section aria-labelledby="contact-form-section">
        <h2 id="contact-form-section" className="sr-only">Contact form and company details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

          {/* Left: Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                role="status"
                aria-live="polite"
                className="glass-card p-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-emerald-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">Message sent!</h2>
                <p className="text-secondary text-sm">
                  Thanks for reaching out. A member of our team will be in touch within one business day.
                </p>
                <Button
                  variant="secondary"
                  size="md"
                  className="mt-7"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="glass-card p-7 md:p-9 space-y-6"
              >
                <h2 className="text-xl font-bold text-white">Send us a message</h2>

                {/* Honeypot — hidden from users, visible to bots */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="_hp">Leave this field blank</label>
                  <input
                    id="_hp"
                    name="_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values._hp}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField id="name" label="Full name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Sarah Chen"
                      value={values.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={inputClass('name')}
                    />
                  </FormField>
                  <FormField id="email" label="Work email" required error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="sarah@company.com"
                      value={values.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={inputClass('email')}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField id="company" label="Company name">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Agency"
                      value={values.company}
                      onChange={handleChange}
                      className={inputClass('company')}
                    />
                  </FormField>
                  <FormField id="role" label="Your role">
                    <select
                      id="role"
                      name="role"
                      value={values.role}
                      onChange={handleChange}
                      className={[inputClass('role'), 'appearance-none cursor-pointer'].join(' ')}
                    >
                      <option value="">Select your role</option>
                      <option value="founder">Founder / CEO</option>
                      <option value="marketing">Marketing Director</option>
                      <option value="ops">Head of Operations</option>
                      <option value="engineer">Engineer</option>
                      <option value="other">Other</option>
                    </select>
                  </FormField>
                </div>

                <FormField id="message" label="How can we help?" required error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about the workflows you want to automate..."
                    value={values.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    className={[inputClass('message'), 'resize-y min-h-[120px]'].join(' ')}
                  />
                </FormField>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </Button>
                <p className="text-xs text-muted text-center">
                  By submitting, you agree to our{' '}
                  <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Right: Company details + Demo CTA */}
          <aside className="lg:col-span-2 space-y-6" aria-label="Company contact information">
            {/* Book demo card */}
            <div className="glass-card p-6 border-brand-500/20">
              <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/25 flex items-center justify-center mb-4">
                <Calendar size={20} className="text-brand-400" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Book a product demo</h3>
              <p className="text-sm text-muted mb-5 leading-relaxed">
                See FlowPilot AI in action with a 30-minute live demo tailored to your workflows.
              </p>
              <Button
                as="a"
                href="https://cal.com/flowpilotai/demo"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Schedule Demo
                <Calendar size={15} aria-hidden="true" />
              </Button>
            </div>

            {/* Contact info */}
            <address className="glass-card p-6 not-italic space-y-5">
              <h3 className="text-base font-semibold text-white mb-1">Contact details</h3>
              {[
                { Icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
                { Icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/\D/g, '')}` },
                { Icon: MapPin, label: 'Address', value: company.address, href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-white/50" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/30 uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-secondary hover:text-white transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-secondary">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>
          </aside>
        </div>
      </Section>

      <FAQSection
        faqs={contactFaqs}
        headingId="contact-faq-heading"
        title="Common questions"
      />
    </>
  );
}
