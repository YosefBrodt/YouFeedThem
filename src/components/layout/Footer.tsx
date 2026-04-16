import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream pt-24">
      <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between pb-24 gap-16">
        {/* Brand */}
        <div className="max-w-[300px]">
          <h2 className="font-heading text-4xl mb-4">YFT.</h2>
          <p className="font-heading text-xl italic text-cream/80 leading-relaxed">
            Building programs.
            <br />
            Communities sustain them.
          </p>
          <div className="flex gap-6 mt-8">
            <a
              href="#"
              className="text-sm text-cream/60 hover:text-gold transition-colors uppercase tracking-wider font-semibold"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-sm text-cream/60 hover:text-gold transition-colors uppercase tracking-wider font-semibold"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          {/* Sitemap */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">
              Navigate
            </h3>
            <Link href="/" className="text-base text-cream/80 hover:text-cream transition-colors">Home</Link>
            <Link href="/about" className="text-base text-cream/80 hover:text-cream transition-colors">About</Link>
            <Link href="/programs" className="text-base text-cream/80 hover:text-cream transition-colors">Programs</Link>
            <Link href="/impact" className="text-base text-cream/80 hover:text-cream transition-colors">Impact Stories</Link>
            <Link href="/media" className="text-base text-cream/80 hover:text-cream transition-colors">Media</Link>
            <Link href="/donate" className="text-base text-cream/80 hover:text-cream transition-colors">Invest</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">
              Contact
            </h3>
            <p className="text-base text-cream/80">South Lancaster, ON</p>
            <a
              href="mailto:rolandpoirier58@gmail.com"
              className="text-base text-cream/80 hover:text-cream transition-colors"
            >
              rolandpoirier58@gmail.com
            </a>
            <a
              href="tel:6138835780"
              className="text-base text-cream/80 hover:text-cream transition-colors"
            >
              613-883-5780
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">
              Legal
            </h3>
            <a href="#" className="text-base text-cream/80 hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="text-base text-cream/80 hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-8">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-cream/50">
            &copy; {currentYear} You Feed Them Inc. All rights reserved.
          </p>
          <p className="text-sm text-cream/50">
            US 501(c)(3). EIN: [REPLACE]. Canadian tax receipts issued by hungryforlife.org and The Great Commission.
          </p>
        </div>
      </div>
    </footer>
  );
}
