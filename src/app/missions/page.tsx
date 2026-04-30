"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const faqs = [
  {
    q: "Why not just give money?",
    a: "Financial gifts matter, and they fund the work between trips. But almost everyone who has gone on a YFT trip has come back wanting to do more, raise awareness in their family, their friends, their church. Meeting the families in the villages turns a transaction into a relationship. Those relationships have lasted a lifetime for many.",
  },
  {
    q: "There are so many impoverished people. How can we possibly have an impact?",
    a: "Every single trip brings hope to the people we meet. Every project completed makes the next one easier. Every relationship made spreads. Eighteen years of compounding, one community at a time, looks like Yogo today.",
  },
  {
    q: "Do I have the skills needed to help?",
    a: "Yes. Whatever your skill set, there is a need for it. Building, farming, first aid, teaching, reading stories, playing games with the kids. The team needs hands and the village needs presence. You will be valued and you will be useful.",
  },
  {
    q: "What if my faith is different from others on the trip?",
    a: "Most teams include people from different churches and denominations, plus people who do not belong to a church at all. Each evening the team debriefs together and listens to each other. People come home with a deeper appreciation for their own faith and for the differences in others.",
  },
  {
    q: "Won't it be too sad to see so much poverty?",
    a: "It is shocking at first. But the people you meet typically live with a level of joy, courage, and faith that changes you more than you change them. You will return with a renewed appreciation for what you have and a clearer sense of what matters.",
  },
  {
    q: "What if I'm the only one going from my church?",
    a: "That happens often. Some teams are a single church, some are mixed across many churches, some include people whose home community isn't a church at all. When you come home and share your stories, your photos, your videos, the people around you feel your enthusiasm. That alone has launched future trips.",
  },
  {
    q: "Should we go to the same village or a different one each time?",
    a: "We encourage churches and groups to commit to one village for several years. Lasting relationships, deeper trust, and visible compounding all come from staying. Our vision is whole communities transformed, not many one-off projects.",
  },
  {
    q: "How do I know if I'm being called to go?",
    a: "Not everyone can travel. Family, finances, health, and timing are real. If you cannot go, your prayers and your support fund the people who can. Both matter. The Great Commission is a partnership: some go, some send. Your role is yours to discern.",
  },
];

export default function Missions() {
  return (
    <main className="w-full pt-28 md:pt-32">
      {/* Hero */}
      <header className="relative py-24 md:py-32 bg-charcoal text-cream overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50">
          <Image
            src="/photos/shucking-peanuts-yogo.jpg"
            alt="A YFT team at work in Yogo"
            fill
            className="object-cover saturate-[0.85]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="container mx-auto px-8 max-w-7xl relative z-10">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Go on a Missions Trip
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-5xl">
              Two or three weeks that change the way you see your own life.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-xl md:text-2xl text-cream/90 leading-[1.6] max-w-3xl">
              YFT trips run two to three weeks. The work is set by the funds raised and the needs of the village we&rsquo;re visiting. The relationships are set by you.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* What a trip looks like */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          <BlurFade>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                The Trip
              </p>
              <h2 className="font-heading text-4xl md:text-5xl leading-[1.1]">
                What a YFT trip looks like
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-[1.6] opacity-90">
                Most trips travel to Yogo or Seje in Kenya, or Mwalwigi in Tanzania. You stay near the village, work alongside our field partners, and step into whatever the priority is that season: building, farming, water, agriculture, teaching, or simply being present with the kids.
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                Teams typically run five to twelve people. We have travelled with single-church groups, mixed-church groups, and groups of friends and family who simply wanted to come and serve. Every evening the team debriefs together. By the end of the second week, you know the people in the village by name and the people on your own team in a way that doesn&rsquo;t happen at home.
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                We are not a tour operator. We are a small team that has been going for eighteen years and we will tell you exactly what to expect.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* What it costs / what it includes */}
      <section className="bg-forest py-24 md:py-28 text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              The Practicals
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1] max-w-3xl">
              What it costs and what it includes
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <BlurFade delay={0.1}>
              <div className="border-t border-cream/15 pt-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Cost
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                  Each trip is quoted individually
                </h3>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  Cost depends on the country, the season, the size of the team, and the project scope. Travel is the largest line item. Trip costs are not tax-deductible.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="border-t border-cream/15 pt-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Included
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                  Logistics, lodging, ground partners
                </h3>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  We coordinate flights, in-country travel, lodging, food, daily transport to the village, and the on-the-ground partnership with Bishop Silas in Kenya or Pastor Titus in Tanzania.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="border-t border-cream/15 pt-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  You bring
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                  Your skills, your hands, your presence
                </h3>
                <p className="text-lg text-cream/85 leading-[1.65]">
                  Plus a willingness to be flexible. Schedules shift. Weather shifts. The work is the work, but the village will reshape your week within the first 48 hours.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-4xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
              The Real Questions
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1]">
              Eight things people ask before they sign up
            </h2>
          </BlurFade>
          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <BlurFade key={item.q} delay={0.05 + i * 0.04}>
                <div className="border-t border-forest/15 py-8">
                  <h3 className="font-heading text-2xl md:text-3xl mb-4 leading-[1.2]">
                    {item.q}
                  </h3>
                  <p className="text-lg leading-[1.65] text-forest/85">{item.a}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-charcoal py-24 md:py-28 text-cream text-center">
        <div className="container mx-auto px-8 flex flex-col items-center max-w-3xl">
          <BlurFade>
            <p className="font-heading text-3xl md:text-4xl text-cream/90 mb-10 leading-[1.3] italic">
              &ldquo;Go therefore, and make disciples of all nations.&rdquo;
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-gold font-bold mb-12">
              Matthew 28:19
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
              Want to come with us?
            </h2>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-cream/85 leading-[1.6] mb-12 max-w-2xl">
              Send us a note. We&rsquo;ll set up a call and walk you through what the next trip looks like, what it would cost, and what your team could expect.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact?subject=Missions+trip+inquiry"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
              >
                Talk to us about a trip
              </Link>
              <Link
                href="/programs"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm md:text-base uppercase tracking-wider font-semibold py-5 px-10 transition-colors inline-block"
              >
                See the villages
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
