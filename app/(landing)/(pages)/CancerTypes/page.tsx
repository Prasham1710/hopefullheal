import Link from "next/link";
import React from "react";
import { FaRibbon } from "react-icons/fa";
import { GiDna1, GiMicroscope, GiStomach } from "react-icons/gi";
import { MdOutlineBloodtype } from "react-icons/md";
import { LuSun } from "react-icons/lu";

const cancerTypes: Record<string, { name: string; href?: string }[]> = {
  A: [
    { name: "Acute Lymphoblastic Leukemia (ALL)" },
    { name: "Acute Myeloid Leukemia (AML)" },
    { name: "Adolescents, Cancer in" },
    { name: "Adrenocortical Carcinoma" },
    { name: "AIDS-Related Cancers" },
    { name: "Anal Cancer" },
    { name: "Appendix Cancer" },
    { name: "Astrocytomas, Childhood (Brain Cancer)" },
    { name: "Atypical Teratoid/Rhabdoid Tumor, Childhood (Brain Cancer)" },
  ],
  B: [
    { name: "Basal Cell Carcinoma of the Skin" },
    { name: "Bile Duct Cancer" },
    { name: "Bladder Cancer" },
    { name: "Bone Cancer" },
    { name: "Brain Tumors" },
    { name: "Breast Cancer" },
    { name: "Bronchial Tumors" },
  ],
  C: [
    { name: "Carcinoma of Unknown Primary" },
    { name: "Cervical Cancer" },
    { name: "Childhood Cancers" },
    { name: "Chronic Myelogenous Leukemia (CML)" },
    { name: "Colorectal Cancer" },
  ],
  D: [
    { name: "Desmoid Tumors" },
    { name: "Diffuse Large B-Cell Lymphoma" },
    { name: "Ductal Carcinoma in Situ (DCIS)" },
  ],
  E: [
    { name: "Endometrial Cancer" },
    { name: "Esophageal Cancer" },
    { name: "Ewing Sarcoma" },
  ],
  F: [
    { name: "Fallopian Tube Cancer" },
    { name: "Fibrous Histiocytoma" },
  ],
  G: [
    { name: "Gastrointestinal Cancer" },
    { name: "Glioma" },
    { name: "Germ Cell Tumors" },
  ],
  H: [
    { name: "Hodgkin Lymphoma" },
    { name: "Hypopharyngeal Cancer" },
  ],
  I: [{ name: "Intraocular Melanoma" }],
  J: [{ name: "Juvenile Myelomonocytic Leukemia" }],
  K: [
    { name: "Kaposi Sarcoma" },
    { name: "Kidney Cancer" },
  ],
  L: [
    { name: "Laryngeal Cancer" },
    { name: "Leukemia" },
    { name: "Liver Cancer" },
    { name: "Lung Cancer", href: "/CancerTypes/Lung" },
    { name: "Lymphoma" },
  ],
  M: [
    { name: "Melanoma" },
    { name: "Mesothelioma" },
    { name: "Multiple Myeloma" },
    { name: "Myelodysplastic Syndromes" },
  ],
  N: [
    { name: "Nasopharyngeal Cancer" },
    { name: "Neuroblastoma" },
    { name: "Non-Hodgkin Lymphoma" },
  ],
  O: [
    { name: "Oral Cancer" },
    { name: "Ovarian Cancer" },
  ],
  P: [
    { name: "Pancreatic Cancer" },
    { name: "Penile Cancer" },
    { name: "Prostate Cancer" },
  ],
  Q: [],
  R: [
    { name: "Rectal Cancer" },
    { name: "Renal Cell Cancer" },
    { name: "Retinoblastoma" },
  ],
  S: [
    { name: "Sarcoma" },
    { name: "Skin Cancer" },
    { name: "Small Cell Lung Cancer" },
    { name: "Stomach Cancer" },
  ],
  T: [
    { name: "Testicular Cancer" },
    { name: "Throat Cancer" },
    { name: "Thyroid Cancer" },
  ],
  U: [
    { name: "Urethral Cancer" },
    { name: "Uterine Cancer" },
  ],
  V: [
    { name: "Vaginal Cancer" },
    { name: "Vulvar Cancer" },
  ],
  W: [{ name: "Wilms Tumor" }],
  X: [],
  Y: [],
  Z: [{ name: "Zollinger-Ellison Syndrome" }],
};

