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
  metadataBase: new URL("https://youfeedthem.com"),
  title: {
    default: "You Feed Them | Building Relationships. Bringing Hope.",
    template: "%s | You Feed Them",
  },
  description:
    "Since 2008, You Feed Them has walked alongside remote villages in Kenya and Tanzania: clean water, food security, schools, and hope. 481 students today. 27 in university.",
  icons: {
    icon: "/favicon.png",
    apple: "/logo/apple-touch-icon.png",
  },
  openGraph: {
    title: "You Feed Them | Building Relationships. Bringing Hope.",
    description:
      "Since 2008, You Feed Them has walked alongside remote villages in Kenya and Tanzania: clean water, food security, schools, and hope.",
    images: ["/logo/yft-logo-512.png"],
    type: "website",
  },
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
