"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Download, X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

type Photo = {
  src: string;
  alt: string;
  caption: string;
  date?: string;
  location?: string;
  story?: string;
};

type Chapter = {
  id: string;
  number: string;
  shortLabel: string;
  era: string;
  location?: string;
  title: string;
  lead: string[];
  pullQuote?: { text: string; attribution: string };
  stats?: { value: string; label: string }[];
  photos: Photo[];
  bg: "forest" | "cream" | "charcoal";
  closing?: string;
};

const chapters: Chapter[] = [
  {
    id: "origins",
    number: "Chapter One",
    shortLabel: "Origins",
    era: "2008",
    location: "Trinity Bible Church Ottawa, Canada",
    title: "Twenty-five people under a tree.",
    bg: "cream",
    lead: [
      "In the spring of 2008, a small group at Trinity Bible Church in Osgoode, Ontario worked through Rick Warren's 40 Days of Community curriculum. The introductory video reminded them of Mark 6, the disciples telling Jesus to send the crowds away, Jesus telling the disciples to feed them. The group decided to act.",
      "Lynn Fraser introduced Roland and Theresa Poirier to Silas Owiti-Oduor, originally from a Kenyan village called Yogo. Pastor Shawn Ketcheson blessed the church's new organic gardens on Sunday September 14, 2008. Roland flew to Kenya in November.",
      "He came back with a phrase he hasn't stopped repeating: you feed them, we help you do it.",
    ],
    pullQuote: {
      text: "I have seen the face of starvation. I have held it in my arms. It is a face of desperation, depravation and hopelessness. We came home with a goat in the truck, a 12-acre farm purchased, and a board of four Kenyans willing to give the rest of their lives to feeding their own village.",
      attribution: "Roland Poirier, trip-return letter, November 23, 2008",
    },
    photos: [],
    closing:
      "The first Kenyan board: Doctarie Peter Okosh as Chairman, Pastor Pauline Owiti Oduor as signatory (she gave her own $20/month salary to fund the pre-school in the early years), Eric Magunga, and Bernard O. Oguna. Theresa Poirier handled the website, the newsletters, the graphics, and the bookkeeping for the next fifteen years. The current site is the second one she helped imagine. She passed away before it shipped.",
  },
  {
    id: "yogo",
    number: "Chapter Two",
    shortLabel: "Yogo",
    era: "2008 to present",
    location: "Yogo, Siaya District, Kenya",
    title: "From hard-as-driveway soil to twelve acres of harvest.",
    bg: "forest",
    lead: [
      "Yogo is the mother project. The soil in 2008 was so depleted local farmers described it as hard as a driveway. Children were dying of water-borne disease. The first village well had been dug by hand and was contaminated.",
      "Today Yogo has a twelve-acre farm, a clean-water borehole drilled to depth in 2011 after two prior attempts in the area had failed, a school that serves 281 students with 42 staff, and graduates studying nursing, teaching, and medical engineering at university.",
      "Every program at Yogo is run by Yogo. We partner, we plant, we step back.",
    ],
    stats: [
      { value: "12", label: "acres" },
      { value: "281", label: "students" },
      { value: "2", label: "meals a day" },
      { value: "27", label: "alumni in university" },
    ],
    pullQuote: {
      text: "The thirst for knowledge was even more powerful than the thirst for food.",
      attribution: "Bishop Silas Owiti-Oduor, on the early years at Yogo",
    },
    photos: [
      {
        src: "/photos/wayback-pulls/yogo-school-exterior.jpg",
        alt: "Drilling rig hitting water at Yogo, 2011",
        caption: "The moment water was reached.",
        location: "Yogo, Kenya",
        story:
          "The third drilling attempt in the area, after two prior had failed. YFT funded a hydrological survey first; the team hit clean water on the first attempt in 2011. The well has run continuously since.",
      },
      {
        src: "/photos/wayback-pulls/elisha-farm-manager.jpg",
        alt: "Yogo Academy students playing a string game",
        caption: "Yogo Academy students at play.",
        date: "February 2014",
        location: "Yogo, Kenya",
      },
      {
        src: "/photos/wayback-pulls/kale-snowpea-shade-planting.jpg",
        alt: "Early-era Yogo Farm, raised beds with drip irrigation",
        caption: "The farm in its early years.",
        date: "October 2009",
        location: "Yogo, Kenya",
        story:
          "Raised-bed square-foot gardening with drip-line irrigation, even in the founding years. The Yogo farm grew from four acres in 2009 to twelve acres by 2014, with crop yields up roughly tenfold after sugar-cane composting and bio-fertilisers were introduced.",
      },
      {
        src: "/photos/wayback-pulls/walking-tractor-2014.jpg",
        alt: "Rows of cabbage with drip-line irrigation, Yogo Farm",
        caption: "Cabbage rows with drip-line irrigation.",
        location: "Yogo Farm, Kenya",
      },
      {
        src: "/photos/wayback-pulls/drying-corn-millet.jpg",
        alt: "A man waving in a tall field of corn at Yogo",
        caption: "In the maize, at full height.",
        location: "Yogo Farm, Kenya",
      },
      {
        src: "/photos/wayback-pulls/yogo-meal-ugali.jpg",
        alt: "Corn and grain drying outside a storehouse at Yogo",
        caption: "Corn and grain, drying for storage.",
        location: "Yogo, Kenya",
      },
      {
        src: "/photos/shucking-peanuts-yogo.jpg",
        alt: "Group sorting through the harvest at Yogo",
        caption: "Sorting through the harvest.",
        location: "Yogo, Kenya",
      },
      {
        src: "/photos/wayback-pulls/yogo-cabbage-harvest.jpg",
        alt: "A homestead of thatched-roof huts in Yogo",
        caption: "A homestead in Yogo.",
        location: "Yogo, Kenya",
      },
    ],
  },
  {
    id: "seje",
    number: "Chapter Three",
    shortLabel: "Seje",
    era: "2014 to present",
    location: "Seje, Siaya District, Kenya",
    title: "Built with Stittsville. Run by Seje.",
    bg: "cream",
    lead: [
      "Seje is the second school. It was built in partnership with Stittsville Community Bible Church in Ontario, Canada. The model is the same as Yogo: partner, plant, transfer. Seje Glory Centre Academy now serves 200 students with 27 staff, and 110 students have transitioned to secondary school since 2019.",
      "Like Yogo, Seje runs its own kitchen and its own farm. Like Yogo, the school exists alongside a community well and a drought response plan.",
    ],
    stats: [
      { value: "200", label: "students" },
      { value: "27", label: "staff" },
      { value: "110", label: "now in secondary school" },
    ],
    photos: [
      {
        src: "/photos/wayback-pulls/seje-group-portrait.jpg",
        alt: "Seje Glory Centre Academy with students lined up outside",
        caption: "Seje Glory Centre Academy.",
        location: "Seje, Kenya",
      },
      {
        src: "/photos/wayback-pulls/seje-academy-exterior.jpg",
        alt: "The Seje academy under construction, brick walls without a roof",
        caption: "The academy, under construction.",
        location: "Seje, Kenya",
        story:
          "Built in partnership with Stittsville Community Bible Church (Ontario, Canada), who raised the construction funds and sent the first mission teams. The school has since absorbed twelve cohorts of mission-trip volunteers from churches across Ontario.",
      },
      {
        src: "/photos/wayback-pulls/seje-breakfast-crowd.jpg",
        alt: "Children in school uniforms standing on small playground stools, waving",
        caption: "Seje students.",
        location: "Seje, Kenya",
      },
      {
        src: "/photos/wayback-pulls/seje-water-collection-drought.jpg",
        alt: "Raised bed of green seedlings under a wood-stick lattice shade",
        caption: "Seedlings under a stick-lattice shade.",
        location: "Seje, Kenya",
      },
      {
        src: "/photos/wayback-pulls/seje-playground.jpg",
        alt: "Two children in school uniform on a red plastic slide",
        caption: "On the slide.",
        location: "Seje, Kenya",
      },
    ],
  },
  {
    id: "tanzania",
    number: "Chapter Four",
    shortLabel: "Tanzania",
    era: "2018 to present",
    location: "Mwalwigi, Mwanza Region, Tanzania",
    title: "Pastor Titus, twice.",
    bg: "forest",
    lead: [
      "Pastor Titus Mashalla had already led a successful YFT farm and church partnership in Bukwimba, Tanzania (2010 to 2018) before he and his wife Happiness felt called to relocate to Mwalwigi. Mwalwigi was where the need was greater.",
      "On Thursday October 14, 2021, after two years of fundraising, the team drilled a borehole in Mwalwigi and hit clean water at ninety metres. A solar pump, a 5,000-litre storage tank, and fencing were installed in the months that followed. Women and children who had been walking up to ten kilometres a day for water now make a five-minute trip.",
      "The current campaign is the church build. Four temporary structures have been destroyed by wind and torrential rain. Roughly 250 people gather for Sunday services under a tree. A 39ft by 48ft cement-block first phase has been quoted at $18,700; the architectural drawings are complete; the contractor has been selected.",
    ],
    stats: [
      { value: "90m", label: "well depth" },
      { value: "10km", label: "previous daily water walk" },
      { value: "$18,700", label: "current church build budget" },
    ],
    photos: [
      {
        src: "/photos/water-dirty.jpg",
        alt: "Four women collecting water from a muddy stream",
        caption: "Where the water was collected before.",
        location: "Mwalwigi, Tanzania, pre-2021",
      },
      {
        src: "/photos/wayback-pulls/mwalwigi-women-collecting-water.jpeg",
        alt: "A man in a red shirt at the Mwalwigi well drilling rig",
        caption: "At the Mwalwigi drilling site.",
        location: "Mwalwigi, Tanzania",
        story:
          "The contractor was Supreme Water Drilling Ltd. The team drilled to ninety metres on October 14, 2021, after two years of fundraising. Within a week of the solar pump being installed, the well became the primary water source for the village.",
      },
      {
        src: "/photos/drought-crops-titus.jpg",
        alt: "Pastor Titus inspecting struggling crops in a dry field",
        caption: "Inspecting drought-tolerant crops.",
        location: "Mwalwigi, Tanzania",
        story:
          "Mwalwigi has sporadic rainfall: heavy downpours in the wet season, near-drought the rest of the year. Drought-tolerant crops, drip-line irrigation, composting, and bio-fertilisers are how the farm produces year-round.",
      },
    ],
  },
  {
    id: "mitindo",
    number: "Chapter Five",
    shortLabel: "Mitindo",
    era: "August 2021 onward",
    location: "Mitindo, Tanzania",
    title: "When the attack came, the response had to come too.",
    bg: "charcoal",
    lead: [
      "On August 12, 2021, seven children with albinism were attacked near a remote Tanzanian village. The motivation was ritual superstition. It was not the first such attack in the region.",
      "Mitindo school houses and protects roughly 200 children with albinism year-round, shielded from violence and given access to the medical care, sun protection, and special-needs support that their condition requires. After the August attack, 38 additional children were brought to Mitindo for protection. YFT mobilised funds for bedding, blankets, sun hats, and care supplies.",
      "We don't lead with this story. We don't put it on the home page. But it is part of what we do, and the donors who fund this work deserve to know that their gifts also go to children who have nowhere else to be safe.",
    ],
    photos: [
      {
        src: "/photos/wayback-pulls/mwalwigi-well-success.jpg",
        alt: "A large group of children at Mitindo holding up colorful new blankets",
        caption: "Mitindo students with newly distributed blankets.",
        location: "Mitindo, Tanzania",
        story:
          "Many of the children visible here have albinism (note the wide-brimmed sun hats, which protect against severe UV damage). The blankets, sun hats, and mosquito netting were funded directly through YFT donors and partner ministries after the August 2021 events.",
      },
      {
        src: "/photos/pastor-titus-blankets.jpg",
        alt: "Pastor Titus distributing folded blankets at Mitindo",
        caption: "Distributing the blankets.",
        location: "Mitindo, Tanzania",
      },
      {
        src: "/photos/wayback-pulls/mwalwigi-church-under-tree.jpeg",
        alt: "Bunk beds with floral bedding and pink mosquito netting in a dormitory",
        caption: "A dormitory at the Mitindo school.",
        location: "Mitindo, Tanzania",
        story:
          "The mosquito netting is essential — malaria is endemic and children with albinism are at higher risk for skin cancer if forced to sleep in screened-but-uncovered conditions. The colourful bedding came from the same supply run as the blankets in the photos above.",
      },
    ],
    closing:
      "Three newsletter PDFs from August and September 2021 document the attack, the response, and the recovery in detail. They are linked in the archive at the bottom of this page.",
  },
];

