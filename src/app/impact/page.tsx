import Link from 'next/link';

export default function Impact() {
  return (
    <main className="w-full pt-32">
      <header className="py-16 md:py-24 bg-forest text-cream text-center">
        <div className="container mx-auto px-8 max-w-[800px]">
          <h1 className="font-heading text-5xl md:text-7xl mb-8 leading-[1.1]">The Alumni Dinner</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            A testament to what happens when communities take the lead. 15 university students, all alumni of the Seje Primary program, reflecting on the foundation that brought them here.
          </p>
        </div>
      </header>

      <section className="w-full">
        <div className="w-full aspect-video max-h-[80vh] bg-black flex justify-center items-center relative">
          {/* Waiting for GoPro alumni dinner footage. Placeholder below. */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-cream relative cursor-pointer transition-transform hover:scale-105 hover:bg-white/30 
              after:content-[''] after:absolute after:top-1/2 after:left-[55%] after:-translate-x-1/2 after:-translate-y-1/2 
              after:border-l-[20px] after:border-l-cream after:border-y-[15px] after:border-y-transparent"></div>
            <p className="text-cream font-sans uppercase tracking-[0.1em] text-sm font-semibold">Alumni Dinner Footage (Pending)</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-32 text-forest">
        <div className="container mx-auto px-8 max-w-[800px]">
          <div className="font-heading text-3xl leading-[1.4] mb-16 text-forest 
            first-letter:text-[6rem] first-letter:float-left first-letter:leading-[0.8] first-letter:pr-4 first-letter:pt-2 first-letter:text-gold">
            We gathered around a single table. Many of these students we hadn’t seen since they were in primary school. Now they are studying engineering, medicine, and law.
          </div>
          
          <div className="flex flex-col gap-8">
            <p className="text-lg leading-[1.8] opacity-90">
              In 2009, Seje Primary was little more than a temporary structure. When we provided the initial capital to build permanent classrooms and stabilize the teaching staff, the goal was never to maintain a perpetual charity. The goal was catalytic investment.
            </p>
            <p className="text-lg leading-[1.8] opacity-90">
              What you see at the alumni dinner is the compounding return of that investment. The local community didn't just maintain the school; they scaled it. They took ownership of the operations, the culture, and the outcomes. 
            </p>
            <p className="text-lg leading-[1.8] opacity-90">
              The students at this table represent the first generation of secondary and university graduates from the program. They are the proof of concept that when you build programs and hand over the keys, communities will sustain them far better than any external organization could.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-32 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-6xl mb-12">Ready to fund the next foundation?</h2>
          <Link href="/donate" className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-4 px-10 transition-colors inline-block">
            Make an Investment
          </Link>
        </div>
      </section>
    </main>
  );
}
