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
                    <h2 className="text-lg font-bold text-blue-100 mt-14 transition-transform transform hover:scale-110 hover:shadow-xl "><Link href='/components/AboutCancer/Causes'>Causes and Prevention</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Causes/Risk'>Risk Factors</Link> </span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Causes/Genetics'>Genetics</Link></span>
                                
                            </li>
                            <li className=" flex items-center p-2 space-x-3 rounded-md">
                                
                                <span className='font-bold text-blue-100 hover:underline transition-transform transform hover:scale-110 hover:shadow-lg'><Link href='/components/AboutCancer/Causes/Cancer'>Cancer Prevention Overview</Link></span>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 ">
            <Image src={'/genetics.jpg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">The Genetics of Cancer</h3>
                <p>
                    Yes, cancer is a genetic disease. It is caused by changes in genes that control the way cells grow and multiply. Cells are the building blocks of your body. Each cell has a copy of your genes, which act like an instruction manual.
                </p>
            </div>
            <p>
                Genes are sections of DNA that carry instructions to make a protein or several proteins. Scientists have found hundreds of DNA and genetic changes (also called variants, mutations, or alterations) that help cancer form, grow, and spread.
            </p>
            <p>
                Cancer-related genetic changes can occur because:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>random mistakes in our DNA happen as our cells multiply</li>
                <li>our DNA is altered by carcinogens in our environment, such as chemicals in tobacco smoke, UV rays from the sun, and the human papillomavirus (HPV)</li>
                <li>they were inherited from one of our parents</li>
            </ul>
            <p>
                DNA changes, whether caused by a random mistake or by a carcinogen, can happen throughout our lives and even in the womb. While most genetic changes aren’t harmful on their own, an accumulation of genetic changes over many years can turn healthy cells into cancerous cells. The vast majority of cancers occur by chance as a result of this process over time.
            </p>
            <h3 className="text-lg font-semibold mb-2">Is cancer hereditary?</h3>
            <p>
                Cancer itself can’t be passed down from parents to children. And genetic changes in tumor cells can’t be passed down. But a genetic change that increases the risk of cancer can be passed down (inherited) if it is present in a parent's egg or sperm cells.
            </p>
        </div>
   </div>
   
</div>
  )
}

export default Diag