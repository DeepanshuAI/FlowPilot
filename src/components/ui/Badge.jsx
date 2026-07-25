const variants = {
  brand: 'bg-brand-500/15 text-brand-300 border border-brand-400/30 backdrop-blur-md shadow-sm',
  emerald: 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 backdrop-blur-md shadow-sm',
  amber: 'bg-amber-500/15 text-amber-300 border border-amber-400/30 backdrop-blur-md shadow-sm',
  slate: 'bg-white/8 text-white/80 border border-white/15 backdrop-blur-md shadow-sm',
};

export default function Badge({ children, variant = 'brand', className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-inner-light',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}

