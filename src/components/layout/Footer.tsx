import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream pt-24">
      <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between pb-24 gap-16">
        {/* Brand */}
        <div className="max-w-[320px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 bg-forest rounded-sm overflow-hidden">
              <Image
                src="/logo/yft-logo-512.png"
                alt="You Feed Them"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl leading-tight">You Feed Them</h2>
          </div>
          <p className="font-heading text-xl italic text-cream/80 leading-relaxed mb-4">
            Building relationships.
            <br />
            Bringing hope.
          </p>
          <p className="font-sans text-sm text-cream/60 leading-relaxed">
            Since 2008. Kenya. Tanzania. Home base: South Lancaster, Ontario, Canada.
          </p>
          {/*
            Social links removed pending real handles from Roland. Re-add once we have:
            <a href="https://www.facebook.com/<page>" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/<handle>" target="_blank" rel="noreferrer">Instagram</a>
          */}
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          {/* Sitemap */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">
              Navigate
            </h3>
            <Link href="/" className="text-base text-cream/80 hover:text-cream transition-colors">Home</Link>
            <Link href="/about" className="text-base text-cream/80 hover:text-cream transition-colors">About</Link>
            <Link href="/programs" className="text-base text-cream/80 hover:text-cream transition-colors">Villages</Link>
            <Link href="/impact" className="text-base text-cream/80 hover:text-cream transition-colors">Impact</Link>
            <Link href="/media" className="text-base text-cream/80 hover:text-cream transition-colors">Media</Link>
            <Link href="/donate" className="text-base text-cream/80 hover:text-cream transition-colors">Partner</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">
              Contact
            </h3>
            <p className="text-base text-cream/80">South Lancaster, Ontario, Canada</p>
            <a
              href="mailto:roland@youfeedthem.com"
              className="text-base text-cream/80 hover:text-cream transition-colors"
            >
              roland@youfeedthem.com
            </a>
            <a
              href="mailto:ada@youfeedthem.com"
              className="text-base text-cream/80 hover:text-cream transition-colors"
            >
              ada@youfeedthem.com (media)
            </a>
          </div>

          {/* Partners */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">
              Partners
            </h3>
            <a
              href="https://gcfcanada.com/partners-in-hope-tanzania/"
              target="_blank"
              rel="noreferrer"
              className="text-base text-cream/80 hover:text-cream transition-colors"
            >
              Great Commission Foundation
            </a>
            <a
              href="https://hungryforlife.org"
              target="_blank"
              rel="noreferrer"
              className="text-base text-cream/80 hover:text-cream transition-colors"
            >
              Hungry For Life
            </a>
            <p className="text-base text-cream/80">Ambassador Ministries (AMIC)</p>
            <p className="text-base text-cream/80">Speroway</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-8">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-cream/50">
            &copy; {currentYear} You Feed Them. All rights reserved.
          </p>
          <p className="text-sm text-cream/50 max-w-md md:text-right">
            You Feed Them is not a registered charity. Canadian tax-receipted giving via The Great Commission Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
}
