import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import SuperCalculator from '@/components/calculators/SuperCalculator';
import SuperGuide from '@/components/guides/SuperGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('super');

export default function SuperPage() {
  return (
    <>
      <ToolSeoJsonLd slug="super" toolName="Superannuation Calculator Australia" breadcrumbLabel="Super Calculator" />
      <ToolLayout
        title="Superannuation Calculator"
        description="Project your super balance at retirement with employer and voluntary contributions."
        breadcrumb="Super"
        guide={<SuperGuide />}
      >
        <SuperCalculator />
      </ToolLayout>
    </>
  );
}
