"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Impact() {
  return (
    <main className="w-full pt-32">
      {/* Hero */}
      <header className="py-16 md:py-24 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-4xl">
              The kids we fed are now writing theses.
            </h1>
          </BlurFade>
        </div>
      </header>

      {/* Video section */}
      <section className="w-full bg-black">
        <div className="w-full aspect-video max-h-[80vh] flex justify-center items-center relative">
          {/* Waiting for GoPro alumni dinner footage. Placeholder below. */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-cream relative cursor-pointer transition-transform hover:scale-105 hover:bg-white/30 after:content-[''] after:absolute after:top-1/2 after:left-[55%] after:-translate-x-1/2 after:-translate-y-1/2 after:border-l-[20px] after:border-l-cream after:border-y-[15px] after:border-y-transparent" />
            <p className="text-cream font-sans uppercase tracking-[0.1em] text-sm font-semibold">
              Alumni Dinner Footage (Pending)
            </p>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-[800px]">
          <BlurFade>
            <p className="font-heading text-3xl leading-[1.4] mb-16 text-forest first-letter:text-[6rem] first-letter:float-left first-letter:leading-[0.8] first-letter:pr-4 first-letter:pt-2 first-letter:text-gold">
              We gathered around a single table. Many of these students we hadn&apos;t seen since they were in primary school. Now they are studying engineering, medicine, and law.
            </p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-8">
              <p className="text-lg leading-[1.8] opacity-90">
                In 2009, Seje Primary was little more than a temporary structure. When we provided the initial capital to build permanent classrooms and stabilize the teaching staff, the goal was never to maintain a perpetual charity. The goal was catalytic investment.
              </p>
              <p className="text-lg leading-[1.8] opacity-90">
                What you see at the alumni dinner is the compounding return of that investment. The local community didn&apos;t just maintain the school; they scaled it. They took ownership of the operations, the culture, and the outcomes.
              </p>
              <p className="text-lg leading-[1.8] opacity-90">
                The students at this table represent the first generation of secondary and university graduates from the program. They are the proof of concept that when you build programs and hand over the keys, communities will sustain them far better than any external organization could.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Student story blocks */}
      <section className="bg-forest py-32 text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl mb-20 leading-[1.1]">
              Featured Alumni
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-16">
            {[1, 2, 3].map((i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-8 lg:gap-16 items-start border-t border-cream/10 pt-12">
                  <div className="w-full aspect-square bg-charcoal relative overflow-hidden max-w-[200px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-sans text-cream/30 text-xs uppercase tracking-wider">Photo</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl mb-4">[Student Name {i}]</h3>
                    <p className="text-lg leading-[1.65] text-cream/80 mb-4">
                      [Currently in university, field of study, where, one-line quote]
                    </p>
                    <p className="font-heading italic text-xl text-gold leading-[1.4]">
                      &ldquo;[Student quote placeholder]&rdquo;
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Mission team */}
      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                  The Team Behind the Stories
                </h2>
                <p className="text-lg leading-[1.65] opacity-90">
                  The recent 5+5 Canadian/American mission trip brought together volunteers and field teams. [Placeholder for group photo and further details from Roland.]
                </p>
              </div>
              <div className="w-full aspect-[4/3] bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-sans text-cream/40 text-sm uppercase tracking-wider">Group photo pending</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-32 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-12">
              Ready to fund the next foundation?
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <Link
              href="/donate"
              className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
            >
              Make an Investment
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
