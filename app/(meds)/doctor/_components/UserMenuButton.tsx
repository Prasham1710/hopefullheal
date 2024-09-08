"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className="relative">
      <Popover>
        {user ? (
          <PopoverTrigger>
            <Image
              src={user?.image || "/user.svg"}
              alt="Profile picture"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          </PopoverTrigger>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}

        {user && (
          <PopoverContent className="w-44 mt-2 rounded-lg shadow-lg bg-white border border-gray-200">
            <div className="p-.5">
              <p className="text-sm text-gray-700 font-semibold">
                {user.name}!
              </p>
              <hr className="my-2" />
              <button
                className="w-full bg-blue-500 hover:bg-red-600 text-white font-bold py-1 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign Out
              </button>
            </div>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}
