import Link from 'next/link';
import Logo from './Logo';
import { TOOLS } from '@/lib/tools';
import { BLOG_HREF } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-400">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" className="h-8" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Free Australian finance calculators for CGT, income tax, property and investment planning.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Calculators</h4>
            <ul className="space-y-2 text-sm">
              {TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <Link href={tool.href} className="hover:text-white">{tool.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Site</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href={BLOG_HREF} className="hover:text-white">Blog</Link></li>
              <li><Link href="/#guide" className="hover:text-white">CGT Guide</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Estimates only — not professional advice.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} AusCGT</p>
          <p className="text-xs text-slate-600">Made for Australian residents</p>
        </div>
      </div>
    </footer>
  );
}
