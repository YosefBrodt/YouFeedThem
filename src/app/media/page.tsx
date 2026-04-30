"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
    era: "2008–2010",
    location: "Trinity Bible Church Ottawa, Canada",
    title: "Twenty-five people under a tree.",
    bg: "cream",
    lead: [
      "In the spring of 2008, a small group at Trinity Bible Church in Osgoode, Ontario worked through Rick Warren's “40 Days of Community” curriculum. The introductory video reminded them of Mark 6 — the disciples telling Jesus to send the crowds away, Jesus telling the disciples, “you give them something to eat.” The group decided to act.",
      "Lynn Fraser, a local businesswoman, introduced Roland and Theresa Poirier to Silas Owiti-Oduor, originally from a Kenyan village called Yogo. Pastor Shawn Ketcheson blessed the church’s new organic gardens on Sunday September 14, 2008. Deacon Dennis Kuz spoke. Cindy Girard photographed the day. Roland flew to Kenya in November.",
      "He came back with a phrase he hasn’t stopped repeating: “You feed them. We help you do it.”",
    ],
    pullQuote: {
      text: "I have seen the face of starvation. I have held it in my arms. It is a face of desperation, depravation and hopelessness. We came home with a goat in the truck, a 12-acre farm purchased, and a board of four Kenyans willing to give the rest of their lives to feeding their own village.",
      attribution: "Roland Poirier, trip-return letter, November 23, 2008",
    },
    photos: [
      {
        src: "/photos/community-gathering.jpg",
        alt: "Community gathering outside the YFT-built academy",
        caption: "Yogo, two years after the founding.",
        location: "Yogo, Siaya District, Kenya",
        story:
          "The first founding board on the Kenyan side: Doctarie Peter Okosh (Chairman), Pastor Pauline Owiti Oduor (signatory; gave her own $20/month salary to fund the pre-school in the early years), Eric Magunga (high-school teacher), and Bernard O. Oguna (agricultural engineer). Pauline’s small monthly stipend was the financial seed. The land was bought outright on that first trip.",
      },
      {
        src: "/photos/portrait-a.jpg",
        alt: "Portrait from the founding-era field",
        caption: "A face from the early years.",
        location: "Siaya District, Kenya",
        story:
          "Names and full stories of early-era subjects come forward when our partners on the ground are ready to share them. Many of the children photographed in 2008–2010 are now in their twenties; some of them are alumni in university today.",
      },
      {
        src: "/photos/portrait-b.jpg",
        alt: "Portrait from the founding-era field",
        caption: "A face from the early years.",
        location: "Siaya District, Kenya",
      },
    ],
    closing:
      "By December 14, 2008, Roland and the team showed the trip footage at TBCO and turned it into Yogo's first formal supporter base. Theresa Poirier handled the website, the newsletters, the graphics, and the bookkeeping for the next fifteen years. The current site is the second one she helped imagine. She passed away before it shipped.",
  },
  {
    id: "yogo",
    number: "Chapter Two",
    era: "2008–present",
    location: "Yogo, Siaya District, Kenya",
    title: "From hard-as-driveway soil to twelve acres of harvest.",
    bg: "forest",
    lead: [
      "Yogo is the mother project. The soil in 2008 was so depleted local farmers described it as “hard as a driveway.” Children were dying of water-borne disease. The first village well had been dug by hand and was contaminated.",
      "Today Yogo has a twelve-acre farm, a clean-water borehole drilled to depth on the first attempt in 2011, a school that serves 281 students with 42 staff, and graduates studying nursing, teaching, and medical engineering at university. Class sizes are 25–30 students, against the 100+ at the nearest public school.",
      "Every program at Yogo is run by Yogo. We partner, we plant, we step back. Elisha Otieno has been the farm manager since 2014.",
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
        alt: "Yogo Glory Centre Academy, exterior view",
        caption: "Yogo Glory Centre Academy.",
        location: "Yogo, Siaya District, Kenya",
        story:
          "The school was built by the community, on land bought outright by the founding mission team in November 2008. Today it serves 281 students with 42 staff. In 2015, it was ranked in the top ten percent of schools in Siaya District.",
      },
      {
        src: "/photos/wayback-pulls/yogo-meal-ugali.jpg",
        alt: "Students eating ugali at Yogo Glory Centre Academy",
        caption: "Two meals a day, every school day, for 281 children.",
        location: "Yogo Glory Centre Academy, Kenya",
        story:
          "The flagship program. Students at Yogo receive a hot uji (porridge) breakfast and a midday meal of ugali with beans or vegetables, sourced almost entirely from the on-site farm. The school feeding program is the single largest line item in the YFT budget. Every dollar of “where needed most” giving stabilises this program first.",
      },
      {
        src: "/photos/wayback-pulls/yogo-class-portrait.jpg",
        alt: "Class group portrait at Yogo",
        caption: "A class of Yogo students.",
        location: "Yogo Glory Centre Academy",
        story:
          "Class sizes at Yogo are kept between 25 and 30. By comparison, the nearest public school in Siaya District averages over 100 students per class. Smaller classes are why Yogo Glory Centre Academy was ranked in the top ten percent of district schools in 2015.",
      },
      {
        src: "/photos/wayback-pulls/yogo-cgc-classroom.jpg",
        alt: "Classroom interior at Yogo",
        caption: "Inside one of the academy classrooms.",
        location: "Yogo, Kenya",
      },
      {
        src: "/photos/wayback-pulls/yogo-well-drilling-2011.jpg",
        alt: "Drilling crew at the Yogo well, 2011",
        caption: "The 2011 well, drilled to depth on the first attempt.",
        date: "2011",
        location: "Yogo, Kenya",
        story:
          "Two previous drilling attempts in the area had failed. YFT funded a hydrological survey before the third try, and the team hit clean water on the first attempt. The well has run continuously since.",
      },
      {
        src: "/photos/wayback-pulls/water-storage-tank.jpg",
        alt: "Water storage tank installed near the school",
        caption: "Storage tank serving the school and the farm.",
        location: "Yogo, Kenya",
        story:
          "Solar-pumped from the borehole into a 5,000-litre tank, then gravity-fed to the school, the farm’s drip-line irrigation, and the surrounding community. A single source replacing kilometres of daily walking.",
      },
      {
        src: "/photos/wayback-pulls/elisha-farm-manager.jpg",
        alt: "Elisha Otieno, farm manager, with a student",
        caption: "Elisha Otieno, farm manager since 2014.",
        location: "Yogo Farm, Kenya",
        story:
          "Elisha has run the Yogo farm operation for over a decade. Hired by the YCBO board in 2014, his agricultural background and instinct for the land turned the four-acre starter plot into the twelve-acre, ten-times-yield producer it is today.",
      },
      {
        src: "/photos/wayback-pulls/walking-tractor-2014.jpg",
        alt: "Yogo's first walking tractor, 2014",
        caption: "The first walking tractor, 2014.",
        date: "2014",
        location: "Yogo Farm",
        story:
          "Funded by a young donor named Melissa, who organised her own fundraiser to buy it. The tractor replaced sixty people working the land for six weeks every planting season. In 2025 a 4WD tractor took its place, but the walking tractor was the moment the farm stopped being subsistence and started being a business that could feed the school and sell at market.",
      },
      {
        src: "/photos/wayback-pulls/kale-snowpea-shade-planting.jpg",
        alt: "Kale planted in the shade of snow peas at Yogo Farm",
        caption: "Kale in the shade of snow peas.",
        location: "Yogo Farm, Kenya",
        story:
          "Companion planting. Snow peas climb the tall trellises and provide shade for the kale beneath, which can’t handle direct equatorial sun. Two crops, one bed, no irrigation cost. The farm runs raised-bed square-foot gardening, drip-line irrigation, sugar-cane composting, and bio-fertilisers across all twelve acres.",
      },
      {
        src: "/photos/wayback-pulls/yogo-cabbage-harvest.jpg",
        alt: "Cabbage harvest at Yogo",
        caption: "Cabbage harvest.",
        location: "Yogo Farm",
      },
      {
        src: "/photos/wayback-pulls/drying-corn-millet.jpg",
        alt: "Corn and millet drying after harvest",
        caption: "Corn and millet, drying for storage.",
        location: "Yogo Farm",
        story:
          "Surplus from the harvest is dried, milled, and either fed to the school as ugali through the dry season or sold at the local market in Siaya. Market revenue is reinvested into seed for the next planting cycle.",
      },
      {
        src: "/photos/shucking-peanuts-yogo.jpg",
        alt: "Shucking peanuts at Yogo Farm",
        caption: "Shucking peanuts after harvest.",
        location: "Yogo Farm, Kenya",
        story:
          "Peanuts are part of the rotation. They fix nitrogen back into the soil and add protein to the school feeding program. The shucking is community work; everyone shows up.",
      },
    ],
    closing:
      "Yogo CBO has hosted the United Nations World Food Day at the farm. The model has been studied, copied, and replicated in Seje and Mwalwigi. The first cohort of Yogo alumni is in their third year of university.",
  },
  {
    id: "seje",
    number: "Chapter Three",
    era: "2014–present",
    location: "Seje, Siaya District, Kenya",
    title: "Built with Stittsville. Run by Seje.",
    bg: "cream",
    lead: [
      "Seje is the second school. It was built in partnership with Stittsville Community Bible Church in Ontario, Canada. The model is the same as Yogo: partner, plant, transfer. Seje Glory Centre Academy now serves 200 students with 27 staff, and 110 students have transitioned to secondary school since 2019.",
      "Like Yogo, Seje runs its own kitchen and its own farm. Like Yogo, the school exists alongside a community well, a drought response plan, and a programme to put the local children into clothes that match the dignity their classroom does.",
    ],
    stats: [
      { value: "200", label: "students" },
      { value: "27", label: "staff" },
      { value: "110", label: "now in secondary school" },
    ],
    photos: [
      {
        src: "/photos/wayback-pulls/seje-academy-exterior.jpg",
        alt: "Seje Glory Centre Academy",
        caption: "Seje Glory Centre Academy.",
        location: "Seje, Siaya District, Kenya",
      },
      {
        src: "/photos/wayback-pulls/seje-breakfast.jpg",
        alt: "Breakfast service at Seje",
        caption: "Breakfast at Seje.",
        location: "Seje Glory Centre Academy",
        story:
          "A morning serving of uji (porridge) and bread. Most of the students walk between two and five kilometres to get to school. Breakfast is the meal that decides whether they can stay through the afternoon.",
      },
      {
        src: "/photos/wayback-pulls/seje-lunch-beans.jpg",
        alt: "Lunch service at Seje, beans being prepared",
        caption: "Beans for lunch.",
        location: "Seje Glory Centre Academy",
        story:
          "The kitchen prepares one hot lunch a day, year-round. The protein cycle rotates beans, lentils, and ground peanuts depending on what the farm is yielding. The pots are large enough that nothing is left over by 1 pm.",
      },
      {
        src: "/photos/wayback-pulls/seje-breakfast-crowd.jpg",
        alt: "Students lined up for breakfast at Seje",
        caption: "The breakfast line.",
        location: "Seje Glory Centre Academy",
      },
      {
        src: "/photos/wayback-pulls/seje-water-collection-drought.jpg",
        alt: "Drought-era water collection at Seje, jerry cans and bicycles",
        caption: "During drought, water is currency.",
        location: "Seje, Kenya",
        story:
          "Siaya District is rain-fed. In drought years, like 2022–23, the community well becomes the only reliable water source for several kilometres. Jerry cans on bicycles is how the household run is made. The school stays open.",
      },
      {
        src: "/photos/wayback-pulls/seje-playground.jpg",
        alt: "Children playing at Seje",
        caption: "Recess.",
        location: "Seje Glory Centre Academy",
      },
      {
        src: "/photos/wayback-pulls/seje-group-portrait.jpg",
        alt: "Group portrait of Seje students",
        caption: "A Seje class.",
        location: "Seje Glory Centre Academy",
      },
      {
        src: "/seje_school_photo.png",
        alt: "Seje academy",
        caption: "The academy in mid-build, partnership with Stittsville.",
        location: "Seje, Kenya",
        story:
          "Stittsville Community Bible Church in Ontario, Canada raised the construction funds and sent the first mission teams. The school has since absorbed twelve cohorts of mission-trip volunteers from churches across Ontario.",
      },
    ],
  },
  {
    id: "tanzania",
    number: "Chapter Four",
    era: "2018–present",
    location: "Mwalwigi, Mwanza Region, Tanzania",
    title: "Pastor Titus, twice.",
    bg: "forest",
    lead: [
      "Pastor Titus Mashalla had already led a successful YFT farm and church partnership in Bukwimba, Tanzania (2010–2018) before he and his wife Happiness felt called to relocate to Mwalwigi. Mwalwigi was where the need was greater.",
      "On Thursday October 14, 2021, after two years of fundraising, the team drilled a borehole in Mwalwigi and hit clean water at ninety metres. A solar pump, a 5,000-litre storage tank, and fencing were installed in the months that followed. Women and children who had been walking up to ten kilometres a day for water now make a five-minute trip.",
      "The current campaign is the church build. Four temporary structures have been destroyed by wind and torrential rain. Roughly 250 people gather for Sunday services under a tree. A 39ft × 48ft cement-block first phase has been quoted at $18,700; the architectural drawings are complete; the contractor has been selected. The Gathering House (Chesterville, ON) gave $2,250, doubled by a matching donor. The remainder is the open ask.",
    ],
    stats: [
      { value: "90m", label: "well depth, drilled Oct 2021" },
      { value: "10km", label: "previous daily water walk" },
      { value: "$18,700", label: "current church build budget" },
    ],
    photos: [
      {
        src: "/photos/wayback-pulls/titus-happiness-family.jpg",
        alt: "Pastor Titus, Happiness, and family",
        caption: "Pastor Titus, Happiness, and their three children.",
        date: "October 2020",
        location: "Mwalwigi, Tanzania",
        story:
          "Pastor Titus Mashalla, his wife Happiness, and their children Shawn, Titus, and Evelyn. Field partner for YFT in Tanzania, in the role since the Bukwimba years (2010–2018) and continuing through the Mwalwigi relocation.",
      },
      {
        src: "/photos/wayback-pulls/mwalwigi-women-collecting-water.jpeg",
        alt: "Women collecting water from the new well in Mwalwigi",
        caption: "The new well, in use.",
        date: "2022",
        location: "Mwalwigi, Tanzania",
        story:
          "Within a week of the solar pump being installed, the well became the primary water source for the village. Women and children now make a five-minute walk to the well, twice a day, instead of the four-hour round trip to the river.",
      },
      {
        src: "/photos/wayback-pulls/mwalwigi-well-success.jpg",
        alt: "Drilling team and Pastor Titus the day water was reached",
        caption: "Water at ninety metres, October 14, 2021.",
        date: "October 14, 2021",
        location: "Mwalwigi, Tanzania",
        story:
          "Drilling started when 75% of the cost had been raised. The remaining $3,500 was raised in the days after water was reached. Total cost included drilling, the solar pump, the 5,000-litre tank, and fencing.",
      },
      {
        src: "/photos/wayback-pulls/mwalwigi-church-under-tree.jpeg",
        alt: "Mwalwigi congregation gathering under a tree",
        caption: "Sunday service, under a tree.",
        location: "Mwalwigi, Tanzania",
        story:
          "Four temporary church structures have been destroyed by weather since 2018. The current congregation, roughly 250 people, gathers under this tree every Sunday. The church build campaign is the current YFT urgent priority.",
      },
      {
        src: "/photos/pastor-titus-family-2020.jpg",
        alt: "Pastor Titus and family, 2020",
        caption: "Family portrait, 2020.",
        date: "2020",
        location: "Mwalwigi, Tanzania",
      },
      {
        src: "/photos/pastor-titus-blankets.jpg",
        alt: "Pastor Titus distributing blankets in Mwalwigi",
        caption: "Distributing blankets in Mwalwigi.",
        location: "Mwalwigi, Tanzania",
        story:
          "Visits to homes to minister, bring hope (and Bibles when available), and invite people to gather for Sunday services. The blanket distribution is a Pastor Titus signature; the rainy-season nights in the highlands are colder than visitors expect.",
      },
      {
        src: "/photos/drought-crops-titus.jpg",
        alt: "Pastor Titus working drought-tolerant crops",
        caption: "Working drought-tolerant crops.",
        location: "Mwalwigi, Tanzania",
        story:
          "Mwalwigi has sporadic rainfall: heavy downpours in the wet season, near-drought the rest of the year. Drought-tolerant crops, drip-line irrigation, composting, and bio-fertilisers are how the farm produces year-round.",
      },
      {
        src: "/photos/water-dirty.jpg",
        alt: "Contaminated surface water source",
        caption: "What the water looked like before.",
        location: "Mwalwigi, Tanzania, pre-2021",
        story:
          "The surface-water source the village relied on before the borehole. Contaminated, ten kilometres from most homes, and the only available option for years.",
      },
    ],
  },
  {
    id: "mitindo",
    number: "Chapter Five",
    era: "August 2021",
    location: "Mitindo, Tanzania",
    title: "When the attack came, the response had to come too.",
    bg: "charcoal",
    lead: [
      "On August 12, 2021, seven children with albinism were attacked near a remote Tanzanian village. The motivation was ritual superstition. It was not the first such attack in the region.",
      "Mitindo village houses and protects roughly 200 children with albinism year-round, shielded from violence and given access to the medical care, sun protection, and special-needs support that their condition requires. After the August attack, 38 additional children were brought to Mitindo for protection. YFT mobilised funds for bedding, clothing, and care supplies, alongside our partner ministries.",
      "We don’t lead with this story. We don’t put it on the home page. But it is part of what we do, and the donors and supporters who fund this work deserve to know that their gifts also go to children who have nowhere else to be safe.",
    ],
    photos: [],
    closing:
      "Three newsletter PDFs from August and September 2021 document the attack, the response, and the recovery in detail. They are linked at the bottom of this page.",
  },
  {
    id: "team",
    number: "Chapter Six",
    era: "Now",
    title: "The people doing the work.",
    bg: "cream",
    lead: [
      "Eleven of these portraits came back with the Wayback archive. We don’t yet know which face is which name. Roland is reviewing them; the captions will be updated as they’re identified. The roster, in the meantime, is real:",
      "Roland Poirier (Founder, Director). Bishop Silas Owiti-Oduor (Field leadership, Kenya). Pastor Titus Mashalla (Field partner, Tanzania). Dr. David LoCastro (Medical Director, mission-trip lead). Bob Elliott (Chair, Community Development; project-managed the Mwalwigi well and church build). Dianne Elliott (GCF / Partners in Hope Tanzania liaison). Ada Madison Poirier (Media). Pauline Owiti Oduor (Founding board, Yogo). Elisha Otieno (Farm Manager, Yogo). Lynn Fraser (Founding connector). And Theresa Poirier, in memoriam, who built the previous version of this website by hand.",
    ],
    photos: [
      { src: "/photos/wayback-pulls/team-portrait-1.jpg", alt: "Team portrait 1", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-3.jpg", alt: "Team portrait 3", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-4.jpg", alt: "Team portrait 4", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-5.jpg", alt: "Team portrait 5", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-6.jpg", alt: "Team portrait 6", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-7.jpg", alt: "Team portrait 7", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-8.jpg", alt: "Team portrait 8", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-9.jpg", alt: "Team portrait 9", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-10.jpg", alt: "Team portrait 10", caption: "Member, identification pending." },
      { src: "/photos/wayback-pulls/team-portrait-11.jpg", alt: "Team portrait 11", caption: "Member, identification pending." },
    ],
  },
];

