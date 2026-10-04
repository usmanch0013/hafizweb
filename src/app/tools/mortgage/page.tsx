import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import MortgageCalculator from '@/components/calculators/MortgageCalculator';
import MortgageGuide from '@/components/guides/MortgageGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('mortgage');

export default function MortgagePage() {
  return (
    <>
      <ToolSeoJsonLd slug="mortgage" toolName="Mortgage Repayment Calculator Australia" breadcrumbLabel="Mortgage" />
      <ToolLayout
        title="Mortgage Repayment Calculator"
        description="Estimate monthly home loan repayments and total interest over your loan term."
        breadcrumb="Mortgage"
        guide={<MortgageGuide />}
      >
        <MortgageCalculator />
      </ToolLayout>
    </>
  );
}
