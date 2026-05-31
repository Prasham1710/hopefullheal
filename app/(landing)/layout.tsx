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
  title: "Hopeful Heals — Support. Educate. Advocate.",
  description: "India's trusted cancer care platform — consultations, medications, and support.",
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
