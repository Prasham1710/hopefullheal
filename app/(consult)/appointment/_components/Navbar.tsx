import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import UserMenuButton from "./UserMenuButton";
import { authOptions } from "@/lib/utils/authOptions";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full flex justify-between items-center sticky p-2 top-0 left-0 bg-[#00416a] z-10 shadow-md transition-all duration-200">
      <nav className="w-full flex justify-between px-6 py-3 items-center">
        {/* Logo */}
        <h2 className="font-bold text-xl text-white">
          <Link href={"/"}>Hopeful Heals</Link>
        </h2>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-white font-medium">
          <li>
            <Link
              className="hover:underline hover:text-gray-300"
              href={"/appointment"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-gray-300"
              href={"/appointment/doctors"}
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-gray-300"
              href={"/appointment/appointments"}
            >
              Appointments
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-gray-300"
              href={"/appointment/applyfordoctor"}
            >
              Apply for Doctor
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-gray-300"
              href={"/appointment/profile"}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-gray-300"
              href="/doctor"
            >
              Medicine
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Menu Button */}
      <UserMenuButton session={session} />
    </header>
  );
}
