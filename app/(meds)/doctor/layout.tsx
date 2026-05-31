import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import SessionProvider from "./_components/SessionProvider";

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

export default function MedicineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f4f8]">
      <SessionProvider>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </SessionProvider>
    </div>
  );
}
