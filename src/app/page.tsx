"use client";

import Link from "next/link";
import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <main className="w-full">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-screen flex items-end pt-32 md:pt-36 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-charcoal">
          <video
            src="/hero-school-children.mp4"
            poster="/hero-school-children-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Kenyan students gathering outside school"
            className="absolute inset-0 w-full h-full object-cover object-center motion-reduce:hidden"
          />
          <Image
            src="/hero-school-children-poster.jpg"
            alt="Kenyan students gathering outside school"
            fill
            className="object-cover object-center hidden motion-reduce:block"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
        </div>
        <div className="container mx-auto px-8 max-w-7xl relative z-10">
          <BlurFade delay={0.25}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[120px] max-w-5xl leading-[0.95] text-cream">
              You feed them.
              <br />
              We help you do it.
            </h1>
          </BlurFade>
          <BlurFade delay={0.45}>
            <p className="font-sans text-xl md:text-2xl text-cream max-w-2xl mt-8 leading-[1.6]">
              Eighteen years walking alongside remote villages in East Africa. Clean water, food security, schools, and hope that a community can carry forward on its own.
            </p>
          </BlurFade>
          <BlurFade delay={0.6}>
            <div className="flex flex-wrap gap-4 md:gap-6 mt-12 items-center">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
              >
                Partner with us
              </Link>
              <Link
                href="/impact"
                className="bg-transparent text-cream border-2 border-cream/40 hover:border-cream hover:bg-cream/10 text-sm md:text-base uppercase tracking-wider font-semibold py-5 px-10 transition-colors inline-block"
              >
                See what we&rsquo;ve built
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Impact Band ── */}
      <section className="bg-forest py-20 md:py-24">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between gap-16">
          <BlurFade delay={0.1}>
            <Link href="/impact" className="flex flex-col transition-opacity hover:opacity-80">
              <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
                <NumberTicker value={481} className="text-gold" />
              </div>
              <p className="font-sans uppercase tracking-[0.1em] text-base font-semibold text-cream/90 mt-3">
                Students in school today, fed two meals a day
              </p>
            </Link>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Link href="/impact" className="flex flex-col transition-opacity hover:opacity-80">
              <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
                <NumberTicker value={27} className="text-gold" />
              </div>
              <p className="font-sans uppercase tracking-[0.1em] text-base font-semibold text-cream/90 mt-3">
                Alumni now attending university
              </p>
            </Link>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Link href="/impact" className="flex flex-col transition-opacity hover:opacity-80">
              <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
                <NumberTicker value={18} className="text-gold" />
              </div>
              <p className="font-sans uppercase tracking-[0.1em] text-base font-semibold text-cream/90 mt-3">
                Years of continuous work in East Africa
              </p>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 2: The Model ── */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-32 items-center">
          <BlurFade>
            <div className="max-w-2xl">
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                Our Model
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
                We don&rsquo;t create dependency. We plant it, and step back.
              </h2>
              <p className="text-xl opacity-90 mb-6 leading-[1.6]">
                In 2008, Yogo was twenty-five people worshiping under a tree, soil so depleted it was described as &ldquo;hard as a driveway,&rdquo; and children dying from water-borne disease. Today it has a school, a functioning farm, a clean-water well, and graduates in university.
              </p>
              <p className="text-xl opacity-90 mb-12 leading-[1.6]">
                We partner, train, and transfer ownership. Every program we&rsquo;ve started is still run by the community it was built for.
              </p>
              <Link
                href="/about"
                className="font-sans text-sm uppercase tracking-wider text-forest font-semibold border-b-2 border-gold pb-1 hover:text-gold transition-colors"
              >
                Read our story
              </Link>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="w-full h-[400px] lg:h-[500px] bg-charcoal relative overflow-hidden">
              <Image
                src="/photos/pastor-titus-family-2020.jpg"
                alt="Pastor Titus Mashalla and family, YFT's field partner in Tanzania"
                fill
                className="object-cover saturate-[0.9] sepia-[0.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 3: Portfolio of Programs (teaser) ── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-16 leading-[1.1]">
              What we do, across three villages
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-10 lg:gap-0">
            <BlurFade delay={0.1}>
              <Link href="/programs" className="block lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-baseline border-t border-cream/10 pt-10 pb-10 transition-opacity hover:opacity-80">
                <span className="font-sans text-lg md:text-xl uppercase tracking-[0.12em] text-gold font-bold block mb-3 lg:mb-0">
                  Food Security
                </span>
                <p className="font-heading text-2xl md:text-3xl text-cream leading-[1.3]">
                  Regenerative farms that feed the schools and the community. Yogo&rsquo;s farm grew tenfold in one season.
                </p>
              </Link>
            </BlurFade>
            <BlurFade delay={0.2}>
              <Link href="/programs" className="block lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-baseline border-t border-cream/10 pt-10 pb-10 transition-opacity hover:opacity-80">
                <span className="font-sans text-lg md:text-xl uppercase tracking-[0.12em] text-gold font-bold block mb-3 lg:mb-0">
                  Education
                </span>
                <p className="font-heading text-2xl md:text-3xl text-cream leading-[1.3]">
                  Yogo Glory Centre Academy and Seje Glory Centre Academy, two schools graduating students to university.
                </p>
              </Link>
            </BlurFade>
            <BlurFade delay={0.3}>
              <Link href="/programs" className="block lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-baseline border-t border-cream/10 pt-10 pb-10 transition-opacity hover:opacity-80">
                <span className="font-sans text-lg md:text-xl uppercase tracking-[0.12em] text-gold font-bold block mb-3 lg:mb-0">
                  Clean Water
                </span>
                <p className="font-heading text-2xl md:text-3xl text-cream leading-[1.3]">
                  Wells where previous drilling attempts had failed. In 2011 we hit water in Yogo on the first attempt.
                </p>
              </Link>
            </BlurFade>
            <BlurFade delay={0.4}>
              <Link href="/programs" className="block lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 items-baseline border-t border-cream/10 pt-10 pb-10 border-b transition-opacity hover:opacity-80">
                <span className="font-sans text-lg md:text-xl uppercase tracking-[0.12em] text-gold font-bold block mb-3 lg:mb-0">
                  Church &amp; Community
                </span>
                <p className="font-heading text-2xl md:text-3xl text-cream leading-[1.3]">
                  From twenty-five people under a tree in 2008 to ten churches in the district today.
                </p>
              </Link>
            </BlurFade>
          </div>
          <BlurFade delay={0.5}>
            <div className="mt-12">
              <Link
                href="/programs"
                className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-forest text-base md:text-lg uppercase tracking-wider font-bold py-4 px-8 transition-colors"
              >
                See the full portfolio &rarr;
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 4: Urgent Campaign ── */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-16 lg:gap-32 items-center">
          <BlurFade>
            <div className="w-full aspect-[3/4] bg-charcoal relative overflow-hidden">
              <Image
                src="/photos/water-dirty.jpg"
                alt="Unsafe water source in Mwalwigi, Tanzania before YFT intervention"
                fill
                className="object-cover saturate-[0.9]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                Current Urgent Need
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
                Mwalwigi needs a church that can stand up to the weather.
              </h2>
              <p className="text-xl opacity-90 mb-6 leading-[1.6]">
                Four temporary churches in Mwalwigi, Tanzania have been taken down by high winds and torrential rains. Pastor Titus and nearly 250 people are currently gathering under a tree for Sunday services.
              </p>
              <p className="text-xl opacity-90 mb-12 leading-[1.6]">
                We&rsquo;re raising funds right now for a permanent structure. Canadian donors can give through The Great Commission Foundation and receive a CRA tax receipt.
              </p>
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
              >
                Fund the church build
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Section 5: Invest CTA ── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8 leading-[1.1]">
              &ldquo;You feed them.&rdquo;
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-cream/90 leading-[1.6] mb-10 italic font-heading">
              Jesus said to the disciples, looking at five loaves, two fish, and a crowd of thousands. &mdash; Luke 9
            </p>
          </BlurFade>
          <BlurFade delay={0.25}>
            <p className="text-lg text-cream/80 leading-[1.6] mb-10">
              That&rsquo;s the name, and that&rsquo;s the posture. We bring what we have, we partner with the people on the ground, and we watch it multiply. Every gift compounds for decades, because every program is built to be owned by the community it serves.
            </p>
          </BlurFade>
          <BlurFade delay={0.35}>
            <Link
              href="/donate"
              className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block mb-12"
            >
              Partner with us
            </Link>
          </BlurFade>
          <BlurFade delay={0.45}>
            <div className="mt-4 border border-gold/30 bg-gold/5 p-6 md:p-8 text-left max-w-2xl mx-auto">
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-bold mb-4">
                Canadian Tax Receipts
              </p>
              <p className="text-cream/90 text-base leading-[1.6]">
                You Feed Them partners with <strong className="text-cream">The Great Commission Foundation</strong> (a registered Canadian charity) to issue CRA tax receipts for Canadian donations. Direct gifts to YFT support the work immediately but are not tax-receipted.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
