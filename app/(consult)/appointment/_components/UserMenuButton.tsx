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
    <div className="p-1">
      <Popover>
        {user ? (
          <PopoverTrigger>
            <Image
              src={user?.image || "/user.svg"}
              alt="Profile picture"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </PopoverTrigger>
        ) : (
          <></>
        )}

        <ul>
          <li>
            {user ? (
              <PopoverContent className="w-90">
                <button
                  className="text-sm bg-white text-gray-800 px-3 py-1 rounded-lg border border-gray-300"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </button>
              </PopoverContent>
            ) : (
              <button
                className="text-sm bg-blue-600 text-white px-4 py-1 rounded-lg focus:outline-none focus:shadow-outline"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      </Popover>
    </div>
  );
}
