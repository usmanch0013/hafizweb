import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { BLOG_URL } from '@/lib/site';
import { getPostBySlug, getPublishedPosts } from '@/lib/blogs';
import { formatBlogDate, estimateReadTime, seoFromPost } from '@/lib/blog-types';
import { prepareBlogHtml } from '@/lib/blog-content';
import { buildMetadata, breadcrumbJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostTocSidebar, { BlogPostTocMobile } from '@/components/blog/BlogPostToc';
import BlogCard from '@/components/blog/BlogCard';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || post.status !== 'published') return { title: 'Not Found' };

  const seo = seoFromPost(post);
  const meta = buildMetadata({
    title: seo.seoTitle || post.title,
    description: seo.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [seo.focusKeyword, post.category.toLowerCase(), 'australia'].filter(Boolean),
    noIndex: seo.noIndex,
  });

  const ogImage = seo.ogImage || post.coverImage;
  const baseUrl = SITE_URL.replace(/\/$/, '');

  return {
    ...meta,
    alternates: seo.canonicalUrl ? { canonical: seo.canonicalUrl } : meta.alternates,
    openGraph: {
      ...meta.openGraph,
      title: seo.ogTitle || seo.seoTitle || post.title,
      description: seo.ogDescription || seo.metaDescription,
      ...(ogImage ? { images: [{ url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}` }] } : {}),
    },
    twitter: {
      ...meta.twitter,
      title: seo.twitterTitle || seo.ogTitle || seo.seoTitle || post.title,
      description: seo.twitterDescription || seo.ogDescription || seo.metaDescription,
      ...(ogImage ? { images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (BLOG_URL) {
    redirect(`${BLOG_URL}/${slug}/`);
  }

  const post = await getPostBySlug(slug);

  if (!post || post.status !== 'published') notFound();

  const readTime = estimateReadTime(post.content);
  const { html, headings } = prepareBlogHtml(post.content);
  const related = (await getPublishedPosts(4)).filter((p) => p.slug !== slug).slice(0, 3);
  const publishedDate = post.publishedAt || post.createdAt;
  const hasToc = headings.length >= 2;

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
            dateModified: post.updatedAt,
            author: { '@type': 'Organization', name: post.author },
            publisher: { '@type': 'Organization', name: SITE_NAME },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `/blog/${post.slug}` },
            articleSection: post.category,
            ...(post.coverImage ? { image: post.coverImage } : {}),
          },
        ]}
      />

      <BlogPostHero title={post.title} category={post.category} coverImage={post.coverImage} />

      <section className="bg-white pb-12 pt-8 md:pb-16 md:pt-10">
        <div className="container-main">
          <div className={`mx-auto grid max-w-6xl grid-cols-1 gap-8 ${hasToc ? 'lg:grid-cols-12 lg:gap-10' : ''}`}>
            {hasToc && <BlogPostTocSidebar headings={headings} />}

            <div className={hasToc ? 'lg:col-span-9' : 'mx-auto max-w-3xl'}>
              {hasToc && <BlogPostTocMobile headings={headings} />}

              <header className="blog-post-header">
                <h1 className="blog-post-title">{post.title}</h1>

                {post.excerpt && <p className="blog-post-excerpt">{post.excerpt}</p>}

                <div className="blog-post-meta">
                  <div className="blog-post-meta__author">
                    <span className="blog-post-meta__avatar" aria-hidden>
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                    <span>{post.author}</span>
                  </div>
                  <span className="blog-post-meta__dot" aria-hidden>·</span>
                  <time dateTime={publishedDate}>{formatBlogDate(publishedDate)}</time>
                  <span className="blog-post-meta__dot" aria-hidden>·</span>
                  <span>{readTime} min read</span>
                </div>
              </header>

              <div className="guide-card blog-post-body mt-8 md:mt-10">
                <div
                  className="guide-article"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>

              <div className="blog-post-author-box mt-8">
                <div className="blog-post-author-box__avatar" aria-hidden>
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Written by</p>
                  <p className="mt-1 font-semibold text-slate-900">{post.author}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Australian tax and finance guides from the AusCGT team.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/tools" className="btn-outline text-sm">
                  Browse calculators
                </Link>
                <Link href="/blog" className="text-sm font-medium text-teal-700 hover:underline">
                  ← Back to blog
                </Link>
              </div>
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
                <Link href="/blog" className="hidden text-sm font-medium text-teal-700 hover:underline sm:inline">
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <BlogCard key={r.id} post={r} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 bg-white py-12 md:py-14">
        <div className="container-main">
          <div className="blog-post-cta mx-auto max-w-3xl text-center">
            <span className="section-label mx-auto">Free tools</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Calculate your tax with AusCGT</h2>
            <p className="mt-3 text-slate-500">
              Use our free Australian calculators for CGT, income tax, stamp duty, super and more.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/" className="nav-cta px-6 py-2.5">
                CGT Calculator
              </Link>
              <Link href="/tools" className="btn-outline">
                All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
