"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Villages" },
  { href: "/impact", label: "Impact" },
  { href: "/media", label: "Media" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-forest border-b border-cream/10",
        scrolled ? "py-3 shadow-lg shadow-black/20" : "py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-charcoal rounded-sm overflow-hidden shrink-0">
            <Image
              src="/logo/yft-logo-512.png"
              alt="You Feed Them"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <span className="font-heading text-lg md:text-xl font-semibold text-cream leading-none tracking-tight hidden sm:block">
            You Feed Them
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-sm font-semibold uppercase tracking-wider transition-colors relative",
                  isActive ? "text-gold" : "text-cream hover:text-gold"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gold" />
                )}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className={cn(
              "bg-gold text-forest hover:bg-[#d1a862] text-sm uppercase tracking-wider font-semibold py-3 px-8 transition-colors relative",
              pathname === "/donate" && "ring-2 ring-cream ring-offset-2 ring-offset-forest"
            )}
          >
            Partner
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/donate"
            className="bg-gold text-forest text-xs uppercase tracking-wider font-semibold py-2.5 px-5 transition-colors"
          >
            Partner
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <button className="text-cream p-2" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-forest border-cream/10 w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-heading text-2xl text-cream">
                  You Feed Them
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-4 pt-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <SheetClose key={link.href} render={<span />}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "font-sans text-lg font-semibold uppercase tracking-wider transition-colors",
                          isActive ? "text-gold" : "text-cream hover:text-gold"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="bg-gold text-forest hover:bg-[#d1a862] text-base uppercase tracking-wider font-semibold py-4 px-8 transition-colors text-center mt-4"
                >
                  Partner
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
