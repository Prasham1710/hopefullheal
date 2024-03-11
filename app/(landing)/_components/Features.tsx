import React from 'react'
import Image from 'next/image'
import earth from '/public/earth.png'
import medicines from '/public/medicines.jpg'
import doctor from '/public/doctor.jpg'
import donate from '/public/donate.png'
import research from '/public/types.png'
import hospitals from '/public/hospitals.png'
import chat from '/public/chat.png'

const Features = () => {
  return (
    <div className='bg-[#e4e5e6] '>
      <div> 
  <p className='font-bold text-6xl text-center text-[#243a50] pt-6' >Services</p>

  <div className="col-span-4">
    <div className="relative">
        <div className=" hidden h-[40rem] w-60 rounded-full  lg:block   "></div>
        <div className=" mb-8 flex flex-col gap-y-4 lg:absolute lg:left-[16%] lg:top-1/2  lg:w-20 lg:-translate-y-1/2 lg:gap-y-10 ">
            <div className="relative  ">
                    <div className="rounded-xl bg-[#243a50]  p-8 lg:px-2 lg:py-4 w-[20rem] h-32 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:cursor-pointer">
                        <a href="">
                        <div className="mb-8 flex flex-col gap-8 lg:max-w-[32.5rem]">
                            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8 text-white">
                            <Image src={medicines} alt='medicines' height={100} width={100} className='ml-8 rounded-lg bg-white '/>
                                <span className=" text-xl font-bold">One-stop medication
</span>
                                </div>
                            </div>
                        </a>
                </div></div>
            <div className="group relative h-full lg:relative lg:right-16">
                    <div className="rounded-xl bg-[#243a50]  p-8 lg:px-2 lg:py-4 w-[20rem] h-32 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:cursor-pointer">
                        <a href="">
                        <div className="mb-8 flex flex-col gap-8 lg:max-w-[32.5rem]">
                            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-16 text-white">
                            <Image src={doctor} alt='doctor' height={90} width={90} className='ml-9 rounded-lg bg-white '/>
                            <span className=" text-xl font-bold">Accessible care
</span>
                                </div>
                            </div>
                        </a>
                </div>
               </div>
               <div className="relative  ">
                    <div className="rounded-xl bg-[#243a50]  p-8 lg:px-2 lg:py-4 w-[20rem] h-32 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:cursor-pointer">
                        <a href="">
                        <div className="mb-8 flex flex-col gap-8 lg:max-w-[32.5rem]">
                            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-16 text-white">
                                <Image src={hospitals} alt='hospitals' height={90} width={90} className='ml-9 rounded-lg bg-white '/>
                                <span className=" text-xl font-bold">Locating nearby hospitals</span>
                                </div>
                            </div>
                        </a>
                </div>
               </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:absolute lg:right-[15%] lg:top-1/2 lg:w-[30rem] lg:-translate-y-1/2 lg:gap-y-10">
        <div className="relative lg:left-32 ">
                    <div className="rounded-xl bg-[#243a50]  p-8 lg:px-2 lg:py-4 w-[20rem] h-32 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:cursor-pointer">
                        <a href="">
                        <div className="mb-8 flex flex-col gap-8 lg:max-w-[32.5rem]">
                            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8 text-white">
                                <Image src={research} alt='types' height={90} width={90} className='ml-12 rounded-lg bg-white '/>
                                    <span className="text-white text-lg font-bold">Empowering information
</span>
                                </div>
                            </div>
                        </a></div>
            </div>
            <div className="relative  lg:relative lg:left-52">
                    <div className="rounded-xl bg-[#243a50]  p-8 lg:px-2 lg:py-4 w-[20rem] h-32 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:cursor-pointer">
                        <a href="">
                        <div className="mb-8 flex flex-col gap-8 lg:max-w-[32.5rem]">
                            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-16 text-white">
                                <Image src={donate} alt='types'height={90} width={90} className='ml-12 rounded-lg bg-white '/>
                                <span className="text-lg font-bold ml-4 ">Donate</span>
                                </div>
                            </div>
                        </a>
                </div>
            </div>
            <div className="relative lg:left-32 ">
                    <div className="rounded-xl bg-[#243a50]  p-8 lg:px-2 lg:py-4 w-[20rem] h-32 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 hover:cursor-pointer">
                        <div className="mb-8 flex flex-col gap-8 lg:max-w-[32.5rem]">
                            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8 text-white">
                                <Image src={chat} alt='chat' height={90} width={90} className='ml-12 rounded-lg'/>
                                <span className=" text-xl font-bold">AI-powered chat (24*7)
</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-4 border-dashed border-[#243a50] w-[33rem] h-[33rem] absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  hidden lg:block rounded-full  '>
        <Image src={earth} alt='hero' width={800} height={800} className='absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  hidden lg:block ' />
        </div>
        
    </div>
</div>


   </div>
    </div>
  )
}

export default Features
