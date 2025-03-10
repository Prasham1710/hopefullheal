"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SiChatbot } from "react-icons/si";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { AIAssistant } from "@/components/ai-bot";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mb-0 w-screen">
          {children}
          <div >
            <AIAssistant />
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
