import { forwardRef } from 'react';

const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 hover:from-brand-500 hover:to-brand-500 text-white shadow-lg shadow-brand-900/50 hover:shadow-glow border border-brand-400/30 hover:border-brand-300/50',
  secondary:
    'bg-white/8 hover:bg-white/12 text-white border border-white/12 hover:border-white/25 backdrop-blur-md shadow-inner-light',
  outline:
    'border border-brand-500/60 text-brand-300 hover:bg-brand-600/20 hover:text-white hover:border-brand-400',
  ghost:
    'text-white/80 hover:text-white hover:bg-white/8',
};

const sizes = {
  sm: 'px-3.5 py-2 text-xs font-semibold min-h-[38px]',
  md: 'px-5 py-2.5 text-sm font-semibold min-h-[44px]',
  lg: 'px-7 py-3.5 text-base font-semibold min-h-[48px]',
  xl: 'px-8 py-4 text-base font-bold min-h-[54px]',
};

/**
 * Button — polymorphic component that renders as <button> by default,
 * or as any element via the `as` prop (e.g. as={Link} for router links).
 */
const Button = forwardRef(function Button(
  {
    as: Component = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
  },
  ref
) {
  return (
    <Component
      ref={ref}
      className={[
        'relative inline-flex items-center justify-center gap-2.5',
        'rounded-xl transform-gpu transition-all duration-200 ease-out-expo',
        'active:scale-[0.97] hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        'cursor-pointer select-none overflow-hidden',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Button;

