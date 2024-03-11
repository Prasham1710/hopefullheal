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
                    <h2 className="text-lg font-bold text-blue-100 mt-14 transition-transform transform hover:scale-110 hover:shadow-xl "><Link href='/components/AboutCancer/Causes'>Causes and Prevention</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Causes/Risk'>Risk Factors</Link> </span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Causes/Genetics'>Genetics</Link></span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Causes/Cancer'>Cancer Prevention Overview</Link></span>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 ">
            <Image src={'/cancer1.jpg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <h3 className="text-xl font-semibold mb-4">Cancer Prevention Overview</h3>
            <p>
                Cancer prevention is action taken to lower the chance of getting cancer. In 2023, about 1.9 million people will be diagnosed with cancer in the United States. In addition to the physical problems and emotional distress caused by cancer, the high costs of care are also a burden to patients, their families, and to the public. By preventing cancer, the number of new cases of cancer is lowered, hopefully reducing the burden of cancer and the number of deaths caused by cancer.
            </p>
            <p>
                Cancer is not a single disease but a group of related diseases. Many things in our genes, our lifestyle, and the environment around us may increase or decrease our risk of getting cancer.
            </p>
            <p>
                Scientists are studying many different ways to help prevent cancer, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Ways to avoid or control things known to cause cancer.</li>
                <li>Changes in diet and lifestyle.</li>
                <li>Finding precancerous conditions early. Precancerous conditions are conditions that may become cancer.</li>
                <li>Chemoprevention (medicines to treat a precancerous condition or to keep cancer from starting).</li>
                <li>Risk-reducing surgery.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Factors that are known to increase the risk of cancer</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Cigarette smoking and tobacco use</li>
                <li>Infections</li>
                <li>Radiation</li>
                <li>Immunosuppressive medicines after organ transplant</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Factors that may affect the risk of cancer</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Diet</li>
                <li>Alcohol</li>
                <li>Physical activity</li>
                <li>Obesity</li>
                <li>Diabetes</li>
                <li>Environmental risk factors</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Interventions That Are Known to Lower Cancer Risk</h3>
            <p>
                Chemoprevention is being studied in people who have a high risk of developing cancer. Studies have shown that weight loss surgery lowers cancer risk. An intervention is a treatment or action taken to prevent or treat disease, or improve health in other ways. Many studies are being done to find ways to keep cancer from starting or coming back.
            </p>
        </div>
</div>
</div>
  )
}

export default Diag