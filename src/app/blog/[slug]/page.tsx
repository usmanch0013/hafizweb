import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatBlogDate, estimateReadTime } from '@/lib/blog-types';
import { buildMetadata, breadcrumbJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import WpBlogCard from '@/components/blog/WpBlogCard';
import {
  getWordPressPostBySlug,
  getWordPressPosts,
  getWordPressPostSlugs,
} from '@/lib/wordpress';
import type { Metadata } from 'next';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getWordPressPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);
  if (!post) return { title: 'Not Found' };

  const baseUrl = SITE_URL.replace(/\/$/, '');
  const ogImage = post.coverImage;

  return buildMetadata({
    title: post.title,
    description: post.excerpt || `Read ${post.title} — Australian tax guides from CGT Hub.`,
    path: `/blog/${post.slug}`,
    keywords: [post.category?.toLowerCase() || '', 'australia', 'tax'].filter(Boolean),
    ...(ogImage
      ? {
          openGraph: {
            images: [{ url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}` }],
          },
        }
      : {}),
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) notFound();

  const readTime = estimateReadTime(post.content);
  const publishedDate = post.date;
  const related = (await getWordPressPosts(4)).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="blog-post-page">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: publishedDate,
            dateModified: post.modified,
            author: { '@type': 'Organization', name: SITE_NAME },
            publisher: { '@type': 'Organization', name: SITE_NAME },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_URL.replace(/\/$/, '')}/blog/${post.slug}`,
            },
            ...(post.category ? { articleSection: post.category } : {}),
            ...(post.coverImage ? { image: post.coverImage } : {}),
          },
        ]}
      />

      <section className="border-b border-slate-200/70 bg-slate-50/50 py-12 md:py-16">
        <div className="container-main mx-auto max-w-3xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            {post.category && (
              <span className="rounded-full bg-teal-50 px-3 py-1 font-semibold text-teal-700">
                {post.category}
              </span>
            )}
            <time dateTime={publishedDate}>{formatBlogDate(publishedDate)}</time>
            <span aria-hidden>·</span>
            <span>{readTime} min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {post.coverImage && (
        <div className="container-main mx-auto max-w-4xl pt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl border border-slate-200 object-cover"
          />
        </div>
      )}

      <section className="bg-white pb-12 pt-8 md:pb-16 md:pt-10">
        <div className="container-main">
          <div className="guide-card blog-post-body mx-auto max-w-3xl">
            <div
              className="guide-article"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-teal-100 bg-teal-50/60 p-6 text-center md:p-8">
            <h2 className="text-xl font-bold text-slate-900">Try our free Australian tax calculators</h2>
            <p className="mt-2 text-slate-500">
              Estimate your CGT, income tax, stamp duty and super in seconds.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/tools/cgt" className="nav-cta px-6 py-2.5">
                CGT Calculator
              </Link>
              <Link href="/tools" className="btn-outline">
                All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-[#fafafa] py-12 md:py-16">
          <div className="container-main">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <span className="section-label">Keep reading</span>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Related Articles</h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden text-sm font-medium text-teal-700 hover:underline sm:inline"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <WpBlogCard key={r.id} post={r} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
