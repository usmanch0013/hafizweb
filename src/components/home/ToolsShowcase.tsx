'use client';

import { useState } from 'react';
import Link from 'next/link';
import ToolIcon from '@/components/icons/ToolIcons';
import { TOOLS, CATEGORY_LABELS, type ToolCategory } from '@/lib/tools';

const categories = ['all', ...Object.keys(CATEGORY_LABELS)] as const;
type Filter = (typeof categories)[number];

export default function ToolsShowcase() {
  const [active, setActive] = useState<Filter>('all');

  const filtered =
    active === 'all' ? TOOLS : TOOLS.filter((t) => t.category === active);

  return (
    <section id="tools" className="scroll-mt-16 bg-white py-16 md:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label mx-auto">Our Calculators</span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Top Australian Finance Calculators
          </h2>
          <p className="mt-3 text-slate-500">
            Free tools for tax, property and investment planning — pick a category or browse all.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:text-teal-700'
              }`}
            >
              {cat === 'all' ? 'All Tools' : CATEGORY_LABELS[cat as ToolCategory]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="showcase-card group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5"
            >
              {tool.slug === 'cgt' && (
                <span className="mb-2 self-start rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-700">
                  Popular
                </span>
              )}
              <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${tool.color} text-white`}>
                <ToolIcon name={tool.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:text-teal-700">{tool.shortName}</h3>
              <p className="mt-1.5 flex-grow text-sm leading-relaxed text-slate-500 line-clamp-2">{tool.description}</p>
              <span className="mt-4 text-sm font-medium text-teal-600 group-hover:underline">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/tools" className="btn-outline">
            View All Calculators
          </Link>
        </div>
      </div>
    </section>
  );
}
