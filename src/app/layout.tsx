import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import JsonLd from '@/components/seo/JsonLd';
import Script from 'next/script';
import { HOME_SEO, SITE_NAME, buildMetadata, organizationJsonLd } from '@/lib/seo';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  ...buildMetadata(HOME_SEO),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cgthub.au'),
  title: {
    default: HOME_SEO.title,
    template: `%s | ${SITE_NAME}`,
  },
  authors: [{ name: SITE_NAME, url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cgthub.au' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Finance',
  applicationName: SITE_NAME,
  formatDetection: { email: false, telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="en-AU" className={plusJakarta.variable}>
      <body className={`${plusJakarta.className} flex min-h-screen flex-col bg-[#fafafa] antialiased`}>
        <JsonLd data={organizationJsonLd()} />
        {adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
