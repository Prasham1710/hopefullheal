import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cancer Disparities" };

import React from "react";
import Link from "next/link";
import Image from "next/image";

const sidebarLinks = [
  { href: "/AboutCancer/Understanding/What",         label: "What is Cancer?" },
  { href: "/AboutCancer/Understanding/Statistics",   label: "Cancer Statistics" },
  { href: "/AboutCancer/Understanding/Disparities",  label: "Cancer Disparities" },
];

const factors = [
  {
    title: "Social Determinants of Health",
    body: "Social determinants of health encompass environmental conditions where individuals live, work, and age, significantly influencing health outcomes. Cancer disparities arise from a complex interplay of social, behavioural, biological, and genetic factors that impact cancer risk and outcomes.",
  },
  {
    title: "Barriers to Accessing Healthcare",
    body: "Certain demographic groups face barriers to accessing healthcare, contributing to cancer disparities. Individuals with low incomes, limited health literacy, or residing far from screening facilities — along with those lacking health insurance or transport — are less likely to undergo recommended cancer screenings or receive guideline-based treatments.",
  },
  {
    title: "Environmental Factors",
    body: "Communities exposed to poor air or water quality face increased cancer risks. Neighbourhoods lacking access to healthy food or safe spaces for physical activity increase obesity risk and poor dietary habits, further contributing to cancer disparities.",
  },
  {
    title: "Health Equity",
    body: "Health equity ensures every individual has the opportunity to achieve their full health potential without facing disadvantages based on social position or other circumstances. Addressing disparities requires systemic change at community, policy, and healthcare levels.",
  },
];

export default function DisparitiesPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] flex">

      {/* ── Sidebar ── */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 bg-[#00416a] min-h-screen sticky top-0 p-5">
        <h2 className="text-[#b1c0ca] text-xs font-semibold uppercase tracking-widest mb-5 mt-16 border-b border-white/10 pb-3">
          Understanding Cancer
        </h2>
        <nav className="flex flex-col gap-1">
          {sidebarLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm px-3 py-2.5 rounded-xl transition-all duration-200 font-medium
                ${label === "Cancer Disparities"
                  ? "bg-white/15 text-white"
                  : "text-[#b1c0ca] hover:bg-white/10 hover:text-white"
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 px-6 md:px-10 py-10 max-w-4xl">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#688ca2] mb-6">
          <Link href="/" className="hover:text-[#00416a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/AboutCancer/Understanding" className="hover:text-[#00416a] transition-colors">Understanding Cancer</Link>
          <span>/</span>
          <span className="text-[#243a50] font-medium">Cancer Disparities</span>
        </div>

        {/* Page title */}
        <h1 className="font-black text-3xl sm:text-4xl text-[#243a50] mb-2">
          Cancer Disparities
        </h1>
        <div className="w-12 h-1 bg-[#ff6f61] rounded-full mb-8" />

        {/* Intro + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-start">
          <div className="space-y-4 text-[#243a50]/80 text-sm leading-relaxed">
            <p>
              Despite overall declines in cancer incidence and mortality rates in India,
              certain segments of the population face disproportionate risks of developing
              or succumbing to specific cancers due to social, environmental, and economic
              disparities.
            </p>
            <p>
              These disparities, known as <strong className="text-[#243a50]">cancer health disparities</strong>,
              encompass variations in:
            </p>
            <ul className="space-y-1.5">
              {[
                "Incidence (new cases)",
                "Prevalence (existing cases)",
                "Mortality (deaths)",
                "Survival rates",
                "Morbidity (health complications)",
                "Survivorship (quality of life after treatment)",
                "Financial burden",
                "Screening rates",
                "Stage at diagnosis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6f61] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              These disparities persist despite overall advancements in cancer care,
              impacting groups defined by race/ethnicity, disability, gender identity,
              geographic location, income, education, age, sexual orientation, national
              origin, and other factors.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e4e5e6]">
            <Image
              src="/disparity.jpeg"
              alt="Cancer Disparities"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Examples callout */}
        <div className="bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-5 mb-10 text-sm text-[#243a50]/80 leading-relaxed">
          <strong className="text-[#00416a]">Examples of Cancer Disparities —</strong>{" "}
          Statistics reveal disparities in cancer incidence and mortality rates across
          various demographic groups. Addressing these gaps is central to Hopeful Heals'
          mission of equitable cancer care for all Indians.
        </div>

        {/* Contributing factors */}
        <h2 className="font-bold text-xl text-[#243a50] mb-5">Contributing Factors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {factors.map(({ title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-5 hover:border-[#00416a]/20 hover:shadow-md transition-all duration-200"
            >
              <h3 className="font-bold text-[#00416a] text-sm mb-2">{title}</h3>
              <p className="text-[#243a50]/70 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Nav between pages */}
        <div className="mt-12 flex items-center justify-between border-t border-[#e4e5e6] pt-6">
          <Link
            href="/AboutCancer/Understanding/Statistics"
            className="text-[#00416a] hover:text-[#003255] text-sm font-semibold hover:underline transition-colors"
          >
            ← Cancer Statistics
          </Link>
          <Link
            href="/AboutCancer/Diag"
            className="text-[#00416a] hover:text-[#003255] text-sm font-semibold hover:underline transition-colors"
          >
            Diagnosis & Staging →
          </Link>
        </div>
      </main>
    </div>
  );
}
