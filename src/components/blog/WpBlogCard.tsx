import Link from 'next/link';
import { formatBlogDate } from '@/lib/blog-types';
import type { WordPressPostPreview } from '@/lib/wordpress';

interface WpBlogCardProps {
  post: WordPressPostPreview;
  featured?: boolean;
}

export default function WpBlogCard({ post, featured = false }: WpBlogCardProps) {
  return (
    <Link
      href={post.link}
      className={`group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-teal-200 hover:shadow-lg ${
        featured ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      <div className={`relative shrink-0 bg-gradient-to-br from-teal-500 to-teal-700 ${featured ? 'md:w-2/5' : 'h-44'}`}>
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.coverImage} alt="" className={`h-full w-full object-cover ${featured ? 'min-h-[200px]' : 'h-44'}`} />
        ) : (
          <div className={`flex items-center justify-center ${featured ? 'min-h-[200px] h-full' : 'h-44'}`}>
            {post.category ? (
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">{post.category}</span>
            ) : (
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">Article</span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          {post.category && (
            <span className="rounded-full bg-teal-50 px-2 py-0.5 font-semibold text-teal-700">{post.category}</span>
          )}
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
        </div>
        <h2 className={`font-bold text-slate-900 group-hover:text-teal-700 ${featured ? 'text-xl' : 'text-base'}`}>
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-500 line-clamp-3">{post.excerpt}</p>
        )}
        <span className="mt-4 text-sm font-medium text-teal-600 group-hover:underline">Read article →</span>
      </div>
    </Link>
  );
}
