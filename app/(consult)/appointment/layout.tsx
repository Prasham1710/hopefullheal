import type { Metadata } from "next";
import Navbar from "./_components/Navbar";
import SessionProvider from "@/app/(meds)/doctor/_components/SessionProvider";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: { default: "Appointments — Hopeful Heals", template: "%s — Hopeful Heals" },
  description: "Book and manage cancer consultations with India's top verified oncologists on Hopeful Heals.",
  openGraph: {
    type: "website",
    siteName: "Hopeful Heals",
    title: "Appointments — Hopeful Heals",
    description: "Book and manage cancer consultations with India's top verified oncologists.",
  },
  twitter: {
    card: "summary",
    title: "Appointments — Hopeful Heals",
    description: "Book and manage cancer consultations with India's top verified oncologists.",
  },
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
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
