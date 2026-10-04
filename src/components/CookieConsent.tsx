'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-600">
          We use cookies to improve your experience and may show personalised ads via Google
          AdSense. By continuing, you agree to our{' '}
          <Link href="/privacy" className="font-medium text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
