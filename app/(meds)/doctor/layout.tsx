import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import SessionProvider from "./_components/SessionProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Medicines — Hopeful Heals", template: "%s — Hopeful Heals" },
  description: "Authentic, pharmacy-verified cancer medications delivered safely to your door across India.",
  openGraph: {
    type: "website",
    siteName: "Hopeful Heals",
    title: "Medicines — Hopeful Heals",
    description: "Authentic, pharmacy-verified cancer medications delivered safely to your door.",
  },
  twitter: {
    card: "summary",
    title: "Medicines — Hopeful Heals",
    description: "Authentic, pharmacy-verified cancer medications delivered safely to your door.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#f0f4f8]`}>
        <SessionProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