const newsletters = [
  { file: "2013-spring-newsletter.pdf", era: "Spring 2013", title: "Yogo, four years in" },
  { file: "2013-fall-newsletter.pdf", era: "Fall 2013", title: "The first walking tractor" },
  { file: "newsletter-33920168-2023.pdf", era: "2023", title: "Field update from Mwalwigi" },
  { file: "newsletter-8ac3f432-2024.pdf", era: "2024", title: "Yogo, fifteen years on" },
  { file: "newsletter-a863e7f8-2024.pdf", era: "2024", title: "Field update" },
  { file: "newsletter-f7e4406c-2024.pdf", era: "2024", title: "Field update" },
  { file: "newsletter-fa68e1c0-2024.pdf", era: "2024", title: "Year in review" },
  { file: "2021-08-12-albino-attack-update.pdf", era: "August 12, 2021", title: "Attack at Mitindo: initial update" },
  { file: "2021-08-26-albino-response.pdf", era: "August 26, 2021", title: "Response and care for the affected children" },
  { file: "2021-09-20-albino-recovery.pdf", era: "September 20, 2021", title: "Recovery and ongoing support" },
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

  const selected = selectedIdx !== null ? allPhotos[selectedIdx] : null;

  // Build the index map: for a photo's src+chapter, get its flat index
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
              A chaptered photo essay of YFT&rsquo;s work in Kenya and Tanzania, drawn from the field, the founding-era newsletters, and the Wayback archive of every version of this site since 2008. Click any image for the full caption and story.
            </p>
          </BlurFade>
        </div>
      </header>

      {/* ─── Chapter rail (desktop) ─── */}
      <ChapterRail />

      {/* ─── Chapters ─── */}
      {chapters.map((chapter) => (
        <ChapterSection
          key={chapter.id}
          chapter={chapter}
          onSelect={(src) => setSelectedIdx(indexFor(src, chapter.title))}
        />
      ))}

      {/* ─── Newsletter Archive ─── */}
      <section id="archive" className="bg-forest py-24 md:py-32 border-t border-cream/10">
        <div className="container mx-auto px-8 max-w-7xl">
          <BlurFade>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold font-bold mb-6">
              The Archive
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-8 leading-[1.05] max-w-4xl">
              Every newsletter we&rsquo;ve sent since 2013.
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-cream/80 leading-[1.6] max-w-2xl mb-14">
              Long-form letters from Roland and the team. Some recovered from the Wayback Machine, some directly from our records. Free to download.
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
          <BlurFade delay={0.4}>
            <p className="font-sans text-sm text-cream/55 mt-14 max-w-2xl leading-[1.6]">
              Two of the August–September 2021 PDFs were truncated by the Wayback Machine’s 1MB cap; the originals have been requested from Roland directly and will replace these copies once received.
            </p>
          </BlurFade>
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

      {/* ─── Lightbox ─── */}
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

function ChapterRail() {
  return (
    <nav
      aria-label="Chapter navigation"
      className="hidden xl:flex fixed top-1/2 right-8 -translate-y-1/2 z-40 flex-col gap-3 pointer-events-none"
    >
      {chapters.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className="pointer-events-auto group flex items-center gap-3 justify-end"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-cream/0 group-hover:text-cream transition-colors duration-300 bg-charcoal/85 px-3 py-1 backdrop-blur-sm">
            {c.number}
          </span>
          <span className="block w-2 h-2 rounded-full bg-cream/40 group-hover:bg-gold transition-colors" />
        </a>
      ))}
      <a
        href="#archive"
        className="pointer-events-auto group flex items-center gap-3 justify-end mt-2 pt-3 border-t border-cream/15"
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-cream/0 group-hover:text-cream transition-colors duration-300 bg-charcoal/85 px-3 py-1 backdrop-blur-sm">
          Archive
        </span>
        <span className="block w-2 h-2 rounded-sm bg-cream/40 group-hover:bg-gold transition-colors" />
      </a>
    </nav>
  );
}

