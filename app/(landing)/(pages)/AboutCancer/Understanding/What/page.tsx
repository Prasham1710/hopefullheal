import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const What = () => {
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
    <div className='m-6'>
    <div className='flex'>
                <h1 className='text-6xl font-bold py-20 pl-20 text-blue-800 transition-transform transform hover:scale-110'>What is Cancer?</h1>
                <Image src={'/cancer1.jpeg'} alt='cancer' width={300} height={300} className='rounded-xl ml-auto mr-40 transition-transform transform hover:scale-110'/>
                </div>
        <p className='p-4 text-lg'>
        
        Cancer develops as a result of specific alterations to genes, which are the fundamental units of inheritance and are organized into long strands of DNA called chromosomes.

This disease is primarily genetic in nature, stemming from changes to genes that regulate the functioning of cells, particularly their growth and division processes.

Genetic mutations leading to cancer can arise from various factors:

</p>
<p className='p-4 text-lg'>
Tumors can be either benign or malignant. Benign tumors remain localized and do not invade nearby tissues or spread to other parts of the body. They are generally non-life-threatening and do not recur after removal. Conversely, malignant tumors, or cancers, have the ability to infiltrate surrounding tissues and metastasize to distant organs via the bloodstream or lymphatic system. This metastatic spread is a key feature of cancer and significantly impacts prognosis and treatment.
</p>
<p className='p-4 text-lg'>
While many cancers present as solid tumors, such as those found in organs like the lungs, breast, or colon, others, like leukemia, originate in the blood or bone marrow and do not form solid masses. Despite these variations, all cancers share the fundamental characteristic of abnormal cell proliferation.h and proliferation.

        </p>
        <p className='p-4 text-lg'>
        Overall, understanding the differences between benign and malignant tumors is essential for accurate diagnosis, treatment planning, and patient management in cancer care.
        </p>
    </div>
    <div className="my-10 mx-20 ">
  <h2 className="text-4xl font-bold mb-4">How Does Cancer Develop?</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
   
    <div>
      <p className="text-lg mb-4">Cancer is caused by certain changes to genes, the basic physical units of inheritance. Genes are arranged in long strands of tightly packed DNA called chromosomes.</p>
      <p className="text-lg mb-4">Cancer is a genetic disease—that is, it is caused by changes to genes that control the way our cells function, especially how they grow and divide.</p>
      <p className="text-lg mb-4">Genetic changes that cause cancer can happen because:</p>
      <ul className="list-disc pl-6">
        <li className="mb-2">Errors that occur as cells divide.</li>
        <li className="mb-2">Damage to DNA caused by harmful substances in the environment, such as the chemicals in tobacco smoke and ultraviolet rays from the sun.</li>
        <li className="mb-2">Inherited mutations from parents.</li>
      </ul>
      <p className="text-lg mb-4">The body normally eliminates cells with damaged DNA before they turn cancerous. But the body’s ability to do so goes down as we age. This is part of the reason why there is a higher risk of cancer later in life.</p>
      <p className="text-lg">Each person’s cancer has a unique combination of genetic changes. As the cancer continues to grow, additional changes will occur. Even within the same tumor, different cells may have different genetic changes.</p>
    </div>
    <div className="flex ">
    <Image src={'/what1.png'} alt='cancer' width={500} height={500} className='rounded-xl  transition-transform transform hover:scale-110 '/>
    </div>
  </div>
</div></div>

</div>

</div>

  )
}

export default What
