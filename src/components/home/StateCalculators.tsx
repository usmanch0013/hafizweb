import Link from 'next/link';
import { AU_STATES } from '@/lib/home';

export default function StateCalculators() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-16 md:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label mx-auto">Property</span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            State Stamp Duty Calculators
          </h2>
          <p className="mt-3 text-slate-500">
            Stamp duty rates differ by state and territory. Select yours to estimate transfer costs.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {AU_STATES.map((state) => (
            <Link
              key={state.code}
              href={state.href}
              className="state-chip group flex flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center transition-all hover:border-teal-300 hover:bg-teal-50 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                {state.code}
              </span>
              <span className="mt-2 text-xs font-medium text-slate-600 group-hover:text-teal-800">{state.name}</span>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-slate-400">
          Rates vary by property value, buyer type and concessions. Use our stamp duty calculator for a detailed estimate.
        </p>
      </div>
    </section>
  );
}
