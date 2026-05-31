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
          <div className="mb-3"><Logo href="/" /></div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Authentic cancer medications delivered safely and swiftly to your door.
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
                className="w-8 h-8 bg-white/5 hover:bg-[#00416a]/40 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#b1c0ca] transition-all"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { href: "/doctor", label: "All Medicines" },
              { href: "/doctor/cart", label: "My Cart" },
              { href: "/appointment", label: "Consult Doctor" },
              { href: "/", label: "Home" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Get new medicine listings and health updates.
          </p>
          <form className="flex flex-col gap-2">
            <label htmlFor="meds-footer-email" className="sr-only">
              Email
            </label>
            <input
              id="meds-footer-email"
              type="email"
              placeholder="your@email.com"
              className="bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#00416a] focus:ring-1 focus:ring-[#00416a] transition-colors"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00416a] to-[#003255] hover:from-[#003255] hover:to-[#001f33] text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Hopeful Heals. All rights reserved.</p>
        <p className="hidden sm:block text-gray-600">Safe, verified cancer medications</p>
      </div>
    </footer>
  );
};

export default Footer;
