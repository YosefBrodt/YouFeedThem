import type { Metadata } from "next";
import { Fraunces, Inter_Tight, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "You Feed Them",
  description: "Building programs. Communities sustain them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fraunces.variable, interTight.variable, "font-sans", geist.variable)}>
      <body className="bg-forest text-cream font-sans antialiased selection:bg-gold selection:text-forest">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
