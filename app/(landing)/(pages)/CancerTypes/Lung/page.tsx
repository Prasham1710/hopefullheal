import React from "react";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Overview",
    content: "Lung cancer is a serious disease affecting the lungs, consisting of two main types: non-small cell lung cancer and small cell lung cancer. While smoking is the leading cause, nonsmokers can also develop this condition. Early detection greatly improves outcomes.",
    type: "text",
  },
  {
    title: "Treatment Options",
    items: ["Surgery", "Radiation Therapy", "Chemotherapy", "Targeted Therapy", "Immunotherapy", "Clinical Trials", "Palliative Care"],
    type: "list",
  },
  {
    title: "Causes & Prevention",
    items: ["Quit smoking & avoid secondhand smoke", "Reduce exposure to air pollution", "Test your home for radon gas", "Avoid occupational carcinogens", "Maintain a healthy lifestyle", "Get regular screenings if high-risk"],
    type: "list",
  },
  {
    title: "Screening",
    items: ["Purpose: Detect lung cancer early for better outcomes", "Method: Low-Dose CT (LDCT) scan", "Frequency: Annual screening recommended", "Eligibility: Adults 50–80 with 20+ pack-year smoking history", "Benefits: Early detection dramatically improves survival", "Follow-Up: Adhere to recommended screening schedules"],
    type: "list",
  },
];

export default function LungCancerPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8]">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#b1c0ca] text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/CancerTypes" className="hover:text-white transition-colors">Cancer Types</Link>
            <span>/</span>
            <span className="text-white font-medium">Lung Cancer</span>
          </div>
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-3">
            Cancer Types
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">
            Lung Cancer
          </h1>
          <p className="text-[#b1c0ca] text-lg max-w-2xl">
            The leading cause of cancer deaths worldwide — but highly survivable when caught early.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-5xl mx-auto px-6 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e4e5e6]">
          <Image
            src="/lung.jpeg"
            width={1000}
            height={400}
            alt="Lung Cancer Awareness"
            className="w-full h-64 sm:h-80 object-cover"
            priority
          />
        </div>
      </div>

      {/* Content cards */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sections.map(({ title, content, items, type }) => (
            <div key={title} className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-6">
              <h2 className="font-bold text-[#00416a] text-lg mb-4 pb-2 border-b border-[#f0f4f8]">
                {title}
              </h2>
              {type === "text" ? (
                <p className="text-[#243a50]/80 text-sm leading-relaxed">{content}</p>
              ) : (
                <ul className="space-y-2">
                  {items!.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#243a50]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6f61] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-br from-[#00416a] to-[#003255] rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Need Personalised Guidance?</h3>
          <p className="text-[#b1c0ca] text-sm mb-6">
            Speak with one of our oncology specialists for expert advice on lung cancer diagnosis and treatment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/appointment/doctors"
              className="bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-2.5 px-7 rounded-xl transition-all duration-200 text-sm">
              Book a Consultation
            </Link>
            <Link href="/CancerTypes"
              className="border border-white/30 hover:border-white text-white font-bold py-2.5 px-7 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm">
              All Cancer Types
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
