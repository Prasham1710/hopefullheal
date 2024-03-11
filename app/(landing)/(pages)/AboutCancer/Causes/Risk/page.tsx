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
            <Image src={'/risk.jpg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Risk Factors for Cancer</h3>
                <p>
                    Age, weight, exposure to carcinogens, and genetics can increase the risk of developing cancer. Learn more from this Did You Know? video produced by NCI's Surveillance, Epidemiology, and End Results (SEER) program.
                </p>
            </div>
            <p>
                It is usually not possible to know exactly why one person develops cancer and another doesn’t. But research has shown that certain risk factors may increase a person’s chances of developing cancer. There are also factors that are linked to a lower risk of cancer, sometimes called protective risk factors or protective factors.
            </p>
            <p>
                Cancer risk factors include exposure to chemicals or other substances, as well as certain behaviors. They also include things people cannot control, like age and family history. A family history of certain cancers can be a sign of a possible inherited cancer syndrome.
            </p>
            <p>
                Most cancer risk (and protective) factors are initially identified in epidemiology studies. In these studies, scientists look at large groups of people and compare those who develop cancer with those who don’t. These studies may show that the people who develop cancer are more or less likely to behave in certain ways or to be exposed to certain substances than those who do not develop cancer.
            </p>
            <p>
                Such studies, on their own, cannot prove that a behavior or substance causes cancer. For example, the finding could be a result of chance, or the true risk factor could be something other than the suspected risk factor. But findings of this type sometimes get attention in the media, and this can lead to wrong ideas about how cancer starts and spreads.
            </p>
            <p>
                When many studies all point to a similar association between a potential risk factor and an increased risk of cancer, and when a possible mechanism exists that could explain how the risk factor could actually cause cancer, scientists can be more confident about the relationship between the two.
            </p>
            <p>
                The list below includes the most-studied known or suspected risk factors for cancer. Although some of these risk factors can be avoided, others—such as growing older—cannot. Limiting your exposure to avoidable risk factors may lower your risk of developing certain cancers.
            </p>
            <ul className="list-disc pl-6">
                <li>Age</li>
                <li>Alcohol</li>
                <li>Cancer-Causing Substances</li>
                <li>Chronic Inflammation</li>
                <li>Diet</li>
                <li>Hormones</li>
                <li>Immunosuppression</li>
                <li>Infectious Agents</li>
                <li>Obesity</li>
                <li>Radiation</li>
                <li>Sunlight</li>
                <li>Tobacco</li>
            </ul>
        </div>
</div>
</div>
  )
}

export default Diag