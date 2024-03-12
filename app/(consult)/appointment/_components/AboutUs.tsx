import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100' style={{ backgroundImage: "url('/bg6.png')" }}>
        <h2 className="text-center font-bold text-5xl py-4">About Us</h2>
        <div className="about items-center">
          <div className="hero-img ml-[250px] ">
            <Image src='/doctor.jpg' width={600} height={400} alt="hero" className="w-[1000px] h-96"/>
          </div>
          <div className="hero-content py-8 mx-40">
            <p className="py-4">
            Welcome to CancerCare Consult, your trusted partner in cancer care and support. Our platform is dedicated to providing accessible, expert consultation and guidance for individuals and families affected by cancer. With a team of experienced oncologists and healthcare professionals, we are committed to delivering personalized care and support to help you navigate your cancer journey with confidence and resilience.
            </p>
            <h2 className="font-bold text-2xl pb-1">Our Mission</h2>
            <li>Provide Expert Consultation</li>
            <li>Offer Compassionate Support</li>
            <li>Empower Informed Decision-Making</li>
            <li>Promote Holistic Well-Being</li>
            <h2 className="font-bold text-2xl pt-4">Our Commitment:</h2>
            <p className="">
              We are committed to providing compassionate, comprehensive, and cutting-edge care to individuals affected by cancer. We are dedicated to supporting you every step of the way on your cancer journey, from diagnosis to survivorship.</p>
              <p className="font-bold text-xl px-4 py-8">Together, we can navigate through cancer with hope, resilience, and unwavering support. Welcome to CancerCare Consult, where your well-being is our priority.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
