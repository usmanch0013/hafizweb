import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_EMAIL, breadcrumbJsonLd, staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata('contact');

export default function ContactPage() {
  return (
    <div className="container-main pb-16 pt-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        Contact Us
      </h1>
      <p className="mb-8 text-lg text-slate-500">
        Have a question, suggestion, or found an issue? We&apos;d love to hear from you.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="prose prose-slate max-w-none">
          <h2>Get in Touch</h2>
          <p>
            For general enquiries, feedback, or to report an issue with our calculators, please
            email us at:
          </p>
          <p>
            <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-teal-600">
              {SITE_EMAIL}
            </a>
          </p>

          <h2>What to Include</h2>
          <ul>
            <li>Which calculator you were using</li>
            <li>A description of the issue or question</li>
            <li>Expected vs actual results (if reporting a bug)</li>
          </ul>

          <h2>Response Time</h2>
          <p>
            We aim to respond to all enquiries within 2–3 business days. Please note that we
            cannot provide personalised tax or financial advice via email.
          </p>

          <h2>Advertising &amp; Partnerships</h2>
          <p>
            For advertising or partnership enquiries, please email{' '}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> with
            &quot;Partnership&quot; in the subject line.
          </p>
        </div>
      </div>
    </div>
  );
}
