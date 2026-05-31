"use client";
import { useEffect, useState, useTransition } from "react";
import { useSession } from "next-auth/react";
import { datageter, deleteAppointment } from "./action";
import toast, { Toaster } from "react-hot-toast";
import { CalendarDays as CalIcon } from "lucide-react";
import Link from "next/link";
import { Trash2, CalendarDays, Clock, User, Stethoscope } from "lucide-react";

interface Appointment {
  id: string;
  doctor: string;
  patient: string;
  dateofAppointment: string;
  timeofAppointment: string;
  createdAt: string;
  updatedAt: string;
}

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-5 border border-[#e4e5e6] animate-pulse">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-[#e4e5e6]" />
        <div className="space-y-2">
          <div className="h-4 bg-[#e4e5e6] rounded w-32" />
          <div className="h-3 bg-[#e4e5e6] rounded w-20" />
        </div>
      </div>
      <div className="h-6 w-24 bg-[#e4e5e6] rounded-full" />
    </div>
    <div className="flex gap-4">
      <div className="h-3 bg-[#e4e5e6] rounded w-28" />
      <div className="h-3 bg-[#e4e5e6] rounded w-20" />
    </div>
  </div>
);

function formatDate(iso: string) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function AppointmentCard({
  appt,
  onCancel,
}: {
  appt: Appointment;
  onCancel: (id: string) => void;
}) {
  const [isPending, startTransition] = useTransition();

  const handleCancel = () => {
    startTransition(async () => {
      try {
        await deleteAppointment(appt.id);
        onCancel(appt.id);
        toast.success("Appointment cancelled.");
      } catch {
        toast.error("Failed to cancel. Please try again.");
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm hover:shadow-md hover:border-[#00416a]/20 transition-all duration-200 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#00416a] to-[#003255]" />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-full bg-[#00416a]/10 flex items-center justify-center shrink-0 font-bold text-[#00416a] text-base">
              {appt.doctor?.charAt(0)?.toUpperCase() ?? "D"}
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[#243a50] text-sm truncate">
                Dr. {appt.doctor}
              </p>
              <p className="text-[#688ca2] text-xs flex items-center gap-1 mt-0.5">
                <User size={10} />
                {appt.patient}
              </p>
            </div>
          </div>
          <span className="shrink-0 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
            Confirmed
          </span>
        </div>

        {/* Date + Time */}
        <div className="flex flex-wrap gap-4 mb-5">
          <div className="flex items-center gap-2 text-[#688ca2] text-xs">
            <CalendarDays size={13} className="text-[#00416a]" />
            <span>{formatDate(appt.dateofAppointment)}</span>
          </div>
          {appt.timeofAppointment && (
            <div className="flex items-center gap-2 text-[#688ca2] text-xs">
              <Clock size={13} className="text-[#00416a]" />
              <span>{appt.timeofAppointment}</span>
            </div>
          )}
        </div>

        {/* Cancel */}
        <button
          onClick={handleCancel}
          disabled={isPending}
          className="flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-red-100 hover:border-red-200"
        >
          {isPending ? (
            <span className="w-3 h-3 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <Trash2 size={13} />
          )}
          {isPending ? "Cancelling…" : "Cancel Appointment"}
        </button>
      </div>
    </div>
  );
}

const Page = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.name) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const all = await datageter();
        const mine = all
          .filter((a) => a.patient === user.name)
          .map((a) => ({ ...a, createdAt: "", updatedAt: "" }));
        setAppointments(mine);
      } catch {
        toast.error("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user?.name]);

  const handleCancel = (id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  const isLoading = status === "loading" || loading;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-3">
            My Schedule
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-3">
            My Appointments
          </h1>
          <p className="text-[#b1c0ca] text-base max-w-xl">
            View and manage all your upcoming consultations with our oncology
            specialists.
          </p>
        </div>
      </div>

      {/* Stats pulled up */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              value: isLoading ? "…" : String(appointments.length),
              label: "Total Booked",
              icon: <CalendarDays size={16} className="text-[#00416a]" />,
            },
            {
              value: isLoading ? "…" : String(appointments.length),
              label: "Confirmed",
              icon: <Stethoscope size={16} className="text-[#00416a]" />,
            },
            {
              value: "0",
              label: "Pending",
              icon: <Clock size={16} className="text-[#00416a]" />,
            },
          ].map(({ value, label, icon }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-4 text-center border border-[#e4e5e6] shadow-sm flex flex-col items-center gap-1"
            >
              {icon}
              <p className="text-xl font-black text-[#00416a]">{value}</p>
              <p className="text-[#688ca2] text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment list */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-[#243a50] text-base">
            All Appointments
            {!isLoading && (
              <span className="ml-2 text-[#688ca2] text-sm font-normal">
                ({appointments.length})
              </span>
            )}
          </h2>
          <Link
            href="/appointment/doctors"
            className="bg-[#ff6f61] hover:bg-[#e85d50] text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
          >
            + Book New
          </Link>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#e4e5e6] p-14 text-center">
            <div className="w-16 h-16 bg-[#f0f4f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <CalIcon size={28} className="text-[#688ca2]" />
            </div>
            <h3 className="font-bold text-[#243a50] mb-2">
              No appointments yet
            </h3>
            <p className="text-[#688ca2] text-sm mb-6">
              Book a consultation with one of our oncology specialists.
            </p>
            <Link
              href="/appointment/doctors"
              className="inline-block bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-2.5 px-6 rounded-xl transition-colors text-sm"
            >
              Find a Doctor
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appointments.map((appt) => (
              <AppointmentCard
                key={appt.id}
                appt={appt}
                onCancel={handleCancel}
              />
            ))}
          </div>
        )}
      </div>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default Page;
