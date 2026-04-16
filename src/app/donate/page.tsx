"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const tiers = [
  { amount: 25, label: "feeds one student for a month" },
  { amount: 50, label: "one month of seeds for a community plot" },
  { amount: 100, label: "one medical camp supply kit" },
  { amount: 250, label: "one teacher stipend for a month" },
  { amount: 500, label: "one term of tuition for an alumni candidate" },
  { amount: 5000, label: "funds a full program cycle" },
  { amount: 10000, label: "names a cohort" },
];

export default function Donate() {
  const [donateType, setDonateType] = useState<"onetime" | "recurring">("recurring");
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");

  const isCustom = !tiers.some((t) => t.amount === amount);
  const displayAmount = isCustom
    ? customAmount
    : amount.toLocaleString();

  return (
    <main className="min-h-screen pt-40 pb-32 bg-forest text-cream">
      <section className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left: copy */}
          <BlurFade>
            <div className="max-w-[600px]">
              <h1 className="font-heading text-5xl md:text-[64px] mb-8 leading-[1.05] text-cream">
                Every dollar goes to the field. Nothing less.
              </h1>
              <p className="text-lg leading-[1.65] text-cream/90 mb-8">
                Program donations are fully tax-deductible. US donors receive IRS receipts through our 501(c)(3). Canadian donors receive CRA receipts through our partners.
              </p>

              <div className="pt-12 border-t border-cream/20">
                <h3 className="font-sans uppercase tracking-[0.05em] text-sm font-semibold text-gold mb-6">
                  Tax Deductibility &amp; Partnerships
                </h3>
                <p className="text-[0.95rem] leading-[1.6] text-cream/80 mb-4">
                  <strong>United States:</strong> Contributions are fully tax-deductible. You Feed Them operates as a registered 501(c)(3) organization. EIN: [REPLACE].
                </p>
                <p className="text-[0.95rem] leading-[1.6] text-cream/80 mb-4">
                  <strong>Canada:</strong> Tax receipts are issued by our partners at{" "}
                  <a
                    href="https://hungryforlife.org"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gold underline-offset-4 hover:text-gold transition-colors"
                  >
                    Hungry For Life
                  </a>{" "}
                  and The Great Commission. Roland will facilitate the handoff after your donation clears.
                </p>
              </div>

              <div className="pt-12 border-t border-cream/20 mt-12">
                <h3 className="font-sans uppercase tracking-[0.05em] text-sm font-semibold text-gold mb-4">
                  Want to invest at a different level?
                </h3>
                <p className="text-[0.95rem] leading-[1.6] text-cream/80">
                  Large gifts, recurring commitments, or program-specific investments all go through Roland directly. Reach out at{" "}
                  <a href="mailto:rolandpoirier58@gmail.com" className="underline decoration-gold underline-offset-4 hover:text-gold transition-colors">
                    rolandpoirier58@gmail.com
                  </a>{" "}
                  or 613-883-5780.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Right: donation form */}
          <BlurFade delay={0.2}>
            <div className="bg-cream text-forest p-8 md:p-16 flex flex-col gap-10 w-full lg:max-w-xl mx-auto">
              {/* Toggle */}
              <div className="flex border-b-2 border-forest/10">
                <button
                  className={`flex-1 bg-transparent border-none py-4 font-sans font-semibold text-base uppercase tracking-wider text-forest relative transition-all duration-300 cursor-pointer ${
                    donateType === "onetime"
                      ? "opacity-100 after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px] after:bg-forest"
                      : "opacity-50 hover:opacity-75"
                  }`}
                  onClick={() => {
                    setDonateType("onetime");
                    setAmount(100);
                  }}
                >
                  One-time
                </button>
                <button
                  className={`flex-1 bg-transparent border-none py-4 font-sans font-semibold text-base uppercase tracking-wider text-forest relative transition-all duration-300 cursor-pointer ${
                    donateType === "recurring"
                      ? "opacity-100 after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px] after:bg-forest"
                      : "opacity-50 hover:opacity-75"
                  }`}
                  onClick={() => {
                    setDonateType("recurring");
                    setAmount(100);
                  }}
                >
                  Monthly
                </button>
              </div>

              {/* Tier buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {tiers.map((tier) => (
                  <button
                    key={tier.amount}
                    className={`bg-transparent border p-5 sm:p-6 transition-all duration-200 cursor-pointer text-left ${
                      amount === tier.amount
                        ? "bg-forest text-cream border-forest"
                        : "border-forest/20 text-forest hover:border-forest"
                    }`}
                    onClick={() => {
                      setAmount(tier.amount);
                      setCustomAmount("");
                    }}
                  >
                    <span className="font-heading text-xl sm:text-2xl block">
                      ${tier.amount.toLocaleString()}
                    </span>
                    <span className={`font-sans text-xs mt-1 block leading-snug ${amount === tier.amount ? "text-cream/70" : "text-forest/50"}`}>
                      {tier.label}
                    </span>
                  </button>
                ))}
                {/* Custom */}
                <div className="col-span-2 sm:col-span-3 relative flex items-center">
                  <span className="absolute left-6 font-heading text-2xl text-forest">$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(Number(e.target.value) || 0);
                    }}
                    onFocus={() => setAmount(0)}
                    className="w-full py-6 pl-12 pr-6 font-heading text-2xl text-forest bg-transparent border border-forest/20 outline-none focus:border-forest transition-colors placeholder:text-forest/40"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4">
                <button className="w-full bg-gold text-forest hover:bg-[#d1a862] text-lg uppercase tracking-wider font-semibold py-6 transition-colors cursor-pointer">
                  Invest {displayAmount ? `$${displayAmount}` : ""}{donateType === "recurring" ? " / month" : ""}
                </button>
                <p className="text-center text-sm text-forest/50">
                  Secure, encrypted transaction.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Legal footer */}
      <section className="container mx-auto px-8 max-w-7xl mt-32 pt-12 border-t border-cream/10">
        <p className="text-sm text-cream/50 leading-[1.7] max-w-3xl">
          You Feed Them Inc. is a registered US 501(c)(3) public charity. EIN: [REPLACE when Roland confirms]. All donations to programs are tax-deductible to the extent allowed by law. Travel and mission-trip costs are not tax-deductible. Canadian donors: tax receipts are issued by our partners at hungryforlife.org and The Great Commission. Roland will facilitate the handoff after your donation clears.
        </p>
      </section>
    </main>
  );
}
