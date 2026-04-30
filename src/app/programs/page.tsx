"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Programs() {
  return (
    <main className="w-full pt-28 md:pt-32">
      {/* Hero */}
      <header className="py-14 md:py-20 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-6">
              Our Villages
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-4xl">
              Three villages. One model. Two countries.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-2xl text-cream/90 leading-relaxed max-w-2xl">
              We partner with a village, plant a program, transfer ownership, and stay for the long run.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* Village 1: Yogo */}
      <section className="py-24 md:py-28 bg-cream text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
            <BlurFade>
              <div>
                <span className="font-sans uppercase tracking-[0.15em] text-xs text-terracotta font-bold block mb-6">
                  Yogo, Siaya District, Kenya &middot; Since 2008
                </span>
                <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                  Where this all started
                </h2>
                <p className="text-xl opacity-90 mb-6 leading-[1.6]">
                  In 2008, Yogo was twenty-five people worshiping under a tree, a fifty percent child-mortality rate from water-borne disease, and soil described as &ldquo;hard as a driveway.&rdquo;
                </p>
                <p className="text-xl opacity-90 mb-8 leading-[1.6]">
                  Today it has Yogo Glory Centre Academy (281 students, 42 staff), a 12-acre working farm feeding those students two meals a day, a clean-water well drilled successfully on the first attempt in 2011, and ten churches in the district. Cash crops from the farm are sold at local market, making the community self-sustaining.
                </p>
                <div className="flex flex-wrap gap-10 mt-10">
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">281</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">
                      Students
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">12</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">
                      Acre farm
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">10&times;</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">
                      Yield increase
                    </span>
                  </div>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <figure className="flex flex-col gap-4">
                <Link href="/donate" className="block w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative group ring-1 ring-forest/25 shadow-[0_30px_60px_-20px_rgba(26,61,46,0.45)]">
                  <Image
                    src="/photos/shucking-peanuts-yogo.jpg"
                    alt="Sorting peanuts at the Yogo farm"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.9] sepia-[0.03]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </Link>
                <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-terracotta font-bold">
                  Sorting the harvest &middot; Yogo, Kenya
                </figcaption>
              </figure>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="w-full h-[1px] bg-forest/10" />
        </div>
      </div>

      {/* Village 2: Seje */}
      <section className="py-24 md:py-28 bg-cream text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center">
            <BlurFade>
              <figure className="flex flex-col gap-4 order-2 lg:order-1">
                <Link href="/donate" className="block w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative group ring-1 ring-forest/25 shadow-[0_30px_60px_-20px_rgba(26,61,46,0.45)]">
                  <Image
                    src="/photos/wayback-pulls/seje-academy-exterior.jpg"
                    alt="Seje academy under construction"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.92]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </Link>
                <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-terracotta font-bold">
                  Academy under construction &middot; Seje, Kenya
                </figcaption>
              </figure>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="order-1 lg:order-2">
                <span className="font-sans uppercase tracking-[0.15em] text-xs text-terracotta font-bold block mb-6">
                  Seje, Siaya District, Kenya
                </span>
                <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                  A sister village, a second school
                </h2>
                <p className="text-xl opacity-90 mb-6 leading-[1.6]">
                  After meeting with Seje&rsquo;s community leaders to discuss their needs, clean water, education, shelter, and food topped the list. A partnership formed with Stittsville Community Bible Church in Ontario, Canada to address them holistically.
                </p>
                <p className="text-xl opacity-90 mb-8 leading-[1.6]">
                  Seje Glory Centre Academy now serves 200 students with 27 staff and has transitioned 110 students to secondary school since 2019. Like Yogo, the model is identical: partner, plant, transfer.
                </p>
                <div className="flex flex-wrap gap-10">
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">200</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">
                      Students
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">110</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">
                      To secondary school
                    </span>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="w-full h-[1px] bg-forest/10" />
        </div>
      </div>

      {/* Village 3: Mwalwigi */}
      <section className="py-24 md:py-28 bg-cream text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
            <BlurFade>
              <div>
                <span className="font-sans uppercase tracking-[0.15em] text-xs text-terracotta font-bold block mb-6">
                  Mwalwigi, Mwanza Region, Tanzania
                </span>
                <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                  The current urgent project
                </h2>
                <p className="text-xl opacity-90 mb-6 leading-[1.6]">
                  Mwalwigi is predominantly women and children. Women and children walk five to ten kilometers each day, two to three hours, to gather water. Only half of Tanzania&rsquo;s population has consistent access to quality water.
                </p>
                <p className="text-xl opacity-90 mb-8 leading-[1.6]">
                  Pastor Titus Mashalla, our field partner in Mwalwigi, has been gathering almost 250 people under a tree for Sunday services after four temporary churches were taken down by wind and torrential rain. A permanent church build is the current fundraising focus.
                </p>
                <p className="text-xl opacity-90 mb-8 leading-[1.6]">
                  Nearby, Mitindo village houses and protects roughly 200 albino children year-round, shielding them from violence rooted in local superstition. YFT partners in providing bedding, clothing, and special-needs care.
                </p>
                <Link
                  href="/donate"
                  className="inline-block bg-forest text-cream hover:bg-forest/90 text-sm uppercase tracking-wider font-bold py-4 px-8 transition-colors"
                >
                  Fund the Mwalwigi church build
                </Link>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <figure className="flex flex-col gap-4">
                <Link href="/donate" className="block w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative group ring-1 ring-forest/25 shadow-[0_30px_60px_-20px_rgba(26,61,46,0.45)]">
                  <Image
                    src="/photos/pastor-titus-blankets.jpg"
                    alt="Distributing blankets at the Mitindo school"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.9]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </Link>
                <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-terracotta font-bold">
                  Distributing blankets &middot; Mitindo, Tanzania
                </figcaption>
              </figure>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* The four focus areas */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Our Four Focus Areas
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-16 leading-[1.1] max-w-3xl">
              What we plant in every village
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <BlurFade delay={0.1}>
              <div className="border-t border-cream/15 pt-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Clean Water
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                  Wells that work
                </h3>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  We partner on hydrological surveys and drill where others have failed. Women and children in Mwalwigi currently walk up to ten kilometers a day for water. We&rsquo;re working on that.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="border-t border-cream/15 pt-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Food Security
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                  Farms that feed the school
                </h3>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  Raised-bed square foot gardening, drip-line irrigation, composting, bio-fertilizers, crop rotation. In Yogo, we went from depleted soil to a 10x yield increase, feeding 281 students two meals a day and selling the surplus at market.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="border-t border-cream/15 pt-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Education
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                  Schools that send graduates to university
                </h3>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  Two Glory Centre Academies across Yogo and Seje serve 481 students with 69 staff. 27 alumni are in university today in programs from nursing to medical engineering. Class sizes are 25-30 compared to 100 in the nearest public schools.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="border-t border-cream/15 pt-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Church &amp; Community
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                  Places to gather
                </h3>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  Church builds, pastoral support, women&rsquo;s Bible studies, youth programs. From twenty-five people worshiping under a tree in 2008 to ten churches in the district today.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 leading-[1.1]">
              Partner with a village
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl opacity-90 leading-[1.6] mb-12">
              You can direct your gift to a specific village or project: the Mwalwigi church build, student sponsorship at Yogo or Seje Academy, or the clean-water fund. Just tell us where.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Link
              href="/donate"
              className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
            >
              Partner with us
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
