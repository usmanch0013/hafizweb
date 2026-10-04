export type BlogCategory = 'Tax' | 'Property' | 'Investment' | 'Business' | 'General';
export type BlogStatus = 'draft' | 'published';

export interface BlogSeoFields {
  seoTitle: string;
  focusKeyword: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
}

export interface BlogPost extends BlogSeoFields {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  status: BlogStatus;
  author: string;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export type BlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  status: BlogStatus;
  author?: string;
  coverImage?: string;
} & Partial<BlogSeoFields>;

export const BLOG_CATEGORIES: BlogCategory[] = ['Tax', 'Property', 'Investment', 'Business', 'General'];

export const DEFAULT_SEO: BlogSeoFields = {
  seoTitle: '',
  focusKeyword: '',
  metaDescription: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  twitterTitle: '',
  twitterDescription: '',
  canonicalUrl: '',
  noIndex: false,
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function estimateReadTime(content: string): number {
  const plain = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = plain.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatBlogDate(iso: string): string {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export function normalizeSeo(input: Partial<BlogSeoFields>, fallback: { title: string; excerpt: string; slug: string; coverImage?: string }): BlogSeoFields {
  return {
    seoTitle: input.seoTitle?.trim() || fallback.title,
    focusKeyword: input.focusKeyword?.trim() || '',
    metaDescription: input.metaDescription?.trim() || fallback.excerpt.slice(0, 160),
    ogTitle: input.ogTitle?.trim() || input.seoTitle?.trim() || fallback.title,
    ogDescription: input.ogDescription?.trim() || input.metaDescription?.trim() || fallback.excerpt.slice(0, 160),
    ogImage: input.ogImage?.trim() || fallback.coverImage || '',
    twitterTitle: input.twitterTitle?.trim() || input.ogTitle?.trim() || input.seoTitle?.trim() || fallback.title,
    twitterDescription: input.twitterDescription?.trim() || input.ogDescription?.trim() || input.metaDescription?.trim() || fallback.excerpt.slice(0, 160),
    canonicalUrl: input.canonicalUrl?.trim() || '',
    noIndex: input.noIndex ?? false,
  };
}

export function seoFromPost(post: BlogPost): BlogSeoFields {
  return {
    seoTitle: post.seoTitle || post.title,
    focusKeyword: post.focusKeyword || '',
    metaDescription: post.metaDescription || post.excerpt,
    ogTitle: post.ogTitle || post.seoTitle || post.title,
    ogDescription: post.ogDescription || post.metaDescription || post.excerpt,
    ogImage: post.ogImage || post.coverImage || '',
    twitterTitle: post.twitterTitle || post.ogTitle || post.seoTitle || post.title,
    twitterDescription: post.twitterDescription || post.ogDescription || post.metaDescription || post.excerpt,
    canonicalUrl: post.canonicalUrl || '',
    noIndex: post.noIndex ?? false,
  };
}
