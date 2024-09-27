import React from "react";
import Image from "next/image";

const Abt = () => {
  return (
    <div className="min-h-screen bg-[#e4e5e6]">
      <h1 className="font-extrabold text-4xl text-center text-[#00416a] py-12 md:py-16 font-montserrat transition-transform transform hover:scale-110">
        Empowering Hope, Healing, and Health: Your Cancer Companion
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mx-6 md:mx-20 items-center">
        <div className="flex justify-center">
          <Image
            src="/woman.jpg"
            alt="bg"
            width={600}
            height={700}
            className="rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="my-8 md:my-16">
          <div className="bg-[#00416a] text-white p-6 md:p-12 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Our Key Features
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="text-2xl mr-3">&#8226;</span>
                Content Curation
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">&#8226;</span>
                Expert Review
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">&#8226;</span>
                Organized Structure
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">&#8226;</span>
                Clear Presentation
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">&#8226;</span>
                Multilingual Support
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">&#8226;</span>
                Continuous Improvement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abt;
