import { Check, Minus } from 'lucide-react';
import { comparisonFeatures } from '@/data/content';

const PLANS = ['starter', 'growth', 'enterprise'];
const PLAN_LABELS = { starter: 'Starter', growth: 'Growth', enterprise: 'Enterprise' };

function Cell({ value }) {
  if (value === true) return <Check size={18} className="text-emerald-400 mx-auto" aria-label="Included" />;
  if (value === false) return <Minus size={18} className="text-white/20 mx-auto" aria-label="Not included" />;
  return <span className="text-sm text-secondary">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section aria-labelledby="comparison-heading" className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="comparison-heading" className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Compare plans in detail
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm" role="table" aria-label="Feature comparison across pricing plans">
            <caption className="sr-only">Feature comparison across Starter, Growth, and Enterprise plans</caption>
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white/40 uppercase tracking-widest w-1/4">
                  Feature
                </th>
                {PLANS.map((plan) => (
                  <th key={plan} scope="col" className="px-6 py-4 text-center text-xs font-semibold text-white/40 uppercase tracking-widest">
                    {PLAN_LABELS[plan]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr
                  key={row.feature}
                  className={[
                    'border-b border-white/[0.04] transition-colors',
                    i % 2 === 0 ? 'bg-white/[0.01]' : '',
                    'hover:bg-white/[0.03]',
                  ].join(' ')}
                >
                  <td className="px-6 py-4 text-sm text-secondary font-medium">{row.feature}</td>
                  {PLANS.map((plan) => (
                    <td key={plan} className="px-6 py-4 text-center">
                      <Cell value={row[plan]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
