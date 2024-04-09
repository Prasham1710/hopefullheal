import React, { useState } from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";

interface User {
  isAdmin: boolean;
  // Add other user properties if available in the decoded token
}
import UserMenuButton from "./UserMenuButton";
import { authOptions } from "@/lib/utils/authOptions";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full flex justify-between items-center sticky top-0 left-0 bg-light-blue z-10 shadow-md transition-all duration-200 bg-[#00416a]">
      <nav className="w-full flex justify-between px-8 py-2 items-center">
        <h2 className="font-bold text-lg py-3">
          <Link className="font-bold text-2xl" href={"/"}>
            Hopeful Heals
          </Link>
        </h2>
        <ul className="flex gap-6 text-white">
          <li>
            <Link className="hover:underline" href={"/appointment"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/appointment/doctors"}>
              Doctors
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              href={"/appointment/appointments"}
            >
              Appointments
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              href={"/appointment/applyfordoctor"}
            >
              Apply for doctor
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={"/appointment/profile"}>
              Profile
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/doctor">
              Medicine
            </Link>
          </li>
        </ul>
      </nav>
      <UserMenuButton session={session} />
    </header>
  );
}
