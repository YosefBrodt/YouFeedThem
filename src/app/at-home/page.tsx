"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

/*
  AT HOME (US & Canada) — new top-level section, split out from the old Villages/programs page (Jun 8 2026).
  Source: jun-5-call-transcript.md (Roland's own description). Truth rules:
    - US 501(c)(3): APPLIED Jan 2026 via Ink Authority, status PENDING. Do NOT promise US tax-deductibility
      as a live fact. Frame receipts as "once our US charitable status is confirmed."
    - Regenerative-beef farm NOT named (permission pending) -> "a partner regenerative farm north of New York City."
    - First garden = Roland's property near Bethlehem/Albany, New York (Roland-sourced Jun 5).
    - US community-garden photos owed by Roland -> clearly-marked placeholders.
*/

export default function AtHome() {
  return (
    <main className="w-full pt-28 md:pt-32">
      {/* ───────────────────────── 1. HERO ───────────────────────── */}
      <header className="py-14 md:py-20 bg-charcoal text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              United States &amp; Canada
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[88px] mb-7 leading-[0.98] md:leading-[0.95] max-w-4xl">
              The model comes home.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-xl md:text-2xl text-cream/90 leading-[1.55] max-w-3xl">
              The same approach we proved over eighteen years in East Africa is now taking root in
              North America. Teach a community to grow its own food, then hand it over.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* ───────────────────────── 2. WHY HERE, WHY NOW ───────────────────────── */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          <BlurFade>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                Why here, why now
              </p>
              <h2 className="font-heading text-4xl md:text-5xl leading-[1.1]">
                The need came home too.
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-[1.6] opacity-90">
                Food banks across the US and Canada are stretched thinner than ever. Demand is up,
                shelves are bare, and in many towns the local pantry has closed entirely. The people
                walking in often have no job, no spare cash, and no way to grow their own food.
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                {/* Geography fix Jun 10: Roland's property is "in New York" (exact location unstated);
                    Bethlehem, NY is a township he is pitching, a separate thing. Don't conflate. */}
                That is the exact problem we have been solving in Kenya and Tanzania for eighteen
                years. So we are bringing the model home, starting with Roland&rsquo;s own property
                in New York, the first You Feed Them community garden in the US, and townships like
                Bethlehem, New York are next on the list.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 3. HOW IT WORKS AT HOME ───────────────────────── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-4">
              How it works at home
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-14 leading-[1.1] max-w-3xl">
              A garden, a network, and a way to keep it fed.
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-cream/10 border border-cream/10">
            {[
              {
                num: "01",
                kicker: "The Garden",
                title: "Education that grows food",
                line: "Raised-bed gardening, drip irrigation, living soil, and probiotics, the same techniques we use in Kenya. People spend a few hours a week at the garden and go home with their own basket of vegetables, and we teach them to grow and preserve their own food.",
              },
              {
                num: "02",
                kicker: "Food Banks & Churches",
                title: "Plugging into the local network",
                line: "Roughly ninety percent of US food banks run through a local church. We come alongside that existing network and add the education layer, so a pantry that only hands out food can start helping people grow it.",
              },
              {
                num: "03",
                kicker: "Hand it over",
                title: "Owned by the community",
                line: "Just like the East Africa villages, every US garden is built to be handed to the community that runs it. Once it stands on its own, we move on to the next one.",
              },
            ].map((p, i) => (
              <BlurFade key={p.num} delay={0.08 + i * 0.06} className="h-full">
                <div className="bg-forest p-8 lg:p-9 h-full flex flex-col">
                  <span className="font-heading text-2xl text-gold block mb-4">{p.num}</span>
                  <span className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3 block">
                    {p.kicker}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl text-cream mb-3 leading-[1.2]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-base text-cream/70 leading-[1.6]">{p.line}</p>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Illustrative community-garden photo (Unsplash) until Roland supplies real US garden photos. Caption keeps it honest. */}
          <BlurFade delay={0.2}>
            <figure className="mt-6 relative aspect-[16/7] overflow-hidden bg-charcoal ring-1 ring-cream/10">
              <Image
                src="/photos/stock/community-garden-allotment-b.jpg"
                alt="A community allotment garden with greenhouses, raised beds, and people harvesting"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-14">
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-cream/85 font-semibold">
                  A community garden like the one You Feed Them is starting in New York
                </span>
              </figcaption>
            </figure>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 4. THE BEEF DONOR CLUB — the conversion hook ───────────────────────── */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-24 items-center">
          <BlurFade>
            <div className="max-w-xl">
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                The Beef Donor Club
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] mb-8 leading-[1.05]">
                Give to the work. Get first dibs on the beef.
              </h2>
              <p className="text-xl opacity-90 mb-6 leading-[1.6]">
                We partner with a regenerative farm north of New York City that raises certified
                organic, omega-balanced, grass-fed beef, the kind of meat you can trace from
                pasture to plate.
              </p>
              <p className="text-xl opacity-90 leading-[1.6]">
                Become a donor and you do two things at once: you fund the gardens and the food-bank
                work, and you get first access to buy that beef, by the half-cow or the cut. It
                connects a farmer who wants to do it right with people who want real food and want
                their giving to go somewhere they can see.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <div className="bg-forest text-cream p-8 lg:p-10">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold mb-6">
                  How the club works
                </p>
                <ol className="flex flex-col gap-5">
                  {[
                    "Make a donation to You Feed Them&rsquo;s US work.",
                    "Join the donor list for the partner farm&rsquo;s next harvest.",
                    "Get first dibs to buy certified-organic, grass-fed beef, by the half-cow or the cut.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-heading text-xl text-gold leading-none shrink-0">
                        {i + 1}
                      </span>
                      <span
                        className="font-sans text-base text-cream/85 leading-[1.55]"
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    </li>
                  ))}
                </ol>
              </div>
              <Link
                href="/donate?designation=us-community-garden"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-10 transition-colors inline-block min-h-[44px] text-center"
              >
                Join the donor club
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 5. CHARITABLE STATUS (honest) ───────────────────────── */}
      <section className="bg-forest py-20 md:py-24 text-cream">
        <div className="container mx-auto px-8 max-w-4xl">
          <BlurFade>
            <div className="border border-gold/30 bg-gold/5 p-8 md:p-12">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold mb-4">
                US charitable status
              </p>
              <p className="font-sans text-lg text-cream/90 leading-[1.65] mb-4">
                You Feed Them is pursuing US 501(c)(3) charitable status, applied for in early 2026
                under the religious and education categories. Until it is confirmed, we will tell you
                exactly what is and is not tax-receipted before you give.
              </p>
              <p className="font-sans text-sm text-cream/70 leading-[1.6]">
                Canadian donors can already receive a CRA tax receipt through our partner{" "}
                <a
                  href="https://gcfcanada.com/partners-in-hope-tanzania/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors"
                >
                  The Great Commission Foundation
                </a>
                . For US receipting questions,{" "}
                <Link
                  href="/contact"
                  className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors"
                >
                  get in touch
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 6. CTA ───────────────────────── */}
      <section className="bg-charcoal py-24 md:py-28 text-cream">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-7 leading-[1.05]">
              Help the model take root at home.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-lg md:text-xl text-cream/80 leading-[1.6] mb-10 max-w-2xl mx-auto">
              Fund the first US community garden, back the food-bank work, or join the beef donor
              club. Every gift builds something a community will own.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <Link
              href="/donate?designation=us-community-garden"
              className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block min-h-[44px]"
            >
              Donate
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
