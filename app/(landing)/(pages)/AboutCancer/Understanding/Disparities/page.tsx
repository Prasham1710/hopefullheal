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
            
    <h2 className="text-xl font-semibold mb-4">Cancer Disparities</h2>
    <div className='flex'>
    
    <div className=''>
    <p>Despite overall declines in cancer incidence and mortality rates in the India, certain segments of the population face disproportionate risks of developing or succumbing to specific cancers due to social, environmental, and economic disparities.</p>
    <p className="mt-4">These disparities, known as cancer health disparities, encompass variations in cancer metrics, including:</p>
    <ul className="list-disc pl-8 mb-4">
        <li>Incidence (new cases)</li>
        <li>Prevalence (existing cases)</li>
        <li>Mortality (deaths)</li>
        <li>Survival rates</li>
        <li>Morbidity (health complications)</li>
        <li>Survivorship (quality of life after treatment)</li>
        <li>Financial burden</li>
        <li>Screening rates</li>
        <li>Stage at diagnosis</li>
    </ul>
    <p className="mt-4">These disparities persist despite overall advancements in cancer care, impacting groups defined by race/ethnicity, disability, gender identity, geographic location, income, education, age, sexual orientation, national origin, and other factors.</p>
    <h3 className="mt-4">Examples of Cancer Disparities</h3>
    <p>The National Cancer Institute's statistics reveal disparities in cancer incidence and mortality rates across various demographic groups in the United States.</p></div>
    <div className=''> <Image src={'/disparity.jpeg'} alt='cancer' width={600} height={600} className='rounded-xl transition-transform transform hover:scale-110 my-20 '/></div>
    </div>
    <div className="p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Contributing Factors</h2>
    
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Social Determinants of Health</h3>
        <p className="mb-4">Social determinants of health, as defined by the Department of Health and Human Services, encompass environmental conditions where individuals live, work, and age, significantly influencing health outcomes. Cancer disparities arise from a complex interplay of social, behavioral, biological, and genetic factors, impacting cancer risk and outcomes.</p>
    </div>
    
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Barriers to Accessing Healthcare</h3>
        <p className="mb-4">Certain demographic groups in the United States face barriers to accessing healthcare, contributing to cancer disparities. Individuals with low incomes, limited health literacy, or residing far from screening facilities, along with those lacking health insurance or transportation, are less likely to undergo recommended cancer screenings or receive guideline-based treatments.</p>
    </div>
    
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Environmental Factors</h3>
        <p className="mb-4">Environmental factors also play a role, with communities exposed to poor air or water quality facing increased cancer risks. Additionally, neighborhoods lacking access to healthy food options or safe spaces for physical activity increase the risk of obesity and poor dietary habits, further contributing to cancer disparities.</p>
    </div>
    
    <div>
        <h3 className="text-lg font-semibold mb-2">Health Equity</h3>
        <p className="mb-4">Health equity, as defined by the Centers for Disease Control and Prevention, ensures every individual has the opportunity to achieve their full health potential without facing disadvantages based on social position or other circumstances.</p>
    </div>
</div>

</div>

      
    </div>
    
    </div>
    
    </div>
    
  )
}

export default page