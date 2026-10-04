import { BLOG_URL } from './site';

/** Freshness for WordPress content: new articles appear on the main domain within ~1 minute. */
const REVALIDATE_SECONDS = 60;

export interface WordPressPostPreview {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  link: string;
  date: string;
  modified: string;
  coverImage?: string;
  category?: string;
}

export interface WordPressPost extends WordPressPostPreview {
  content: string;
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
  modified?: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  _embedded?: {
    'wp:featuredmedia'?: { source_url?: string }[];
    'wp:term'?: { name?: string; taxonomy?: string }[][];
  };
};

function toPreview(post: WpApiPost): WordPressPostPreview {
  const terms = post._embedded?.['wp:term']?.flat() ?? [];
  const category = terms.find((t) => t.taxonomy === 'category')?.name;

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title?.rendered || ''),
    excerpt: stripHtml(post.excerpt?.rendered || ''),
    link: post.link,
    date: post.date,
    modified: post.modified || post.date,
    coverImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    category,
  };
}

async function wpGet<T>(params: Record<string, string>): Promise<T | null> {
  if (!BLOG_URL) return null;
  try {
    const url = new URL(`${BLOG_URL}/wp-json/wp/v2/posts`);
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** Latest posts from the WordPress blog subdomain (REST API). */
export async function getWordPressPosts(limit = 6): Promise<WordPressPostPreview[]> {
  const data = await wpGet<WpApiPost[]>({
    per_page: String(limit),
    _embed: '1',
    orderby: 'date',
    order: 'desc',
  });
  if (!Array.isArray(data)) return [];
  return data.map(toPreview);
}

/** Single post by slug, with full HTML content. */
export async function getWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const data = await wpGet<WpApiPost[]>({ slug, _embed: '1' });
  const post = Array.isArray(data) ? data[0] : null;
  if (!post) return null;
  return { ...toPreview(post), content: post.content?.rendered || '' };
}

/** All published post slugs + modified dates (for sitemap / static params). */
export async function getWordPressPostSlugs(): Promise<{ slug: string; modified: string }[]> {
  const data = await wpGet<WpApiPost[]>({
    per_page: '100',
    _fields: 'slug,modified',
    orderby: 'date',
    order: 'desc',
  });
  if (!Array.isArray(data)) return [];
  return data.map((p) => ({ slug: p.slug, modified: p.modified || '' }));
}
