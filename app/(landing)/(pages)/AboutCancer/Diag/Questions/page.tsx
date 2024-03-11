import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Diag = () => {
  return (
    <div className='w-full  h-full' style={{ backgroundImage: "url('/bg6.png')" }}>
        

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
                            <li className="flex items-center p-2 space-x-3 rounded-md ">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Diag/Questions'>Questions to Ask About Your Cancer</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 ">
            <h2 className="text-2xl font-semibold mb-4">Questions to Ask Your Doctor about Your Diagnosis</h2>
            <Image src={'/questions.jpeg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <p className="mb-4">Learning that you have cancer can be overwhelming, and it's natural to have many questions. When meeting with your doctor, it's essential to gather as much information as possible to better understand your diagnosis and treatment options. The following questions may help guide your discussion:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>What type of cancer do I have?</li>
                <li>What is the stage of my cancer?</li>
                <li>Has the cancer spread to other areas of my body?</li>
                <li>Will additional tests be needed before starting treatment? If so, which ones?</li>
                <li>What types of specialists do I need to see for my cancer treatment?</li>
                <li>Can you assist me in finding another doctor to provide a second opinion on the best treatment plan for me?</li>
                <li>How serious is my cancer?</li>
                <li>What are my chances of survival?</li>
            </ul>
            <p className="mb-4">Asking these questions can help you gain clarity about your diagnosis and empower you to make informed decisions about your treatment and care.</p>
        </div>

       </div>
       
    </div>
  )
}

export default Diag