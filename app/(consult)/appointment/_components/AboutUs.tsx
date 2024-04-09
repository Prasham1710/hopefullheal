import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 via-white via-blue-50 to-blue-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold text-4xl sm:text-5xl text-blue-900 mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="max-w-lg mr-8 mb-8 md:mb-0">
            <Image
              src="/doctor.jpg"
              width={600}
              height={400}
              alt="hero"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-lg text-blue-800 py-4">
              Welcome to CancerCare Consult, your trusted partner in cancer care
              and support. Our platform is dedicated to providing accessible,
              expert consultation and guidance for individuals and families
              affected by cancer. With a team of experienced oncologists and
              healthcare professionals, we are committed to delivering
              personalized care and support to help you navigate your cancer
              journey with confidence and resilience.
            </p>
            <h2 className="font-bold text-2xl text-blue-900 pb-2">
              Our Mission
            </h2>
            <ul className="list-disc pl-8 text-blue-800">
              <li>Provide Expert Consultation</li>
              <li>Offer Compassionate Support</li>
              <li>Empower Informed Decision-Making</li>
              <li>Promote Holistic Well-Being</li>
            </ul>
            <h2 className="font-bold text-2xl text-blue-900 pt-4">
              Our Commitment
            </h2>
            <p className="text-blue-800 pb-8">
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