function ChapterSection({
  chapter,
  onSelect,
}: {
  chapter: Chapter;
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
    <section id={chapter.id} className={`${bgClass} py-24 md:py-32 border-t ${border}`}>
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Chapter header */}
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

        {/* Stats break */}
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

        {/* Pull quote */}
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

        {/* Photo grid */}
        {chapter.photos.length > 0 && (
          <PhotoGrid photos={chapter.photos} bg={chapter.bg} onSelect={onSelect} />
        )}

        {/* Closing */}
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
  // Asymmetric pattern: alternate full-bleed, 2-up, 3-up, 1+2.
  // For chapters with many photos, repeat the pattern.
  const cardBg =
    bg === "cream" ? "bg-charcoal text-cream" : "bg-charcoal/60 text-cream";

  const PhotoCard = ({ photo, className = "" }: { photo: Photo; className?: string }) => (
    <button
      type="button"
      onClick={() => onSelect(photo.src)}
      className={`group block w-full overflow-hidden ${cardBg} relative text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold ${className}`}
      aria-label={`Open detail for ${photo.alt}`}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] saturate-[0.92]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 md:p-6">
        <p className="font-sans text-base md:text-lg leading-[1.4]">
          {photo.caption}
        </p>
        {photo.location && (
          <p className="font-sans text-xs uppercase tracking-[0.12em] text-gold/80 font-semibold mt-2">
            {photo.location}
            {photo.date && ` · ${photo.date}`}
          </p>
        )}
      </div>
    </button>
  );

  // Build asymmetric layout
  const groups: Photo[][] = [];
  let i = 0;
  let pattern = 0;
  while (i < photos.length) {
    const remaining = photos.length - i;
    if (pattern % 4 === 0 && remaining >= 1) {
      // Full-bleed solo
      groups.push([photos[i]]);
      i += 1;
    } else if (pattern % 4 === 1 && remaining >= 2) {
      groups.push([photos[i], photos[i + 1]]);
      i += 2;
    } else if (pattern % 4 === 2 && remaining >= 3) {
      groups.push([photos[i], photos[i + 1], photos[i + 2]]);
      i += 3;
    } else if (pattern % 4 === 3 && remaining >= 2) {
      // Asymmetric 1+2 split
      groups.push([photos[i], photos[i + 1]]);
      i += 2;
    } else {
      groups.push([photos[i]]);
      i += 1;
    }
    pattern += 1;
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {groups.map((group, gi) => {
        if (group.length === 1) {
          return (
            <BlurFade key={gi} delay={0.05}>
              <PhotoCard photo={group[0]} className="w-full" />
            </BlurFade>
          );
        }
        if (group.length === 2) {
          return (
            <div key={gi} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {group.map((p, pi) => (
                <BlurFade key={`${gi}-${pi}`} delay={0.05 + pi * 0.05}>
                  <PhotoCard photo={p} />
                </BlurFade>
              ))}
            </div>
          );
        }
        // 3-up
        return (
          <div key={gi} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {group.map((p, pi) => (
              <BlurFade key={`${gi}-${pi}`} delay={0.05 + pi * 0.05}>
                <PhotoCard photo={p} />
              </BlurFade>
            ))}
          </div>
        );
      })}
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
      {/* Counter */}
      <div className="absolute top-4 md:top-6 left-4 md:left-8 z-10 font-sans text-sm uppercase tracking-[0.18em] text-cream/70 font-semibold">
        {String(index + 1).padStart(2, "0")} <span className="text-cream/40">/</span>{" "}
        {String(total).padStart(2, "0")}
      </div>

      {/* Close */}
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

      {/* Prev */}
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

      {/* Next */}
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

      {/* Card */}
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

        {/* Mobile prev/next */}
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
