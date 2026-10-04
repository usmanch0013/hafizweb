import type { IconName } from '@/components/icons/ToolIcons';

export type ToolCategory = 'tax' | 'property' | 'investment' | 'business';

export interface Tool {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: IconName;
  category: ToolCategory;
  href: string;
  color: string;
}

export const TOOLS: Tool[] = [
  {
    slug: 'cgt',
    name: 'Capital Gains Tax Calculator',
    shortName: 'CGT Calculator',
    description: 'Estimate CGT on property, shares, crypto and other investments with the 50% discount.',
    icon: 'cgt',
    category: 'tax',
    href: '/tools/cgt',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    slug: 'income-tax',
    name: 'Income Tax Calculator',
    shortName: 'Income Tax',
    description: 'Calculate Australian income tax, marginal rate and take-home pay for 2026-27.',
    icon: 'income-tax',
    category: 'tax',
    href: '/tools/income-tax',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    slug: 'gst',
    name: 'GST Calculator',
    shortName: 'GST Calculator',
    description: 'Add or remove 10% GST from any amount — ideal for invoices and business pricing.',
    icon: 'gst',
    category: 'business',
    href: '/tools/gst',
    color: 'from-violet-600 to-purple-600',
  },
  {
    slug: 'stamp-duty',
    name: 'Stamp Duty Calculator',
    shortName: 'Stamp Duty',
    description: 'Estimate property transfer stamp duty for NSW, VIC, QLD and other states.',
    icon: 'stamp-duty',
    category: 'property',
    href: '/tools/stamp-duty',
    color: 'from-orange-500 to-amber-600',
  },
  {
    slug: 'mortgage',
    name: 'Mortgage Repayment Calculator',
    shortName: 'Mortgage',
    description: 'Work out monthly home loan repayments, total interest and loan amortisation.',
    icon: 'mortgage',
    category: 'property',
    href: '/tools/mortgage',
    color: 'from-sky-600 to-blue-600',
  },
  {
    slug: 'rental-yield',
    name: 'Rental Yield Calculator',
    shortName: 'Rental Yield',
    description: 'Calculate gross and net rental yield on investment properties in Australia.',
    icon: 'rental-yield',
    category: 'property',
    href: '/tools/rental-yield',
    color: 'from-rose-500 to-pink-600',
  },
  {
    slug: 'super',
    name: 'Superannuation Calculator',
    shortName: 'Super Calculator',
    description: 'Project your super balance at retirement with employer and voluntary contributions.',
    icon: 'super',
    category: 'investment',
    href: '/tools/super',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    slug: 'compound-interest',
    name: 'Compound Interest Calculator',
    shortName: 'Compound Interest',
    description: 'See how your savings grow over time with regular contributions and compounding.',
    icon: 'compound-interest',
    category: 'investment',
    href: '/tools/compound-interest',
    color: 'from-indigo-600 to-violet-600',
  },
];

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  tax: 'Tax Tools',
  property: 'Property Tools',
  investment: 'Investment Tools',
  business: 'Business Tools',
};

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
