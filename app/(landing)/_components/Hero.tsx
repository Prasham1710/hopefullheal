import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "/public/bg.png";
import prisma from "@/lib/db/prisma";

const Hero = async () => {
  const [doctorCount, productCount, appointmentCount] = await Promise.all([
    prisma.doctor.count(),
    prisma.product.count(),
    prisma.appointment.count(),
  ]);

  const stats = [
    { value: appointmentCount > 0 ? `${appointmentCount}+` : "Growing", label: "Appointments Booked" },
    { value: doctorCount > 0 ? `${doctorCount}+` : "Expert", label: "Oncologists" },
    { value: productCount > 0 ? `${productCount}+` : "Verified", label: "Medications" },
    { value: "24/7", label: "AI Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00416a] via-[#003255] to-[#001f33] flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#ff6f61] animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">
                India's Trusted Cancer Care Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Support.
              <br />
              <span className="text-[#ff6f61]">Educate.</span>
              <br />
              Advocate.
            </h1>

            <p className="text-[#b1c0ca] text-lg leading-relaxed mb-3 max-w-lg">
              Comprehensive cancer care — connecting patients with expert
              oncologists, authentic medications, and a supportive community.
            </p>
            <p className="text-[#688ca2] text-base italic mb-8">
              &ldquo;Cancer hi toh h, darna kya!!&rdquo;
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-[#ff6f61]/30 hover:scale-105 transition-all duration-200"
              >
                Book Consultation
              </Link>
              <Link
                href="/doctor"
                className="border-2 border-white/30 hover:border-white text-white font-bold py-3.5 px-8 rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Browse Medicines
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-[#ff6f61]/10 rounded-full blur-3xl scale-110"></div>
              <Image
                src={bg}
                alt="Hopeful Heals"
                width={480}
                height={480}
                className="relative z-10 animate-spin-y-linear w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — real data from DB */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="text-[#b1c0ca] text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
