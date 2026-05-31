"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { datageter } from "./action";
import React, { useEffect, useState } from "react";
import { CalendarDays as CalIcon } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  CalendarDays, Clock, User, Stethoscope,
  ShoppingCart, LogOut, ExternalLink, ChevronRight,
} from "lucide-react";

interface Appointment {
  id: string;
  doctor: string;
  patient: string;
  dateofAppointment: string;
  timeofAppointment: string;
  createdAt: string;
  updatedAt: string;
}

const SkeletonRow = () => (
  <div className="bg-white rounded-2xl p-5 border border-[#e4e5e6] animate-pulse flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-[#e4e5e6] shrink-0" />
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-[#e4e5e6] rounded w-1/3" />
      <div className="h-3 bg-[#e4e5e6] rounded w-1/2" />
    </div>
    <div className="h-6 w-20 bg-[#e4e5e6] rounded-full" />
  </div>
);

function formatDate(iso: string) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
    });
  } catch { return iso; }
}

const quickLinks = [
  { icon: <Stethoscope size={18} />, label: "Find a Doctor",      href: "/appointment/doctors",      color: "bg-[#00416a]/10 text-[#00416a]" },
  { icon: <CalendarDays size={18} />, label: "My Appointments",   href: "/appointment/appointments", color: "bg-purple-100 text-purple-600" },
  { icon: <ShoppingCart size={18} />, label: "Browse Medicines",  href: "/doctor",                   color: "bg-[#ff6f61]/10 text-[#ff6f61]" },
  { icon: <ShoppingCart size={18} />, label: "My Cart",           href: "/doctor/cart",              color: "bg-green-100 text-green-600" },
];

const Page = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.name) return;
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await datageter(user.name ?? "");
        setAppointments(data.map((a) => ({ ...a, createdAt: "", updatedAt: "" })));
      } catch { /* empty */ } finally { setLoading(false); }
    };
    fetch();
  }, [user?.name]);

  const isLoading = status === "loading" || loading;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">

      {/* ── Hero banner ── */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 pt-14 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-6">My Account</p>

          <div className="relative inline-block mb-5">
            {user?.image ? (
              <Image src={user.image} alt="Profile" width={96} height={96}
                className="rounded-full border-4 border-white/20 shadow-xl w-24 h-24 object-cover" />
            ) : (
              <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center shadow-xl">
                <User size={36} className="text-white" />
              </div>
            )}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
          </div>

          <h1 className="text-white font-black text-3xl mb-1">{user?.name ?? "—"}</h1>
          <p className="text-[#b1c0ca] text-sm mb-1">{user?.email ?? "—"}</p>
          <span className="inline-block bg-white/10 text-[#b1c0ca] text-xs font-semibold px-3 py-1 rounded-full border border-white/10 mt-1">
            Google Account
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-14 pb-14 space-y-6">

        {/* ── Stats strip ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: isLoading ? "…" : String(appointments.length), label: "Appointments",  icon: <CalendarDays size={16} className="text-[#00416a]" /> },
            { value: isLoading ? "…" : String(appointments.length), label: "Confirmed",     icon: <Stethoscope size={16}  className="text-[#00416a]" /> },
            { value: "Active",  label: "Account",   icon: <User size={16}         className="text-[#00416a]" /> },
            { value: "Google",  label: "Provider",  icon: <ExternalLink size={16} className="text-[#00416a]" /> },
          ].map(({ value, label, icon }) => (
            <div key={label} className="bg-white rounded-2xl p-4 text-center border border-[#e4e5e6] shadow-sm flex flex-col items-center gap-1">
              {icon}
              <p className="text-lg font-black text-[#00416a]">{value}</p>
              <p className="text-[#688ca2] text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Profile details ── */}
        <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#f0f4f8]">
            <h2 className="font-bold text-[#243a50] text-base">Profile Details</h2>
          </div>
          <div className="divide-y divide-[#f0f4f8] text-sm">
            {[
              { label: "Full Name",  value: user?.name ?? "—" },
              { label: "Email",      value: user?.email ?? "—" },
              { label: "Provider",   value: "Google OAuth" },
              { label: "Status",     value: "Active" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between px-6 py-3.5">
                <span className="text-[#688ca2]">{label}</span>
                <span className="font-semibold text-[#243a50] text-right max-w-[60%] truncate">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Quick links ── */}
        <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#f0f4f8]">
            <h2 className="font-bold text-[#243a50] text-base">Quick Actions</h2>
          </div>
          <div className="divide-y divide-[#f0f4f8]">
            {quickLinks.map(({ icon, label, href, color }) => (
              <Link key={label} href={href}
                className="flex items-center justify-between px-6 py-4 hover:bg-[#f0f4f8] transition-colors group">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
                    {icon}
                  </div>
                  <span className="font-medium text-[#243a50] text-sm">{label}</span>
                </div>
                <ChevronRight size={16} className="text-[#688ca2] group-hover:text-[#00416a] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Recent appointments ── */}
        <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#f0f4f8] flex items-center justify-between">
            <h2 className="font-bold text-[#243a50] text-base">
              Recent Appointments
              {!isLoading && (
                <span className="ml-2 text-[#688ca2] text-sm font-normal">({appointments.length})</span>
              )}
            </h2>
            <Link href="/appointment/appointments"
              className="text-[#00416a] text-sm font-semibold hover:underline transition-colors">
              View all →
            </Link>
          </div>

          <div className="p-4 space-y-3">
            {isLoading ? (
              Array.from({ length: 2 }).map((_, i) => <SkeletonRow key={i} />)
            ) : appointments.length === 0 ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-[#f0f4f8] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CalIcon size={24} className="text-[#688ca2]" />
                </div>
                <p className="font-bold text-[#243a50] text-sm mb-1">No appointments yet</p>
                <p className="text-[#688ca2] text-xs mb-4">Book a consultation with one of our oncologists.</p>
                <Link href="/appointment/doctors"
                  className="inline-block bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-2 px-5 rounded-xl text-sm transition-colors">
                  Find a Doctor
                </Link>
              </div>
            ) : (
              appointments.slice(0, 3).map((appt) => (
                <div key={appt.id} className="flex items-center justify-between gap-4 bg-[#f0f4f8] rounded-2xl p-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#00416a]/10 flex items-center justify-center shrink-0 font-bold text-[#00416a] text-sm">
                      {appt.doctor?.charAt(0)?.toUpperCase() ?? "D"}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[#243a50] text-sm truncate">Dr. {appt.doctor}</p>
                      <p className="text-[#688ca2] text-xs flex items-center gap-1 mt-0.5">
                        <CalendarDays size={10} />
                        {formatDate(appt.dateofAppointment)}
                        {appt.timeofAppointment && (
                          <><Clock size={10} className="ml-1" />{appt.timeofAppointment}</>
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    Confirmed
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ── Sign out ── */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 bg-white border border-red-200 text-red-500 hover:bg-red-50 font-bold py-3.5 rounded-2xl transition-colors text-sm"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Page;
