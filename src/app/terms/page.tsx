import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata('terms');

export default function TermsPage() {
  return (
    <article className="prose container-main mx-auto max-w-3xl pb-16 pt-8">
      <h1>Terms of Service</h1>
      <p><em>Last updated: September 2026</em></p>

      <p>
        By accessing and using AusCGT (auscgt.com.au), you agree to be bound by these Terms of
        Service. If you do not agree, please do not use our Service.
      </p>

      <h2>Use of Service</h2>
      <p>
        AusCGT provides free online finance and tax calculators for informational and educational
        purposes. You may use our calculators for personal, non-commercial purposes without
        registration.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        The information and calculators provided on this website are for general informational
        purposes only. They do not constitute professional tax, legal, financial, or investment
        advice. Always consult a qualified tax agent, accountant, or financial adviser before
        making financial decisions.
      </p>

      <h2>Accuracy of Calculations</h2>
      <p>
        While we strive to keep our calculators accurate and up to date with current Australian
        tax rates and regulations, we make no warranties about the accuracy, completeness, or
        reliability of any calculations. Tax laws change frequently and individual circumstances
        vary.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, and calculator logic, is
        the property of AusCGT and is protected by applicable copyright laws. You may not
        reproduce, distribute, or create derivative works without our written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, AusCGT shall not be liable for any direct,
        indirect, incidental, special, or consequential damages arising from your use of our
        Service or reliance on any calculations or information provided.
      </p>

      <h2>Third-Party Advertising</h2>
      <p>
        Our website may display advertisements from third parties, including Google AdSense.
        We are not responsible for the content of third-party advertisements or the practices
        of advertisers.
      </p>

      <h2>Modifications</h2>
      <p>
        We reserve the right to modify these Terms at any time. Continued use of the Service
        after changes constitutes acceptance of the modified Terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of Australia. Any disputes shall be subject to the
        exclusive jurisdiction of the courts of Australia.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, please visit our <a href="/contact">Contact page</a>.
      </p>
    </article>
  );
}
