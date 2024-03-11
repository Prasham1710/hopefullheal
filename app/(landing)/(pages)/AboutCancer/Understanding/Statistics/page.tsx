import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
        

    <div className="flex">
        <div className="flex flex-col  p-3  shadow w-60 bg-blue-900 ">
            <div className="space-y-3  ">
                <div className="flex items-center">
                    <h2 className="text-lg font-bold text-blue-100 mt-14 transition-transform transform hover:scale-110 hover:shadow-xl "><Link href='/'>Understanding Cancer</Link> </h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                            
                                <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Understanding/What'>What is Cancer?</Link> </span>
                            
                        </li>
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Understanding/Statistics'>Cancer Statistics</Link></span>
                            
                        </li>
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Understanding/Disparities'>Cancer Disparities</Link></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    <div>
      <div className="p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Cancer Statistics</h2>
    <p className="text-gray-700 mb-4">Cancer has a major impact on society in the United States and across the world. Cancer statistics describe what happens in large groups of people and provide a picture in time of the burden of cancer on society.</p>
    <p className="text-gray-700 mb-4">Statistics tell us things such as how many people are diagnosed with and die from cancer each year, the number of people who are currently living after a cancer diagnosis, the average age at diagnosis, and the numbers of people who are still alive at a given time after diagnosis. They also tell us about differences among groups defined by age, sex, racial/ethnic group, geographic location, and other categories.</p>
    <p className="text-gray-700">Cancer statistics also help us see trends. By looking at cancer rates over time, we can track changes in the risk of developing and dying from specific cancers as well as cancer overall.</p>
    <p className="text-base text-gray-800">While statistical trends may not directly apply to individual patients, they are indispensable for governments, policymakers, healthcare professionals, and researchers to comprehend the broader impact of cancer on the population. These trends enable the development of strategies to tackle the challenges posed by cancer at a societal level. Additionally, statistical trends serve as crucial metrics for assessing the efficacy of initiatives aimed at controlling and managing cancer.</p>
</div>
<div className="p-6  rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Statistics at a Glance: in India</h2>
    <div className='flex'>
        
    <div>
    <p className="mb-4">Report of National Cancer Registry Programme 2020:</p>
    <ul className="list-disc pl-8 mb-4">
        <li>In 2020, there were an estimated 1.39 million new cancer cases in India.</li>
        <li>The approximate projected cases of cancer in India were 1.4 million in 2020.</li>
        <li>The leading anatomical sites of cancer include breast, lung, and leukemia.</li>
        <li>Tobacco use is associated with several cancer types.</li>
        <li>Childhood cancers are also a significant concern.</li>
    </ul>
    <p className="mb-4">Recent Data (2018-2020):</p>
    <ul className="list-disc pl-8 mb-4">
        <li>More than 40 lakh cancer cases were reported in India between 2018 and 2020.</li>
        <li>Approximately 22.54 lakh people died due to cancer during the same period.</li>
        <li>In 2020 alone, 13,92,179 new cancer cases were reported.</li>
    </ul>
    <p className="mb-4">Impact of Cancer:</p>
    <ul className="list-disc pl-8 mb-4">
        <li>Cancer is rapidly emerging as a matter of public health concern in India.</li>
        <li>Globally, cancer is among the leading causes of death, contributing to about 10 million deaths in 2020.</li>
    </ul>
    <p className="mb-4">ICMR-NCDIR-NCRP Data:</p>
    <ul className="list-disc pl-8 mb-4">
        <li>The ICMR-NCDIR-NCRP collects data through Population-Based Cancer Registries (PBCRs) and Hospital-Based Cancer Registries (HBCRs).</li>
        <li>The projected cases of cancer in India were approximately 1.4 million in 2020.</li>
    </ul>
    <p className="text-lg">These statistics highlight the significant burden of cancer in India and underscore the importance of prevention, early detection, and effective treatment. 🌟🎗️</p>
</div>
<div> <Image src={'/cancerstatistics.png'} alt='cancer' width={700} height={700} className='rounded-xl transition-transform transform hover:scale-110 ml-auto mr-40'/></div>
</div></div>
</div></div>
    </div>
  )
}

export default page
