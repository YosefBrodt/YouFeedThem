"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const team = [
  {
    name: "Roland Poirier",
    role: "Founder &middot; Nutritionist",
    bio: "Roland started You Feed Them in 2008 after he and his late wife Theresa first visited Kenya. He is President of Nutra-Fix Inc., a probiotic supplement company he and Theresa founded together, and a past President of a local Future Farmers of America chapter, a background that shapes the agriculture-first model of every YFT village. He serves his local church as an Elder and one of the worship leaders. Hunting, hiking, canoeing, and time in his maple sugar bush keep him grounded between trips.",
    email: "roland@youfeedthem.com",
  },
  {
    name: "Bishop Silas Owiti Oduor",
    role: "Field Partner, Kenya",
    bio: "Pastor Silas is from Yogo village. In 2008, fifty percent of the children in his community were dying from water-borne disease and malnutrition. A mutual friend, Lynn Fraser, introduced him to Roland and Theresa in Canada. Silas has since grown a single church in Yogo into ten churches across the district and is now a Bishop spreading the gospel across Kenyan radio.",
  },
  {
    name: "Pastor Titus Mashalla",
    role: "Field Partner, Tanzania",
    bio: "Leads Partners in Hope Tanzania in Mwalwigi. With his wife Happiness and their four children Shawn, Moses, Evelyn, and Ebenezer, Titus relocated from Bukwimba to Mwalwigi in 2018 to plant a church, a farm, and a community development organization where the need was greatest. Currently stewarding the permanent church build after four temporary structures were lost to weather.",
  },
  {
    name: "Bob Elliott",
    role: "Chair, Community Development Committee",
    bio: "Retired sub-station electrician from Hydro Ottawa. Bob is the project-management spine on the well, the church build, and the agriculture builds, and an advisor to Partners in Hope Tanzania. He grew up working on his uncle&rsquo;s farm and brings the practical building knowledge that turns plans into structures that last. Married 38 years to Dianne, with three married daughters and six grandchildren.",
  },
  {
    name: "Dianne Elliott",
    role: "Advisor, Partners in Hope Tanzania",
    bio: "Liaison with The Great Commission Foundation for their support of Partners in Hope. Dianne brings decades of small-business, marketing, and parent-council experience, plus a focus on the care of women and children through education and small enterprise. Married 38 years to Bob.",
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
                In 2008, Roland and his late wife Theresa Poirier joined a small group at Trinity Bible Church in Osgoode, Ontario. The conversation that mattered came from Luke 9, the moment Jesus turned to his disciples in front of a hungry crowd and said <em className="font-heading">&ldquo;you give them something to eat.&rdquo;</em> The group decided to act on it.
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                A mutual friend, Lynn Fraser, introduced the Poiriers to Pastor Silas Owiti-Oduor, originally from a Kenyan village called Yogo. Silas described what was happening at home: about half the children in his community were dying of water-borne disease, malnutrition, and AIDS. Roland flew to Kenya later that year with a small team.
              </p>
              <p className="text-xl leading-[1.6] opacity-90">
                The team came back with land purchased for a community farm, four local leaders ready to run it, and a phrase Roland hasn&rsquo;t stopped repeating: <em className="font-heading">you feed them, we help you do it</em>. The mission began with nourishing the soil. Eighteen years later, two schools are running, farms are feeding the students, clean water flows in three villages, and medical, dental, and vision care is part of every mission trip.
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
              <p className="font-sans text-base uppercase tracking-[0.18em] text-gold/90 font-semibold mb-6">
                Co-founder &middot; Marketing &amp; Mobilization Chair
              </p>
              <p className="font-sans text-lg text-cream/85 leading-[1.7] max-w-2xl mx-auto">
                Theresa was on the trip to Kenya that started this. For the next fifteen years she ran the website, the newsletters, the graphics, and the bookkeeping, alongside Roland at Nutra-Fix Inc. Quiet, exacting, and never the loudest voice in the room. The work continues in her honor.
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
            <figure className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] bg-forest relative overflow-hidden ring-1 ring-cream/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55)]">
                <Image
                  src="/photos/wayback-pulls/roland-congregation.jpg"
                  alt="Roland with the Yogo congregation"
                  fill
                  className="object-cover saturate-[0.9]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <figcaption className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold">
                Roland in Yogo &middot; November 2008
              </figcaption>
            </figure>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-semibold mb-6">
                The Posture
              </p>
              <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                Building relationships. Bringing hope.
              </h2>
              <p className="text-xl leading-[1.6] text-cream/90 mb-6">
                YFT did not set out to start a charity. It set out to walk alongside one community and be useful. Eighteen years later, that is still the whole plan.
              </p>
              <p className="text-xl leading-[1.6] text-cream/90">
                Partnering with YFT means partnering with a team that has skin in the game, knows the people by name, and will still be in the village in five years to see what was planted.
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
