import React from 'react';
import Image from 'next/image';

const CopingWithCancer = () => {
    return (
        <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
        <div className="max-w-2xl mx-auto p-6  ">
        <Image src={'/coping.png'}  width={500} height={500} alt='cancer' className='rounded-xl  mr-40 transition-transform transform hover:scale-110 w-[800px] h-60 my-6'/>
            <h3 className="text-xl font-semibold mb-4">Coping With Cancer</h3>
            <p>
                Whether you've just been diagnosed with cancer, are undergoing treatment, or have a loved one affected by the disease, coping with cancer is a significant challenge. The symptoms, side effects, and emotional toll can impact your life in various ways. This section provides information and resources to help you navigate the complexities of living with cancer.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Emotions and Cancer</h4>
            <p>
                Cancer can evoke a range of emotions, including fear, anxiety, sadness, and uncertainty. It's essential to acknowledge and address these feelings, whether you're a patient or a caregiver. Learn coping strategies to manage the emotional impact of cancer.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Adjusting to Cancer</h4>
            <p>
                Adjusting to life with cancer involves navigating various changes and challenges, both for patients and their families. This includes communicating with healthcare providers, discussing the diagnosis with children, and adapting to shifts in family dynamics. Explore resources to support you during this adjustment period.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">How Cancer Affects Your Self-Image and Sexuality</h4>
            <p>
                Cancer and its treatment can alter your physical appearance, self-image, and sexual health. Understand the impact of these changes and learn coping mechanisms to address body image issues and maintain intimacy and sexuality during cancer treatment.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Daily Life During Cancer</h4>
            <p>
                While coping with cancer can be challenging, there are strategies to help you maintain a sense of normalcy and routine in your daily life. Discover tips for managing your day-to-day activities, returning to work, and finding comfort and meaning amidst the challenges of cancer.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Support for Caregivers of Cancer Patients</h4>
            <p>
                Caregivers play a vital role in supporting cancer patients, but caregiving can also take a toll on their well-being. Explore resources and self-care strategies for caregivers to maintain their own health and resilience while providing care to loved ones.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Cancer Survivorship</h4>
            <p>
                Becoming a cancer survivor marks a significant transition, but it also comes with its own set of challenges. Learn about survivorship care plans, managing physical and emotional issues post-treatment, and coping with the long-term effects of cancer.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Questions to Ask Your Doctor about Cancer</h4>
            <p>
                It's essential to have open and informed discussions with your healthcare team about your cancer diagnosis and treatment plan. Access a comprehensive list of questions to guide your conversations with your doctor and gain a better understanding of your condition.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Research on Coping with Cancer</h4>
            <p>
                Stay informed about the latest research and developments in coping with cancer. Explore research articles, clinical trials, and resources that provide valuable insights into managing the physical, emotional, and practical aspects of cancer care.
            </p>
        </div>
        </div>
    );
}

export default CopingWithCancer;
