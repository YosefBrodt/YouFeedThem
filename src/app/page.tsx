import Link from 'next/link';
import NumberTicker from '@/components/ui/NumberTicker';

export default function Home() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-32 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-forest/15 after:pointer-events-none">
        <div className="absolute inset-0 -z-10 bg-charcoal">
          <img 
            src="/medical_camp_hero.png" 
            alt="Medical Camp" 
            className="w-full h-full object-cover object-center saturate-[0.85] sepia-[0.05] -hue-rotate-[10deg]" 
          />
        </div>
        <div className="container mx-auto px-8 max-w-7xl relative z-10">
          <h1 className="font-heading text-cream text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.05]">
            We build programs. <br /> Communities sustain them.
          </h1>
        </div>
      </section>

      <section className="bg-forest py-24">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between gap-16">
          <div className="flex flex-col">
            <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
              <NumberTicker value={17} className="text-gold" />+
            </div>
            <p className="font-sans uppercase tracking-[0.1em] text-sm font-semibold text-cream/80">Years of Operation</p>
          </div>
          <div className="flex flex-col">
            <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
              <NumberTicker value={3} className="text-gold" />
            </div>
            <p className="font-sans uppercase tracking-[0.1em] text-sm font-semibold text-cream/80">Schools Built</p>
          </div>
          <div className="flex flex-col">
            <div className="font-heading text-6xl md:text-[100px] lg:text-[120px] text-gold leading-none">
              <NumberTicker value={7000} className="text-gold" />+
            </div>
            <p className="font-sans uppercase tracking-[0.1em] text-sm font-semibold text-cream/80">Treated in 4 Days</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-32 items-center">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">A Portfolio of Programs</h2>
            <p className="text-lg opacity-90 mb-8 leading-[1.65]">
              We do not measure success by dollars raised, but by outcomes generated. Over the past 17 years, we have invested carefully in foundational infrastructure—schools, medical camps, and agricultural systems—while ensuring the local communities lead the stewardship of these assets. 
            </p>
            <p className="text-lg opacity-90 mb-12 leading-[1.65]">
              Students are now in university. Local leaders are multiplying the impact. Your investment is an injection of capital into a self-sustaining system.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/donate" className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors text-center inline-block">
                Invest
              </Link>
              <Link href="/programs" className="bg-transparent text-forest border border-forest hover:bg-forest hover:text-cream text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors text-center inline-block">
                View Programs
              </Link>
            </div>
          </div>
          <div className="p-12 md:p-16 bg-forest text-cream relative">
            <h3 className="font-heading text-gold text-8xl md:text-[10rem] leading-[0] mt-12 mb-8">“</h3>
            <p className="font-heading italic text-3xl md:text-4xl leading-[1.3] relative z-10">
              Our metric for success is the day we are no longer needed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
