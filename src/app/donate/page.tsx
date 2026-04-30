"use client";

import { useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const tiers = [
  { amount: 25, label: "one week of student meals" },
  { amount: 50, label: "one month sponsoring a primary student" },
  { amount: 100, label: "seeds and bio-fertilizer for a community plot" },
  { amount: 250, label: "one month of a teacher&rsquo;s stipend" },
  { amount: 500, label: "irrigation line for a section of the farm" },
  { amount: 5000, label: "major contribution to the Mwalwigi church build" },
  { amount: 10000, label: "cornerstone gift, acknowledged on the project" },
];

const designations = [
  { id: "where-needed-most", label: "Where needed most" },
  { id: "mwalwigi-church", label: "Mwalwigi church build (Tanzania)" },
  { id: "school-feeding", label: "School feeding program" },
  { id: "student-sponsorship", label: "Student sponsorship (Yogo or Seje)" },
  { id: "clean-water", label: "Clean water wells" },
  { id: "albino-children", label: "Albino children protection" },
];

export default function Donate() {
  const [donateType, setDonateType] = useState<"onetime" | "recurring">("recurring");
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [designation, setDesignation] = useState<string>("where-needed-most");

  const isCustom = !tiers.some((t) => t.amount === amount);
  const displayAmount = isCustom ? customAmount : amount.toLocaleString();
  const selectedDesignation = designations.find((d) => d.id === designation);

  return (
    <main className="min-h-screen pt-32 md:pt-36 pb-24 md:pb-28 bg-forest text-cream">
      {/* Page hero */}
      <section className="container mx-auto px-8 max-w-7xl mb-16">
        <BlurFade>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
            Partner With The Work
          </p>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h1 className="font-heading text-5xl md:text-[64px] lg:text-[80px] leading-[1.02] text-cream max-w-4xl">
            Every dollar reaches the field. We don&rsquo;t take a cut.
          </h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-xl md:text-2xl leading-[1.55] text-cream/90 mt-6 max-w-2xl">
            Canadian donors can route gifts through our partner The Great Commission Foundation for a CRA tax receipt. US or direct gifts support the work immediately.
          </p>
        </BlurFade>
      </section>

      {/* Transparency trust block */}
      <section className="container mx-auto px-8 max-w-7xl mb-16 md:mb-20">
        <BlurFade delay={0.1}>
          <div className="border-2 border-gold bg-gold/10 p-8 md:p-12">
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              How Giving Works
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-heading text-2xl md:text-3xl text-cream mb-3 leading-[1.2]">
                  Canadian tax receipts
                </p>
                <p className="text-lg text-cream/90 leading-[1.6] mb-4">
                  For CRA-receipted giving, donate through our partner{" "}
                  <strong className="text-cream">The Great Commission Foundation</strong>. Select the &ldquo;Partners in Hope Tanzania&rdquo; project to direct your gift to Mwalwigi.
                </p>
                <a
                  href="https://gcfcanada.com/partners-in-hope-tanzania/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-cream text-forest hover:bg-gold text-sm uppercase tracking-wider font-bold py-3 px-6 transition-colors"
                >
                  Give via GCF
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <p className="font-heading text-2xl md:text-3xl text-cream mb-3 leading-[1.2]">
                  Direct support to YFT
                </p>
                <p className="text-lg text-cream/90 leading-[1.6]">
                  You Feed Them is not a registered charity. Direct gifts reach projects immediately and flexibly, but are <strong className="text-cream">not tax-receipted</strong>. This is how we keep overhead near zero. Use the form on this page for direct support.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Main form area */}
      <section className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: What your donation funds */}
          <BlurFade>
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-bold mb-4">
                Where it goes
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-cream mb-10 leading-[1.15]">
                Clean water, farms, schools, and churches, across three villages.
              </h2>
              <ul className="flex flex-col gap-8">
                <li className="border-t border-cream/15 pt-6">
                  <p className="font-heading text-xl md:text-2xl text-cream mb-2 leading-[1.25]">
                    Mwalwigi church build
                  </p>
                  <p className="text-lg text-cream/80 leading-[1.6]">
                    Four temporary churches destroyed. Roughly 250 people gathering under a tree. Current urgent priority.
                  </p>
                </li>
                <li className="border-t border-cream/15 pt-6">
                  <p className="font-heading text-xl md:text-2xl text-cream mb-2 leading-[1.25]">
                    School feeding program
                  </p>
                  <p className="text-lg text-cream/80 leading-[1.6]">
                    Two meals a day for 481 students. Biggest single pressure on the budget.
                  </p>
                </li>
                <li className="border-t border-cream/15 pt-6">
                  <p className="font-heading text-xl md:text-2xl text-cream mb-2 leading-[1.25]">
                    Student sponsorship
                  </p>
                  <p className="text-lg text-cream/80 leading-[1.6]">
                    $50/mo covers daycare-grade 6. $60/mo for grade 7-9. $70/mo for secondary. Through our partner AMIC.
                  </p>
                </li>
                <li className="border-t border-cream/15 pt-6">
                  <p className="font-heading text-xl md:text-2xl text-cream mb-2 leading-[1.25]">
                    Clean-water wells
                  </p>
                  <p className="text-lg text-cream/80 leading-[1.6]">
                    Hydrological surveys, drilling, storage tanks, irrigation lines.
                  </p>
                </li>
              </ul>

              <div className="mt-14 pt-10 border-t border-cream/15">
                <p className="font-sans text-sm uppercase tracking-[0.15em] text-gold font-bold mb-3">
                  Major gifts or a conversation?
                </p>
                <p className="text-lg leading-[1.6] text-cream/85">
                  Large gifts, recurring commitments, or program-specific investments can be arranged with Roland directly at{" "}
                  <a
                    href="mailto:roland@youfeedthem.com"
                    className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors"
                  >
                    roland@youfeedthem.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Right: donation form */}
          <BlurFade delay={0.2}>
            <div className="bg-cream text-forest p-8 md:p-12 flex flex-col gap-8 w-full">
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

              {/* Designation */}
              <div>
                <label className="font-sans text-xs uppercase tracking-[0.15em] text-forest/70 font-bold mb-3 block">
                  Direct your gift to
                </label>
                <select
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="w-full py-4 px-4 font-sans text-base text-forest bg-transparent border-2 border-forest/20 outline-none focus:border-forest transition-colors cursor-pointer"
                >
                  {designations.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tier buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {tiers.map((tier) => {
                  const selected = amount === tier.amount;
                  return (
                    <button
                      key={tier.amount}
                      className={`relative border-2 p-5 sm:p-6 transition-all duration-200 cursor-pointer text-left ${
                        selected
                          ? "bg-forest text-cream border-forest"
                          : "bg-transparent border-forest/20 text-forest hover:border-forest"
                      }`}
                      onClick={() => {
                        setAmount(tier.amount);
                        setCustomAmount("");
                      }}
                    >
                      {selected && (
                        <span className="absolute top-2 right-2 bg-gold text-forest w-5 h-5 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                      )}
                      <span className="font-heading text-xl sm:text-2xl block">
                        ${tier.amount.toLocaleString()}
                      </span>
                      <span
                        className={`font-sans text-xs mt-1 block leading-snug ${
                          selected ? "text-cream/70" : "text-forest/55"
                        }`}
                        dangerouslySetInnerHTML={{ __html: tier.label }}
                      />
                    </button>
                  );
                })}
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
                    className="w-full py-6 pl-12 pr-6 font-heading text-2xl text-forest bg-transparent border-2 border-forest/20 outline-none focus:border-forest transition-colors placeholder:text-forest/40"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:roland@youfeedthem.com?subject=${encodeURIComponent(
                    `${donateType === "recurring" ? "Monthly" : "One-time"} partnership: $${displayAmount || "—"}`
                  )}&body=${encodeURIComponent(
                    `Hi Roland,\n\nI'd like to partner with You Feed Them.\n\nAmount: $${displayAmount || "—"}${
                      donateType === "recurring" ? " per month" : " (one-time)"
                    }\nDirect to: ${selectedDesignation?.label}\n\nPlease send me payment instructions.\n\nName:\nLocation:\n`
                  )}`}
                  className="w-full text-center bg-gold text-forest hover:bg-[#d1a862] text-lg uppercase tracking-wider font-bold py-6 transition-colors cursor-pointer"
                >
                  Partner {displayAmount ? `$${displayAmount}` : ""}
                  {donateType === "recurring" ? " / month" : ""}
                </a>
                <p className="text-center text-sm text-forest/60 leading-relaxed">
                  Direct gifts to YFT reach {selectedDesignation?.label.toLowerCase()} immediately. Not tax-receipted.
                  <br />
                  For a Canadian tax receipt, use the GCF link above.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Legal footer */}
      <section className="container mx-auto px-8 max-w-7xl mt-24 md:mt-28 pt-12 border-t border-cream/10">
        <p className="text-sm text-cream/55 leading-[1.7] max-w-3xl">
          You Feed Them is not a registered charity. Tax-receipted giving is available through our partner The Great Commission Foundation (a registered Canadian charity) for the Partners in Hope Tanzania project. Direct gifts to YFT are processed for rapid deployment to the field and are not eligible for a tax receipt. Travel and mission-trip costs are not tax-deductible. Questions: roland@youfeedthem.com.
        </p>
      </section>
    </main>
  );
}
