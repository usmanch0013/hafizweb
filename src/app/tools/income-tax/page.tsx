import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import IncomeTaxCalculator from '@/components/calculators/IncomeTaxCalculator';
import IncomeTaxGuide from '@/components/guides/IncomeTaxGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('income-tax');

export default function IncomeTaxPage() {
  return (
    <>
      <ToolSeoJsonLd slug="income-tax" toolName="Income Tax Calculator Australia" breadcrumbLabel="Income Tax" />
      <ToolLayout
        title="Australian Income Tax Calculator"
        description="Calculate your income tax liability, marginal rate and estimated take-home pay."
        breadcrumb="Income Tax"
        guide={<IncomeTaxGuide />}
      >
        <IncomeTaxCalculator />
      </ToolLayout>
    </>
  );
}
