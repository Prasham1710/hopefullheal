import React from "react";
import Image from "next/image";

const Abt = () => {
  return (
    <div className="w-screen h-screen bg-[#e4e5e6]">
      <h1 className="font-extrabold text-4xl text-center text-[#00416a] py-16 font-montserrat  transition-transform transform hover:scale-110">
        Empowering Hope, Healing, and Health: Your Cancer Companion
      </h1>
      <div className="grid grid-cols-2">
        <Image
          src="/woman.jpg"
          alt="bg"
          width={600}
          height={700}
          className="mx-40 rounded-xl my-16"
        />
        <div className="my-16 mx-8 md:mx-40">
          <div className="bg-[#00416a] h-[400px] rounded-xl p-6 md:p-12">
            <ul className="py-2 text-white text-lg">
              <li className="py-2 flex items-center">
                <span className="text-2xl mr-2">&#8226;</span> Content Curation
              </li>
              <li className="py-2 flex items-center">
                <span className="text-2xl mr-2">&#8226;</span> Expert Review
              </li>
              <li className="py-2 flex items-center">
                <span className="text-2xl mr-2">&#8226;</span> Organized
                Structure
              </li>
              <li className="py-2 flex items-center">
                <span className="text-2xl mr-2">&#8226;</span> Clear
                Presentation
              </li>
              <li className="py-2 flex items-center">
                <span className="text-2xl mr-2">&#8226;</span> Multilingual
                Support
              </li>
              <li className="py-2 flex items-center">
                <span className="text-2xl mr-2">&#8226;</span> Continuous
                Improvement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abt;