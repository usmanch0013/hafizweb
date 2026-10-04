'use client';

import { useState } from 'react';
import { HOME_FAQ } from '@/lib/home';

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-16 bg-white py-16 md:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label mx-auto">FAQ</span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-slate-500">Common questions about our calculators and CGT estimates.</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {HOME_FAQ.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
                aria-expanded={open === i}
              >
                <span className="font-medium text-slate-800">{item.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-teal-600 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="border-t border-slate-100 px-5 pb-4 pt-1">
                  <p className="text-sm leading-relaxed text-slate-500">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
