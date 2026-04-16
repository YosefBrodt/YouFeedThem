import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream pt-24">
      <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between pb-24 gap-16">
        <div className="max-w-[300px]">
          <h2 className="font-heading text-4xl mb-4">YFT.</h2>
          <p className="font-heading text-xl italic opacity-80 leading-relaxed">
            Building programs. <br/>Communities sustain them.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">Navigate</h3>
            <Link href="/" className="text-base opacity-80 hover:opacity-100 transition-opacity">Home</Link>
            <Link href="/programs" className="text-base opacity-80 hover:opacity-100 transition-opacity">Programs</Link>
            <Link href="/impact" className="text-base opacity-80 hover:opacity-100 transition-opacity">Impact</Link>
            <Link href="/about" className="text-base opacity-80 hover:opacity-100 transition-opacity">About</Link>
            <Link href="/donate" className="text-base opacity-80 hover:opacity-100 transition-opacity">Invest</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">Connect</h3>
            <Link href="/media" className="text-base opacity-80 hover:opacity-100 transition-opacity">Media / Gallery</Link>
            <a href="#" className="text-base opacity-80 hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#" className="text-base opacity-80 hover:opacity-100 transition-opacity">Twitter</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm uppercase tracking-wider font-semibold text-gold mb-2">Legal</h3>
            <a href="#" className="text-base opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-base opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-base opacity-80 hover:opacity-100 transition-opacity">Financials</a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-cream/10 py-8">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm opacity-60">&copy; {currentYear} You Feed Them. All rights reserved.</p>
          <p className="text-sm opacity-60">US 501(c)(3) Employer Identification Number: **-*******</p>
        </div>
      </div>
    </footer>
  );
}
