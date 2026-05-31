import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-[#e4e5e6] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#688ca2] text-sm font-semibold uppercase tracking-widest text-center mb-2">
          Who We Are
        </p>
        <h2 className="font-black text-4xl sm:text-5xl text-center text-[#243a50] mb-14">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Left: Vision + Mission */}
          <div>
            <h3 className="text-2xl font-bold text-[#00416a] mb-3">Our Vision</h3>
            <p className="text-[#243a50]/80 text-base leading-relaxed mb-8">
              We envision a world where every individual affected by cancer in
              India has access to reliable information, quality care, and
              financial assistance — irrespective of socioeconomic status or
              geographic location.
            </p>

            <h3 className="text-2xl font-bold text-[#00416a] mb-3">Our Mission</h3>
            <ul className="space-y-3">
              {[
                "Providing verified cancer information through a centralised platform",
                "Accessible online consultations with oncology specialists",
                "Direct medication procurement from verified sellers",
                "AI-powered personalised guidance and support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#243a50]/80">
                  <span className="w-2 h-2 rounded-full bg-[#ff6f61] mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: What We Offer cards */}
          <div className="space-y-4">
            {[
              {
                title: "Reliable Information",
                desc: "Verified content on cancer types, symptoms, treatments, and prevention strategies.",
              },
              {
                title: "Accessible Care",
                desc: "Connect with experienced oncology specialists for consultations from anywhere.",
              },
              {
                title: "Financial Assistance",
                desc: "Tools and resources to navigate the financial aspects of cancer care.",
              },
              {
                title: "Personalised Support",
                desc: "Dedicated team addressing questions and facilitating appointments throughout your journey.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-[#e4e5e6] hover:border-[#00416a]/20 hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-bold text-[#00416a] mb-1">{title}</h4>
                <p className="text-[#688ca2] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div
          id="donate"
          className="bg-gradient-to-br from-[#00416a] to-[#003255] rounded-2xl p-10 text-center"
        >
          <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3">
            Join Us in the Fight Against Cancer
          </h3>
          <p className="text-[#b1c0ca] text-base mb-7 max-w-2xl mx-auto">
            Together, we can make a difference. Join our mission to empower
            individuals and families facing cancer in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#ff6f61]/30 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="#donate"
              className="border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
