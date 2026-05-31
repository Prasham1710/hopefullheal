"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#001f33]/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-[#00416a] to-[#003255]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Logo href="/" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white/80 hover:text-white font-medium flex items-center gap-1 transition-colors outline-none">
              About Cancer <ChevronDown size={13} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#001f33] border border-[#00416a]/30 text-white shadow-xl">
              <DropdownMenuLabel className="text-[#b1c0ca] text-xs uppercase tracking-widest">
                Explore
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              {[
                ["Understanding Cancer", "/AboutCancer/Understanding"],
                ["Diagnosis & Staging", "/AboutCancer/Diag"],
                ["Advanced Cancer", "/AboutCancer/Advanced"],
                ["Causes & Prevention", "/AboutCancer/Causes"],
                ["Managing Care", "/AboutCancer/Managing"],
                ["Coping", "/AboutCancer/Coping"],
              ].map(([label, href]) => (
                <Link href={href} key={label}>
                  <DropdownMenuItem className="hover:bg-[#00416a] cursor-pointer focus:bg-[#00416a] text-white/80 hover:text-white">
                    {label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-white/80 hover:text-white font-medium flex items-center gap-1 transition-colors outline-none">
              Cancer Types <ChevronDown size={13} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#001f33] border border-[#00416a]/30 text-white shadow-xl">
              <DropdownMenuLabel className="text-[#b1c0ca] text-xs uppercase tracking-widest">
                Types
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              {["Bladder", "Skin", "Pancreatic", "Kidney", "Breast", "Lymphoma", "Brain Tumor"].map((type) => (
                <DropdownMenuItem
                  key={type}
                  className="hover:bg-[#00416a] cursor-pointer text-white/80 hover:text-white"
                >
                  {type} Cancer
                </DropdownMenuItem>
              ))}
              <Link href="/CancerTypes/Lung">
                <DropdownMenuItem className="hover:bg-[#00416a] cursor-pointer text-white/80 hover:text-white">
                  Lung Cancer
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator className="bg-white/10" />
              <Link href="/CancerTypes">
                <DropdownMenuItem className="hover:bg-[#00416a] cursor-pointer font-semibold text-[#ff6f61]">
                  View All Types →
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/appointment"
            className="text-white/80 hover:text-white font-medium transition-colors"
          >
            Book Appointment
          </Link>
          <Link
            href="/doctor"
            className="text-white/80 hover:text-white font-medium transition-colors"
          >
            Medicines
          </Link>
          <Link
            href="#about"
            className="text-white/80 hover:text-white font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#donate"
            className="bg-[#ff6f61] hover:bg-[#e85d50] text-white py-2 px-5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#ff6f61]/30 hover:scale-105"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#001f33] border-t border-white/10`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {[
            ["Understanding Cancer", "/AboutCancer/Understanding"],
            ["Cancer Types", "/CancerTypes"],
            ["Book Appointment", "/appointment"],
            ["Medicines", "/doctor"],
            ["About Us", "#about"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-white/80 hover:text-white py-2.5 border-b border-white/10 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#donate"
            className="mt-3 bg-[#ff6f61] hover:bg-[#e85d50] text-white py-3 px-5 rounded-xl font-semibold text-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
