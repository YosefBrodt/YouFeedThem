"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  preview: string;
  detail: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/photos/water-dirty.jpg",
    alt: "Contaminated water source, pre-2011",
    category: "Clean Water / Yogo",
    preview: "The water we were drinking, before 2011.",
    detail:
      "Before the hydrological survey and successful drilling in 2011, the only village well in Yogo was contaminated. Women and children gathered water for washing and drinking, and the drinking water had to be boiled first. This is part of the reality that launched You Feed Them in 2008.",
  },
  {
    src: "/photos/pastor-titus-family-2020.jpg",
    alt: "Pastor Titus Mashalla and his family, October 2020",
    category: "Field Partners / Tanzania",
    preview: "Pastor Titus Mashalla and family.",
    detail:
      "Pastor Titus Mashalla is YFT's field partner in Tanzania. He leads Partners in Hope in Mwalwigi and is stewarding the current church build project after four temporary churches were destroyed by wind and torrential rain. Pictured here with his wife Happiness and their three children, Shawn, Titus, and Evelyn, October 2020.",
  },
  {
    src: "/photos/pastor-titus-blankets.jpg",
    alt: "Pastor Titus distributing blankets in Mwalwigi",
    category: "Community Care / Mwalwigi",
    preview: "Distributing blankets in Mwalwigi.",
    detail:
      "Pastor Titus distributing blankets in Mwalwigi, Tanzania. Visits to homes to minister, bring hope (and Bibles when available), and invite people to gather on Sundays under the tree that currently serves as the community's church.",
  },
  {
    src: "/photos/drought-crops-titus.jpg",
    alt: "Working drought-resistant crops with Pastor Titus",
    category: "Farming / Tanzania",
    preview: "Working the crops in drought conditions.",
    detail:
      "Mwalwigi experiences sporadic rainfall: heavy downpours in the rainy season and predominantly dry conditions the rest of the year. Drought-tolerant crops, irrigation, composting, and bio-fertilizers are all part of how YFT partners with communities on food security.",
  },
  {
    src: "/photos/shucking-peanuts-yogo.jpg",
    alt: "Shucking peanuts at Yogo Farm, Kenya",
    category: "Farming / Yogo",
    preview: "Shucking peanuts at the Yogo farm.",
    detail:
      "The Yogo farm grew from 4 acres in 2009 to 12 acres by 2014. Crop yields increased roughly tenfold in the first year after drip-line irrigation and sugar-cane compost were introduced. The harvest feeds the 281 students at Yogo Glory Centre Academy two meals a day, and the surplus is sold at local market.",
  },
  {
    src: "/seje_school_photo.png",
    alt: "Seje Glory Centre Academy, Kenya",
    category: "Education / Seje",
    preview: "Seje Glory Centre Academy.",
    detail:
      "Seje Glory Centre Academy, in Siaya District, Kenya. 200 students, 27 staff. Built in partnership with Stittsville Community Bible Church in Ontario, Canada. 110 students have transitioned to secondary school since 2019.",
  },
  {
    src: "/medical_camp_hero.png",
    alt: "Medical camp in the field",
    category: "Mission Trips",
    preview: "Mission camp in the field.",
    detail:
      "Our mission trips bring together Canadian and American volunteers alongside our field partners in East Africa. Medical, dental, and vision care are offered during these camps, alongside farm and construction work.",
  },
  {
    src: "/photos/community-gathering.jpg",
    alt: "Community gathering",
    category: "Community",
    preview: "Community life in the villages we serve.",
    detail:
      "The communities of Yogo, Seje, and Mwalwigi are the whole point. YFT does not run the schools, farms, or churches. The people who live in these villages do. Our job is to partner, plant, and step back.",
  },
  {
    src: "/photos/portrait-a.jpg",
    alt: "Portrait from the field",
    category: "Portraits",
    preview: "Portrait from the field.",
    detail:
      "One of the faces behind the work. Names and full stories come forward when our partners are ready to share them.",
  },
  {
    src: "/photos/portrait-b.jpg",
    alt: "Portrait from the field",
    category: "Portraits",
    preview: "Portrait from the field.",
    detail:
      "One of the faces behind the work. Names and full stories come forward when our partners are ready to share them.",
  },
  {
    src: "/photos/yft-scene-a.jpg",
    alt: "YFT scene from the field",
    category: "Field Scenes",
    preview: "Scene from the field.",
    detail:
      "Daily life and work across the YFT network. More field documentation is added as mission trips return.",
  },
  {
    src: "/photos/yft-scene-b.jpg",
    alt: "YFT scene from the field",
    category: "Field Scenes",
    preview: "Scene from the field.",
    detail:
      "Daily life and work across the YFT network. More field documentation is added as mission trips return.",
  },
];

export default function Media() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <main className="w-full pt-28 md:pt-32">
      {/* Hero */}
      <header className="py-14 md:py-20 bg-forest text-cream">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-6">
              Media
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[96px] mb-8 leading-[0.95] max-w-4xl">
              Eighteen years, in pictures.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-2xl text-cream/90 leading-relaxed max-w-2xl">
              Click any image for the full story behind it.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* Gallery */}
      <section className="bg-cream py-24 md:py-28 text-forest">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, i) => (
              <BlurFade key={item.category + i} delay={0.1 + i * 0.04}>
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="group block w-full break-inside-avoid overflow-hidden bg-charcoal relative text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label={`Open details for ${item.category}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[0.9] sepia-[0.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="p-5 bg-charcoal">
                    <p className="font-sans text-xs uppercase tracking-[0.12em] text-gold font-bold mb-2">
                      {item.category}
                    </p>
                    <p className="font-sans text-base text-cream/90 leading-snug">
                      {item.preview}
                    </p>
                  </div>
                </button>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter callout */}
      <section className="bg-forest py-24 md:py-28">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Stay In The Loop
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl text-cream mb-6 leading-[1.1]">
              Get updates from the field
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-cream/85 mb-10 max-w-2xl mx-auto leading-[1.6]">
              Quarterly newsletters from Roland and the team. Occasional text updates when something breakthrough happens. No spam.
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <a
              href="mailto:roland@youfeedthem.com?subject=Subscribe me to YFT updates"
              className="inline-block bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors"
            >
              Subscribe
            </a>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 md:py-28 text-center text-cream">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-6 max-w-3xl leading-[1.1]">
              The work is the proof. Partner with us.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Link
                href="/donate"
                className="bg-gold text-forest hover:bg-[#d1a862] text-base md:text-lg uppercase tracking-wider font-bold py-5 px-12 transition-colors inline-block"
              >
                Partner with us
              </Link>
              <Link
                href="/impact"
                className="bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10 text-sm md:text-base uppercase tracking-wider font-semibold py-5 px-10 transition-colors inline-block"
              >
                Read the timeline
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Detail for ${selected.category}`}
        >
          <div
            className="relative bg-charcoal max-w-5xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 bg-forest/80 hover:bg-forest text-cream p-2 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full bg-black">
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1600}
                height={1200}
                className="w-full h-auto object-contain max-h-[70vh]"
                sizes="100vw"
              />
            </div>
            <div className="p-6 md:p-10">
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-3">
                {selected.category}
              </p>
              <p className="font-heading text-2xl md:text-3xl text-cream mb-5 leading-[1.25]">
                {selected.preview}
              </p>
              <p className="font-sans text-lg text-cream/85 leading-[1.7]">
                {selected.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
