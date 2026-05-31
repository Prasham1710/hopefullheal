import React from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#183b56] to-[#0e1f2f] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 border-b border-white/5">
        {/* Brand */}
        <div>
          <div className="mb-4"><Logo href="/" /></div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            India's trusted cancer care platform — connecting patients with expert oncologists,
            authentic medications, and a supportive community.
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://facebook.com", Icon: FaFacebookF, label: "Facebook" },
              { href: "https://twitter.com", Icon: FaTwitter, label: "Twitter" },
              { href: "https://instagram.com", Icon: FaInstagram, label: "Instagram" },
              { href: "https://linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/5 hover:bg-[#00416a]/50 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/CancerTypes", label: "Cancer Types" },
                { href: "/AboutCancer/Understanding", label: "About Cancer" },
                { href: "/appointment", label: "Consult Doctor" },
                { href: "#about", label: "About Us" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/doctor", label: "Medicines" },
                { href: "/appointment/doctors", label: "Find Doctors" },
                { href: "/appointment/appointments", label: "My Appointments" },
                { href: "/CancerTypes/Lung", label: "Lung Cancer" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest cancer research updates and platform news.
          </p>
          <form className="flex flex-col gap-2">
            <label htmlFor="footer-email" className="sr-only">Email</label>
            <input
              id="footer-email"
              type="email"
              placeholder="your@email.com"
              className="bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#00416a] focus:ring-1 focus:ring-[#00416a] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#ff6f61] hover:bg-[#e85d50] text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Hopeful Heals. All rights reserved.</p>
        <p className="text-gray-600">
          Cancer hi toh h, darna kya!! 🎗️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
