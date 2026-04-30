"use client";

import Link from "next/link";
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
  { href: "/missions", label: "Missions" },
  { href: "/media", label: "Media" },
  { href: "/get-involved", label: "Get Involved" },
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-forest border-b border-cream/10 shadow-lg shadow-black/20"
          : "py-4 md:py-5 bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <span className="font-heading text-2xl md:text-3xl font-semibold text-cream leading-none tracking-tight">
            You Feed Them
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
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

        {/* Mobile + tablet */}
        <div className="lg:hidden flex items-center gap-3">
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
                <SheetClose render={<span />}>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className={cn(
                      "font-sans text-lg font-semibold uppercase tracking-wider transition-colors",
                      pathname === "/contact" ? "text-gold" : "text-cream hover:text-gold"
                    )}
                  >
                    Contact
                  </Link>
                </SheetClose>
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
