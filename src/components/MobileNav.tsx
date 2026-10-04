'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TOOLS } from '@/lib/tools';
import { BLOG_HREF } from '@/lib/site';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 top-[3.75rem] z-40 bg-slate-900/20" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="fixed inset-x-0 top-[3.75rem] z-50 max-h-[calc(100vh-3.75rem)] overflow-y-auto border-b border-slate-200 bg-white shadow-lg">
            <nav className="container-main space-y-0.5 py-4">
              <Link href="/#calculator" onClick={() => setOpen(false)} className="mb-2 block rounded-lg bg-teal-600 px-3 py-2.5 text-center text-sm font-semibold text-white">
                Calculate CGT
              </Link>
              <Link href="/" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Home</Link>
              <Link href="/#tools" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Calculators</Link>
              <Link href="/#guide" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">CGT Guide</Link>
              <Link href={BLOG_HREF} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Blog</Link>
              <Link href="/#faq" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">FAQ</Link>
              <Link href="/tools" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">All Tools</Link>
              <div className="my-2 border-t border-slate-100 pt-2">
                <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Quick Links</p>
                {TOOLS.map((tool) => (
                  <Link key={tool.slug} href={tool.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                    {tool.shortName}
                  </Link>
                ))}
              </div>
              <Link href="/about" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50">About</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50">Contact</Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
