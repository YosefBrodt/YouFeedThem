"use client";

import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Programs() {
  return (
    <main className="w-full pt-32">
      {/* Hero */}
      <header className="py-16 md:py-24 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-4xl">
              Three programs. One model.
            </h1>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-cream/90 leading-relaxed max-w-2xl">
              We build. The community runs it. We visit, measure, adjust.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* Program 1: Agriculture */}
      <section className="py-32 bg-cream text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
            <BlurFade>
              <div>
                <span className="font-sans uppercase tracking-[0.15em] text-xs text-terracotta font-bold block mb-6">
                  Program 01
                </span>
                <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                  Regenerative farms that outlast the funding
                </h2>
                <p className="text-lg opacity-90 mb-12 leading-[1.7]">
                  We start by training local farmers in soil-restorative techniques: cover cropping, composting, crop rotation, water capture. We provide the initial seed stock, tools, and infrastructure. Then we transfer ownership. The fields we planted in the first years are still producing because the people working them own the outcomes.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative">
                {/* Placeholder for agriculture photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-sans text-cream/40 text-sm uppercase tracking-wider">Photo pending</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-cream"><div className="container mx-auto px-8 max-w-7xl"><div className="w-full h-[1px] bg-forest/10" /></div></div>

      {/* Program 2: Education */}
      <section className="py-32 bg-cream text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center">
            <BlurFade>
              <div className="w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative order-2 lg:order-1">
                <Image
                  src="/seje_school_photo.png"
                  alt="Seje Primary School, Kenya"
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105 saturate-[0.85] sepia-[0.05]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="order-1 lg:order-2">
                <span className="font-sans uppercase tracking-[0.15em] text-xs text-terracotta font-bold block mb-6">
                  Program 02 / Established 2009, Seje, Kenya
                </span>
                <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                  Schools where graduates reach university
                </h2>
                <p className="text-lg opacity-90 mb-12 leading-[1.7]">
                  Seje Primary was our first school, built in 2009. Two more have followed since. The programs feed students daily from community-run farms, retain teaching staff on stipend, and graduate cohorts that move on to secondary and university. When we started, the goal was permanent classrooms. What we got was a pipeline.
                </p>
                <div className="flex flex-wrap gap-12">
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">400+</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">Daily Students</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">100%</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">Community Run</span>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-cream"><div className="container mx-auto px-8 max-w-7xl"><div className="w-full h-[1px] bg-forest/10" /></div></div>

      {/* Program 3: Medical Outreach */}
      <section className="py-32 bg-cream text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
            <BlurFade>
              <div>
                <span className="font-sans uppercase tracking-[0.15em] text-xs text-terracotta font-bold block mb-6">
                  Program 03
                </span>
                <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
                  Mobile camps, 7,000+ treated per deployment
                </h2>
                <p className="text-lg opacity-90 mb-12 leading-[1.7]">
                  Each camp is a short, intense deployment. A rotating team of five Canadian and five American volunteers joins local medical staff to run triage, primary care, and follow-up. We prioritize regions with no standing clinical infrastructure. Every patient seen is a patient the regional system otherwise would not have reached.
                </p>
                <div className="flex flex-wrap gap-12">
                  <div className="flex flex-col">
                    <span className="font-heading text-5xl text-gold leading-none">7k+</span>
                    <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">Patients seen in 4 days</span>
                  </div>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative">
                {/* Placeholder for medical camp photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-sans text-cream/40 text-sm uppercase tracking-wider">Photo pending</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-32">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-5xl text-cream mb-6 leading-[1.1]">
              Fund a program, or fund all three.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-lg text-cream/90 leading-[1.65] mb-12">
              We accept program-specific investments. Give once, give monthly, or reach out if you want to direct a major gift to a particular initiative.
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Invest now
              </Link>
              <a
                href="mailto:rolandpoirier58@gmail.com"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block"
              >
                Talk to Roland
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
