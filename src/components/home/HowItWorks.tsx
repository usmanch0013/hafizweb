import { HOW_IT_WORKS } from '@/lib/home';

export default function HowItWorks() {
  return (
    <section className="border-y border-teal-100 bg-teal-50/50 py-16 md:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label mx-auto">Simple Process</span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">How It Works</h2>
          <p className="mt-3 text-slate-500">Get your estimate in three easy steps — no account needed.</p>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-teal-200 md:block md:mx-[16%]" aria-hidden="true" />

          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white shadow-lg shadow-teal-600/25">
                {step.step}
              </div>
              <h3 className="mt-5 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
