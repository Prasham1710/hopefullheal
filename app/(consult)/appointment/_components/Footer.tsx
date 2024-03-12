import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#183b56] to-[#0e1f2f] text-white  ">
      <div className="container mx-auto py-10 flex justify-between items-center">
        <div className="flex items-center">
          <p className="font-bold text-4xl">Hopeful Heals</p>
        </div>

        <div className="flex gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul>
              <li>
                <button className="hover:underline focus:outline-none">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:underline focus:outline-none">
                  Our Services
                </button>
              </li>
              <li>
                <button className="hover:underline focus:outline-none">
                  Research
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <button className="hover:underline focus:outline-none">
                  Consult Doctor
                </button>
              </li>
              <li>
                <button className="hover:underline focus:outline-none">
                  Medicines
                </button>
              </li>
              <li>
                <button className="hover:underline focus:outline-none">
                  Chat
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
