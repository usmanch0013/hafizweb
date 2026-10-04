import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import RentalYieldCalculator from '@/components/calculators/RentalYieldCalculator';
import RentalYieldGuide from '@/components/guides/RentalYieldGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('rental-yield');

export default function RentalYieldPage() {
  return (
    <>
      <ToolSeoJsonLd slug="rental-yield" toolName="Rental Yield Calculator Australia" breadcrumbLabel="Rental Yield" />
      <ToolLayout
        title="Rental Yield Calculator"
        description="Calculate gross and net rental yield on Australian investment properties."
        breadcrumb="Rental Yield"
        guide={<RentalYieldGuide />}
      >
        <RentalYieldCalculator />
      </ToolLayout>
    </>
  );
}
