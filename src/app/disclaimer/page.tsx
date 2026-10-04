import type { Metadata } from 'next';
import { staticPageMetadata } from '@/lib/seo';

export const metadata: Metadata = staticPageMetadata('disclaimer');

export default function DisclaimerPage() {
  return (
    <article className="prose container-main mx-auto max-w-3xl pb-16 pt-8">
      <h1>Disclaimer</h1>

      <p>
        The information provided by AusCGT (auscgt.com.au) is for general informational and
        educational purposes only. All information on the site is provided in good faith, however
        we make no representation or warranty of any kind, express or implied, regarding the
        accuracy, adequacy, validity, reliability, availability, or completeness of any
        information on the site.
      </p>

      <h2>Not Financial or Tax Advice</h2>
      <p>
        Under no circumstance shall we have any liability to you for any loss or damage of any
        kind incurred as a result of the use of the site or reliance on any information provided
        on the site. Your use of the site and your reliance on any information on the site is
        solely at your own risk.
      </p>
      <p>
        Our calculators provide estimates only. They should not be used as a substitute for
        professional tax, legal, or financial advice from a qualified adviser, registered tax
        agent, or certified practising accountant.
      </p>

      <h2>Tax Rate Changes</h2>
      <p>
        Australian tax rates, thresholds, and rules change regularly. While we endeavour to
        keep our calculators updated, there may be delays between legislative changes and
        updates to our tools. Always verify current rates with the Australian Taxation Office (ATO).
      </p>

      <h2>External Links Disclaimer</h2>
      <p>
        The site may contain links to external websites that are not provided or maintained by
        us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any
        information on these external websites.
      </p>

      <h2>Errors and Omissions</h2>
      <p>
        While we have made every attempt to ensure that the information contained in this site
        has been obtained from reliable sources, AusCGT is not responsible for any errors or
        omissions, or for the results obtained from the use of this information.
      </p>
    </article>
  );
}
