"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className=" ">
      <label tabIndex={0} className="">
        {user ? (
          <Image
            src={user?.image || "/user.svg"}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <></>
        )}
      </label>
      <ul tabIndex={0} className="">
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          ) : (
            <button
              className="bg-[#e7e7e7] hover:bg-blue-600 text-white inline-block  font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
