import { WHY_CHOOSE } from '@/lib/home';

const icons: Record<string, React.ReactNode> = {
  chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6m-6 0H7m8 0v-4a2 2 0 012-2h2m-4 6h4m0-10V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m8 0H9" />,
  gift: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />,
  shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  book: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  mobile: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
  refresh: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label mx-auto">Why AusCGT</span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Why Choose Us</h2>
          <p className="mt-3 text-slate-500">
            Built for everyday Australians who need fast, trustworthy finance estimates.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition-colors hover:border-teal-200 hover:bg-teal-50/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {icons[item.icon]}
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
