import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import GSTCalculator from '@/components/calculators/GSTCalculator';
import GSTGuide from '@/components/guides/GSTGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('gst');

export default function GSTPage() {
  return (
    <>
      <ToolSeoJsonLd slug="gst" toolName="GST Calculator Australia" breadcrumbLabel="GST Calculator" />
      <ToolLayout
        title="GST Calculator"
        description="Quickly add or remove 10% Goods and Services Tax from any Australian dollar amount."
        breadcrumb="GST"
        guide={<GSTGuide />}
      >
        <GSTCalculator />
      </ToolLayout>
    </>
  );
}
