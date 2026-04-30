import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────────────────────
// Manifest
// ─────────────────────────────────────────────────────────────────────────────
// Page counts come from the build-time pdftoppm conversion. If you re-render
// the source PDF, update the count here too.

type Newsletter = {
  slug: string;
  era: string;
  title: string;
  pages: number;
};

const newsletters: Newsletter[] = [
  { slug: "2013-spring-newsletter", era: "Spring 2013", title: "Spring 2013 Newsletter", pages: 6 },
  { slug: "2013-fall-newsletter", era: "Fall 2013", title: "Fall 2013 Newsletter", pages: 6 },
  { slug: "2021-08-12-albino-attack-update", era: "August 12, 2021", title: "Mitindo Update", pages: 1 },
  { slug: "newsletter-33920168-2023", era: "2023", title: "2023 Newsletter", pages: 2 },
  { slug: "newsletter-8ac3f432-2024", era: "2024", title: "2024 Newsletter (One)", pages: 4 },
  { slug: "newsletter-a863e7f8-2024", era: "2024", title: "2024 Newsletter (Two)", pages: 3 },
  { slug: "newsletter-f7e4406c-2024", era: "2024", title: "2024 Newsletter (Three)", pages: 2 },
  { slug: "newsletter-fa68e1c0-2024", era: "2024", title: "2024 Newsletter (Four)", pages: 4 },
];

export function generateStaticParams() {
  return newsletters.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = newsletters.find((x) => x.slug === slug);
  if (!n) return {};
  return {
    title: `${n.title} | YFT Newsletters`,
    description: `${n.era} newsletter from You Feed Them.`,
  };
}

export default async function NewsletterReader({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsletter = newsletters.find((n) => n.slug === slug);
  if (!newsletter) notFound();

  const pageNumbers = Array.from({ length: newsletter.pages }, (_, i) => i + 1);

  return (
    <main className="w-full pt-28 md:pt-32 bg-charcoal">
      {/* Header bar */}
      <header className="sticky top-[88px] md:top-[96px] z-30 bg-charcoal/95 backdrop-blur-md border-b border-cream/10">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl py-4 md:py-5 flex items-center justify-between gap-4">
          <Link
            href="/media#archive"
            className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors font-sans text-xs md:text-sm uppercase tracking-[0.15em] font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to archive</span>
            <span className="sm:hidden">Archive</span>
          </Link>
          <div className="flex-1 min-w-0 text-center px-2">
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-bold leading-none mb-1">
              {newsletter.era}
            </p>
            <p className="font-heading text-sm md:text-base text-cream leading-tight truncate">
              {newsletter.title}
            </p>
          </div>
          <a
            href={`/newsletters/${newsletter.slug}.pdf`}
            download
            className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors font-sans text-xs md:text-sm uppercase tracking-[0.15em] font-semibold"
          >
            <span className="hidden sm:inline">Original PDF</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Pages */}
      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl flex flex-col gap-4 md:gap-6">
          {pageNumbers.map((p) => (
            <div
              key={p}
              className="relative w-full bg-cream shadow-2xl shadow-black/40"
              style={{ aspectRatio: "1275 / 1650" }}
            >
              <Image
                src={`/newsletters/${newsletter.slug}/page-${p}.jpg`}
                alt={`${newsletter.title}, page ${p} of ${newsletter.pages}`}
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
                priority={p <= 2}
              />
            </div>
          ))}
        </div>
      </article>

      {/* Footer nav: prev/next newsletter + back to archive */}
      <NewsletterFooter currentSlug={slug} />
    </main>
  );
}

function NewsletterFooter({ currentSlug }: { currentSlug: string }) {
  const idx = newsletters.findIndex((n) => n.slug === currentSlug);
  const prev = idx > 0 ? newsletters[idx - 1] : null;
  const next = idx < newsletters.length - 1 ? newsletters[idx + 1] : null;

  return (
    <footer className="border-t border-cream/10 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {prev ? (
            <Link
              href={`/media/newsletter/${prev.slug}`}
              className="group block border-t border-cream/15 pt-5 transition-colors hover:border-gold"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/55 font-semibold mb-2">
                Previous
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-1">
                {prev.era}
              </p>
              <p className="font-heading text-lg text-cream group-hover:text-gold transition-colors leading-tight">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/media/newsletter/${next.slug}`}
              className="group block border-t border-cream/15 pt-5 transition-colors hover:border-gold md:text-right"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/55 font-semibold mb-2">
                Next
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold font-bold mb-1">
                {next.era}
              </p>
              <p className="font-heading text-lg text-cream group-hover:text-gold transition-colors leading-tight">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/media#archive"
            className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors font-sans text-sm uppercase tracking-[0.15em] font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all newsletters
          </Link>
        </div>
      </div>
    </footer>
  );
}
