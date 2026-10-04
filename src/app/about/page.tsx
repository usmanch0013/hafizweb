import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { TOOLS } from '@/lib/tools';
import { breadcrumbJsonLd, staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata('about');

export default function AboutPage() {
  return (
    <div className="container-main pb-16 pt-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        About AusCGT
      </h1>
      <p className="mb-8 text-lg text-slate-500">
        Free, accurate finance calculators for Australian residents.
      </p>

      <div className="prose prose-slate max-w-none">
        <p>
          AusCGT was created to make Australian tax and finance calculations accessible to
          everyone. Whether you are selling an investment property, planning your tax return,
          or evaluating a rental investment, our tools give you instant estimates without
          requiring registration or payment.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe financial literacy should be free and accessible. Our calculators are
          designed to help everyday Australians understand their tax obligations, plan property
          purchases, and make informed financial decisions.
        </p>

        <h2>What We Offer</h2>
        <p>We currently provide {TOOLS.length} free calculators covering:</p>
        <ul>
          {TOOLS.map((tool) => (
            <li key={tool.slug}>
              <Link href={tool.href}>{tool.name}</Link>
            </li>
          ))}
        </ul>

        <h2>Privacy First</h2>
        <p>
          All calculations happen in your browser. We never store, transmit, or have access to
          the financial data you enter. Your privacy is our priority.
        </p>

        <h2>Disclaimer</h2>
        <p>
          Our calculators provide estimates for informational purposes only. They do not
          constitute professional advice. Please read our full{' '}
          <Link href="/disclaimer">Disclaimer</Link> and consult a qualified professional for
          important financial decisions.
        </p>
      </div>
    </div>
  );
}
