import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./_components/Navbar";
import SessionProvider from "@/app/(meds)/doctor/_components/SessionProvider";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
