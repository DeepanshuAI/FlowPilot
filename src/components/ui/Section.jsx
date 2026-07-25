/**
 * Section — semantic <section> wrapper with consistent vertical padding.
 * Accepts a `contained` prop that wraps children in a max-width container.
 */
export default function Section({
  as: Tag = 'section',
  id,
  className = '',
  contained = true,
  tight = false,
  children,
  ...props
}) {
  return (
    <Tag
      id={id}
      className={['relative', tight ? 'py-12 md:py-20' : 'py-20 md:py-28 lg:py-32', className].join(' ')}
      {...props}
    >
      {contained ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}

