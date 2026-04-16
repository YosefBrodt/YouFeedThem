import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8">
      <div className="container mx-auto px-8 max-w-7xl flex justify-between items-center">
        <Link href="/" className="font-heading text-3xl font-bold text-cream">
          YFT.
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          <Link href="/programs" className="font-sans text-sm font-semibold uppercase tracking-wider text-cream hover:opacity-70 transition-opacity">Programs</Link>
          <Link href="/impact" className="font-sans text-sm font-semibold uppercase tracking-wider text-cream hover:opacity-70 transition-opacity">Impact Stories</Link>
          <Link href="/about" className="font-sans text-sm font-semibold uppercase tracking-wider text-cream hover:opacity-70 transition-opacity">About</Link>
          <Link href="/media" className="font-sans text-sm font-semibold uppercase tracking-wider text-cream hover:opacity-70 transition-opacity">Media</Link>
          <Link href="/donate" className="hidden md:inline-block bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-3 px-8 transition-colors">
            Invest
          </Link>
        </nav>
      </div>
    </header>
  );
}
