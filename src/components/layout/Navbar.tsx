"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Impact Stories' },
  { href: '/media', label: 'Media' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8">
      <div className="container mx-auto px-8 max-w-7xl flex justify-between items-center">
        <Link href="/" className="font-heading text-3xl font-bold text-cream">
          YFT.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-semibold uppercase tracking-wider text-cream hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-3 px-8 transition-colors"
          >
            Invest
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <button className="text-cream p-2" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-forest border-cream/10 w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-heading text-2xl text-cream">YFT.</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-4 pt-8">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} render={<span />}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-sans text-lg font-semibold uppercase tracking-wider text-cream hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="bg-gold text-forest hover:bg-[#d1a862] text-base uppercase tracking-wider font-semibold py-4 px-8 transition-colors text-center mt-4"
                >
                  Invest
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
