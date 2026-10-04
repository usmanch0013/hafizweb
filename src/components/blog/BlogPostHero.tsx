import Link from 'next/link';
import type { BlogCategory } from '@/lib/blog-types';

interface BlogPostHeroProps {
  title: string;
  category: BlogCategory;
  coverImage?: string;
}

export default function BlogPostHero({ title, category, coverImage }: BlogPostHeroProps) {
  return (
    <section className={`blog-post-hero ${coverImage ? 'blog-post-hero--image' : 'blog-post-hero--plain'}`}>
      {coverImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={coverImage} alt="" className="blog-post-hero__bg" />
          <div className="blog-post-hero__overlay" aria-hidden />
        </>
      )}

      <div className="container-main relative z-10 py-8 md:py-10">
        <nav className="blog-post-breadcrumb mb-5 text-sm" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden>/</span>
          <span className="truncate">{category}</span>
        </nav>

        <span className="blog-post-category">{category}</span>
        <p className="sr-only">{title}</p>
      </div>
    </section>
  );
}
