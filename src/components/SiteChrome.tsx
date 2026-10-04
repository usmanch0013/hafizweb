'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex-grow">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
