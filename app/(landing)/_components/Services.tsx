import React from "react";
import Link from "next/link";
import { FaRibbon } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { LiaHospitalSolid } from "react-icons/lia";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const services = [
  {
    Icon: FaRibbon,
    label: "Cancer Care",
    desc: "Expert oncology consultations and personalised treatment guidance.",
    href: "/appointment",
  },
  {
    Icon: GiMedicines,
    label: "Medicines",
    desc: "Authentic cancer medications delivered safely to your door.",
    href: "/doctor",
  },
  {
    Icon: LiaHospitalSolid,
    label: "Hospitals",
    desc: "Find top-rated cancer treatment hospitals near you.",
    href: "#",
  },
  {
    Icon: IoChatboxEllipsesOutline,
    label: "Chat Support",
    desc: "24/7 AI-powered support for all your cancer-related queries.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f0f4f8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#688ca2] text-sm font-semibold uppercase tracking-widest text-center mb-2">
          Explore
        </p>
        <h2 className="font-black text-4xl sm:text-5xl text-center text-[#00416a] mb-3">
          Our Services
        </h2>
        <p className="text-center text-[#688ca2] text-lg mb-14">
          Your Pathway to Compassionate Care
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ Icon, label, desc, href }) => (
            <Link
              href={href}
              key={label}
              className="group bg-white rounded-2xl p-6 border border-[#e4e5e6] hover:border-[#00416a]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00416a]/10 flex items-center justify-center mb-4 group-hover:bg-[#00416a] transition-colors duration-300">
                <Icon
                  size={28}
                  className="text-[#00416a] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-[#243a50] text-lg mb-2">{label}</h3>
              <p className="text-[#688ca2] text-sm leading-relaxed mb-4">{desc}</p>
              <span className="flex items-center gap-1 text-[#00416a] font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                Learn More <LuArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
