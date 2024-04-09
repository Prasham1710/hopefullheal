"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SiChatbot } from "react-icons/si";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar  />
        <div className="mb-0 w-screen">
          {children}
          <div className="fixed bottom-20 right-20 flex justify-center items-center rounded-full bg-white shadow-md z-50 cursor-pointer w-16 h-16">
            <SiChatbot size={40} />
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
