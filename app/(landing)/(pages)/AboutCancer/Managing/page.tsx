import React from 'react';
import Image from 'next/image';

const ManagingCancerCare = () => {
    return (
        <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
        <div className="max-w-2xl mx-auto p-6 ">
        <Image src={'/managibg.jpeg'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <h3 className="text-xl font-semibold mb-4">Managing Cancer Care</h3>
            <p>
                No matter what decisions you make about your cancer care, know that support is always available to help you manage your care. This section includes information about health care services, insurance options, advance directives, and using trusted resources when seeking print and online sources of health information.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Health Care Services</h4>
            <p>
                Accessing appropriate health care services is crucial when managing cancer care. Ensure you have a team of healthcare professionals who specialize in cancer treatment and can provide comprehensive care tailored to your needs.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Insurance Options</h4>
            <p>
                Understanding your insurance coverage is essential to avoid financial burdens associated with cancer treatment. Explore your insurance options and consider consulting with a financial advisor to navigate potential costs.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Advance Directives</h4>
            <p>
                Advance directives allow you to document your preferences regarding medical treatment and end-of-life care. It's important to discuss and complete advance directives with your healthcare provider and loved ones to ensure your wishes are respected.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Trusted Resources</h4>
            <p>
                When seeking information about cancer care, rely on trusted resources such as reputable medical websites, support groups, and healthcare professionals. Be cautious of misinformation and verify the credibility of sources before making decisions.
            </p>
        </div>
        </div>
    );
}

export default ManagingCancerCare;
