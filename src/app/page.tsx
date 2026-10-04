import Link from 'next/link';
import Calculator from '@/components/Calculator';
import CGTGuide from '@/components/guides/CGTGuide';
import GuideWithNav from '@/components/GuideWithNav';
import HomeHero from '@/components/home/HomeHero';
import StatsBar from '@/components/home/StatsBar';
import ToolsShowcase from '@/components/home/ToolsShowcase';
import StateCalculators from '@/components/home/StateCalculators';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import HomeFAQ from '@/components/home/HomeFAQ';
import HomeCTA from '@/components/home/HomeCTA';
import LatestBlogSection from '@/components/home/LatestBlogSection';
import JsonLd from '@/components/seo/JsonLd';
import { CURRENT_FY } from '@/lib/site';
import { HOME_FAQ } from '@/lib/home';
import { HOME_SEO, buildMetadata, homePageJsonLd } from '@/lib/seo';

export const metadata = buildMetadata(HOME_SEO);

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageJsonLd([...HOME_FAQ])} />

      <HomeHero />

      <section id="calculator" className="scroll-mt-16 border-b border-slate-200/60 bg-white py-12 md:py-16">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <span className="fy-badge">Updated for {CURRENT_FY} · Australian Residents</span>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Australian Capital Gains Tax Calculator
            </h1>
            <p className="mt-3 text-slate-500">
              Estimate your CGT on property, shares, crypto and other investments instantly.
            </p>
          </div>

          <div className="mx-auto mt-9 max-w-4xl">
            <Calculator />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-xs text-slate-400">
            Estimates only — not professional tax advice. Consult a registered tax agent.
          </p>
        </div>
      </section>

      <StatsBar />
      <ToolsShowcase />
      <StateCalculators />
      <WhyChooseUs />
      <HowItWorks />

      <section id="guide" className="scroll-mt-16 bg-slate-50/80 py-16 md:py-20">
        <div className="container-main">
          <GuideWithNav>
            <CGTGuide />
          </GuideWithNav>
        </div>
      </section>

      <HomeFAQ />
      <LatestBlogSection />
      <HomeCTA />
    </>
  );
}
