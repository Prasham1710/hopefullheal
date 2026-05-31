import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import Logo from "@/components/logo";
import UserMenuButton from "./UserMenuButton";
import { authOptions } from "@/lib/utils/authOptions";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#00416a] to-[#003255] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Logo href="/" />

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-white/80">
          <Link className="hover:text-white transition-colors font-medium text-sm" href="/appointment">
            Home
          </Link>
          <Link className="hover:text-white transition-colors font-medium text-sm" href="/appointment/doctors">
            Doctors
          </Link>
          <Link className="hover:text-white transition-colors font-medium text-sm" href="/appointment/appointments">
            Appointments
          </Link>
          <Link className="hover:text-white transition-colors font-medium text-sm" href="/appointment/profile">
            Profile
          </Link>
          <Link className="hover:text-white transition-colors font-medium text-sm" href="/doctor">
            Medicine
          </Link>
        </div>

        {/* User menu */}
        <UserMenuButton session={session} />
      </div>
    </header>
  );
}
