import type { Metadata } from 'next';
import { CURRENT_FY } from './site';

export const SITE_NAME = 'AusCGT';
export const SITE_TAGLINE = 'Free Australian Finance & Tax Calculators';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cgthub.au';
export const SITE_EMAIL = 'contact@cgthub.au';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export interface ToolSeo extends PageSeo {
  slug: string;
  applicationCategory: string;
}

function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  return path === '' || path === '/' ? base : `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Build full Next.js Metadata with canonical, Open Graph and Twitter cards */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === '' || path === '/' ? title : title;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      url,
      siteName: SITE_NAME,
      title: `${fullTitle} | ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fullTitle} | ${SITE_NAME}`,
      description,
    },
  };
}

export const HOME_SEO: PageSeo = {
  title: `Australian Capital Gains Tax Calculator ${CURRENT_FY}`,
  description: `Free Australian CGT calculator for ${CURRENT_FY}. Estimate capital gains tax on property, shares, crypto and investments. Includes complete CGT guide, 50% discount and ATO rates.`,
  path: '/',
  keywords: [
    'capital gains tax calculator australia',
    'cgt calculator',
    'australian cgt calculator',
    'property cgt calculator',
    'cgt on shares australia',
    'crypto cgt calculator australia',
    `cgt calculator ${CURRENT_FY}`,
    'capital gains tax guide australia',
  ],
};

export const TOOLS_INDEX_SEO: PageSeo = {
  title: 'All Finance Calculators Australia',
  description: `Browse ${CURRENT_FY} Australian finance calculators — CGT, income tax, GST, stamp duty, mortgage, super, rental yield and compound interest. Free and private.`,
  path: '/tools',
  keywords: [
    'australian finance calculators',
    'tax calculators australia',
    'free tax calculator australia',
    'property calculators australia',
  ],
};

export const TOOL_SEO: Record<string, Omit<ToolSeo, 'path'> & { path?: string }> = {
  cgt: {
    slug: 'cgt',
    title: `Capital Gains Tax Calculator Australia ${CURRENT_FY}`,
    description: `Free CGT calculator for Australian residents. Estimate capital gains tax on property, shares, crypto and investments with the 50% discount. Updated for ${CURRENT_FY}.`,
    keywords: [
      'capital gains tax calculator australia',
      'cgt calculator',
      'property cgt calculator',
      'investment property cgt',
      '50 percent cgt discount',
      `cgt rates ${CURRENT_FY}`,
    ],
    applicationCategory: 'FinanceApplication',
  },
  'income-tax': {
    slug: 'income-tax',
    title: `Income Tax Calculator Australia ${CURRENT_FY}`,
    description: `Calculate Australian income tax, Medicare levy, marginal rate and take-home pay for ${CURRENT_FY}. Free resident individual tax estimator.`,
    keywords: [
      'income tax calculator australia',
      'tax calculator australia',
      'take home pay calculator',
      'medicare levy calculator',
      `tax brackets ${CURRENT_FY}`,
    ],
    applicationCategory: 'FinanceApplication',
  },
  gst: {
    slug: 'gst',
    title: 'GST Calculator Australia — Add or Remove 10% GST',
    description: 'Free Australian GST calculator. Add or remove 10% Goods and Services Tax from any amount. Ideal for invoices, BAS and business pricing.',
    keywords: ['gst calculator australia', 'add gst calculator', 'remove gst calculator', '10 percent gst', 'gst inclusive exclusive'],
    applicationCategory: 'BusinessApplication',
  },
  'stamp-duty': {
    slug: 'stamp-duty',
    title: 'Stamp Duty Calculator Australia — All States',
    description: 'Estimate property stamp duty for NSW, VIC, QLD, WA, SA, TAS, ACT and NT. Free transfer duty calculator with first home buyer concessions.',
    keywords: [
      'stamp duty calculator australia',
      'property stamp duty calculator',
      'transfer duty calculator nsw',
      'stamp duty victoria',
      'first home buyer stamp duty',
    ],
    applicationCategory: 'FinanceApplication',
  },
  mortgage: {
    slug: 'mortgage',
    title: 'Mortgage Repayment Calculator Australia',
    description: 'Calculate monthly home loan repayments, total interest and loan cost. Free Australian mortgage calculator for P&I and interest-only loans.',
    keywords: [
      'mortgage calculator australia',
      'home loan repayment calculator',
      'home loan calculator',
      'interest only mortgage calculator',
    ],
    applicationCategory: 'FinanceApplication',
  },
  'rental-yield': {
    slug: 'rental-yield',
    title: 'Rental Yield Calculator Australia',
    description: 'Calculate gross and net rental yield on investment properties. Free Australian rental return calculator for landlords and investors.',
    keywords: [
      'rental yield calculator australia',
      'investment property yield calculator',
      'gross rental yield',
      'net rental yield calculator',
    ],
    applicationCategory: 'FinanceApplication',
  },
  super: {
    slug: 'super',
    title: `Superannuation Calculator Australia ${CURRENT_FY}`,
    description: `Project your super balance at retirement with employer SG and voluntary contributions. Free super calculator updated for ${CURRENT_FY}.`,
    keywords: [
      'superannuation calculator australia',
      'super calculator',
      'retirement super projection',
      'employer super contribution calculator',
    ],
    applicationCategory: 'FinanceApplication',
  },
  'compound-interest': {
    slug: 'compound-interest',
    title: 'Compound Interest Calculator Australia',
    description: 'See how savings grow with compound interest and regular contributions. Free investment growth calculator for Australian savers.',
    keywords: [
      'compound interest calculator australia',
      'savings calculator',
      'investment growth calculator',
      'compound interest with contributions',
    ],
    applicationCategory: 'FinanceApplication',
  },
};

export type ToolSlug = keyof typeof TOOL_SEO;

export function toolPageMetadata(slug: ToolSlug): Metadata {
  const seo = TOOL_SEO[slug];
  const tool = seo;
  return buildMetadata({
    title: tool.title,
    description: tool.description,
    path: `/tools/${slug}`,
    keywords: tool.keywords,
  });
}

export const STATIC_PAGES: Record<string, PageSeo> = {
  about: {
    title: 'About AusCGT — Free Australian Finance Calculators',
    description: 'Learn about AusCGT — free, private Australian tax and finance calculators built for everyday Australians. No sign-up required.',
    path: '/about',
    keywords: ['about auscgt', 'australian finance tools', 'free tax calculators'],
  },
  contact: {
    title: 'Contact AusCGT',
    description: 'Contact AusCGT for questions, feedback, calculator issues or partnership enquiries. We respond within 2–3 business days.',
    path: '/contact',
    keywords: ['contact auscgt', 'calculator support'],
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'AusCGT privacy policy. Learn how we handle cookies, analytics and your data. All calculations run locally in your browser.',
    path: '/privacy',
    noIndex: false,
  },
  terms: {
    title: 'Terms of Service',
    description: 'AusCGT terms of service. Conditions for using our free Australian finance and tax calculators.',
    path: '/terms',
  },
  disclaimer: {
    title: 'Disclaimer',
    description: 'AusCGT disclaimer. Our calculators provide estimates only and do not constitute professional tax or financial advice.',
    path: '/disclaimer',
  },
};

export function staticPageMetadata(key: keyof typeof STATIC_PAGES): Metadata {
  const page = STATIC_PAGES[key];
  return buildMetadata(page);
}

/** Organization schema — site-wide */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    email: SITE_EMAIL,
    areaServed: { '@type': 'Country', name: 'Australia' },
  };
}

/** WebSite schema with search — homepage */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: HOME_SEO.description,
    inLanguage: 'en-AU',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/tools?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** WebApplication schema for calculator tools */
export function calculatorJsonLd(slug: ToolSlug, toolName: string) {
  const seo = TOOL_SEO[slug];
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolName,
    url: absoluteUrl(`/tools/${slug}`),
    applicationCategory: seo.applicationCategory,
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
    description: seo.description,
    inLanguage: 'en-AU',
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}

/** BreadcrumbList for inner pages */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage schema */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

/** ItemList of all calculators — tools index page */
export function toolsListJsonLd(tools: { name: string; href: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Australian Finance Calculators',
    description: TOOLS_INDEX_SEO.description,
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'WebApplication',
        name: tool.name,
        url: absoluteUrl(tool.href),
        description: tool.description,
      },
    })),
  };
}
export function homePageJsonLd(faqs: { q: string; a: string }[]) {
  return [
    websiteJsonLd(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: `Australian Capital Gains Tax Calculator ${CURRENT_FY}`,
      url: SITE_URL,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
      description: HOME_SEO.description,
      inLanguage: 'en-AU',
      provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    },
    faqJsonLd(faqs),
  ];
}
