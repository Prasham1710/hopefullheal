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
            <h2 className="text-2xl font-semibold mb-4">Cancer Staging</h2>
            <Image src={'/staging.png'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <p className="mb-4">To determine the stage of your disease, your doctor may order x-rays, lab tests, and other procedures. The stage of cancer refers to its extent, including the size of the tumor and whether it has spread.</p>
            <p className="mb-4">Understanding the stage of your cancer is crucial for:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Assessing the seriousness of your cancer and your chances of survival</li>
                <li>Planning the most effective treatment</li>
                <li>Identifying clinical trials as potential treatment options</li>
            </ul>
            <p className="mb-4">Cancer is always referred to by the stage assigned at diagnosis, even if it progresses or metastasizes. Additional information about any changes in the cancer's status over time is added to the original stage.</p>
            <h3 className="text-xl font-semibold mb-2">How Stage Is Determined</h3>
            <p className="mb-4">The stage of cancer is determined through various tests and procedures, including x-rays, lab tests, and imaging studies. Refer to the section on how cancer is diagnosed to learn more about these diagnostic techniques.</p>
            <h3 className="text-xl font-semibold mb-2">Systems That Describe Stage</h3>
            <p>There are numerous staging systems used for cancer, including general systems like the TNM staging system and those specific to certain types of cancer. Most staging systems consider factors such as the tumor's location, size, lymph node involvement, and metastasis.</p>
        </div>
       </div>
       
    </div>
  )
}

export default Diag