import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-50 via-white to-blue-50 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/bg6.png')" }}
      ></div>

      <h1 className="font-bold text-5xl py-8 text-center text-blue-800">
        Lung Cancer Awareness
      </h1>

      <div className="flex justify-center py-10">
        <Image
          src="/lung.jpeg"
          width={600}
          height={600}
          alt="Lung Cancer"
          className="rounded-xl transition-transform transform hover:scale-105 w-[800px] h-96 object-cover shadow-lg"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-10 py-10">
        <div className="w-96 bg-white bg-opacity-90 rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-2xl text-center text-blue-700 mb-4">
            Overview
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lung cancer is a serious disease that affects the lungs. It consists
            of two main types: non-small cell lung cancer and small cell lung
            cancer. While smoking is the leading cause of lung cancer, it's
            important to note that nonsmokers can also develop this condition.
            This page provides various resources and information about lung
            cancer to help individuals understand and manage the disease better.
          </p>
        </div>

        <div className="w-96 bg-white bg-opacity-90 rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-2xl text-center text-blue-700 mb-4">
            Treatment
          </h2>
          <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside">
            <li>Surgery</li>
            <li>Radiation Therapy</li>
            <li>Chemotherapy</li>
            <li>Targeted Therapy</li>
            <li>Immunotherapy</li>
            <li>Clinical Trials</li>
            <li>Palliative Care</li>
          </ul>
        </div>

        <div className="w-96 bg-white bg-opacity-90 rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-2xl text-center text-blue-700 mb-4">
            Causes & Prevention
          </h2>
          <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside">
            <li>Healthy Lifestyle</li>
            <li>Screening</li>
            <li>Genetics</li>
            <li>Occupational Hazards</li>
            <li>Smoking</li>
            <li>Secondhand Smoke</li>
            <li>Air Pollution</li>
          </ul>
        </div>

        <div className="w-96 bg-white bg-opacity-90 rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-2xl text-center text-blue-700 mb-4">
            Screening
          </h2>
          <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside">
            <li>
              Purpose: Detect lung cancer early for better treatment outcomes.
            </li>
            <li>Method: Low-Dose Computed Tomography (LDCT) scans.</li>
            <li>Frequency: Annual screening recommended.</li>
            <li>Benefits: Early detection improves treatment success.</li>
            <li>Risks: False positives may lead to unnecessary tests.</li>
            <li>Follow-Up: Adhere to recommended screening schedules.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
