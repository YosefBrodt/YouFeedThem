"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const timeline = [
  {
    year: "2008",
    title: "The beginning",
    body: "Pastor Silas meets Roland and Theresa in Canada. Fifty percent of children in his village of Yogo are dying from water-borne disease, malnutrition, AIDS, and lack of medicine. A mission team visits Yogo. Land is purchased for a community farm. You Feed Them is born.",
  },
  {
    year: "2009",
    title: "First harvest",
    body: "The garden at Yogo, planted on depleted soil described as &lsquo;hard as a driveway,&rsquo; yields ten times the expected corn crop. Yogo Glory Centre Academy opens with a kindergarten and pre-kindergarten class.",
  },
  {
    year: "2010",
    title: "Church grows from 25 to 250",
    body: "The original congregation of twenty-five worshiping under a tree becomes two hundred and fifty. A new church building goes up.",
  },
  {
    year: "2011",
    title: "Clean water in Yogo",
    body: "After previous drilling attempts in the region had failed, a hydrological study was done. The drill hit clean, drinkable water on the first attempt.",
  },
  {
    year: "2014",
    title: "Farm expands, first tractor",
    body: "Yogo farm goes from 4 to 12 acres. A walking tractor is purchased during that year&rsquo;s mission trip. Yogo Community Based Organization hires Elisha Otieno as Farm Manager.",
  },
  {
    year: "2015",
    title: "School reaches Grade 5, ranks top 10%",
    body: "Yogo Glory Centre Academy expands to classes 1-5. Government testing places Yogo students in the top 10th percentile of schools in the area.",
  },
  {
    year: "2018",
    title: "First secondary school transitions",
    body: "Yogo transitions its first students to secondary school. A total of 150 students have made that transition to date.",
  },
  {
    year: "2019",
    title: "Seje joins the network",
    body: "Seje Glory Centre Academy opens, partnered with Stittsville Community Bible Church in Ontario, Canada. A total of 110 students have now transitioned to secondary schools.",
  },
  {
    year: "2021",
    title: "Albino children protection",
    body: "After an attack on albino children near one of the villages, YFT mobilizes support for the 200 albino children housed year-round at a nearby school for their protection.",
  },
  {
    year: "Today",
    title: "481 students. 27 in university.",
    body: "Yogo Academy serves 281 students with 42 staff. Seje serves 200 with 27 staff. Twenty-seven alumni are in university today, in nursing, teaching, and medical engineering. The first cohort is in their third year.",
  },
];

export default function Impact() {
  return (
    <main className="w-full pt-28 md:pt-32">
      {/* Hero */}
      <header className="py-14 md:py-20 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-6">
              The Compound Interest of Eighteen Years
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-5xl">
              From 25 people under a tree to 27 in university.
            </h1>
          </BlurFade>
        </div>
      </header>

      {/* Opening essay */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-[820px]">
          <BlurFade>
            <p className="font-heading text-3xl leading-[1.4] mb-14 text-forest first-letter:text-[6rem] first-letter:float-left first-letter:leading-[0.8] first-letter:pr-4 first-letter:pt-2 first-letter:text-gold">
              In 2008, a pastor from a village in Kenya walked into a room in Canada and told Roland and Theresa that half the children in his community were dying. That conversation became a mission trip. That trip became a farm. That farm became a school. That school just sent its first students to university.
            </p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-[1.7] opacity-90">
                The numbers on this page are not a marketing exercise. They are what happens when a community is given clean water, stable food, and a safe place to learn, and then given ownership of all three.
              </p>
              <p className="text-xl leading-[1.7] opacity-90">
                You Feed Them does not run the schools. We did not hire the farm manager. We do not preach at the churches. The people who live in Yogo, Seje, and Mwalwigi do all of that. Our job has always been to show up, partner, and help the community take the first step. Their job is to take every step after.
              </p>
              <p className="text-xl leading-[1.7] opacity-90">
                That&rsquo;s why, eighteen years in, the work is compounding instead of collapsing.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-forest py-20 md:py-24">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-12">
              By the numbers, today
            </p>
          </BlurFade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <BlurFade delay={0.1}>
              <div>
                <div className="font-heading text-5xl md:text-7xl text-gold leading-none">
                  <NumberTicker value={481} className="text-gold" />
                </div>
                <p className="font-sans uppercase tracking-[0.1em] text-xs md:text-sm font-semibold text-cream/80 mt-4">
                  Students enrolled
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.15}>
              <div>
                <div className="font-heading text-5xl md:text-7xl text-gold leading-none">
                  <NumberTicker value={27} className="text-gold" />
                </div>
                <p className="font-sans uppercase tracking-[0.1em] text-xs md:text-sm font-semibold text-cream/80 mt-4">
                  Alumni in university
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div>
                <div className="font-heading text-5xl md:text-7xl text-gold leading-none">
                  <NumberTicker value={260} className="text-gold" />+
                </div>
                <p className="font-sans uppercase tracking-[0.1em] text-xs md:text-sm font-semibold text-cream/80 mt-4">
                  Transitioned to secondary school
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25}>
              <div>
                <div className="font-heading text-5xl md:text-7xl text-gold leading-none">
                  <NumberTicker value={2} className="text-gold" />
                </div>
                <p className="font-sans uppercase tracking-[0.1em] text-xs md:text-sm font-semibold text-cream/80 mt-4">
                  Meals a day, every school day
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-4xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
              The Timeline
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1]">
              Eighteen years, one step at a time
            </h2>
          </BlurFade>
          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <BlurFade key={item.year + i} delay={0.05 + i * 0.03}>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 border-t border-forest/15 py-8">
                  <span className="font-heading text-3xl md:text-4xl text-gold leading-none">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl mb-3 leading-[1.2]">
                      {item.title}
                    </h3>
                    <p
                      className="text-lg text-forest/85 leading-[1.65]"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Then / Now */}
      <section className="bg-forest py-24 md:py-28 text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Then and Now
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1] max-w-3xl">
              What eighteen years of partnership looks like
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <BlurFade delay={0.1}>
              <figure className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3] overflow-hidden bg-charcoal relative ring-1 ring-cream/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/photos/water-dirty.jpg"
                    alt="Contaminated water source, pre-2011"
                    fill
                    className="object-cover saturate-[0.95]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold">
                  Then &middot; The water before, pre-2011
                </figcaption>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  Women and children walked hours each day to gather water that had to be boiled before use. The first village well had been dug by hand and was contaminated.
                </p>
              </figure>
            </BlurFade>
            <BlurFade delay={0.2}>
              <figure className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3] overflow-hidden bg-charcoal relative ring-1 ring-cream/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/photos/drought-crops-titus.jpg"
                    alt="Working drought-tolerant crops in Mwalwigi"
                    fill
                    className="object-cover saturate-[0.95]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold">
                  Now &middot; Drought-tolerant crops, Mwalwigi
                </figcaption>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  The model that worked in Yogo, hydrological survey, drilling, drip-line irrigation, drought-tolerant crops, is now being applied in Mwalwigi. Pastor Titus and his community are the next chapter.
                </p>
              </figure>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <p className="font-heading text-3xl md:text-4xl text-forest leading-[1.3]">
              The first cohort of Yogo students, who started in pre-K in 2008 with mud-walls and depleted soil, are now in their third year of university.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 md:py-28 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-6 max-w-3xl leading-[1.1]">
              The next eighteen years start with this year.
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="text-xl text-cream/85 max-w-2xl leading-[1.6] mb-12">
              Partner with us and fund the work that compounds.
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
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
