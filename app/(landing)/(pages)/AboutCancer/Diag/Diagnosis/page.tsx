import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Diag = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
        

        <div className="flex">
        <div className="flex flex-col  p-3  shadow w-60 bg-blue-900 ">
            <div className="space-y-3  ">
                <div className="flex items-center">
                    <h2 className="text-lg font-bold text-blue-100 mt-14 transition-transform transform hover:scale-110 hover:shadow-xl "><Link href='/components/AboutCancer/Diag'>Diagnosis and Staging</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Diag/Symptoms'>Symptoms</Link> </span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Diag/Diagnosis'>Diagnosis</Link></span>
                                
                            </li>
                            <li className="flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Diag/Staging'>Staging</Link></span>
                            </li>
                            <li className="flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Diag/Questions'>Questions to Ask About Your Cancer</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <div className="max-w-2xl mx-auto p-6 ">
            <h2 className="text-2xl font-semibold mb-4">How Cancer Is Diagnosed</h2>
            <Image src={'/diagnosis2.jpg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <p className="mb-4">If you exhibit symptoms or have screening test results indicating cancer, your doctor will investigate whether it's cancer-related or due to another cause. Diagnosing cancer typically involves multiple tests rather than a single one. Your doctor may begin by discussing your medical history, both personal and family, and conducting a physical examination. They may proceed to order laboratory tests, imaging scans, or other diagnostic procedures. In many cases, a biopsy is necessary to definitively confirm the presence of cancer.</p>
            <p className="mb-4">This page outlines common tests utilized in cancer diagnosis. Depending on your symptoms, additional tests may be required. For detailed insights into the diagnostic process for specific cancers, refer to the PDQ cancer treatment summaries for both adult and childhood cancers. These summaries provide comprehensive information and visuals of diagnostic tests and procedures specific to each cancer type.</p>
            <h2 className="text-2xl font-semibold mb-4">Lab Tests Used to Diagnose Cancer</h2>
            <p className="mb-4">High or low levels of certain substances in your body can indicate cancer. Therefore, laboratory tests of your blood, urine, and other body fluids that measure these substances can aid doctors in making a diagnosis. However, abnormal lab results are not conclusive evidence of cancer. Lab test results are typically interpreted in conjunction with other tests, such as biopsies and imaging studies, to facilitate diagnosis and provide further insights into a person’s cancer.</p>
            <p className="mb-4">It is important to understand that lab results for healthy individuals can vary based on factors such as age, sex, race, medical history, and overall health. Even within an individual, lab results can fluctuate from day to day. Due to these variations, normal results are often reported as a range, with both lower and upper limits. These ranges are established using test results from large populations.</p>
            <p className="mb-4">For many tests, it is possible to have normal results even in the presence of cancer, while abnormal results can occur in healthy individuals. These factors underscore why lab tests alone cannot definitively determine the presence of cancer or any other disease.</p>
            <p className="mb-4">Your doctor is the most qualified person to interpret your lab test results and explain their implications for your health.</p>
        </div>

       </div>
       
    </div>
  )
}

export default Diag