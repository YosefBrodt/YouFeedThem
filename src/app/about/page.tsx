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
                In 2009, we started with a single school in Seje, Kenya. The idea was narrow: build permanent classrooms, stabilize a teaching staff, then leave. Most aid programs do the opposite. They arrive, deliver, and depend on their own return.
              </p>
              <p className="text-lg leading-[1.65] opacity-90">
                We bet on a different model. Build the foundation, transfer ownership, trust the community to keep the lights on. We drafted no exit date because we never intended to run the program. The program was always theirs.
              </p>
              <p className="text-lg leading-[1.65] opacity-90">
                17 years later, Seje still operates. It&apos;s grown. Its alumni are in university. The schools and programs that followed were built on the same principle, and they are still standing for the same reason.
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
                Roland founded You Feed Them in 2009 and has led the work across East Africa for the last seventeen years. He built his first program on a simple conviction: that the people closest to a problem are the ones most qualified to solve it, if given the tools to start. Every school, farm, and clinic You Feed Them has stood up since has been built on that same conviction.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-32 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-6 max-w-3xl">
              The model only works when people fund it.
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="text-lg text-cream/90 max-w-2xl leading-[1.65] mb-12">
              Every program we&apos;ve built since 2009 is still running. Your investment is what lets us build the next one.
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Invest now
              </Link>
              <Link
                href="/programs"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Explore programs
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
