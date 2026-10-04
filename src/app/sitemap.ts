import type { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/tools';
import { getPublishedPosts } from '@/lib/blogs';
import { SITE_URL } from '@/lib/seo';
import { BLOG_URL } from '@/lib/site';

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
  ];

  for (const tool of TOOLS.filter((t) => t.slug !== 'cgt')) {
    entries.push({
      url: `${baseUrl}${tool.href}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  }

  if (!BLOG_URL) {
    entries.push({ url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 });
    const posts = await getPublishedPosts();
    for (const post of posts) {
      entries.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  }

  return entries;
}
