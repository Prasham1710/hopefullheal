import React from 'react'
import Image from 'next/image'
import bg from '/public/bg.png'
import bg1 from '/public/bg1.png'
import "@/app/globals.css";



const Hero = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#00416a] to-[#e4e5e6]">
      <div>
        <div className="grid grid-cols-3 ">
          <Image
            src={bg}
            alt="hero"
            width={450}
            height={450}
            className="mr-auto animate-spin-y-linear pt-20 pl-20 pb-10"
          />
          <div className="mt-32 ml-32">
            <p className="font-bold text-8xl text-[#e0e2f1] ">
              Support. Educate. Advocate.
            </p>
            <h4 className="font-bold text-[#00416a] text-lg py-6">
              Cancer hi toh h darna kya!!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
