"use client";

import Link from "next/link";
import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <main className="w-full">
      {/* ── Hero ── */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-charcoal">
          <Image
            src="/medical_camp_hero.png"
            alt="Over 7,000 people reached in a single medical camp deployment"
            fill
            className="object-cover object-center saturate-[0.85] sepia-[0.05]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/20" />
        </div>
        <div className="container mx-auto px-8 max-w-7xl relative z-10">
          <BlurFade delay={0.1}>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-cream/80 font-semibold mb-6">
              Since 2009
            </p>
          </BlurFade>
          <BlurFade delay={0.25}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[120px] max-w-5xl leading-[0.95] text-cream">
              We don&apos;t send food.
              <br />
              We build the farms.
            </h1>
          </BlurFade>
          <BlurFade delay={0.45}>
            <p className="font-sans text-lg md:text-xl text-cream/90 max-w-2xl mt-8 leading-[1.65]">
              You Feed Them has spent 17 years teaching communities in East Africa to grow their own future. Our students are now in university. Our fields are still producing.
            </p>
          </BlurFade>
          <BlurFade delay={0.6}>
            <div className="flex flex-wrap gap-6 mt-12">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Invest in the work
              </Link>
              <Link
                href="/impact"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                See the outcomes
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Impact Band ── */}
      <section className="bg-forest py-24 md:py-32">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between gap-16">
          <BlurFade delay={0.1}>
            <div className="flex flex-col">
              <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
                <NumberTicker value={7000} className="text-gold" />+
              </div>
              <p className="font-sans uppercase tracking-[0.1em] text-sm font-semibold text-cream/80 mt-2">
                People reached in a single medical camp
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="flex flex-col">
              <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
                <NumberTicker value={3} className="text-gold" />
              </div>
              <p className="font-sans uppercase tracking-[0.1em] text-sm font-semibold text-cream/80 mt-2">
                Schools operating on self-sustaining agriculture
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="flex flex-col">
              <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
                <NumberTicker value={17} className="text-gold" />
              </div>
              <p className="font-sans uppercase tracking-[0.1em] text-sm font-semibold text-cream/80 mt-2">
                Years of continuous work in East Africa
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 2: The Model ── */}
      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-32 items-center">
          <BlurFade>
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
                We teach. Communities keep the lights on.
              </h2>
              <p className="text-lg opacity-90 mb-6 leading-[1.65]">
                Most aid programs end when the funding does. You Feed Them is different. We train local farmers in regenerative agriculture, transfer ownership of the equipment, and step back.
              </p>
              <p className="text-lg opacity-90 mb-12 leading-[1.65]">
                The schools we helped start in 2009 are still running because the people we trained are still running them.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="w-full h-[400px] lg:h-[500px] bg-charcoal relative overflow-hidden">
              {/* Placeholder for portrait photo from Roland's photo set */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-sans text-cream/40 text-sm uppercase tracking-wider">Photo pending</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 3: Portfolio of Programs (teaser) ── */}
      <section className="bg-forest py-32">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-20 leading-[1.1]">
              A Portfolio of Programs
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-16 lg:gap-0">
            {/* Agriculture */}
            <BlurFade delay={0.1}>
              <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-baseline border-t border-cream/10 pt-12 pb-12">
                <span className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold block mb-4 lg:mb-0">
                  Agriculture
                </span>
                <p className="font-heading text-2xl md:text-3xl text-cream leading-[1.3]">
                  Regenerative farming that communities sustain past funding.
                </p>
              </div>
            </BlurFade>
            {/* Education */}
            <BlurFade delay={0.2}>
              <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-baseline border-t border-cream/10 pt-12 pb-12">
                <span className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold block mb-4 lg:mb-0">
                  Education
                </span>
                <p className="font-heading text-2xl md:text-3xl text-cream leading-[1.3]">
                  School programs where graduates reach university.
                </p>
              </div>
            </BlurFade>
            {/* Medical Outreach */}
            <BlurFade delay={0.3}>
              <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-baseline border-t border-cream/10 pt-12 pb-12 border-b">
                <span className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold block mb-4 lg:mb-0">
                  Medical Outreach
                </span>
                <p className="font-heading text-2xl md:text-3xl text-cream leading-[1.3]">
                  Mobile camps treating 7,000+ in a single deployment.
                </p>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={0.4}>
            <div className="mt-16">
              <Link
                href="/programs"
                className="font-sans text-sm uppercase tracking-wider text-gold font-semibold hover:text-cream transition-colors"
              >
                See the full portfolio &rarr;
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 4: Alumni Story Teaser ── */}
      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-16 lg:gap-32 items-center">
          <BlurFade>
            <div className="w-full aspect-[3/4] bg-charcoal relative overflow-hidden">
              {/* Placeholder for alumni dinner thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-sans text-cream/40 text-sm uppercase tracking-wider text-center px-8">
                  Alumni dinner footage pending
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
                The kids we fed are now writing theses.
              </h2>
              <p className="text-lg opacity-90 mb-6 leading-[1.65]">
                Our Alumni Dinner this spring brought back 15 students who came up through our programs. They&apos;re in Nairobi. In Kampala. In university, working, building.
              </p>
              <p className="text-lg opacity-90 mb-12 leading-[1.65]">
                Their stories are the only metric that matters.
              </p>
              <Link
                href="/impact"
                className="font-sans text-sm uppercase tracking-wider text-forest font-semibold border-b-2 border-gold pb-1 hover:text-gold transition-colors"
              >
                Meet the alumni
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 5: Invest CTA ── */}
      <section className="bg-forest py-32">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8 leading-[1.1]">
              This work only exists because people invest in it.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-lg text-cream/90 leading-[1.65] mb-12">
              Every dollar funds programs that pay forward indefinitely. Donations to projects are fully tax-deductible. US donors receive IRS receipts through our 501(c)(3). Canadian donors receive CRA receipts through our partners at hungryforlife.org and The Great Commission.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Invest now
              </Link>
              <a
                href="mailto:rolandpoirier58@gmail.com"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Talk to Roland directly
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
