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
    <header className="w-full flex justify-between gap-8 items-center sticky top-0 left-0 bg-light-blue z-2 shadow-md transition-all duration-200 bg-[#00416a]">
      <nav
        className={
          "nav-active w-full flex justify-between px-8 py-4 items-center"
        }
      >
        <h2 className="font-bold text-[#b1c0ca] text-lg  py-3 pl-10 pr-[398px]">
          <Link className="font-bold text-[24px]" href={"/"}>
            Hopeful Heals
          </Link>
        </h2>
        <ul className="nav-links flex gap-8">
          <li>
            <Link
              className=" hover:underline outline-none  text-white"
              href={"/appointment"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className=" hover:underline outline-none  text-white"
              href={"appointment/doctors"}
            >
              Doctors
            </Link>
          </li>

          <li>
            <Link
              className=" hover:underline outline-none  text-white"
              href={"appointment/appointments"}
            >
              Appointments
            </Link>
          </li>

          <li>
            <Link
              className=" hover:underline outline-none  text-white"
              href={"appointment/applyfordoctor"}
            >
              Apply for doctor
            </Link>
          </li>

          <li>
            <Link
              className=" hover:underline outline-none  text-white"
              href={"appointment/profile"}
            >
              Profile
            </Link>
          </li>
          <Link
            className="hover:underline outline-none  text-white"
            href="/doctor"
          >
            Medecine
          </Link>
        </ul>
      </nav>
      <UserMenuButton session={session} />
    </header>
  );
}
