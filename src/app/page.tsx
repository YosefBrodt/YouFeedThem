"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

/*
  HOMEPAGE — clarity-first rebuild (Jun 7 2026).
  Goal: a stranger understands WHO / WHAT / WHERE in 5 seconds and gets ONE clear next action (Donate).
  Truth rules (truth-audit-jun7.md): VERIFIED facts only.
    - founded 2008, 12-acre Yogo farm, AMIC $50/$60/$70, partners (GCF, AMIC, Stittsville, Hungry For Life).
    - EVERY headline statistic (481/27/200/110/"10 churches"/"tenfold"/"250 under a tree") is UNVERIFIED — kept OUT of prominence.
    - Regenerative-beef farm name withheld (permission pending). US-expansion = clearly-marked placeholders where copy/photos are owed.
    - Do NOT assert US tax-deductibility. Canadian receipts via GCF only.
*/

export default function Home() {
  return (
    <main className="w-full">
      {/* ───────────────────────── 1. HERO — clarity-first ───────────────────────── */}
      <section className="relative w-full h-[88vh] min-h-[620px] md:h-[92vh] md:max-h-[900px] flex items-center md:items-end pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-charcoal">
          <video
            src="/hero-school-children.mp4"
            poster="/hero-school-children-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Students gathering outside school in Kenya"
            className="absolute inset-0 w-full h-full object-cover object-center motion-reduce:hidden"
          />
          <Image
            src="/hero-school-children-poster.jpg"
            alt="Students gathering outside school in Kenya"
            fill
            className="object-cover object-center hidden motion-reduce:block"
            priority
            sizes="100vw"
          />
          {/* Legibility scrim: strong bottom-up gradient + left-side darkening so every word reads clean. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/45 md:via-black/55 md:to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
        </div>

        <div className="container mx-auto px-8 max-w-7xl relative z-10">
          <BlurFade delay={0.1}>
            <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.18em] text-gold font-bold mb-6">
              Christian nonprofit · Kenya, Tanzania, and home
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="font-heading text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[110px] max-w-5xl leading-[0.98] md:leading-[0.95] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
              You feed them.
              <br />
              We help you do it.
            </h1>
          </BlurFade>
          <BlurFade delay={0.32}>
            <p className="font-sans text-lg md:text-2xl text-cream max-w-3xl mt-7 leading-[1.55] [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
              We help villages in Kenya, Tanzania, and now North America grow their own food,
              run their own schools, and reach clean water, then we hand the work over to the
              people who live there.
            </p>
          </BlurFade>
          <BlurFade delay={0.44}>
            <div className="flex flex-wrap gap-4 md:gap-5 mt-10 items-center">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block min-h-[44px]"
              >
                Donate
              </Link>
              <Link
                href="#model"
                className="bg-transparent text-cream border-2 border-cream/45 hover:border-cream hover:bg-cream/10 text-sm md:text-base uppercase tracking-wider font-semibold py-[18px] px-10 transition-colors inline-block min-h-[44px]"
              >
                See how it works
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 2. WHAT WE DO — glanceable pillars ───────────────────────── */}
      <section className="bg-forest py-20 md:py-24">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-4">
              What we do
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-14 leading-[1.1] max-w-3xl">
              Four things a village needs to stand on its own.
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
            {[
              {
                label: "Food & Farming",
                line: "Working farms that feed the schools and the families around them.",
              },
              {
                label: "Clean Water",
                line: "Wells and water that reach communities where there was none.",
              },
              {
                label: "Schools & Education",
                line: "Schools the community runs, teaching kids through to university.",
              },
              {
                label: "Church & Community",
                line: "A place to gather, worship, and lead the work locally.",
              },
            ].map((pillar, i) => (
              <BlurFade key={pillar.label} delay={0.08 + i * 0.06} className="h-full">
                <div className="bg-forest h-full p-8 lg:p-9 flex flex-col">
                  <span className="font-heading text-2xl md:text-[28px] text-cream leading-[1.15] mb-4">
                    {pillar.label}
                  </span>
                  <p className="font-sans text-base text-cream/70 leading-[1.6]">
                    {pillar.line}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 3. THE MODEL — the thesis / direction ───────────────────────── */}
      <section id="model" className="scroll-mt-24 bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">
            <BlurFade>
              <div className="max-w-xl">
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                  Our Model
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.05]">
                  We don&rsquo;t create dependency.
                </h2>
                <p className="text-xl opacity-90 leading-[1.6]">
                  We partner, train, and transfer ownership. We arrive alongside a community,
                  build the farm, the school, or the well together, then hand it over to the
                  people who live there. The goal is the day they no longer need us.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 lg:pt-4">
                {[
                  {
                    step: "01",
                    title: "Partner",
                    line: "We come alongside a community that asks for help, not one we choose for them.",
                  },
                  {
                    step: "02",
                    title: "Build",
                    line: "We build the farm, school, water, or church together and train people to run it.",
                  },
                  {
                    step: "03",
                    title: "Hand it over",
                    line: "Ownership transfers to the community. Every program we start is theirs to keep.",
                  },
                ].map((s) => (
                  <div key={s.step} className="border-t-2 border-gold pt-5">
                    <span className="font-heading text-2xl text-terracotta block mb-3">
                      {s.step}
                    </span>
                    <h3 className="font-heading text-2xl mb-3 leading-[1.15]">{s.title}</h3>
                    <p className="font-sans text-base text-forest/75 leading-[1.6]">{s.line}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ───────────────────────── 4. WHERE WE WORK — lead with PLACES ───────────────────────── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-4">
              Where we work
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-14 leading-[1.1] max-w-3xl">
              Real places, real communities.
            </h2>
          </BlurFade>

          {/* Kenya + Tanzania places */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              {
                place: "Yogo",
                region: "Kenya",
                img: "/photos/wayback-pulls/yogo-cabbage-harvest.jpg",
                alt: "A homestead and farmland in Yogo, Kenya",
              },
              {
                place: "Seje",
                region: "Kenya",
                img: "/photos/wayback-pulls/seje-academy-exterior.jpg",
                alt: "The school building at Seje, Kenya",
              },
              {
                place: "Mwalwigi",
                region: "Tanzania",
                img: "/photos/wayback-pulls/mwalwigi-women-collecting-water.jpeg",
                alt: "A water drilling site at Mwalwigi, Tanzania",
              },
              {
                place: "Mitindo",
                region: "Tanzania",
                img: "/photos/wayback-pulls/mwalwigi-well-success.jpg",
                alt: "Children at the Mitindo school in Tanzania",
              },
            ].map((loc, i) => (
              <BlurFade key={loc.place} delay={0.08 + i * 0.06} className="h-full">
                <div className="group relative aspect-[3/4] overflow-hidden bg-charcoal ring-1 ring-cream/10">
                  <Image
                    src={loc.img}
                    alt={loc.alt}
                    fill
                    className="object-cover saturate-[0.92] transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="font-heading text-2xl md:text-3xl text-cream leading-none block">
                      {loc.place}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold mt-2 block">
                      {loc.region}
                    </span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.18}>
            <Link
              href="/east-africa"
              className="inline-block mt-8 font-sans text-sm uppercase tracking-wider text-gold font-bold border-b-2 border-gold/40 hover:border-gold pb-1 transition-colors"
            >
              Explore East Africa &rarr;
            </Link>
          </BlurFade>

          {/* North America — the model comes home (placeholder-aware, no unverified specifics) */}
          <BlurFade delay={0.2}>
            <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
              {/* PLACEHOLDER — community-garden photo owed by Roland. Using a neutral panel until supplied. */}
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-charcoal ring-1 ring-cream/10 flex items-center justify-center min-h-[220px]">
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-cream/40 font-bold px-6 text-center">
                  {/* Photo pending from Roland: first US community garden */}
                  Community garden · photo coming soon
                </span>
              </div>
              <div className="bg-charcoal ring-1 ring-cream/10 p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold mb-4 block">
                  New York · United States
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-cream leading-[1.15] mb-4">
                  The model comes home.
                </h3>
                <p className="font-sans text-base text-cream/75 leading-[1.65] mb-6">
                  The same approach we built in East Africa is now taking root in North America:
                  community gardens, church-backed food banks, and a regenerative-beef donor club.
                  The first US garden is starting in New York, run the same way.
                </p>
                <Link
                  href="/at-home"
                  className="font-sans text-sm uppercase tracking-wider text-gold font-bold border-b-2 border-gold/40 hover:border-gold pb-1 self-start transition-colors"
                >
                  See the work at home &rarr;
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 5. ONE HONEST STORY — Yogo farm (verified) ───────────────────────── */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-24 items-center">
          <BlurFade>
            <div className="max-w-xl">
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                One story · Yogo, Kenya
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] mb-8 leading-[1.05]">
                Soil as hard as a driveway. Now a 12-acre farm.
              </h2>
              <p className="text-xl opacity-90 mb-6 leading-[1.6]">
                When we first came to Yogo in 2008, the ground was so depleted it was hard as a
                driveway. Nothing would grow.
              </p>
              <p className="text-xl opacity-90 leading-[1.6]">
                Today Yogo has a working 12-acre farm, run by the community it feeds. It is the
                clearest picture of what the model does when you stay long enough to hand it over.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <figure className="flex flex-col gap-4">
              <div className="w-full aspect-[4/5] bg-charcoal relative overflow-hidden ring-1 ring-forest/20 shadow-[0_30px_60px_-20px_rgba(26,61,46,0.45)]">
                <Image
                  src="/photos/shucking-peanuts-yogo.jpg"
                  alt="Community members sorting the harvest in Yogo, Kenya"
                  fill
                  className="object-cover saturate-[0.92]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-terracotta font-bold">
                Sorting the harvest · Yogo, Kenya
              </figcaption>
            </figure>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 6. CURRENT ASK — Mwalwigi church build ───────────────────────── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[0.55fr_1fr] gap-14 lg:gap-24 items-center">
          <BlurFade>
            {/*
              PLACEHOLDER — no recovered photo truthfully shows the Mwalwigi church/congregation.
              The available "under a tree" file is actually a dormitory interior (see truth-audit-jun7.md),
              so it is NOT used here. Swap in a real Mwalwigi church-build photo from Roland when supplied.
            */}
            <figure className="flex flex-col gap-4">
              <div className="w-full aspect-[3/4] bg-charcoal relative overflow-hidden ring-1 ring-cream/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-cream/40 font-bold px-6 text-center">
                  Mwalwigi church build · photo coming soon
                </span>
              </div>
              <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold">
                Mwalwigi, Tanzania
              </figcaption>
            </figure>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
                Current urgent need
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8 leading-[1.05]">
                Mwalwigi needs a church that can stand up to the weather.
              </h2>
              <p className="text-xl text-cream/85 mb-6 leading-[1.6]">
                Temporary churches in Mwalwigi, Tanzania keep coming down in high winds and
                heavy rain. The congregation needs a permanent structure that lasts.
              </p>
              <p className="text-xl text-cream/85 mb-10 leading-[1.6]">
                We&rsquo;re raising funds for that build right now. Canadian donors can give through
                The Great Commission Foundation and receive a CRA tax receipt.
              </p>
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

      {/* ───────────────────────── 7. WAYS TO GIVE ───────────────────────── */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-4">
              Ways to give
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-14 leading-[1.1] max-w-3xl">
              More than one way to be part of it.
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Donate",
                line: "A one-time or monthly gift goes to the farms, schools, water, and the current build.",
                cta: "Donate",
                href: "/donate",
              },
              {
                title: "Sponsor a student",
                line: "Through AMIC, sponsor a student at $50, $60, or $70 a month depending on their grade.",
                cta: "Sponsor a student",
                href: "/get-involved",
              },
              {
                title: "Go on a mission trip",
                line: "Travel with the team to Kenya or Tanzania and see the work on the ground for yourself.",
                cta: "Explore trips",
                href: "/missions",
              },
            ].map((card, i) => (
              <BlurFade key={card.title} delay={0.08 + i * 0.07} className="h-full">
                <div className="h-full bg-forest text-cream p-8 lg:p-9 flex flex-col">
                  <h3 className="font-heading text-2xl md:text-[28px] mb-4 leading-[1.15]">
                    {card.title}
                  </h3>
                  <p className="font-sans text-base text-cream/75 leading-[1.65] mb-8 flex-1">
                    {card.line}
                  </p>
                  <Link
                    href={card.href}
                    className="font-sans text-sm uppercase tracking-wider text-gold font-bold border-b-2 border-gold/40 hover:border-gold pb-1 self-start transition-colors"
                  >
                    {card.cta} &rarr;
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── 8. TRUST — founder, partners, receipts ───────────────────────── */}
      <section className="bg-charcoal py-20 md:py-24 text-cream">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <BlurFade>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
                Who runs this
              </p>
              <p className="font-heading text-2xl md:text-3xl leading-[1.3] text-cream mb-6">
                You Feed Them was founded in 2008 by Roland Poirier and has walked alongside
                the same communities ever since.
              </p>
              <p className="font-sans text-base text-cream/70 leading-[1.65]">
                We work through trusted partners on the ground and a network of churches and
                organizations that have backed this work for years.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="lg:pl-12 lg:border-l border-cream/15">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold mb-5">
                Partners
              </p>
              <ul className="font-sans text-base text-cream/85 leading-[1.9] mb-8">
                <li>The Great Commission Foundation</li>
                <li>Ambassador Ministries (AMIC)</li>
                <li>Stittsville Community Bible Church</li>
                <li>Hungry For Life</li>
              </ul>
              <div className="border border-gold/30 bg-gold/5 p-6">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Tax receipts
                </p>
                <p className="font-sans text-sm text-cream/85 leading-[1.6]">
                  Canadian donors can receive a CRA tax receipt through our partner{" "}
                  <strong className="text-cream">The Great Commission Foundation</strong>, a
                  registered Canadian charity. US donors, please{" "}
                  <Link
                    href="/contact"
                    className="underline decoration-gold decoration-2 underline-offset-4 hover:text-cream transition-colors"
                  >
                    contact us about tax receipts
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ───────────────────────── 9. FINAL CTA ───────────────────────── */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8 leading-[1.05]">
              You feed them. We help you do it.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-lg md:text-xl text-cream/80 leading-[1.6] mb-10 max-w-2xl mx-auto">
              Every gift goes toward food, water, schools, and the church build, then it keeps
              working long after, because every program is built to be owned by the people it serves.
            </p>
          </BlurFade>
          <BlurFade delay={0.25}>
            <Link
              href="/donate"
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
