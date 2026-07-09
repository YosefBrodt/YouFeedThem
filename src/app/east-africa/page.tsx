"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

/*
  PROGRAMS — clarity-first rebuild (Jun 7 2026).
  Goal: a stranger grasps each section in ~2 seconds. No paragraph walls.
  Every block = short header + ONE tight line. Photos and labels carry the page.

  Truth rules (truth-audit-jun7.md): VERIFIED facts only, nothing fabricated.
    - VERIFIED: founded 2008, 12-acre Yogo farm, AMIC $50/$60/$70,
      partners (GCF, AMIC, Stittsville, Hungry For Life), Tanzania/Mwalwigi + Mitindo real,
      Stittsville<->Seje partnership, Bethlehem NY target + NY garden (Roland-sourced Jun 5).
    - UNVERIFIED, kept OUT of prominence (no big stat bands): 281/200/110 students,
      "10x" yield, "250 under a tree", "10 churches", well depths/dates/dollars, 69 staff, class sizes.
    - SOFTENED: US 501(c)(3) NOT asserted as live fact; no US tax-receipt promise (beef line drops
      the receipt). Canadian CRA receipts via Great Commission Foundation = fine (verified).
    - Regenerative-beef farm NOT named (permission pending) -> "a partner regenerative farm north of New York City."
    - US-expansion photos + two extra Kenya village names = clearly-marked placeholders (Roland owes them).
*/

const villages = [
  {
    place: "Yogo",
    region: "Siaya District, Kenya",
    since: "Since 2008",
    line: "Where it started. A 12-acre working farm, a school, and clean water, run by the community.",
    img: "/photos/shucking-peanuts-yogo.jpg",
    alt: "Community members sorting the harvest in Yogo, Kenya",
    caption: "Sorting the harvest · Yogo, Kenya",
  },
  {
    place: "Seje",
    region: "Siaya District, Kenya",
    since: "With Stittsville Community Bible Church",
    line: "A sister village, a second school. Same model: partner, plant, hand it over.",
    img: "/photos/wayback-pulls/seje-academy-exterior.jpg",
    alt: "The academy building at Seje, Kenya",
    caption: "The academy · Seje, Kenya",
  },
];

