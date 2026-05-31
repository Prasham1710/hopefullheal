"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut, User, CalendarDays, ShoppingCart, LayoutDashboard } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface UserMenuButtonProps {
  session: Session | null;
}

const menuLinks = [
  { icon: <LayoutDashboard size={14} />, label: "My Profile",       href: "/appointment/profile"      },
  { icon: <CalendarDays size={14} />,    label: "My Appointments",  href: "/appointment/appointments" },
  { icon: <ShoppingCart size={14} />,    label: "My Cart",          href: "/doctor/cart"              },
];

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  if (!user) {
    return (
      <button
        onClick={() => signIn()}
        className="bg-[#ff6f61] hover:bg-[#e85d50] text-white text-sm font-bold py-2 px-5 rounded-xl transition-colors"
      >
        Sign In
      </button>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 rounded-xl hover:bg-white/10 p-1 pr-2.5 transition-colors group">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name ?? "Profile"}
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-colors"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-white/20 border-2 border-white/20 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          )}
          <span className="text-white text-sm font-medium hidden sm:block max-w-[100px] truncate">
            {user.name?.split(" ")[0]}
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-60 p-0 rounded-2xl shadow-xl border border-[#e4e5e6] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-4 py-4 flex items-center gap-3">
          {user.image ? (
            <Image src={user.image} alt={user.name ?? "Profile"} width={40} height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-white/30" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
          )}
          <div className="min-w-0">
            <p className="text-white font-bold text-sm truncate">{user.name}</p>
            <p className="text-[#b1c0ca] text-xs truncate">{user.email}</p>
          </div>
        </div>

        {/* Nav links */}
        <div className="p-2 border-b border-[#f0f4f8]">
          {menuLinks.map(({ icon, label, href }) => (
            <Link key={label} href={href}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[#243a50] hover:bg-[#f0f4f8] rounded-xl transition-colors">
              <span className="text-[#688ca2]">{icon}</span>
              {label}
            </Link>
          ))}
        </div>

        {/* Sign out */}
        <div className="p-2">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
