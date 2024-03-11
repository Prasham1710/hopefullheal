import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
      <h1 className='font-bold text-4xl py-4 text-center'>
        Lung Cancer
      </h1>
      <Image src={'/lung.jpeg'}  width={600} height={600} alt='cancer' className='rounded-xl  ml-80 transition-transform transform hover:scale-110 w-[1000px] h-80 py-6 justify-center'/>
      <div className='flex gap-x-10'>
        <div className='w-96 h-96 bg-gray-200 rounded-lg ml-80 mt-20'>
          <h1 className='font-bold text-2xl text-center pt-4'>Overview</h1>
          <p className='py-4 px-6'>Lung cancer is a serious disease that affects the lungs. It consists of two main types: non-small cell lung cancer and small cell lung cancer.
        While smoking is the leading cause of lung cancer, it's important to note that nonsmokers can also develop this condition.This page provides various resources and information about lung cancer to help individuals understand and manage the disease better.
        .</p>
        </div>
        <div className='w-96 h-96 bg-gray-200 rounded-lg ml-36 mt-20'>
          <h1 className='font-bold text-2xl text-center pt-4'>Treatment</h1>
          <div className='py-4 px-6'>
            <li>Surgery</li>
            <li>Radiation Therapy</li>
            <li>Chemotherapy</li>
            <li>Targeted Therapy</li>
            <li>Immunotherapy</li>
            <li>Clinical Trials</li>
            <li>Palliative Care</li>
          </div>
        </div>
      </div>
      <div className='flex gap-x-10'>
      <div className='w-96 h-96 bg-gray-200 rounded-lg ml-36 mt-20'>
          <h1 className='font-bold text-2xl text-center pt-4'>Causes & Prevention </h1>
          <div className='py-4 px-6'>
            <li>Healthy Lifestyle</li>
            <li>Screening</li>
            <li>Genetics</li>
            <li>Occupational Hazards</li>
            <li>Smoking</li>
            <li>Secondhand Smoke</li>
            <li>Air Pollution</li>
          </div>
        </div>
        <div className='w-96 h-96 bg-gray-200 rounded-lg ml-36 my-20'>
          <h1 className='font-bold text-2xl text-center pt-4'>SCREENING</h1>
          <p className='py-4 px-6'><li>Purpose: Detect lung cancer early for better treatment outcomes.</li>
          <li>Method: Low-Dose Computed Tomography (LDCT) scans.</li>
          <li>Frequency: Annual screening recommended.</li>
          <li>Benefits:Early detection improves treatment success</li>
          <li>Risks: False positives may lead to unnecessary tests.</li>
          <li>Follow-Up: Adhere to recommended screening schedules.</li>
        .</p>
        </div>
      </div>
    </div>
  )
}

export default page
