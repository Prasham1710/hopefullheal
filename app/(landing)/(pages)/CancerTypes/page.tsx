import Link from "next/link";
import React from "react";

const page = () => {
  const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
      <div className="font-bold text-xl ml-36">Cancer Types</div>
      <p className="mt-6 ml-40 pb-4">
        Select a type of cancer to learn about treatment, causes and prevention,
        screening, and the latest research.
      </p>
      <div className="ml-40">
        <ul>
        {alphabetArray.map(letter => (
        <Link
          key={letter}
          className="font-semibold px-2 py-2 mx-2 text-white hover:underline hover:text-blue-600 border-2 rounded-full"
          href={`/components/CancerTypes/#${letter}`}
        >
          {letter.toUpperCase()}
        </Link>
         ))}
          
           
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">A</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Acute Lymphoblastic Leukemia (ALL)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Acute Myeloid Leukemia (AML)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Adolescents, Cancer in
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Adrenocortical Carcinoma
          </li>
          <li className="text-black">
            AIDS-Related Cancers
            <ul className="ml-6 text-blue-600">
              <li className="hover:text-black hover:underline pointer-cursor pb-2">
                Kaposi Sarcoma (Soft Tissue Sarcoma)
              </li>
              <li className="hover:text-black hover:underline pointer-cursor pb-2">
                AIDS-Related Lymphoma (Lymphoma)
              </li>
              <li className="hover:text-black hover:underline pointer-cursor pb-2">
                Primary CNS Lymphoma (Lymphoma)
              </li>
            </ul>
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Anal Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Appendix Cancer - see Gastrointestinal Neuroendocrine Tumors
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Astrocytomas, Childhood (Brain Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Atypical Teratoid/Rhabdoid Tumor, Childhood, Central Nervous System
            (Brain Cancer)
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="b" className="font-bold pl-20">B</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Basal Cell Carcinoma of the Skin - see Skin Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Bile Duct Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Bladder Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Bone Cancer (includes Ewing Sarcoma and Osteosarcoma and Malignant
            Fibrous Histiocytoma)
          </li>

          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Brain Tumors
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Breast Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Bronchial Tumors (Lung Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Burkitt Lymphoma - see Non-Hodgkin Lymphoma
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="c" className="font-bold pl-20">C</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Carcinoma of Unknown Primary
          </li>
          <li className="text-black">
            Central Nervous System
            <ul className="ml-6 text-blue-600">
              <li className="hover:text-black hover:underline pointer-cursor pb-2">
                Atypical Teratoid/Rhabdoid Tumor, Childhood (Brain Cancer)
              </li>
              <li className="hover:text-black hover:underline pointer-cursor pb-2">
                Medulloblastoma and Other CNS Embryonal Tumors, Childhood (Brain
                Cancer)a
              </li>
              <li className="hover:text-black hover:underline pointer-cursor pb-2">
                Germ Cell Tumor, Childhood (Brain Cancer)
              </li>
              <li className="hover:text-black hover:underline pointer-cursor pb-2">
                Primary CNS Lymphom
              </li>
            </ul>
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Cervical Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Childhood Cancers
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Childhood Cardiac Tumors Treatment
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Cancers of Childhood, Rare
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Cholangiocarcinoma - see Bile Duct Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Chordoma, Childhood (Bone Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Chronic Lymphocytic Leukemia (CLL)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Chronic Myelogenous Leukemia (CML)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Chronic Myeloproliferative Neoplasms
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Colorectal Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Craniopharyngioma, Childhood (Brain Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Cutaneous T-Cell Lymphoma - see Lymphoma (Mycosis Fungoides and
            Sézary Syndrome){" "}
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="d"  className="font-bold pl-20">D</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Ductal Carcinoma In Situ (DCIS) - see Breast Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Diffuse Intrinsic Pontine Glioma (DIPG) (Brain Cancer)
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="e" className="font-bold pl-20">
          E
        </h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Embryonal Tumors, Medulloblastoma and Other Central Nervous System,
            Childhood (Brain Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Endometrial Cancer (Uterine Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Ependymoma, Childhood (Brain Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Esophageal Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Esthesioneuroblastoma (Head and Neck Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Ewing Sarcoma (Bone Cancer)
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Extracranial Germ Cell Tumor, Childhood
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Extragonadal Germ Cell Tumor
          </li>
          <li className="text-black">
            Eye Cancer
            <ul className="ml-6 text-blue-600">
              <li className="hover:text-black hover:underline pointer-cursor pb-2 ">
                Intraocular Melanoma
              </li>
              <li className="hover:text-black hover:underline pointer-cursor pb-2 ">
                Retinoblastoma
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="f"  className="font-bold pl-20">F</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Fallopian Tube Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="g"  className="font-bold pl-20">G</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Gallbladder Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Gastric (Stomach) Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="h"  className="font-bold pl-20">H</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Heart Tumors, Childhood </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Hepatocellular (Liver) Cancer </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="i"  className="font-bold pl-20">I</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Intraocular Melanoma    </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Islet Cell Tumors, Pancreatic Neuroendocrine Tumors</li></ul>
      </div>
      <div className="my-4 mx-40">
        <h2 id="k"  className="font-bold pl-20">K</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
Kidney (Renal Cell) Cancer
        </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
Kaposi Sarcoma (Soft Tissue Sarcoma)
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">L</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
Liver Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Leukemia
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">M</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Mesothelioma, Malignant
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            
Metastatic Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">N</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Neuroblastoma
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            
Neuroendocrine Tumors (Gastrointestinal)
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">O</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Osteosarcoma and Undifferentiated Pleomorphic Sarcoma of Bone Treatment
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Ovarian Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">P</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Pancreatic Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Prostate Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">R</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Recurrent Cancer

          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Renal Cell (Kidney) Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">S</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Skin Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            
Small Cell Lung Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">T</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Thymoma and Thymic Carcinoma

          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Thyroid Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">U</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Urethral Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Uterine Cancer, Endometrial
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">V</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Vaginal Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
          Vascular Tumors (Soft Tissue Sarcoma)
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">F</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Fallopian Tube Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Fallopian Tube Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">F</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Fallopian Tube Cancer
          </li>
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Fallopian Tube Cancer
          </li>
        </ul>
      </div>
      <div className="my-4 mx-40">
        <h2 className="font-bold pl-20">F</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Fallopian Tube Cancer
          </li>
        </ul>
      </div><div className="py-4 mx-40">
        <h2 className="font-bold pl-20">F</h2>
        <ul className="text-blue-600 ">
          <li className="hover:text-black hover:underline pointer-cursor pb-2">
            Fallopian Tube Cancer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;