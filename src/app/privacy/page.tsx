import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata('privacy');

export default function PrivacyPage() {
  return (
    <article className="prose container-main mx-auto max-w-3xl pb-16 pt-8">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: September 2026</em></p>

      <p>
        AusCGT (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website cgthub.au
        (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, and protect
        information when you use our Service.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Our calculators perform all calculations locally in your browser. We do not collect,
        store, or transmit the financial data you enter into our calculators.
      </p>
      <p>We may automatically collect certain non-personal information, including:</p>
      <ul>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages visited and time spent on pages</li>
        <li>Referring website addresses</li>
        <li>IP address (anonymised where possible)</li>
      </ul>

      <h2>Cookies and Advertising</h2>
      <p>
        We use cookies to improve your experience and may display advertisements through Google
        AdSense. Google and its partners may use cookies to serve ads based on your prior visits
        to this website or other websites. You can opt out of personalised advertising by visiting{' '}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>.
      </p>
      <p>
        Third-party vendors, including Google, use cookies to serve ads. Google&apos;s use of
        advertising cookies enables it and its partners to serve ads based on your visit to
        our site and/or other sites on the Internet.
      </p>

      <h2>Analytics</h2>
      <p>
        We may use Google Analytics or similar services to understand how visitors use our
        website. These services collect anonymous usage data to help us improve our content and
        tools.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To operate and improve our calculators and website</li>
        <li>To analyse usage patterns and improve user experience</li>
        <li>To display relevant advertisements</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical measures to protect information transmitted to our
        website. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices of those sites.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our Service is not directed to individuals under 18. We do not knowingly collect
        personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with an updated revision date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us via our{' '}
        <a href="/contact">Contact page</a>.
      </p>
    </article>
  );
}
