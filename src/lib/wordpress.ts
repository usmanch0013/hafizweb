import { BLOG_URL } from './site';

export interface WordPressPostPreview {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  link: string;
  date: string;
  coverImage?: string;
  category?: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

type WpApiPost = {
  id: number;
  slug: string;
  link: string;
  date: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  _embedded?: {
    'wp:featuredmedia'?: { source_url?: string }[];
    'wp:term'?: { name?: string; taxonomy?: string }[][];
  };
};

/** Latest posts from the WordPress blog subdomain (REST API). */
export async function getWordPressPosts(limit = 6): Promise<WordPressPostPreview[]> {
  if (!BLOG_URL) return [];

  try {
    const url = new URL(`${BLOG_URL}/wp-json/wp/v2/posts`);
    url.searchParams.set('per_page', String(limit));
    url.searchParams.set('_embed', '1');
    url.searchParams.set('orderby', 'date');
    url.searchParams.set('order', 'desc');

    const res = await fetch(url.toString(), {
      next: { revalidate: 300 },
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) return [];

    const data = (await res.json()) as WpApiPost[];
    if (!Array.isArray(data)) return [];

    return data.map((post) => {
      const terms = post._embedded?.['wp:term']?.flat() ?? [];
      const category = terms.find((t) => t.taxonomy === 'category')?.name;

      return {
        id: post.id,
        slug: post.slug,
        title: stripHtml(post.title?.rendered || ''),
        excerpt: stripHtml(post.excerpt?.rendered || ''),
        link: post.link,
        date: post.date,
        coverImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
        category,
      };
    });
  } catch {
    return [];
  }
}
