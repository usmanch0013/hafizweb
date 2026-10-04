import type { Metadata } from 'next';
import ToolCard from '@/components/ToolCard';
import JsonLd from '@/components/seo/JsonLd';
import { TOOLS, CATEGORY_LABELS, type ToolCategory } from '@/lib/tools';
import { TOOLS_INDEX_SEO, breadcrumbJsonLd, buildMetadata, toolsListJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata(TOOLS_INDEX_SEO);

export default function ToolsPage() {
  const categories = Object.keys(CATEGORY_LABELS) as ToolCategory[];

  return (
    <div className="bg-white">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'All Calculators', path: '/tools' },
          ]),
          toolsListJsonLd(TOOLS.map((t) => ({ name: t.name, href: t.href, description: t.description }))),
        ]}
      />

      <section className="border-b border-slate-200/70 bg-slate-50/50 py-12 md:py-14">
        <div className="container-main mx-auto max-w-2xl text-center">
          <span className="section-label mx-auto">Free Tools</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            All Finance Calculators
          </h1>
          <p className="mt-4 text-slate-600">
            Australian tax, property and investment calculators — free, private and updated for 2026-27.
          </p>
        </div>
      </section>

      <div className="container-main py-12 md:py-16">
        {categories.map((category) => (
          <section key={category} className="mb-14 last:mb-0">
            <h2 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-800">
              <span className="h-5 w-1 rounded-full bg-teal-600" />
              {CATEGORY_LABELS[category]}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TOOLS.filter((t) => t.category === category).map((tool) => (
                <ToolCard key={tool.slug} tool={tool} featured={tool.slug === 'cgt'} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
