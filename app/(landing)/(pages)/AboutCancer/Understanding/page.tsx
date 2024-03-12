import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Understanding = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
        

        <div className="flex">
            <div className="flex flex-col  p-3  shadow w-60 bg-blue-900 ">
                <div className="space-y-3  ">
                    <div className="flex items-center">
                        <h2 className="text-lg font-bold text-blue-100 mt-14 transition-transform transform hover:scale-110 hover:shadow-xl "><Link href='/AboutCancer/Understanding'>Understanding Cancer</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/AboutCancer/Understanding/What'>What is Cancer?</Link> </span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/AboutCancer/Understanding/Statistics'>Cancer Statistics</Link></span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/AboutCancer/Understanding/Disparities'>Cancer Disparities</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='m-6'>
                <div className='flex'>
                <h1 className='text-6xl font-bold py-20 pl-20 text-blue-800 transition-transform transform hover:scale-110'>Understanding Cancer</h1>
                <Image src={'/image2.jpg'} alt='cancer' width={300} height={300} className='rounded-xl ml-auto mr-40 transition-transform transform hover:scale-110'/>
                </div>
                
                <p className='p-4 text-lg '>
                Cancer is a complex disease characterized by abnormal cell growth caused by genetic changes. These changes disrupt the normal functioning of cells, leading to uncontrolled proliferation and potentially life-threatening consequences. Understanding the role of genetic alterations in cancer development is crucial for devising effective treatment strategies.
</p>
<p className='p-4 text-lg'>
Additionally, cancer statistics play a vital role in assessing the impact of cancer on society and identifying areas for improvement in prevention, diagnosis, and treatment. Key statistics include the incidence and mortality rates of cancer, as well as survival rates following a cancer diagnosis. By analyzing trends over time, researchers can identify disparities in cancer outcomes among different population groups.
</p>
<p className='p-4 text-lg'>
Health disparities in cancer highlight inequalities in access to healthcare and screening, as well as differences in cancer outcomes based on factors such as race, ethnicity, socioeconomic status, and geographic location. Addressing these disparities is essential for ensuring equitable access to cancer care and improving outcomes for all individuals affected by the disease.
                </p>
                <p className='p-4 text-lg'>
                As we confront the myriad challenges posed by cancer, from the molecular to the societal level, collaboration and innovation remain our most potent weapons. By bringing together scientists, clinicians, policymakers, and community advocates, we can harness the power of collective action to drive progress in cancer prevention, diagnosis, and treatment. Together, we can strive towards a future where cancer is no longer a source of fear and suffering but a conquerable foe, overcome through the relentless pursuit of knowledge, compassion, and solidarity.
                </p>
            </div>
       </div>
       
    </div>
  )
}

export default Understanding
