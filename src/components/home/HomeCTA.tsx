import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="cta-section py-16 md:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 px-8 py-12 text-center shadow-xl shadow-teal-900/20 md:px-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Calculate Your CGT?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-teal-100">
            Use our free calculator above or explore all Australian finance tools — no sign-up required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="#calculator" className="btn-white">
              Use CGT Calculator
            </Link>
            <Link href="/tools" className="btn-white-outline">
              View All Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
