import type { Metadata } from "next";
export const metadata: Metadata = { title: "What Is Cancer" };

import React from "react";
import Link from "next/link";
import Image from "next/image";

const sidebarLinks = [
  { href: "/AboutCancer/Understanding/What",        label: "What is Cancer?" },
  { href: "/AboutCancer/Understanding/Statistics",  label: "Cancer Statistics" },
  { href: "/AboutCancer/Understanding/Disparities", label: "Cancer Disparities" },
];

const causesCards = [
  { title: "Cell Division Errors", body: "Errors that occur naturally as cells divide create mutations that accumulate over time, eventually triggering cancerous growth." },
  { title: "Environmental Damage", body: "Harmful substances — chemicals in tobacco smoke, ultraviolet rays from the sun, and industrial pollutants — damage DNA in cells." },
  { title: "Inherited Mutations", body: "Some genetic mutations are inherited from parents, increasing the likelihood of developing certain types of cancer across generations." },
  { title: "Ageing", body: "The body's ability to eliminate cells with damaged DNA decreases with age — a key reason why cancer risk rises significantly in later life." },
];

export default function WhatIsCancerPage() {
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
                ${label === "What is Cancer?"
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
          <span className="text-[#243a50] font-medium">What is Cancer?</span>
        </div>

        {/* Hero row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          <div>
            <h1 className="font-black text-3xl sm:text-4xl text-[#243a50] mb-2">What is Cancer?</h1>
            <div className="w-12 h-1 bg-[#ff6f61] rounded-full mb-6" />
            <div className="space-y-4 text-sm text-[#243a50]/80 leading-relaxed">
              <p>Cancer develops as a result of specific alterations to genes — the fundamental units of inheritance organised into long strands of DNA called chromosomes. This disease is primarily genetic, stemming from changes to genes that regulate cell functioning, particularly growth and division.</p>
              <p>Tumors can be either <strong className="text-[#243a50]">benign</strong> or <strong className="text-[#243a50]">malignant</strong>. Benign tumors remain localised and do not invade nearby tissues. They are generally non-life-threatening and do not recur after removal.</p>
              <p>Malignant tumors — cancers — have the ability to infiltrate surrounding tissues and metastasise to distant organs via the bloodstream or lymphatic system. This metastatic spread significantly impacts prognosis and treatment.</p>
              <p>While many cancers present as solid tumors in organs like the lungs, breast, or colon, others like leukemia originate in the blood and do not form solid masses. All cancers share the fundamental characteristic of abnormal cell proliferation.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#e4e5e6] shadow-sm">
            <Image src="/cancer1.jpeg" alt="What is Cancer" width={500} height={400}
              className="w-full h-full object-cover" priority />
          </div>
        </div>

        {/* How does cancer develop */}
        <h2 className="font-bold text-2xl text-[#243a50] mb-2">How Does Cancer Develop?</h2>
        <div className="w-10 h-1 bg-[#ff6f61] rounded-full mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
          <div className="space-y-4 text-sm text-[#243a50]/80 leading-relaxed">
            <p>Cancer is caused by changes to genes that control the way cells function, especially how they grow and divide. Each person's cancer has a unique combination of genetic changes.</p>
            <p>The body normally eliminates cells with damaged DNA before they turn cancerous — but this ability decreases with age, which is why cancer risk is higher in later life.</p>
            <p>Even within the same tumour, different cells may have different genetic changes, making cancer complex to treat. As it grows, additional mutations occur.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#e4e5e6] shadow-sm">
            <Image src="/what1.png" alt="Cancer Development" width={500} height={400}
              className="w-full object-cover" />
          </div>
        </div>

        {/* Causes grid */}
        <h3 className="font-bold text-sm text-[#243a50] mb-4 uppercase tracking-wider">
          Genetic Changes Can Happen Because Of
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {causesCards.map(({ title, body }) => (
            <div key={title}
              className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-5 hover:border-[#00416a]/20 hover:shadow-md transition-all duration-200">
              <h4 className="font-bold text-[#00416a] text-sm mb-2">{title}</h4>
              <p className="text-[#243a50]/70 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-5 mb-10 text-sm text-[#243a50]/80 leading-relaxed">
          <strong className="text-[#00416a]">Understanding is the first step —</strong>{" "}
          Knowing how cancer develops helps patients and families make informed decisions about prevention, early screening, and treatment. Hopeful Heals is here to guide you at every stage.
        </div>

        {/* Page nav */}
        <div className="flex items-center justify-between border-t border-[#e4e5e6] pt-6">
          <Link href="/AboutCancer/Understanding"
            className="text-[#00416a] hover:text-[#003255] text-sm font-semibold hover:underline transition-colors">
            ← Understanding Cancer
          </Link>
          <Link href="/AboutCancer/Understanding/Statistics"
            className="text-[#00416a] hover:text-[#003255] text-sm font-semibold hover:underline transition-colors">
            Cancer Statistics →
          </Link>
        </div>
      </main>
    </div>
  );
}
