'use client';

import { useEffect, useState } from 'react';

export const CGT_GUIDE_SECTIONS = [
  { id: 'what-is-cgt', title: 'What is CGT?' },
  { id: 'formula', title: 'Formula' },
  { id: 'how-to-calculate', title: 'How to Calculate' },
  { id: 'calculator-inputs', title: 'Calculator Inputs' },
  { id: 'ato-methods', title: 'ATO Methods' },
  { id: 'taxable-assets', title: 'Taxable Assets' },
  { id: 'exemptions', title: 'Exemptions' },
  { id: 'small-business', title: 'Small Business' },
  { id: 'reduce-cgt', title: 'Reduce CGT' },
  { id: 'gain-or-loss', title: 'Gain or Loss' },
  { id: 'recent-changes', title: 'Recent Changes' },
  { id: 'single-asset', title: 'Single Asset Example' },
  { id: 'multiple-assets', title: 'Multiple Assets' },
  { id: 'cgt-history', title: 'CGT History' },
];

interface GuideWithNavProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function GuideWithNav({
  children,
  title = 'Complete CGT Guide',
  subtitle = 'Everything you need to understand, calculate and reduce Capital Gains Tax in Australia.',
}: GuideWithNavProps) {
  const [activeId, setActiveId] = useState(CGT_GUIDE_SECTIONS[0].id);

  useEffect(() => {
    const headings = CGT_GUIDE_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.25] }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="section-label mx-auto">Educational Guide</span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">{subtitle}</p>
      </div>

      <div className="mb-6 lg:hidden">
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CGT_GUIDE_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeId === s.id
                  ? 'bg-teal-600 text-white'
                  : 'border border-slate-200 bg-white text-slate-600'
              }`}
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav
            className="guide-toc sticky top-[4.25rem] max-h-[calc(100vh-5.5rem)] overflow-y-auto p-3"
            aria-label="Guide contents"
          >
            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              On this page
            </p>
            <ul className="space-y-0.5">
              {CGT_GUIDE_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`guide-toc-link block rounded-md px-2.5 py-2 text-[0.8125rem] leading-snug transition-colors ${
                      activeId === s.id
                        ? 'active'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="guide-card lg:col-span-9">
          <div className="guide-article">{children}</div>
        </article>
      </div>
    </div>
  );
}
