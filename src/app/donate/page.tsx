'use client';

import { useState } from 'react';

export default function Donate() {
  const [donateType, setDonateType] = useState<'onetime' | 'recurring'>('recurring');
  const [amount, setAmount] = useState<number>(100);

  const predefinedAmounts = {
    onetime: [50, 250, 1000, 5000],
    recurring: [25, 50, 100, 500]
  };

  return (
    <main className="min-h-screen pt-40 pb-32 bg-forest text-cream">
      <section className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          <div className="max-w-[600px]">
            <h1 className="font-heading text-5xl md:text-[64px] mb-8 leading-[1.1] text-cream">Fund the Foundation.</h1>
            <p className="text-lg leading-[1.7] opacity-90 mb-16">
              Your capital investment directly scales our capacity to build schools, deploy medical teams, and back local leaders. We treat every dollar as a strategic asset meant to generate generational returns.
            </p>
            
            <div className="pt-12 border-t border-cream/20">
              <h3 className="font-sans uppercase tracking-[0.05em] text-sm font-semibold text-gold mb-6">Tax Deductibility & Partnerships</h3>
              <p className="text-[0.95rem] leading-[1.6] opacity-80 mb-4">
                <strong>United States:</strong> Contributions are fully tax-deductible. You Feed Them operates as a registered 501(c)(3) organization (EIN: **-*******).
              </p>
              <p className="text-[0.95rem] leading-[1.6] opacity-80 mb-4">
                <strong>Canada:</strong> We process Canadian impact investments through our trusted partners at <a href="https://hungryforlife.org" target="_blank" rel="noreferrer" className="underline decoration-gold underline-offset-4 hover:text-gold transition-colors">Hungry For Life</a> and The Great Commission.
              </p>
            </div>
          </div>

          <div className="bg-cream text-forest p-8 md:p-16 flex flex-col gap-12 w-full lg:max-w-xl mx-auto">
            <div className="flex border-b-2 border-forest/10">
              <button 
                className={`flex-1 bg-transparent border-none py-4 font-sans font-semibold text-base uppercase tracking-wider text-forest relative transition-all duration-300 ${donateType === 'onetime' ? 'opacity-100 after:content-[""] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px] after:bg-forest' : 'opacity-50 hover:opacity-75'}`}
                onClick={() => { setDonateType('onetime'); setAmount(250); }}
              >
                One-time
              </button>
              <button 
                className={`flex-1 bg-transparent border-none py-4 font-sans font-semibold text-base uppercase tracking-wider text-forest relative transition-all duration-300 ${donateType === 'recurring' ? 'opacity-100 after:content-[""] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px] after:bg-forest' : 'opacity-50 hover:opacity-75'}`}
                onClick={() => { setDonateType('recurring'); setAmount(100); }}
              >
                Recurring
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {predefinedAmounts[donateType].map((preset) => (
                <button 
                  key={preset}
                  className={`bg-transparent border p-6 font-heading text-2xl transition-all duration-200 cursor-pointer ${amount === preset ? 'bg-forest text-cream border-forest' : 'border-forest/20 text-forest hover:border-forest'}`}
                  onClick={() => setAmount(preset)}
                >
                  ${preset}
                </button>
              ))}
              <div className="col-span-2 relative flex items-center">
                <span className="absolute left-6 font-heading text-2xl text-forest">$</span>
                <input 
                  type="number" 
                  placeholder="Custom" 
                  value={!predefinedAmounts[donateType].includes(amount) && amount > 0 ? amount : ''}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full py-6 pl-12 pr-6 font-heading text-2xl text-forest bg-transparent border border-forest/20 outline-none focus:border-forest transition-colors placeholder:text-forest/40"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full bg-gold text-forest hover:bg-[#d1a862] text-lg uppercase tracking-wider font-semibold py-6 transition-colors">
                Invest ${amount > 0 ? amount : ''} {donateType === 'recurring' ? '/ month' : ''}
              </button>
              <p className="text-center text-sm opacity-60">Secure, encrypted transaction.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
