import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blogs';
import BlogCard from '@/components/blog/BlogCard';
import WpBlogCard from '@/components/blog/WpBlogCard';
import { BLOG_HREF, BLOG_URL } from '@/lib/site';
import { getWordPressPosts } from '@/lib/wordpress';

export default async function LatestBlogSection() {
  if (BLOG_URL) {
    const wpPosts = await getWordPressPosts(3);

    return (
      <section className="border-t border-slate-200 bg-white py-16 md:py-20">
        <div className="container-main">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-label">Latest Articles</span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">From the blog</h2>
              <p className="mt-2 text-slate-500">
                Tax tips, property guides and finance articles —{' '}
                <Link href="/blog" className="font-medium text-teal-700 hover:underline">
                  read them all here
                </Link>
                .
              </p>
            </div>
            <a href={BLOG_HREF} className="btn-outline">
              View all articles
            </a>
          </div>

          {wpPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {wpPosts.map((post) => (
                <WpBlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 py-12 text-center">
              <p className="text-slate-500">New articles will appear here once you publish on WordPress.</p>
              <a href={BLOG_HREF} className="btn-primary mt-6 inline-flex">
                Go to the blog
              </a>
            </div>
          )}
        </div>
      </section>
    );
  }

  const posts = await getPublishedPosts(3);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-white py-16 md:py-20">
      <div className="container-main">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="section-label">Latest Articles</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">From the AusCGT Blog</h2>
            <p className="mt-2 text-slate-500">Tax tips, property guides and finance articles for Australians.</p>
          </div>
          <Link href={BLOG_HREF} className="btn-outline">
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
