import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "@/app/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

// Loaded only after page is interactive — not needed for initial render
const AIAssistant = dynamic(
  () => import("@/components/ai-bot").then((m) => ({ default: m.AIAssistant })),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"], display: "swap" });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-full">
          {children}
          <AIAssistant />
          <Footer />
        </div>
      </body>
    </html>
  );
}
