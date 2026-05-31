import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-[#f0f4f8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero banner */}
        <div className="bg-gradient-to-br from-[#00416a] to-[#003255] rounded-3xl px-8 py-14 mb-12 text-center">
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-3">
            Hopeful Heals
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">
            Expert Cancer Consultations
          </h1>
          <p className="text-[#b1c0ca] text-lg max-w-2xl mx-auto mb-8">
            Connect with India's top oncologists from the comfort of your home.
          </p>
          <Link
            href="/appointment/doctors"
            className="inline-block bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-[#ff6f61]/30 transition-all duration-200 hover:scale-105"
          >
            Find a Doctor
          </Link>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <Image
              src="/doctor.jpg"
              width={600}
              height={400}
              alt="Doctor Consultation"
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#00416a] mb-4">
              About Our Platform
            </h2>
            <p className="text-[#243a50]/80 text-base leading-relaxed mb-6">
              Hopeful Heals is your trusted partner in cancer care. We connect
              patients and families with experienced oncologists, providing
              personalised guidance at every step of the cancer journey.
            </p>
            <h3 className="font-bold text-[#00416a] mb-3 text-xl">
              Our Mission
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Provide Expert Consultation",
                "Offer Compassionate Support",
                "Empower Informed Decision-Making",
                "Promote Holistic Well-Being",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#243a50]/80"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ff6f61] shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-[#00416a] mb-2 text-xl">
              Our Commitment
            </h3>
            <p className="text-[#688ca2] text-sm leading-relaxed">
              We are committed to compassionate, comprehensive care — supporting
              you from diagnosis to survivorship with expertise and empathy.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "200+", label: "Oncologists" },
            { value: "50,000+", label: "Patients Served" },
            { value: "4.9★", label: "Average Rating" },
            { value: "24/7", label: "Support" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 text-center border border-[#e4e5e6] shadow-sm hover:shadow-md hover:border-[#00416a]/20 transition-all duration-200"
            >
              <p className="text-2xl font-black text-[#00416a]">{value}</p>
              <p className="text-[#688ca2] text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
