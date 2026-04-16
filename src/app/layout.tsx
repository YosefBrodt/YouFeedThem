import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "You Feed Them",
  description: "We build programs. Communities sustain them. 17 years of sustainable impact in East Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fraunces.variable, interTight.variable)}>
      <body className="bg-forest text-cream font-sans antialiased selection:bg-gold selection:text-forest">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
