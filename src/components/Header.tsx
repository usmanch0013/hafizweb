import Link from 'next/link';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { TOOLS } from '@/lib/tools';
import { BLOG_HREF } from '@/lib/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="container-main">
        <div className="flex h-[3.75rem] items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/#tools" className="nav-link">Calculators</Link>
            <Link href="/#guide" className="nav-link">CGT Guide</Link>
            <div className="group relative">
              <button className="nav-link flex items-center gap-1">
                All Tools
                <svg className="h-3 w-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-64 pt-1.5 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white py-1.5 shadow-lg">
                  {TOOLS.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={tool.href}
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                    >
                      {tool.shortName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href={BLOG_HREF} className="nav-link">Blog</Link>
            <Link href="/#faq" className="nav-link">FAQ</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/#calculator" className="nav-cta hidden sm:inline-flex">
              Calculate CGT
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