const featured = [
  { name: "Breast Cancer",    Icon: FaRibbon,           desc: "Most common cancer among women globally." },
  { name: "Lung Cancer",      Icon: MdOutlineBloodtype, desc: "Leading cause of cancer deaths worldwide.", href: "/CancerTypes/Lung" },
  { name: "Prostate Cancer",  Icon: GiMicroscope,       desc: "Most common cancer in men over 50." },
  { name: "Colorectal Cancer",Icon: GiStomach,          desc: "Third most common cancer globally." },
  { name: "Skin Cancer",      Icon: LuSun,              desc: "Most diagnosed cancer type overall." },
  { name: "Lymphoma",         Icon: GiDna1,             desc: "Cancer of the lymphatic system." },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function CancerTypesPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00416a] via-[#003255] to-[#001f33] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#b1c0ca] text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Cancer Types</span>
          </div>
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-3">
            Resource Library
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">
            Cancer Types
          </h1>
          <p className="text-[#b1c0ca] text-lg max-w-2xl leading-relaxed">
            Select a type of cancer to learn about treatment, causes, prevention,
            screening, and the latest research.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
            {[
              { value: "100+", label: "Cancer Types" },
              { value: "200+", label: "Expert Articles" },
              { value: "50K+", label: "Patients Guided" },
              { value: "24/7", label: "AI Support" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="text-[#b1c0ca] text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Featured cancer types */}
        <div className="mb-14">
          <p className="text-[#688ca2] text-sm font-semibold uppercase tracking-widest mb-2">
            Common Types
          </p>
          <h2 className="font-black text-2xl text-[#243a50] mb-7">
            Featured Cancer Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map(({ name, Icon, desc, href }) => {
              const content = (
                <div className="group bg-white rounded-2xl p-6 border border-[#e4e5e6] hover:border-[#00416a]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#00416a]/10 flex items-center justify-center mb-4 group-hover:bg-[#00416a] transition-colors duration-300">
                    <Icon size={22} className="text-[#00416a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#243a50] text-lg mb-1">{name}</h3>
                  <p className="text-[#688ca2] text-sm leading-relaxed mb-3">{desc}</p>
                  {href && (
                    <span className="text-[#00416a] font-semibold text-sm group-hover:underline">
                      Learn more →
                    </span>
                  )}
                </div>
              );
              return href ? (
                <Link href={href} key={name}>{content}</Link>
              ) : (
                <div key={name}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* A-Z alphabet nav */}
        <div className="mb-10">
          <p className="text-[#688ca2] text-sm font-semibold uppercase tracking-widest mb-4">
            Browse A–Z Directory
          </p>
          <div className="flex flex-wrap gap-2">
            {alphabet.map((letter) => {
              const hasItems = (cancerTypes[letter]?.length ?? 0) > 0;
              return hasItems ? (
                <a
                  key={letter}
                  href={`#section-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#00416a] text-white font-bold text-sm hover:bg-[#003255] transition-colors shadow-sm"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#e4e5e6] text-[#b1c0ca] font-bold text-sm cursor-not-allowed"
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </div>

        {/* A-Z sections */}
        <div className="space-y-6">
          {alphabet
            .filter((letter) => (cancerTypes[letter]?.length ?? 0) > 0)
            .map((letter) => (
              <div
                key={letter}
                id={`section-${letter}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#e4e5e6] shadow-sm scroll-mt-24"
              >
                {/* Letter header */}
                <div className="bg-gradient-to-r from-[#00416a] to-[#003255] px-6 py-4 flex items-center justify-between">
                  <h2 className="text-white font-black text-2xl">{letter}</h2>
                  <span className="text-[#b1c0ca] text-sm">
                    {cancerTypes[letter].length} type{cancerTypes[letter].length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Items */}
                <ul className="divide-y divide-[#f0f4f8]">
                  {cancerTypes[letter].map(({ name, href }) =>
                    href ? (
                      <li key={name}>
                        <Link
                          href={href}
                          className="flex items-center justify-between px-6 py-3.5 hover:bg-[#f0f4f8] transition-colors group"
                        >
                          <span className="text-[#00416a] font-semibold text-sm group-hover:underline">
                            {name}
                          </span>
                          <span className="text-[#688ca2] text-xs font-semibold bg-[#e4e5e6] group-hover:bg-[#00416a] group-hover:text-white px-2.5 py-1 rounded-full transition-colors">
                            View →
                          </span>
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={name}
                        className="flex items-center px-6 py-3.5 hover:bg-[#f0f4f8] transition-colors"
                      >
                        <span className="text-[#243a50] text-sm">{name}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gradient-to-br from-[#00416a] to-[#003255] rounded-2xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">
            Need personalised guidance?
          </h3>
          <p className="text-[#b1c0ca] mb-7 max-w-xl mx-auto text-base">
            Our oncology specialists can help you understand your diagnosis and navigate your treatment options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#ff6f61]/30 hover:scale-105"
            >
              Book a Consultation
            </Link>
            <Link
              href="/doctor"
              className="border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Browse Medicines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
