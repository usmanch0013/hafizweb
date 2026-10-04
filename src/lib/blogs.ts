import { promises as fs } from 'fs';
import path from 'path';
import type { BlogPost } from './blog-types';
import { normalizeSeo } from './blog-types';

const DATA_PATH = path.join(process.cwd(), 'data', 'blogs.json');

function migratePost(raw: Record<string, unknown>): BlogPost {
  const post = raw as unknown as BlogPost;
  const seo = normalizeSeo(post, {
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    coverImage: post.coverImage,
  });
  return { ...post, ...seo };
}

async function readAll(): Promise<BlogPost[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    const parsed = JSON.parse(raw) as Record<string, unknown>[];
    return parsed.map(migratePost);
  } catch {
    return [];
  }
}

export async function getPublishedPosts(limit?: number): Promise<BlogPost[]> {
  const posts = (await readAll())
    .filter((p) => p.status === 'published')
    .sort((a, b) => new Date(b.publishedAt || b.updatedAt).getTime() - new Date(a.publishedAt || a.updatedAt).getTime());
  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await readAll();
  return posts.find((p) => p.slug === slug);
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts();
  return posts.map((p) => p.slug);
}
