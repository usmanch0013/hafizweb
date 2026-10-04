import { NextResponse } from 'next/server';
import { getPublishedPosts } from '@/lib/blogs';

export async function GET() {
  const posts = await getPublishedPosts();
  return NextResponse.json(
    posts.map(({ content, ...rest }) => rest)
  );
}