const newsletters = [
  { file: "2013-spring-newsletter.pdf", era: "Spring 2013", title: "Yogo, four years in" },
  { file: "2013-fall-newsletter.pdf", era: "Fall 2013", title: "The first walking tractor" },
  { file: "2021-08-12-albino-attack-update.pdf", era: "August 12, 2021", title: "Attack at Mitindo: initial update" },
  { file: "2021-08-26-albino-response.pdf", era: "August 26, 2021", title: "Response and care for the affected children" },
  { file: "2021-09-20-albino-recovery.pdf", era: "September 20, 2021", title: "Recovery and ongoing support" },
  { file: "newsletter-33920168-2023.pdf", era: "2023", title: "Field update from Mwalwigi" },
  { file: "newsletter-8ac3f432-2024.pdf", era: "2024", title: "Yogo, fifteen years on" },
  { file: "newsletter-a863e7f8-2024.pdf", era: "2024", title: "Field update" },
  { file: "newsletter-f7e4406c-2024.pdf", era: "2024", title: "Field update" },
  { file: "newsletter-fa68e1c0-2024.pdf", era: "2024", title: "Year in review" },
];

// Flatten all photos with chapter context for the lightbox
type FlatPhoto = Photo & { chapterTitle: string; chapterNumber: string };
const allPhotos: FlatPhoto[] = chapters.flatMap((c) =>
  c.photos.map((p) => ({ ...p, chapterTitle: c.title, chapterNumber: c.number }))
);

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function Media() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<string>(chapters[0].id);
  const [showIndicator, setShowIndicator] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const close = useCallback(() => setSelectedIdx(null), []);
  const next = useCallback(
    () => setSelectedIdx((i) => (i === null ? null : (i + 1) % allPhotos.length)),
    []
  );
  const prev = useCallback(
    () =>
      setSelectedIdx((i) =>
        i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length
      ),
    []
  );

  // Lightbox keyboard nav + scroll lock
  useEffect(() => {
    if (selectedIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedIdx, close, next, prev]);

  // Track which chapter is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-chapter-id");
          if (id) setActiveChapter(id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowIndicator(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selected = selectedIdx !== null ? allPhotos[selectedIdx] : null;
  const indexFor = (src: string, chapterTitle: string) =>
    allPhotos.findIndex((p) => p.src === src && p.chapterTitle === chapterTitle);

  return (
    <main className="w-full pt-28 md:pt-32">
      {/* ─── Cover ─── */}
      <header className="bg-forest text-cream py-20 md:py-28 border-b border-cream/10">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold font-bold mb-8">
              The Field, In Pictures
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[112px] mb-8 leading-[0.95] max-w-5xl">
              Eighteen years.
              <br />
              Three villages.
              <br />
              One ask.
            </h1>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-xl md:text-2xl text-cream/85 leading-[1.6] max-w-3xl">
              A photo essay of YFT&rsquo;s work in Kenya and Tanzania, with newsletter archives going back to 2013. Click any image for the full caption.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* ─── Persistent chapter indicator ─── */}
      <ActiveChapterIndicator
        chapters={chapters}
        activeChapter={activeChapter}
        visible={showIndicator}
      />

      {/* ─── Chapters ─── */}
      {chapters.map((chapter) => (
        <ChapterSection
          key={chapter.id}
          chapter={chapter}
          sectionRef={(el) => {
            sectionRefs.current[chapter.id] = el;
          }}
          onSelect={(src) => setSelectedIdx(indexFor(src, chapter.title))}
        />
      ))}

      {/* ─── Newsletter Archive ─── */}
      <section
        id="archive"
        className="bg-forest py-24 md:py-32 border-t border-cream/10"
        data-chapter-id="archive"
        ref={(el) => {
          sectionRefs.current["archive"] = el;
        }}
      >
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              The Archive
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8 leading-[1.05] max-w-4xl">
              Every newsletter we have, since 2013.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-cream/80 leading-[1.6] max-w-2xl mb-14">
              Long-form letters from Roland and the team. Free to download.
            </p>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {newsletters.map((n, i) => (
              <BlurFade key={n.file} delay={0.1 + i * 0.04}>
                <a
                  href={`/newsletters/${n.file}`}
                  download
                  className="group block border-t border-cream/15 pt-6 transition-colors hover:border-gold"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold mb-2">
                        {n.era}
                      </p>
                      <p className="font-heading text-xl md:text-2xl text-cream leading-[1.25] group-hover:text-gold transition-colors">
                        {n.title}
                      </p>
                    </div>
                    <Download
                      className="w-5 h-5 text-cream/60 group-hover:text-gold transition-colors shrink-0 mt-2"
                      strokeWidth={1.75}
                    />
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-charcoal py-24 md:py-32 text-cream text-center">
        <div className="container mx-auto px-8 flex flex-col items-center max-w-3xl">
          <BlurFade>
            <h2 className="font-heading text-4xl md:text-6xl mb-8 leading-[1.05]">
              The work is the proof. Partner with us.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
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

      {selected && selectedIdx !== null && (
        <Lightbox
          photo={selected}
          index={selectedIdx}
          total={allPhotos.length}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Subcomponents
// ─────────────────────────────────────────────────────────────────────────────

function ActiveChapterIndicator({
  chapters,
  activeChapter,
  visible,
}: {
  chapters: Chapter[];
  activeChapter: string;
  visible: boolean;
}) {
  const activeIdx = chapters.findIndex((c) => c.id === activeChapter);
  const isArchive = activeChapter === "archive";

  return (
    <div
      aria-hidden="true"
      className={`hidden md:flex fixed bottom-8 right-8 z-40 items-stretch transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-stretch bg-charcoal/95 text-cream backdrop-blur-md shadow-2xl shadow-black/30 border border-cream/10">
        <div className="flex flex-col justify-center gap-2 px-4 py-4 border-r border-cream/10">
          {chapters.map((c, i) => (
            <span
              key={c.id}
              className={`block transition-all duration-300 rounded-full ${
                i === activeIdx && !isArchive
                  ? "w-2 h-2 bg-gold"
                  : "w-1.5 h-1.5 bg-cream/30"
              }`}
            />
          ))}
        </div>
        <div className="px-5 py-3.5 flex flex-col justify-center min-w-[180px]">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold font-bold leading-none mb-1.5">
            {isArchive ? "Archive" : `Chapter ${activeIdx >= 0 ? toRoman(activeIdx + 1) : ""}`}
          </p>
          <p className="font-heading text-base text-cream leading-tight">
            {isArchive ? "Newsletters" : chapters[activeIdx]?.shortLabel ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
}

function toRoman(n: number) {
  const map: Record<number, string> = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V" };
  return map[n] ?? String(n);
}

function ChapterSection({
  chapter,
  sectionRef,
  onSelect,
}: {
  chapter: Chapter;
  sectionRef: (el: HTMLElement | null) => void;
  onSelect: (src: string) => void;
}) {
  const bgClass =
    chapter.bg === "forest"
      ? "bg-forest text-cream"
      : chapter.bg === "charcoal"
      ? "bg-charcoal text-cream"
      : "bg-cream text-forest";

  const muted = chapter.bg === "cream" ? "text-forest/70" : "text-cream/75";
  const border = chapter.bg === "cream" ? "border-forest/15" : "border-cream/15";
  const accent = chapter.bg === "cream" ? "text-terracotta" : "text-gold";

  return (
    <section
      id={chapter.id}
      data-chapter-id={chapter.id}
      ref={sectionRef}
      className={`${bgClass} py-24 md:py-32 border-t ${border}`}
    >
      <div className="container mx-auto px-8 max-w-7xl">
        <BlurFade>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 mb-16 md:mb-20">
            <div>
              <p
                className={`font-sans text-xs uppercase tracking-[0.22em] ${accent} font-bold mb-3`}
              >
                {chapter.number}
              </p>
              <p
                className={`font-sans text-sm uppercase tracking-[0.15em] font-semibold ${muted}`}
              >
                {chapter.era}
              </p>
              {chapter.location && (
                <p
                  className={`font-sans text-sm uppercase tracking-[0.15em] font-semibold ${muted} mt-1`}
                >
                  {chapter.location}
                </p>
              )}
            </div>
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                {chapter.title}
              </h2>
              <div className="flex flex-col gap-5 max-w-2xl">
                {chapter.lead.map((p, i) => (
                  <p key={i} className={`text-lg md:text-xl leading-[1.65] ${muted}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>

        {chapter.stats && (
          <BlurFade delay={0.1}>
            <div
              className={`grid grid-cols-2 ${
                chapter.stats.length === 4
                  ? "md:grid-cols-4"
                  : chapter.stats.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
              } gap-6 md:gap-10 border-y ${border} py-10 md:py-12 my-14 md:my-16`}
            >
              {chapter.stats.map((s) => (
                <div key={s.label}>
                  <p
                    className={`font-heading text-5xl md:text-6xl lg:text-7xl leading-[0.95] ${accent} mb-2`}
                  >
                    {s.value}
                  </p>
                  <p
                    className={`font-sans text-xs md:text-sm uppercase tracking-[0.15em] font-semibold ${muted}`}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        )}

        {chapter.pullQuote && (
          <BlurFade delay={0.15}>
            <figure
              className={`max-w-4xl mx-auto my-16 md:my-20 px-6 md:px-12 border-l-2 ${
                chapter.bg === "cream" ? "border-terracotta" : "border-gold"
              }`}
            >
              <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl leading-[1.25]">
                &ldquo;{chapter.pullQuote.text}&rdquo;
              </blockquote>
              <figcaption
                className={`font-sans text-sm uppercase tracking-[0.15em] mt-6 ${muted}`}
              >
                {chapter.pullQuote.attribution}
              </figcaption>
            </figure>
          </BlurFade>
        )}

        {chapter.photos.length > 0 && (
          <PhotoGrid photos={chapter.photos} bg={chapter.bg} onSelect={onSelect} />
        )}

        {chapter.closing && (
          <BlurFade delay={0.2}>
            <p
              className={`text-lg md:text-xl leading-[1.7] ${muted} max-w-3xl mt-16 md:mt-20`}
            >
              {chapter.closing}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  );
}

function PhotoGrid({
  photos,
  bg,
  onSelect,
}: {
  photos: Photo[];
  bg: Chapter["bg"];
  onSelect: (src: string) => void;
}) {
  const cardBg =
    bg === "cream" ? "bg-charcoal text-cream" : "bg-charcoal/60 text-cream";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {photos.map((photo, i) => (
        <BlurFade key={photo.src} delay={0.05 + i * 0.04}>
          <button
            type="button"
            onClick={() => onSelect(photo.src)}
            className={`group block w-full overflow-hidden ${cardBg} relative text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold`}
            aria-label={`Open detail for ${photo.alt}`}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] saturate-[0.92]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <p className="font-sans text-base leading-[1.4]">{photo.caption}</p>
              {photo.location && (
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-gold/80 font-semibold mt-2">
                  {photo.location}
                  {photo.date && ` · ${photo.date}`}
                </p>
              )}
            </div>
          </button>
        </BlurFade>
      ))}
    </div>
  );
}

function Lightbox({
  photo,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: {
  photo: FlatPhoto;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-forest/96 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail for ${photo.alt}`}
    >
      <div className="absolute top-4 md:top-6 left-4 md:left-8 z-10 font-sans text-sm uppercase tracking-[0.18em] text-cream/70 font-semibold">
        {String(index + 1).padStart(2, "0")} <span className="text-cream/40">/</span>{" "}
        {String(total).padStart(2, "0")}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 md:top-6 right-4 md:right-8 z-10 text-cream/80 hover:text-cream p-2 transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 text-cream/70 hover:text-gold p-3 transition-colors"
        aria-label="Previous photo"
      >
        <ArrowLeft className="w-7 h-7" strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 text-cream/70 hover:text-gold p-3 transition-colors"
        aria-label="Next photo"
      >
        <ArrowRight className="w-7 h-7" strokeWidth={1.5} />
      </button>

      <div
        className="relative bg-charcoal max-w-5xl w-full my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full bg-black">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1600}
            height={1200}
            className="w-full h-auto object-contain max-h-[70vh]"
            sizes="100vw"
          />
        </div>
        <div className="p-6 md:p-10">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold mb-3">
            {photo.chapterNumber} &middot; {photo.chapterTitle}
          </p>
          <p className="font-heading text-2xl md:text-3xl text-cream mb-4 leading-[1.25]">
            {photo.caption}
          </p>
          {(photo.location || photo.date) && (
            <p className="font-sans text-sm uppercase tracking-[0.12em] text-cream/55 font-semibold mb-5">
              {photo.location}
              {photo.location && photo.date && " · "}
              {photo.date}
            </p>
          )}
          {photo.story && (
            <p className="font-sans text-lg text-cream/85 leading-[1.7]">
              {photo.story}
            </p>
          )}
        </div>

        <div className="flex md:hidden items-center justify-between p-4 border-t border-cream/10 bg-charcoal">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="text-cream/80 hover:text-gold flex items-center gap-2 transition-colors font-sans text-sm uppercase tracking-wider font-semibold py-2 px-3"
            aria-label="Previous"
          >
            <ArrowLeft className="w-4 h-4" /> Prev
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="text-cream/80 hover:text-gold flex items-center gap-2 transition-colors font-sans text-sm uppercase tracking-wider font-semibold py-2 px-3"
            aria-label="Next"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
