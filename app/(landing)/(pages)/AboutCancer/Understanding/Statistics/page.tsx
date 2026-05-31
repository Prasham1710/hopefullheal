import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cancer Statistics India" };

import React from "react";
import Link from "next/link";
import Image from "next/image";

const sidebarLinks = [
  { href: "/AboutCancer/Understanding/What",        label: "What is Cancer?" },
  { href: "/AboutCancer/Understanding/Statistics",  label: "Cancer Statistics" },
  { href: "/AboutCancer/Understanding/Disparities", label: "Cancer Disparities" },
];

const statCards = [
  { value: "1.39M",  label: "New cancer cases in India (2020)" },
  { value: "40L+",   label: "Cases reported 2018–2020" },
  { value: "22.54L", label: "Deaths from cancer 2018–2020" },
  { value: "10M",    label: "Global cancer deaths (2020)" },
];

const sections = [
  {
    title: "NCRP Report 2020 — Key Findings",
    bullets: [
      "In 2020, there were an estimated 1.39 million new cancer cases in India.",
      "The projected cases of cancer in India were 1.4 million in 2020.",
      "The leading anatomical sites include breast, lung, and leukemia.",
      "Tobacco use is associated with several cancer types.",
      "Childhood cancers are also a significant concern.",
    ],
  },
  {
    title: "Recent Data (2018–2020)",
    bullets: [
      "More than 40 lakh cancer cases were reported in India between 2018 and 2020.",
      "Approximately 22.54 lakh people died due to cancer during the same period.",
      "In 2020 alone, 13,92,179 new cancer cases were reported.",
    ],
  },
  {
    title: "Impact of Cancer",
    bullets: [
      "Cancer is rapidly emerging as a major public health concern in India.",
      "Globally, cancer is among the leading causes of death — ~10 million deaths in 2020.",
    ],
  },
  {
    title: "ICMR-NCDIR-NCRP Data",
    bullets: [
      "Data collected through Population-Based Cancer Registries (PBCRs) and Hospital-Based Cancer Registries (HBCRs).",
      "Projected cases of cancer in India were approximately 1.4 million in 2020.",
    ],
  },
];

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] flex">

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 bg-[#00416a] min-h-screen sticky top-0 p-5">
        <h2 className="text-[#b1c0ca] text-xs font-semibold uppercase tracking-widest mb-5 mt-16 border-b border-white/10 pb-3">
          Understanding Cancer
        </h2>
        <nav className="flex flex-col gap-1">
          {sidebarLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`text-sm px-3 py-2.5 rounded-xl transition-all duration-200 font-medium
                ${label === "Cancer Statistics"
                  ? "bg-white/15 text-white"
                  : "text-[#b1c0ca] hover:bg-white/10 hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 px-6 md:px-10 py-10 max-w-4xl">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#688ca2] mb-6">
          <Link href="/" className="hover:text-[#00416a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/AboutCancer/Understanding" className="hover:text-[#00416a] transition-colors">Understanding Cancer</Link>
          <span>/</span>
          <span className="text-[#243a50] font-medium">Cancer Statistics</span>
        </div>

        {/* Title */}
        <h1 className="font-black text-3xl sm:text-4xl text-[#243a50] mb-2">Cancer Statistics</h1>
        <div className="w-12 h-1 bg-[#ff6f61] rounded-full mb-6" />

        {/* Intro */}
        <div className="space-y-4 text-sm text-[#243a50]/80 leading-relaxed mb-10">
          <p>Cancer statistics describe what happens in large groups of people and provide a picture in time of the burden of cancer on society — how many are diagnosed, how many die, average age at diagnosis, and survival rates over time.</p>
          <p>By tracking cancer rates over time, we can monitor changes in risk and death rates for specific cancers. Statistics are indispensable for governments, policymakers, healthcare professionals, and researchers to develop strategies at a societal level.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {statCards.map(({ value, label }) => (
            <div key={label}
              className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-4 text-center hover:border-[#00416a]/20 hover:shadow-md transition-all duration-200">
              <p className="font-black text-2xl text-[#00416a] mb-1">{value}</p>
              <p className="text-[#688ca2] text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Stats + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-10">
          <div className="space-y-4">
            {sections.map(({ title, bullets }) => (
              <div key={title}
                className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-5 hover:border-[#00416a]/20 hover:shadow-md transition-all duration-200">
                <h3 className="font-bold text-[#00416a] text-sm mb-3">{title}</h3>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-[#243a50]/75 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6f61] mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#e4e5e6] shadow-sm sticky top-24">
            <Image src="/cancerstatistics.png" alt="Cancer Statistics India"
              width={600} height={600} className="w-full object-cover" />
          </div>
        </div>

        {/* Callout */}
        <div className="bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-5 mb-10 text-sm text-[#243a50]/80 leading-relaxed">
          <strong className="text-[#00416a]">Why this matters —</strong>{" "}
          These statistics highlight the significant burden of cancer in India and underscore the importance of prevention, early detection, and effective treatment. Hopeful Heals works to improve equitable access to care for every Indian.
        </div>

        {/* Page nav */}
        <div className="flex items-center justify-between border-t border-[#e4e5e6] pt-6">
          <Link href="/AboutCancer/Understanding/What"
            className="text-[#00416a] hover:text-[#003255] text-sm font-semibold hover:underline transition-colors">
            ← What is Cancer?
          </Link>
          <Link href="/AboutCancer/Understanding/Disparities"
            className="text-[#00416a] hover:text-[#003255] text-sm font-semibold hover:underline transition-colors">
            Cancer Disparities →
          </Link>
        </div>
      </main>
    </div>
  );
}
