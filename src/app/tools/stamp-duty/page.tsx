import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import StampDutyCalculator from '@/components/calculators/StampDutyCalculator';
import StampDutyGuide from '@/components/guides/StampDutyGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('stamp-duty');

export default function StampDutyPage() {
  return (
    <>
      <ToolSeoJsonLd slug="stamp-duty" toolName="Stamp Duty Calculator Australia" breadcrumbLabel="Stamp Duty" />
      <ToolLayout
        title="Stamp Duty Calculator"
        description="Estimate property transfer stamp duty for all Australian states and territories."
        breadcrumb="Stamp Duty"
        guide={<StampDutyGuide />}
      >
        <StampDutyCalculator />
      </ToolLayout>
    </>
  );
}
