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
                                <li className="flex items-center p-2 space-x-3 rounded-md ">
                                    
                                        <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Diag/Questions'>Questions to Ask About Your Cancer</Link></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <div className="max-w-2xl mx-auto p-6  ">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Symptoms of Cancer</h2>
            <Image src={'/symptoms.jpeg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <p className="mb-4">If you experience symptoms persisting for a couple of weeks, it's crucial to consult a doctor.</p>
            <p className="mb-4">Cancer can present with various symptoms, although frequently these symptoms are attributed to illness, injury, benign tumors, or other health issues. If symptoms persist beyond a few weeks, it's advisable to seek medical attention promptly to facilitate early diagnosis and treatment. It's important to note that cancer may not always cause pain, so it's wise not to wait until pain develops before seeing a doctor.</p>
            <p className="mb-4">To learn more about symptoms specific to particular types of cancer, refer to the list of PDQ® cancer treatment summaries for both adult and childhood cancers, each providing comprehensive information on symptoms associated with a specific cancer type.</p>
            <p className="mb-4 font-semibold">Some common symptoms that cancer may cause include:</p>
            <ul className="list-disc pl-8 mb-4">
                <li className="mb-2"><span className="font-semibold">Bladder changes:</span>
                    <ul className="list-disc pl-8">
                        <li>Trouble urinating</li>
                        <li>Pain when urinating</li>
                        <li>Blood in the urine</li>
                        <li>Bleeding or bruising, for no known reason</li>
                    </ul>
                </li>
                <li className="mb-2"><span className="font-semibold">Bowel changes:</span>
                    <ul className="list-disc pl-8">
                        <li>Blood in the stools</li>
                        <li>Changes in bowel habits</li>
                        <li>Cough or hoarseness that does not go away</li>
                    </ul>
                </li>
                <li className="mb-2"><span className="font-semibold">Eating problems:</span>
                    <ul className="list-disc pl-8">
                        <li>Pain after eating (heartburn or indigestion that doesn’t go away)</li>
                        <li>Trouble swallowing</li>
                        <li>Belly pain</li>
                        <li>Nausea and vomiting</li>
                        <li>Appetite changes</li>
                        <li>Fatigue that is severe and lasts</li>
                    </ul>
                </li>
                <li className="mb-2"><span className="font-semibold">Mouth changes:</span>
                    <ul className="list-disc pl-8">
                        <li>A white or red patch on the tongue or in your mouth</li>
                        <li>Bleeding, pain, or numbness in the lip or mouth</li>
                    </ul>
                </li>
                <li className="mb-2"><span className="font-semibold">Neurological problems:</span>
                    <ul className="list-disc pl-8">
                        <li>Headaches</li>
                        <li>Seizures</li>
                        <li>Vision changes</li>
                        <li>Hearing changes</li>
                        <li>Drooping of the face</li>
                    </ul>
                </li>
                <li className="mb-2"><span className="font-semibold">Skin changes:</span>
                    <ul className="list-disc pl-8">
                        <li>A flesh-colored lump that bleeds or turns scaly</li>
                        <li>A new mole or a change in an existing mole</li>
                        <li>A sore that does not heal</li>
                        <li>Jaundice (yellowing of the skin and whites of the eyes)</li>
                        <li>Swelling or lumps anywhere such as in the neck, underarm, stomach, and groin</li>
                    </ul>
                </li>
                <li className="mb-2"><span className="font-semibold">Weight gain or weight loss for no known reason</span></li>
            
            </ul>
        </div>
    
    
       </div>
       
    </div>
  )
}

export default Diag