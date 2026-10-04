import Link from 'next/link';
import GuideWithNav from '@/components/GuideWithNav';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  guide?: React.ReactNode;
  breadcrumb?: string;
  useGuideNav?: boolean;
}

export default function ToolLayout({
  title,
  description,
  children,
  guide,
  breadcrumb,
  useGuideNav = false,
}: ToolLayoutProps) {
  return (
    <>
      <section className="site-hero border-b border-slate-200/60">
        <div className="container-main py-12 md:py-16">
          <nav className="mb-8 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/tools" className="hover:text-teal-600">Tools</Link>
            {breadcrumb && (
              <>
                <span className="mx-2">/</span>
                <span className="text-slate-600">{breadcrumb}</span>
              </>
            )}
          </nav>

          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base text-slate-500">{description}</p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">{children}</div>
        </div>
      </section>

      {guide && (
        <section id="guide" className="scroll-mt-16 bg-[#fafafa] py-16 md:py-20">
          <div className="container-main">
            {useGuideNav ? (
              <GuideWithNav title="Complete Guide" subtitle={description}>
                {guide}
              </GuideWithNav>
            ) : (
              <div className="mx-auto max-w-3xl">
                <div className="mb-10 text-center">
                  <span className="section-label mx-auto">Educational Guide</span>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Complete Guide</h2>
                </div>
                <article className="guide-card">
                  <div className="guide-article">{guide}</div>
                </article>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
