import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import Calculator from '@/components/Calculator';
import CGTGuide from '@/components/guides/CGTGuide';
import ToolSeoJsonLd from '@/components/seo/ToolSeoJsonLd';
import { toolPageMetadata } from '@/lib/seo';

export const metadata: Metadata = toolPageMetadata('cgt');

export default function CGTPage() {
  return (
    <>
      <ToolSeoJsonLd slug="cgt" toolName="Capital Gains Tax Calculator Australia" breadcrumbLabel="CGT Calculator" />
      <ToolLayout
        title="Australian Capital Gains Tax Calculator"
        description="Estimate your potential CGT liability on property, shares, and other investments in seconds."
        breadcrumb="CGT Calculator"
        guide={<CGTGuide />}
        useGuideNav
      >
        <Calculator />
      </ToolLayout>
    </>
  );
}
