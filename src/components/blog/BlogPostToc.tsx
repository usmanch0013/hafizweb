'use client';

import { useEffect, useState } from 'react';
import type { BlogHeading } from '@/lib/blog-content';

function useActiveHeading(headings: BlogHeading[]) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    const nodes = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-12% 0px -70% 0px', threshold: [0, 0.2, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [headings]);

  return activeId;
}

export function BlogPostTocMobile({ headings }: { headings: BlogHeading[] }) {
  const activeId = useActiveHeading(headings);
  if (headings.length < 2) return null;

  return (
    <div className="blog-toc-mobile mb-8 lg:hidden">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">On this page</p>
      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              activeId === h.id
                ? 'bg-teal-600 text-white'
                : 'border border-slate-200 bg-white text-slate-600'
            }`}
          >
            {h.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BlogPostTocSidebar({ headings }: { headings: BlogHeading[] }) {
  const activeId = useActiveHeading(headings);
  if (headings.length < 2) return null;

  return (
    <aside className="hidden lg:col-span-3 lg:block">
      <nav className="guide-toc sticky top-[4.25rem] max-h-[calc(100vh-5.5rem)] overflow-y-auto p-4" aria-label="Table of contents">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">On this page</p>
        <ul className="space-y-0.5">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`guide-toc-link block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  h.level === 3 ? 'pl-5 text-slate-500' : 'text-slate-700'
                } ${activeId === h.id ? 'active' : 'hover:bg-slate-50'}`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
