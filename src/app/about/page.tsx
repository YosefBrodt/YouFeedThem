import Link from 'next/link';

export default function About() {
  return (
    <main className="w-full pt-32">
      <header className="py-16 md:py-24 bg-forest text-cream text-center">
        <div className="container mx-auto px-8 max-w-[800px]">
          <h1 className="font-heading text-5xl md:text-7xl mb-8 leading-[1.1]">Our Foundation</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Founded with a mandate to deliver sustainable assets, not perpetual charity. We believe in providing the initial capital injection for communities to build their own futures.
          </p>
        </div>
      </header>

      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-[800px]">
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-4xl text-forest mb-4">The Philosophy</h2>
            <p className="text-lg leading-[1.8] opacity-90">
              Charity is necessary in emergencies, but it is a poor long-term economic model. Since 2009, You Feed Them has operated more like an impact investment fund than a traditional non-profit. 
            </p>
            <p className="text-lg leading-[1.8] opacity-90">
              When we survey a region in need, we look for local leadership—teachers, doctors, farmers—who lack capital but possess the operational expertise. We supply the infrastructure. They supply the ongoing momentum.
            </p>
            
            <h2 className="font-heading text-4xl text-forest mt-12 mb-4">Transparency & Metrics</h2>
            <p className="text-lg leading-[1.8] opacity-90">
              Our overhead is kept radically low. Every investment made goes directly into the portfolio of programs: concrete for classrooms, lab equipment for medical camps, and direct seed funding for agricultural projects.
            </p>
            <p className="text-lg leading-[1.8] opacity-90">
              We track our success not by the volume of donations processed, but by the number of students graduating, the reduction of chronic illness in regions we support, and the eventual independence of the programs we back.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-32 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-6xl mb-12">Review the outcomes.</h2>
          <Link href="/programs" className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block">
            Explore Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
