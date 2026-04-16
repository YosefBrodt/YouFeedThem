"use client";

import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Media() {
  return (
    <main className="w-full pt-32">
      {/* Hero */}
      <header className="py-16 md:py-24 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-4xl">
              17 years, documented.
            </h1>
          </BlurFade>
        </div>
      </header>

      {/* Gallery */}
      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Masonry-style layout using CSS columns */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Real photos */}
            <BlurFade delay={0.1}>
              <div className="break-inside-avoid overflow-hidden bg-charcoal relative group">
                <Image
                  src="/seje_school_photo.png"
                  alt="Seje School, Kenya"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.85] sepia-[0.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-4">
                  <p className="font-sans text-xs text-cream/60 uppercase tracking-wider">
                    Seje, Kenya / Schools
                  </p>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="break-inside-avoid overflow-hidden bg-charcoal relative group">
                <Image
                  src="/medical_camp_hero.png"
                  alt="Medical camp deployment reaching over 7,000 people"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.85] sepia-[0.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-4">
                  <p className="font-sans text-xs text-cream/60 uppercase tracking-wider">
                    East Africa / Medical Camps
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* Placeholder slots for incoming photos */}
            {["Mission Trips", "Communities", "Alumni", "Agriculture"].map((category, i) => (
              <BlurFade key={category} delay={0.3 + i * 0.1}>
                <div className="break-inside-avoid aspect-[4/3] bg-charcoal relative overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-sans text-cream/30 text-sm uppercase tracking-wider">{category}</p>
                    <p className="font-sans text-cream/20 text-xs mt-2">Photo pending</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="bg-forest py-32">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl text-cream mb-12 leading-[1.1]">
              Video
            </h2>
          </BlurFade>

          {/* Primary: Alumni dinner footage */}
          <BlurFade delay={0.15}>
            <div className="w-full aspect-video bg-black mb-12 flex items-center justify-center relative">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-cream relative cursor-pointer transition-transform hover:scale-105 after:content-[''] after:absolute after:top-1/2 after:left-[55%] after:-translate-x-1/2 after:-translate-y-1/2 after:border-l-[16px] after:border-l-cream after:border-y-[12px] after:border-y-transparent" />
                <p className="text-cream font-sans uppercase tracking-[0.1em] text-sm font-semibold">
                  Alumni Dinner Footage (Primary, pending)
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Secondary: Mission trip videos */}
          <BlurFade delay={0.25}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full aspect-video bg-charcoal flex items-center justify-center">
                <p className="text-cream/40 font-sans text-sm uppercase tracking-wider">
                  Mission trip video (pending)
                </p>
              </div>
              <div className="w-full aspect-video bg-charcoal flex items-center justify-center">
                <p className="text-cream/40 font-sans text-sm uppercase tracking-wider">
                  Mission trip video (pending)
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-32 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-6 max-w-3xl leading-[1.1]">
              The work is the proof. Fund the next deployment.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Invest now
              </Link>
              <Link
                href="/impact"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Read alumni stories
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
