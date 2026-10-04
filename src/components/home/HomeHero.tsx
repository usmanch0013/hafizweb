'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ToolIcon from '@/components/icons/ToolIcons';
import { TOOLS } from '@/lib/tools';
import { CURRENT_FY } from '@/lib/site';

export default function HomeHero() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const match = TOOLS.find(
      (t) =>
        t.shortName.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.slug.includes(q)
    );
    router.push(match?.href ?? '/tools');
  }

  return (
    <section className="hero-taxsal relative overflow-hidden bg-white pb-4 pt-10 md:pt-14">
      <div className="container-main relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            {['All States', `${CURRENT_FY} Rates`, '8 Free Tools'].map((tag) => (
              <span key={tag} className="hero-tag">{tag}</span>
            ))}
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-[2.625rem] md:leading-tight">
            Calculate Smarter, Not Harder
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500 md:text-lg">
            Australian Tax &amp; Finance Calculators Made Simple at{' '}
            <span className="font-semibold text-teal-600">AusCGT</span>
          </p>

          <form onSubmit={handleSearch} className="mx-auto mt-8 max-w-xl">
            <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md shadow-slate-900/5 ring-1 ring-slate-100">
              <div className="flex flex-1 items-center gap-2 px-4">
                <svg className="h-5 w-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search calculators… e.g. CGT, GST, Mortgage"
                  className="w-full border-0 bg-transparent py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 bg-teal-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-4 gap-3 sm:grid-cols-8 sm:gap-4">
            {TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.href}
                className="group flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/80 p-3 transition-all hover:border-teal-200 hover:bg-teal-50 hover:shadow-sm"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tool.color} text-white shadow-sm transition-transform group-hover:scale-105`}>
                  <ToolIcon name={tool.icon} className="h-5 w-5" />
                </div>
                <span className="text-center text-[10px] font-semibold leading-tight text-slate-600 group-hover:text-teal-700 sm:text-[11px]">
                  {tool.shortName.replace(' Calculator', '').replace(' Calc', '')}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'Fast & Accurate', icon: '⚡' },
              { label: 'Free Forever', icon: '✓' },
              { label: 'Privacy First', icon: '🔒' },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-2 text-sm text-slate-500">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-xs">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
