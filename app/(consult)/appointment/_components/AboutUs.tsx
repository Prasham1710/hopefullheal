import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold text-4xl sm:text-5xl text-blue-900 mb-8">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/doctor.jpg"
              width={600}
              height={400}
              alt="Doctor Consultation"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-blue-800 leading-relaxed mb-6">
              Welcome to CancerCare Consult, your trusted partner in cancer care
              and support. Our platform is dedicated to providing accessible,
              expert consultation and guidance for individuals and families
              affected by cancer. With a team of experienced oncologists and
              healthcare professionals, we are committed to delivering
              personalized care and support to help you navigate your cancer
              journey with confidence and resilience.
            </p>

            {/* Mission Section */}
            <h2 className="font-bold text-2xl text-blue-900 mb-4">
              Our Mission
            </h2>
            <ul className="list-disc pl-8 text-blue-800 mb-6">
              <li className="mb-2">Provide Expert Consultation</li>
              <li className="mb-2">Offer Compassionate Support</li>
              <li className="mb-2">Empower Informed Decision-Making</li>
              <li className="mb-2">Promote Holistic Well-Being</li>
            </ul>

            {/* Commitment Section */}
            <h2 className="font-bold text-2xl text-blue-900 mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-blue-800 leading-relaxed mb-6">
              We are committed to providing compassionate, comprehensive, and
              cutting-edge care to individuals affected by cancer. We are
              dedicated to supporting you every step of the way on your cancer
              journey, from diagnosis to survivorship.
            </p>

            <p className="font-bold text-xl text-blue-900">
              Together, we can navigate through cancer with hope, resilience,
              and unwavering support. Welcome to CancerCare Consult, where your
              well-being is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
