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
            <Image src={'/talking1.png'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <h2 className="text-2xl font-semibold mb-4">Talking to Family and Friends about Your Advanced Cancer</h2>
            <p className="mb-4">Facing a terminal cancer diagnosis or progression to end-stage cancer requires open and honest communication with both your healthcare team and your loved ones.</p>
            <h3 className="text-xl font-semibold mb-2">Talking to Loved Ones about Advanced Cancer</h3>
            <p className="mb-4">Informing your loved ones about your terminal cancer diagnosis may evoke a range of emotions, including confusion, shock, and sadness. Encourage open communication, and reassure them that their presence and support mean more than trying to provide solutions.</p>
            <h4 className="text-lg font-semibold mb-2">Talking with Your Spouse or Partner about Advanced Cancer</h4>
            <p className="mb-4">Discussing the uncertainties and fears surrounding end-stage cancer with your spouse or partner can help both of you cope with the situation. Honest and open dialogue allows for shared decision-making and fosters a sense of understanding and support.</p>
            <h2 className="text-2xl font-semibold mb-4">Talking with Your Children about Advanced Cancer</h2>
            <p className="mb-4">Children can sense when something is wrong, so it's important to be open with them about your terminal cancer diagnosis. Address their concerns with honesty and reassurance:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Be honest about your illness and reassure them that they didn't cause it.</li>
                <li>Express your love and encourage them to share their feelings.</li>
                <li>Use simple language appropriate for their age.</li>
                <li>Assure them that they will always be cared for and loved.</li>
            </ul>
            <p className="mb-4">Similarly, talking to teenagers about end-stage cancer involves acknowledging the truth while providing support:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Respect their need for space and encourage them to express their feelings.</li>
                <li>Remind them to maintain their normal activities, like school and hobbies.</li>
                <li>Seek support from friends, relatives, or healthcare providers if needed.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Talking with Your Adult Children about Advanced Cancer</h3>
            <p className="mb-4">With adult children, share decision-making and involve them in important matters:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Discuss treatment options, future plans, and activities together.</li>
                <li>Openly express your feelings and wishes to foster understanding.</li>
                <li>Encourage communication to ease fears and conflicts.</li>
            </ul>
            <p className="mb-4">For additional guidance on talking to children about cancer, consult resources such as the NCI booklets and consider involving counselors or social workers for support.</p>
            
        </div>

   </div>
   
</div>
  )
}

export default Diag