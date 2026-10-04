import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompoundInterestCalculator from '@/components/calculators/CompoundInterestCalculator';
import CompoundInterestGuide from '@/components/guides/CompoundInterestGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('compound-interest');

export default function CompoundInterestPage() {
  return (
    <>
      <ToolSeoJsonLd
        slug="compound-interest"
        toolName="Compound Interest Calculator Australia"
        breadcrumbLabel="Compound Interest"
      />
      <ToolLayout
        title="Compound Interest Calculator"
        description="See how your savings grow with regular contributions and compounding returns."
        breadcrumb="Compound Interest"
        guide={<CompoundInterestGuide />}
      >
        <CompoundInterestCalculator />
      </ToolLayout>
    </>
  );
}
