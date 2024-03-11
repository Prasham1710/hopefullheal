import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Diag = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
        

    <div className="flex">
        <div className="flex flex-col  p-3  shadow w-60 bg-blue-900 h-screen">
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
    <h2 className="text-2xl font-bold mb-4 text-blue-900">Cancer Diagnosis and Staging</h2>
    <div>
    <Image src={'/diagnosis1.jpg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
   
   
    <p className="mb-4">Cancer can manifest with a variety of symptoms, although often these symptoms are not indicative of cancer itself, but may be caused by benign tumors or other health issues. If you experience persistent symptoms lasting for a couple of weeks, your doctor will conduct a thorough physical examination and order tests or procedures to determine the underlying cause.</p>
    <p className="mb-4">In the event that a cancer diagnosis is confirmed, additional tests or procedures will be performed to determine its stage. The stage of cancer refers to its extent, taking into account factors such as tumor size and metastasis. Once the stage of your cancer is determined, your doctor will be able to recommend appropriate treatment options and discuss your prognosis with you. Understanding your cancer and knowing what to expect can provide a sense of empowerment and help you and your loved ones better cope with the diagnosis.</p>
    </div>
</div>

       </div>
       
    </div>
  )
}

export default Diag