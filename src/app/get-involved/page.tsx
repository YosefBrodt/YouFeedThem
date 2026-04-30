"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

const ways = [
  {
    kicker: "01",
    title: "Partner financially",
    body: "Recurring or one-time. Direct gifts reach the field within days. Canadian donors can route their gift through The Great Commission Foundation for a CRA tax receipt. Set the designation, write the cheque, see the work.",
    href: "/donate",
    cta: "Partner with us",
  },
  {
    kicker: "02",
    title: "Sponsor a student",
    body: "Through our partner Ambassador Ministries in Covenant (AMIC), $50 a month covers daycare to grade 6, $60 a month covers grades 7 to 9, $70 a month covers secondary. Receipted, recurring, named. The student knows you. You know the student.",
    href: "/contact?subject=Student+sponsorship",
    cta: "Ask about sponsorship",
  },
  {
    kicker: "03",
    title: "Host a YFT visit",
    body: "Invite us to speak at your church, your small group, your business, or your family gathering. We bring the story, the photos, and the urgent ask of the season. Roland and the team have done dozens of these. They are useful.",
    href: "/contact?subject=Host+a+YFT+visit",
    cta: "Invite us to speak",
  },
  {
    kicker: "04",
    title: "Run a fundraiser",
    body: "Past partners have run alone-in-the-woods challenges, harvest dinners, marathon pledges, and church-wide drives. Whatever fits your community. We&rsquo;ll provide the materials and the back-of-house support.",
    href: "/contact?subject=Run+a+fundraiser",
    cta: "Plan a fundraiser",
  },
  {
    kicker: "05",
    title: "Go on a missions trip",
    body: "Two to three weeks in Kenya or Tanzania alongside our field partners. Bring your skills, your hands, and your presence. The next trip is open to applicants now.",
    href: "/missions",
    cta: "Read about trips",
  },
  {
    kicker: "06",
    title: "Raise awareness",
    body: "Share the site, share a newsletter, post a story. Every conversation is a referral. Several of our largest donors first heard about YFT from a friend at lunch.",
    href: "/media",
    cta: "Browse the media archive",
  },
];

export default function GetInvolved() {
  return (
    <main className="w-full pt-28 md:pt-32">
      {/* Hero */}
      <header className="py-20 md:py-28 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Get Involved
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-5xl">
              Six ways to be part of the work.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-xl md:text-2xl text-cream/90 leading-[1.6] max-w-3xl">
              From a one-time gift to a two-week trip. Pick the lane that fits.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* Ways to help, list-form */}
      <section className="bg-cream py-20 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex flex-col">
            {ways.map((way, i) => (
              <BlurFade key={way.title} delay={0.05 + i * 0.05}>
                <article className="border-t border-forest/15 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[140px_1.4fr_1fr] gap-8 lg:gap-12 items-start">
                  <p className="font-heading text-5xl md:text-6xl text-gold leading-none">
                    {way.kicker}
                  </p>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl mb-5 leading-[1.15]">
                      {way.title}
                    </h2>
                    <p className="text-lg leading-[1.7] text-forest/85">{way.body}</p>
                  </div>
                  <div className="lg:pt-2">
                    <Link
                      href={way.href}
                      className="inline-block border-2 border-forest text-forest hover:bg-forest hover:text-cream text-sm uppercase tracking-wider font-bold py-3 px-6 transition-colors"
                    >
                      {way.cta} &rarr;
                    </Link>
                  </div>
                </article>
              </BlurFade>
            ))}
            <div className="border-t border-forest/15" />
          </div>
        </div>
      </section>

      {/* The pull-quote panel for churches/orgs */}
      <section className="bg-forest py-20 md:py-28 text-cream">
        <div className="container mx-auto px-8 max-w-4xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.22em] text-gold font-bold mb-6">
              For Churches and Organizations
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.05]">
              Can we visit your church or organization?
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-xl text-cream/90 leading-[1.7] mb-6">
              We are actively looking for churches, small groups, businesses, and families who can host a 20-minute presentation. The current focus is the Mwalwigi church build, a permanent structure to replace four temporary buildings lost to weather.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-cream/90 leading-[1.7] mb-12">
              Roland, Bob and Dianne Elliott, or another team member will travel to you. We will bring photos, the story, and a clear ask. No high-pressure pitch, no production. Just a conversation.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <Link
              href="/contact?subject=Host+a+YFT+presentation"
              className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
            >
              Invite us to visit
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream py-24 md:py-28 text-forest text-center">
        <div className="container mx-auto px-8 flex flex-col items-center max-w-3xl">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
              Not sure where to start?
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="text-xl text-forest/85 leading-[1.6] mb-12 max-w-2xl">
              Send us a short note. We&rsquo;ll figure it out together.
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <Link
              href="/contact"
              className="bg-forest text-cream hover:bg-charcoal text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
            >
              Reach out
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
