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
            <Image src={'/questions1.jpeg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Questions to Ask Your Doctor about Advanced Cancer</h3>
                <p>
                    If you're facing advanced cancer, it's important to discuss your options and care plan with your doctor. Here are some questions to consider asking:
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Questions about Your Cancer</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>What does “advanced cancer” mean for me?</li>
                    <li>How long can I live with my advanced cancer?</li>
                    <li>Are there tests I should have now to better understand the extent of my cancer?</li>
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Questions about Treatment Choices</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>What’s the best we can hope for by trying another treatment? What’s the goal?</li>
                    <li>What are my treatment choices? Which do you recommend for me and why?</li>
                    <li>Is this treatment plan meant to help side effects, slow the growth of my cancer, or both?</li>
                    <li>Is there a chance that a new treatment will be found while we try the old one?</li>
                    <li>Would a clinical trial be right for me?</li>
                    <li>What kind of care will I receive to keep me comfortable if I decide not to have active treatment for my cancer?</li>
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Questions about Symptoms and Side Effects</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>What are the possible side effects and other downsides of this treatment? How likely are they?</li>
                    <li>How can I manage the symptoms of my advanced cancer or the side effects of its treatment?</li>
                    <li>Can you refer me to a palliative care specialist to help me cope with my side effects?</li>
                </ul>
            </div>
            <p>
                Talking about these questions may help you make informed decisions about your care plan. It's essential to communicate your preferences and involve your loved ones in the process.
            </p>
        </div>
   </div>
   
</div>
  )
}

export default Diag