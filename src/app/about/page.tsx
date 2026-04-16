"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

export default function About() {
  return (
    <main className="w-full pt-32">
      {/* Hero */}
      <header className="py-16 md:py-24 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-4xl">
              17 years. 3 schools. No exit plan.
            </h1>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-cream/90 leading-relaxed max-w-2xl">
              The story of You Feed Them Inc., told straight.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* Why we started */}
      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.1]">
              Why we started
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-[1.65] opacity-90">
                [Placeholder: Roland&apos;s own origin story goes here. Ask him on the follow-up call. Format as 3 short paragraphs, max 4 lines each.]
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* How we operate */}
      <section className="bg-forest py-32 text-cream">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.1]">
              How we operate
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-[1.65] text-cream/90">
                We run lean. We travel often. We do not take a salary from program funds. 100% of donations earmarked for projects go to projects. Overhead (travel, admin, operational costs) is funded separately through direct partnerships.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Our partners */}
      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.1]">
              Our partners
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-8">
              <div className="border-t border-forest/10 pt-8">
                <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold mb-3">
                  hungryforlife.org (Canada)
                </p>
                <p className="text-lg leading-[1.65] opacity-90">
                  Issues CRA tax receipts for Canadian donors.
                </p>
              </div>
              <div className="border-t border-forest/10 pt-8">
                <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold mb-3">
                  The Great Commission (Canada)
                </p>
                <p className="text-lg leading-[1.65] opacity-90">
                  Secondary Canadian receipting partner.
                </p>
              </div>
              <div className="border-t border-forest/10 pt-8 border-b pb-8">
                <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold mb-3">
                  US 501(c)(3) (direct)
                </p>
                <p className="text-lg leading-[1.65] opacity-90">
                  Issues IRS receipts. EIN: [REPLACE]
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Roland */}
      <section className="bg-charcoal py-32 text-cream">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-16 lg:gap-32 items-center">
          <BlurFade>
            <div className="w-full aspect-[3/4] bg-forest relative overflow-hidden">
              {/* Placeholder for Roland field photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-sans text-cream/40 text-sm uppercase tracking-wider text-center px-8">
                  Roland field photo pending
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold mb-6">
                Founder
              </p>
              <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                Roland Poirier
              </h2>
              <p className="text-lg leading-[1.65] text-cream/90">
                [Placeholder bio: founder/CEO, 17-year track record, personal connection to East Africa, the through-line. Ask Roland for 3 sentences. No stock founder headshot, use a real one from the field.]
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-32 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-12">
              Review the outcomes.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <Link
              href="/programs"
              className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
            >
              Explore Portfolio
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
