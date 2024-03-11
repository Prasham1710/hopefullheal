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
            <Image src={'/purpose.jpeg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Finding Purpose and Meaning with Advanced Cancer</h3>
                <p>
                    Having an advanced or terminal cancer diagnosis often leads individuals to reflect on the purpose and meaning in their lives. This reflection may involve spirituality and seeking peace. It could entail examining what matters most, finding connection with a higher power, or reflecting on one's life and legacy.
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Your Spiritual Needs with Advanced Cancer</h3>
                <p>
                    Many individuals with advanced cancer seek peace and comfort by delving deeper into the meaning of their lives. This may involve:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Understanding their purpose and legacy</li>
                    <li>Exploring life through spirituality</li>
                    <li>Reflecting on life experiences</li>
                    <li>Seeking peace or connection with others</li>
                    <li>Seeking forgiveness for oneself or others</li>
                    <li>Finding answers and strength through religion or other belief systems</li>
                </ul>
                <p>
                    Spirituality is a deeply personal matter, with individuals finding meaning in various ways, such as through religion, volunteering, nature, or meditation. A cancer diagnosis may prompt individuals to reconsider their beliefs, leading to a range of emotions from peace and acceptance to anger and doubt.
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Celebrating Your Life</h3>
                <p>
                    Having advanced cancer provides an opportunity for patients and their families to reflect on life and its significance. Some ways to celebrate life and create a legacy include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Reflecting on different life roles</li>
                    <li>Sharing memories and meaningful projects with loved ones</li>
                    <li>Creating a legacy through videos, recordings, journals, art, or meaningful objects</li>
                    <li>Making an ethical will to share values, memories, and hopes with loved ones</li>
                </ul>
                <p>
                    These activities allow individuals to find joy and meaning amidst their journey with cancer.
                </p>
            </div>
        </div>
           
   </div>
   
</div>
  )
}

export default Diag