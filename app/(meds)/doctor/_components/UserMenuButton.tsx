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
    <div className=" ">
      <Popover>
        {user ? (
          <PopoverTrigger>
            <Image
              src={user?.image || "/user.svg"}
              alt="Profile picture"
              width={40}
              height={40}
              className="w-10 rounded-full"
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
                  className=""
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </button>
              </PopoverContent>
            ) : (
              <button
                className="bg-blue-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
