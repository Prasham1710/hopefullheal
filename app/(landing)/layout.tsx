import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const AIAssistant = dynamic(
  () => import("@/components/ai-bot").then((m) => ({ default: m.AIAssistant })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: {
    default: "Hopeful Heals — Support. Educate. Advocate.",
    template: "%s — Hopeful Heals",
  },
  description: "India's trusted cancer care platform connecting patients with oncologists, authentic medications, and cancer resources.",
  keywords: ["cancer care", "oncology", "cancer treatment India", "cancer medicines", "book oncologist"],
  authors: [{ name: "Hopeful Heals" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hopefulheals.vercel.app",
    siteName: "Hopeful Heals",
    title: "Hopeful Heals — Support. Educate. Advocate.",
    description: "India's trusted cancer care platform connecting patients with oncologists, authentic medications, and cancer resources.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hopeful Heals — Support. Educate. Advocate.",
    description: "India's trusted cancer care platform connecting patients with oncologists, authentic medications, and cancer resources.",
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {children}
        <AIAssistant />
        <Footer />
      </div>
    </>
  );
}
