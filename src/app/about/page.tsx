"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const team = [
  {
    name: "Roland Poirier",
    role: "Founder",
    bio: "Started You Feed Them in 2008 after he and his late wife Theresa visited Kenya and couldn&rsquo;t unsee what they saw. Eighteen years later, still visiting, still building.",
    email: "roland@youfeedthem.com",
  },
  {
    name: "Bishop Silas Owiti Oduor",
    role: "Field Partner, Kenya",
    bio: "Pastor Silas is from Yogo village. In 2008, fifty percent of the children in his community were dying from water-borne disease and malnutrition. He walked that reality to Canada, met Roland, and came home with a partnership.",
  },
  {
    name: "Pastor Titus Mashalla",
    role: "Field Partner, Tanzania",
    bio: "Leads Partners in Hope in Mwalwigi, Tanzania. Currently stewarding the church build project after four temporary churches were lost to weather.",
  },
  {
    name: "Dr. David LoCastro",
    role: "Medical Director",
    bio: "Oversees medical, dental, and vision care across YFT mission trips.",
  },
  {
    name: "Ada Madison Poirier",
    role: "Media",
    bio: "Handles media and communications.",
    email: "ada@youfeedthem.com",
  },
];

const partners = [
  {
    name: "The Great Commission Foundation",
    region: "Canada",
    note: "Issues CRA tax receipts for Canadian donors giving to Partners in Hope Tanzania (YFT's Mwalwigi work).",
    href: "https://gcfcanada.com/partners-in-hope-tanzania/",
  },
  {
    name: "Hungry For Life",
    region: "Canada",
    note: "Canadian partnering charity.",
    href: "https://hungryforlife.org",
  },
  {
    name: "Ambassador Ministries in Covenant (AMIC)",
    region: "Canada / USA",
    note: "Sponsors students at Yogo and Seje Glory Centre Academies at $50 to $70 per month depending on grade.",
  },
  {
    name: "Speroway",
    region: "Canada",
    note: "Key partner in transitioning YFT alumni into university education.",
  },
  {
    name: "Stittsville Community Bible Church",
    region: "Ontario, Canada",
    note: "Partnered with Seje Village, Kenya on clean water, education, shelter, and food.",
  },
];

export default function About() {
  return (
    <main className="w-full pt-28 md:pt-32">
      {/* Hero */}
      <header className="py-14 md:py-20 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-6">
              About You Feed Them
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-4xl">
              Named after a sentence Jesus said to His disciples.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-2xl text-cream/90 leading-relaxed max-w-3xl">
              Our story, told straight.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* Origin story */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          <BlurFade>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                Our Story
              </p>
              <h2 className="font-heading text-4xl md:text-5xl leading-[1.1]">
                How it started
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-[1.6] opacity-90">
                After visiting Kenya, our founders, Roland and his late wife Theresa Poirier, were profoundly impacted by what they witnessed. During prayer, Roland felt the Lord say: <em className="font-heading">&ldquo;You feed them.&rdquo;</em>
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                The name comes from the biblical miracle of the loaves and fishes. Multitudes had gathered to hear Jesus teach. The disciples, worried about dinner, asked Him to send the crowd away. Jesus turned the problem back on them: <em>you feed them</em>. A young boy offered five loaves and two fish. Jesus blessed what was offered, and it multiplied until everyone had eaten and there were twelve baskets left over (Luke 9:10-17).
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                That&rsquo;s the posture of this work. We bring what we have, we partner with the people on the ground, we watch God multiply the effort. The mission began with nourishing the soil. Today lush farms are growing, schools have been built, fresh water flows, and medical, dental, and vision help is available to all.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* In memory of Theresa */}
      <section className="bg-forest py-20 md:py-24 text-cream">
        <div className="container mx-auto px-8 max-w-4xl">
          <BlurFade>
            <div className="border-t border-b border-gold/30 py-12 md:py-16 text-center">
              <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-6">
                In Loving Memory
              </p>
              <p className="font-heading text-3xl md:text-4xl text-cream mb-4 leading-[1.2]">
                Theresa Poirier
              </p>
              <p className="font-sans text-lg text-cream/80 leading-[1.6] max-w-xl mx-auto">
                Co-founder. Quiet builder. The work continues in her honor.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* How we operate */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          <BlurFade>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                How We Operate
              </p>
              <h2 className="font-heading text-4xl md:text-5xl leading-[1.1]">
                Partnership over ownership
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-[1.6] opacity-90">
                You Feed Them is not a registered charity. That is a deliberate choice. We believe in partnering with existing registered charities rather than duplicating infrastructure. It lets us stay lean, move fast, and route tax-receipted donations through partners who specialize in that work.
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                We do not take salaries from program funds. Travel and overhead are covered separately through direct partnerships and personal contribution. When you give to Partners in Hope Tanzania through The Great Commission Foundation, 100% of your gift reaches the field.
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                On the ground, every program is handed to the local community. The community chooses it, owns it, runs it. We visit, we measure, we adjust. We do not run schools, farms, or churches in East Africa. The communities do.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Team */}
      <section className="bg-forest py-24 md:py-28 text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              The Team
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1] max-w-3xl">
              The people doing the work
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {team.map((member, i) => (
              <BlurFade key={member.name} delay={0.1 + i * 0.08}>
                <div className="border-t border-cream/15 pt-8">
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                    {member.role}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.2]">
                    {member.name}
                  </h3>
                  <p
                    className="text-lg text-cream/85 leading-[1.65] mb-3"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="font-sans text-sm text-gold hover:underline"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
              Our Partners
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1] max-w-3xl">
              The network that makes this work
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {partners.map((partner, i) => (
              <BlurFade key={partner.name} delay={0.1 + i * 0.08}>
                <div className="border-t border-forest/15 pt-8">
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                    {partner.region}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl text-forest mb-4 leading-[1.2]">
                    {partner.href ? (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gold transition-colors"
                      >
                        {partner.name}
                      </a>
                    ) : (
                      partner.name
                    )}
                  </h3>
                  <p className="text-lg text-forest/85 leading-[1.65]">
                    {partner.note}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Roland field photo */}
      <section className="bg-charcoal py-24 md:py-28 text-cream">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-16 lg:gap-32 items-center">
          <BlurFade>
            <div className="w-full aspect-[3/4] bg-forest relative overflow-hidden">
              <Image
                src="/photos/portrait-a.jpg"
                alt="Roland Poirier in the field"
                fill
                className="object-cover saturate-[0.9] sepia-[0.05]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold mb-6">
                A note from Roland
              </p>
              <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                Building relationships. Bringing hope.
              </h2>
              <p className="text-xl leading-[1.6] text-cream/90 mb-6">
                I founded You Feed Them in 2008 with my late wife Theresa after a trip to Kenya broke something loose in both of us. We didn&rsquo;t set out to start a charity. We set out to walk alongside one community and be useful. Eighteen years later, that&rsquo;s still the whole plan.
              </p>
              <p className="text-xl leading-[1.6] text-cream/90">
                When you partner with YFT, you&rsquo;re partnering with a team that has skin in the game, knows the people by name, and will still be in that village in five years to see what you helped plant.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-24 md:py-28 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-6 max-w-3xl">
              Ready to be part of the work?
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="text-xl text-cream/90 max-w-2xl leading-[1.6] mb-12">
              Partner financially, join a mission trip, or just stay in the loop.
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
              >
                Partner with us
              </Link>
              <Link
                href="/programs"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm md:text-base uppercase tracking-wider font-semibold py-5 px-10 transition-colors inline-block"
              >
                Explore the villages
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
