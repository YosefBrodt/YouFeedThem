import Link from 'next/link';

export default function Media() {
  return (
    <main className="w-full pt-32">
      <header className="py-16 md:py-24 bg-forest text-cream text-center">
        <div className="container mx-auto px-8 max-w-[800px]">
          <h1 className="font-heading text-5xl md:text-7xl mb-8 leading-[1.1]">Media & Gallery</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            A visual documentation of the communities we partner with and the infrastructure we build together.
          </p>
        </div>
      </header>

      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aspect-square bg-charcoal relative overflow-hidden group">
              <img src="/seje_school_photo.png" alt="Seje School" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.85] sepia-[0.05] -hue-rotate-[10deg]" />
            </div>
            <div className="aspect-square bg-charcoal relative overflow-hidden group">
              <img src="/medical_camp_hero.png" alt="Medical Camp" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.85] sepia-[0.05] -hue-rotate-[10deg]" />
            </div>
            <div className="aspect-square bg-charcoal relative overflow-hidden group flex items-center justify-center p-8">
              <h3 className="font-heading text-2xl text-cream text-center">More photos coming soon</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
