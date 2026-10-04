import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, calculatorJsonLd, type ToolSlug } from '@/lib/seo';

interface ToolSeoJsonLdProps {
  slug: ToolSlug;
  toolName: string;
  breadcrumbLabel: string;
}

export default function ToolSeoJsonLd({ slug, toolName, breadcrumbLabel }: ToolSeoJsonLdProps) {
  return (
    <JsonLd
      data={[
        calculatorJsonLd(slug, toolName),
        breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Calculators', path: '/tools' },
          { name: breadcrumbLabel, path: `/tools/${slug}` },
        ]),
      ]}
    />
  );
}
