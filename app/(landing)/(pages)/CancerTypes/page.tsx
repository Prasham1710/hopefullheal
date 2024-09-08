import Link from "next/link";
import React from "react";

const page = () => {
  const alphabetArray = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  return (
    <div
      className="w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100"
      style={{ backgroundImage: "url('/bg6.png')" }}
    >
      <div className="font-bold text-xl ml-36">Cancer Types</div>
      <p className="mt-6 ml-40 pb-4">
        Select a type of cancer to learn about treatment, causes and prevention,
        screening, and the latest research.
      </p>
      <div className="ml-40">
        <ul className="flex flex-wrap">
          {alphabetArray.map((letter) => (
            <li key={letter}>
              <Link
                className="font-semibold px-4  mx-2 text-white hover:underline hover:text-blue-600 border-2 rounded-full bg-blue-500"
                href={`/CancerTypes/#${letter}`}
              >
                {letter.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Section for A */}
      <div className="my-4 mx-40">
        <h2 id="a" className="font-bold pl-20">
          A
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Acute Lymphoblastic Leukemia (ALL)
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Acute Myeloid Leukemia (AML)
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Adolescents, Cancer in
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Adrenocortical Carcinoma
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            AIDS-Related Cancers
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Anal Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Appendix Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Astrocytomas, Childhood (Brain Cancer)
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Atypical Teratoid/Rhabdoid Tumor, Childhood (Brain Cancer)
          </li>
        </ul>
      </div>

      {/* Section for B */}
      <div className="my-4 mx-40">
        <h2 id="b" className="font-bold pl-20">
          B
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Basal Cell Carcinoma of the Skin
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Bile Duct Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Bladder Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Bone Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Brain Tumors
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Breast Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Bronchial Tumors
          </li>
        </ul>
      </div>

      {/* Section for C */}
      <div className="my-4 mx-40">
        <h2 id="c" className="font-bold pl-20">
          C
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Carcinoma of Unknown Primary
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Cervical Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Childhood Cancers
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Chronic Myelogenous Leukemia (CML)
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Colorectal Cancer
          </li>
        </ul>
      </div>

      {/* Section for D */}
      <div className="my-4 mx-40">
        <h2 id="d" className="font-bold pl-20">
          D
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Desmoid Tumors
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Diffuse Large B-Cell Lymphoma
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Ductal Carcinoma in Situ (DCIS)
          </li>
        </ul>
      </div>

      {/* Section for E */}
      <div className="my-4 mx-40">
        <h2 id="e" className="font-bold pl-20">
          E
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Endometrial Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Esophageal Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Ewing Sarcoma
          </li>
        </ul>
      </div>

      {/* Section for F */}
      <div className="my-4 mx-40">
        <h2 id="f" className="font-bold pl-20">
          F
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Fallopian Tube Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Fibrous Histiocytoma
          </li>
        </ul>
      </div>

      {/* Section for G */}
      <div className="my-4 mx-40">
        <h2 id="g" className="font-bold pl-20">
          G
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Gastrointestinal Cancer
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Glioma
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Germ Cell Tumors
          </li>
        </ul>
      </div>

      {/* Section for H */}
      <div className="my-4 mx-40">
        <h2 id="h" className="font-bold pl-20">
          H
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Hodgkin Lymphoma
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Hypopharyngeal Cancer
          </li>
        </ul>
      </div>

      {/* Section for I */}
      <div className="my-4 mx-40">
        <h2 id="i" className="font-bold pl-20">
          I
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Intraocular Melanoma
          </li>
        </ul>
      </div>

      {/* Section for J */}
      <div className="my-4 mx-40">
        <h2 id="j" className="font-bold pl-20">
          J
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Juvenile Myelomonocytic Leukemia
          </li>
        </ul>
      </div>

      {/* Section for K */}
      <div className="my-4 mx-40">
        <h2 id="k" className="font-bold pl-20">
          K
        </h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Kaposi Sarcoma
          </li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">
            Kidney Cancer
          </li>
        </ul>
      </div>
      {/* Section for L */}
      <div className="my-4 mx-40">
        <h2 id="l" className="font-bold pl-20">L</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Laryngeal Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Leukemia</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Liver Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Lung Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Lymphoma</li>
        </ul>
      </div>

      {/* Section for M */}
      <div className="my-4 mx-40">
        <h2 id="m" className="font-bold pl-20">M</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Melanoma</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Mesothelioma</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Multiple Myeloma</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Myelodysplastic Syndromes</li>
        </ul>
      </div>

      {/* Section for N */}
      <div className="my-4 mx-40">
        <h2 id="n" className="font-bold pl-20">N</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Nasopharyngeal Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Neuroblastoma</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Non-Hodgkin Lymphoma</li>
        </ul>
      </div>

      {/* Section for O */}
      <div className="my-4 mx-40">
        <h2 id="o" className="font-bold pl-20">O</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Oral Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Ovarian Cancer</li>
        </ul>
      </div>

      {/* Section for P */}
      <div className="my-4 mx-40">
        <h2 id="p" className="font-bold pl-20">P</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Pancreatic Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Penile Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Prostate Cancer</li>
        </ul>
      </div>

      {/* Section for R */}
      <div className="my-4 mx-40">
        <h2 id="r" className="font-bold pl-20">R</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Rectal Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Renal Cell Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Retinoblastoma</li>
        </ul>
      </div>

      {/* Section for S */}
      <div className="my-4 mx-40">
        <h2 id="s" className="font-bold pl-20">S</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Sarcoma</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Skin Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Small Cell Lung Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Stomach Cancer</li>
        </ul>
      </div>

      {/* Section for T */}
      <div className="my-4 mx-40">
        <h2 id="t" className="font-bold pl-20">T</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Testicular Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Throat Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Thyroid Cancer</li>
        </ul>
      </div>

      {/* Section for U */}
      <div className="my-4 mx-40">
        <h2 id="u" className="font-bold pl-20">U</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Urethral Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Uterine Cancer</li>
        </ul>
      </div>

      {/* Section for V */}
      <div className="my-4 mx-40">
        <h2 id="v" className="font-bold pl-20">V</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Vaginal Cancer</li>
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Vulvar Cancer</li>
        </ul>
      </div>

      {/* Section for W */}
      <div className="my-4 mx-40">
        <h2 id="w" className="font-bold pl-20">W</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Wilms Tumor</li>
        </ul>
      </div>

      {/* Section for Z */}
      <div className="my-4 mx-40">
        <h2 id="z" className="font-bold pl-20">Z</h2>
        <ul className="text-blue-600">
          <li className="hover:text-black hover:underline cursor-pointer pb-2">Zollinger-Ellison Syndrome</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
