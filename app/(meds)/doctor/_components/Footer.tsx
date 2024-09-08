import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#183b56] to-[#0e1f2f] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-0">
        {/* Logo and Brand Name */}
        <div className="flex items-center mb-6 md:mb-0">
          <p className="font-bold text-4xl">Hopeful Heals</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-12 mb-6 md:mb-0">
          {/* Explore Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/research" className="hover:underline">
                  Research
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/consult" className="hover:underline">
                  Consult Doctor
                </a>
              </li>
              <li>
                <a href="/medicines" className="hover:underline">
                  Medicines
                </a>
              </li>
              <li>
                <a href="/chat" className="hover:underline">
                  Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 text-black rounded-lg border-none"
            />
            <button className="bg-[#00416a] hover:bg-[#002a3b] text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-6 flex justify-center gap-4">
        <a
          href="https://facebook.com"
          className="text-white hover:text-gray-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://twitter.com"
          className="text-white hover:text-gray-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          className="text-white hover:text-gray-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          className="text-white hover:text-gray-300"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
