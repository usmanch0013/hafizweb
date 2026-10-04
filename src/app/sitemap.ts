import type { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/tools';
import { SITE_URL } from '@/lib/seo';
import { getWordPressPostSlugs } from '@/lib/wordpress';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tools/cgt`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
  ];

  for (const tool of TOOLS.filter((t) => t.slug !== 'cgt')) {
    entries.push({
      url: `${baseUrl}${tool.href}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  }

  try {
    const slugs = await getWordPressPostSlugs();
    for (const s of slugs) {
      entries.push({
        url: `${baseUrl}/blog/${s.slug}`,
        lastModified: s.modified ? new Date(s.modified) : now,
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  } catch {
    // sitemap still serves without blog posts if WordPress is unreachable
  }

  return entries;
}
