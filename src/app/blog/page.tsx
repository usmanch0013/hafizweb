import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import WpBlogCard from '@/components/blog/WpBlogCard';
import { getWordPressPosts } from '@/lib/wordpress';

export const metadata = buildMetadata({
  title: 'Blog — Australian Tax & Finance Articles',
  description:
    'Expert articles on Australian capital gains tax, income tax, property investing, superannuation and personal finance.',
  path: '/blog',
  keywords: ['australian tax blog', 'cgt articles', 'finance blog australia', 'property tax guides'],
});

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getWordPressPosts(24);

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200/70 bg-slate-50/50 py-12 md:py-16">
        <div className="container-main mx-auto max-w-2xl text-center">
          <span className="section-label mx-auto">Articles & Guides</span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            CGT Hub Blog
          </h1>
          <p className="mt-4 text-slate-500">
            Australian tax, property and investment articles written for everyday Australians.
          </p>
        </div>
      </section>

      <div className="container-main py-12 md:py-16">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-md rounded-xl border border-dashed border-slate-200 py-16 text-center">
            <p className="text-slate-500">No articles published yet. Check back soon.</p>
            <Link
              href="/"
              className="mt-4 inline-block text-sm font-medium text-teal-600 hover:underline"
            >
              Back to calculators →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <WpBlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
