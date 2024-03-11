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
                    <h2 className="text-lg font-bold text-blue-100 mt-14 transition-transform transform hover:scale-110 hover:shadow-xl "><Link href=' /components/AboutCancer/Advanced'>Advanced Cancer</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Choices'>Choices for Care</Link> </span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Talking'>Talking to Family & Friends</Link></span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Coping'>Coping with Your Feelings During Advanced Cancer</Link></span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Future'>Making Future Plans with Advanced Cancer</Link></span>
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Purpose'>Finding Purpose and Meaning with Advanced Cancer</Link></span>
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Advanced/Questions'>Questions to Ask Your Doctor about Advanced Cancer</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 ">
            <Image src={'/advanced.png'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <h2 className="text-2xl font-semibold mb-4">Advanced Cancer: Understanding the Complexity</h2>
            <p className="mb-4">Advanced cancer is a term used by healthcare professionals to describe various stages of cancer progression, each with its own implications and challenges. While it typically denotes cancer that is unlikely to be cured, it's important to note that treatment can often control the disease for extended periods, and in some cases, even lead to remission or cure. However, for cancers that cannot be effectively controlled, they are often referred to as end-stage or terminal cancer.</p>
            <p className="mb-4">Furthermore, advanced cancer can encompass tumors that have spread extensively within the body or have infiltrated nearby tissues, adding to the complexity of the disease.</p>
            <h3 className="text-xl font-semibold mb-2">Navigating the Journey of End-Stage Cancer</h3>
            <p className="mb-4">For individuals facing end-stage cancer, understanding and managing the physical, emotional, and practical aspects of their condition becomes paramount. Here are some key considerations:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Medical Care and Treatment: Seek comprehensive medical care tailored to managing symptoms and enhancing quality of life. Treatment approaches may include pain management, palliative care, and emotional support.</li>
                <li>Emotional Support: Dealing with end-stage cancer can evoke a range of emotions. Seek support from loved ones, support groups, or mental health professionals to navigate these feelings.</li>
                <li>Financial Planning: End-stage cancer often comes with significant financial burdens. Explore resources for financial assistance, insurance coverage, or assistance programs to alleviate some of the financial stress.</li>
                <li>Quality of Life: Focus on activities and strategies that enhance your overall well-being and quality of life. This may include engaging in enjoyable activities, maintaining social connections, and practicing self-care.</li>
            </ul>
            <p className="mb-4">Empowering Yourself</p>
            <p className="mb-4">While facing end-stage cancer can be daunting, empowering yourself with knowledge and support can help ease some of the concerns and challenges associated with the diagnosis. Remember, you are not alone in this journey, and there are resources and professionals available to support you every step of the way.</p>
    <p className="mb-4">Feel free to explore the sections below for further guidance on coping with end-stage cancer and maximizing your quality of life amidst this challenging journey.</p>
        </div>
       </div>
       
    </div>
  )
}

export default Diag