export default function Programs() {
  return (
    <main className="w-full pt-28 md:pt-32">
      {/* ───────────────────────── 1. HERO ───────────────────────── */}
      <header className="py-14 md:py-20 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Where we work
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[88px] mb-7 leading-[0.98] md:leading-[0.95] max-w-4xl">
              East Africa. Where it started.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-xl md:text-2xl text-cream/90 leading-[1.55] max-w-2xl">
              We partner with a community, plant a farm, a school, or a well, then hand it over.
              Eighteen years in, Kenya and Tanzania are the proof the model works.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* ───────────────────────── 2. KENYA — two villages, side by side ───────────────────────── */}
      <section id="kenya" className="bg-cream py-24 md:py-28 text-forest scroll-mt-24">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-4">
              Kenya
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-14 leading-[1.1] max-w-3xl">
              Two villages, the same way of working.
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {villages.map((v, i) => (
              <BlurFade key={v.place} delay={0.08 + i * 0.07} className="h-full">
                <figure className="flex flex-col gap-4 h-full">
                  <div className="group relative aspect-[4/5] overflow-hidden bg-charcoal ring-1 ring-forest/20 shadow-[0_30px_60px_-20px_rgba(26,61,46,0.4)]">
                    <Image
                      src={v.img}
                      alt={v.alt}
                      fill
                      className="object-cover saturate-[0.92] transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold block mb-2">
                        {v.since}
                      </span>
                      <span className="font-heading text-3xl md:text-4xl text-cream leading-none block">
                        {v.place}
                      </span>
                      <span className="font-sans text-sm text-cream/80 mt-2 block">
                        {v.region}
                      </span>
                    </div>
                  </div>
                  <figcaption className="font-sans text-base text-forest/85 leading-[1.5]">
                    {v.line}
                  </figcaption>
                </figure>
              </BlurFade>
            ))}
          </div>

          {/*
            REMOVED (Jun 10 audit): the "Two more villages in the network, names coming soon" band.
            Re-reading the Jun 5 transcript, Roland's "the two villages in Kenya" most plausibly
            means Yogo and Seje themselves, not two additional unnamed villages. Do not re-add
            unless Roland names real ones. See audit-2026-06-10.md item 1.
          */}
        </div>
      </section>

      {/* ───────────────────────── 3. TANZANIA — current urgent need ───────────────────────── */}
      <section id="tanzania" className="bg-forest py-24 md:py-28 scroll-mt-24">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-20 items-center">
          <BlurFade>
            {/*
              PLACEHOLDER — no recovered photo truthfully shows the Mwalwigi church/congregation.
              The blanket photo (mwalwigi-well-success.jpg) actually shows Mitindo, so it is NOT used as
              the lead image for the Mwalwigi church build. Swap in a real photo from Roland when supplied.
            */}
            <figure className="flex flex-col gap-4">
              <div className="w-full aspect-[4/5] bg-charcoal relative overflow-hidden ring-1 ring-gold/25 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] flex flex-col justify-center p-8 md:p-10 text-center">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold mb-6">
                  The need
                </span>
                <p className="font-heading text-2xl md:text-[32px] text-cream leading-[1.15]">
                  Every storm takes the roof. We&rsquo;re building one that stays.
                </p>
              </div>
              <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold">
                Mwalwigi, Mwanza Region, Tanzania
              </figcaption>
            </figure>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
                Current urgent need
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-[1.05]">
                A church that can stand up to the weather.
              </h2>
              <p className="text-xl text-cream/85 leading-[1.6] mb-10 max-w-xl">
                Temporary churches in Mwalwigi keep coming down in wind and rain. The congregation needs one that lasts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/10 border border-cream/10 mb-10">
                <div className="bg-forest p-6">
                  <h3 className="font-heading text-xl text-cream mb-2 leading-[1.2]">Clean water</h3>
                  <p className="font-sans text-base text-cream/70 leading-[1.55]">
                    Women and children walk hours each day to reach it. We&rsquo;re working on a well.
                  </p>
                </div>
                <div className="bg-forest p-6">
                  <h3 className="font-heading text-xl text-cream mb-2 leading-[1.2]">Mitindo, nearby</h3>
                  <p className="font-sans text-base text-cream/70 leading-[1.55]">
                    A school that shelters albino children. We help with bedding, clothing, and care.
                  </p>
                </div>
              </div>

              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block min-h-[44px]"
              >
                Fund the church build
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 4. THE MODEL COMES HOME — teaser to At Home ───────────────────────── */}
      <section className="bg-cream py-20 md:py-24 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <div className="border border-forest/15 bg-cream p-8 md:p-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="lg:flex-1">
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-4">
                  The model comes home
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-4">
                  The same approach is now taking root in the US and Canada.
                </h2>
                <p className="text-lg md:text-xl opacity-90 leading-[1.6] max-w-2xl">
                  Community gardens, church-backed food banks, and a regenerative-beef donor
                  program. Same model: teach a community to grow its own food, then hand it over.
                </p>
              </div>
              <Link
                href="/at-home"
                className="bg-forest text-cream hover:bg-charcoal text-base md:text-lg uppercase tracking-wider font-bold py-5 px-10 transition-colors inline-block min-h-[44px] whitespace-nowrap self-start"
              >
                See the work at home &rarr;
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 5. FOUR FOCUS AREAS — glanceable grid ───────────────────────── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-4">
              What we plant in every village
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-14 leading-[1.1] max-w-3xl">
              Four things a village needs to stand on its own.
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
            {[
              {
                label: "Clean Water",
                line: "Wells drilled where others have failed, so no one walks hours for water.",
              },
              {
                label: "Food Security",
                line: "Farms that feed the school and sell the surplus at market.",
              },
              {
                label: "Education",
                line: "Schools the community runs, carrying students through to university.",
              },
              {
                label: "Church & Community",
                line: "A permanent place to gather, worship, and lead the work locally.",
              },
            ].map((f, i) => (
              <BlurFade key={f.label} delay={0.08 + i * 0.06} className="h-full">
                <div className="bg-forest h-full p-8 lg:p-9 flex flex-col">
                  <span className="font-heading text-2xl md:text-[28px] text-cream leading-[1.15] mb-4">
                    {f.label}
                  </span>
                  <p className="font-sans text-base text-cream/70 leading-[1.6]">
                    {f.line}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 6. CTA ───────────────────────── */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-7 leading-[1.05]">
              Partner with a village.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-lg md:text-xl opacity-90 leading-[1.6] mb-10 max-w-2xl mx-auto">
              Direct your gift where you want it: the Mwalwigi church build, a student, or clean water. Just tell us where.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Link
              href="/donate"
              className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block min-h-[44px]"
            >
              Partner with us
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
