import Link from 'next/link';

export default function Programs() {
  return (
    <main className="w-full pt-32">
      <header className="py-16 md:py-24 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-[800px]">
          <h1 className="font-heading text-5xl md:text-7xl mb-8 leading-[1.1]">A Portfolio of Impact</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            We build and invest in foundational infrastructure. Our model treats each school and medical initiative as a portfolio company with clear return on impact.
          </p>
        </div>
      </header>

      <section className="py-32 bg-cream text-forest">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col gap-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
            <div className="w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative group">
              <img src="/seje_school_photo.png" alt="Seje School" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.85] sepia-[0.05] -hue-rotate-[10deg]" />
            </div>
            <div>
              <span className="font-sans uppercase tracking-wider text-xs text-terracotta font-bold block mb-6">Established 2009 &mdash; Seje, Kenya</span>
              <h2 className="font-heading text-4xl md:text-5xl mb-8">Seje Primary School</h2>
              <p className="text-lg opacity-90 mb-12 leading-[1.7]">
                What began as a single classroom is now a thriving educational institution. We provided the capital for construction and teacher salaries; the local community has since taken full ownership. Alumni from this program are currently attending national universities.
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
          </div>

          <div className="w-full h-[1px] bg-forest/10" />

          {/* RTL grid block logic implemented via tailwind orders or generic col inversion */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-sans uppercase tracking-wider text-xs text-terracotta font-bold block mb-6">Established 2018 &mdash; Remote Clinics</span>
              <h2 className="font-heading text-4xl md:text-5xl mb-8">Medical Camps</h2>
              <p className="text-lg opacity-90 mb-12 leading-[1.7]">
                Deploying medical teams to regions with zero access to primary care. We partner with local healthcare professionals to provide diagnostics, treatment, and ongoing care plans for chronic conditions.
              </p>
              <div className="flex flex-wrap gap-12">
                <div className="flex flex-col">
                  <span className="font-heading text-5xl text-gold leading-none">7k+</span>
                  <span className="font-sans text-sm uppercase tracking-wider opacity-70 mt-3 font-semibold">Patients seen in 4 days</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[400px] lg:h-[600px] overflow-hidden bg-charcoal relative order-1 lg:order-2">
              <div className="w-full h-full bg-charcoal/80"></div>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="bg-forest py-32 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-6xl mb-12">Become a partner in our work.</h2>
          <Link href="/donate" className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block">
            Invest in Outcomes
          </Link>
        </div>
      </section>
    </main>
  );
}
