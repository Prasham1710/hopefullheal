"use client";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { CiClock1 } from "react-icons/ci";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import { datageter, appointmentupdater } from "./action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Doctor {
  id: string;
  imageUrl: string;
  name: string;
  specialization: string;
  experience: string;
  feesPerConsultation: number;
  phoneNum: string;
  appointmentStatus: boolean;
  timeofAppointment: string;
  dateofAppointment: string;
  createdAt: Date;
  updatedAt: Date;
}

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-6 border border-[#e4e5e6] animate-pulse">
    <div className="flex items-center gap-4 mb-5">
      <div className="w-16 h-16 rounded-full bg-[#e4e5e6] shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-[#e4e5e6] rounded w-3/4" />
        <div className="h-3 bg-[#e4e5e6] rounded w-1/2" />
      </div>
    </div>
    <div className="space-y-2 mb-5">
      <div className="h-3 bg-[#e4e5e6] rounded w-full" />
      <div className="h-3 bg-[#e4e5e6] rounded w-5/6" />
      <div className="h-3 bg-[#e4e5e6] rounded w-2/3" />
    </div>
    <div className="h-10 bg-[#e4e5e6] rounded-xl" />
  </div>
);

const DoctorList = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("12:00");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await datageter();
        setDoctors(data as Doctor[]);
      } catch {
        toast.error("Error fetching doctors. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const bookAppointment = async (doctorName: string) => {
    try {
      const result = await appointmentupdater(
        doctorName,
        user?.name as string,
        date ? date.toISOString() : "",
        time
      );
      if (result.status === 200) {
        toast.success(result.text || "Appointment booked successfully!");
      } else if (result.status === 400) {
        toast.error(result.text || "Slot already taken. Try another time.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 bg-[#e4e5e6] rounded-full flex items-center justify-center mx-auto mb-6">
          <Stethoscope size={36} className="text-[#688ca2]" />
        </div>
        <h2 className="text-xl font-bold text-[#243a50] mb-2">
          No doctors available
        </h2>
        <p className="text-[#688ca2] text-sm">
          Please check back soon — we're onboarding new specialists.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-[#243a50] text-lg">
          Available Doctors
          <span className="ml-2 text-[#688ca2] text-sm font-normal">
            ({doctors.length} specialists)
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#00416a]/20 transition-all duration-300 overflow-hidden"
          >
            {/* Card header */}
            <div className="bg-gradient-to-r from-[#00416a]/5 to-[#003255]/5 px-6 pt-6 pb-4 border-b border-[#e4e5e6]">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover w-16 h-16 border-2 border-[#e4e5e6]"
                  />
                  <span
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      doctor.appointmentStatus ? "bg-orange-400" : "bg-green-500"
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#243a50] text-base truncate">
                    {doctor.name}
                  </h3>
                  <span className="inline-block bg-[#00416a]/10 text-[#00416a] text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1">
                    {doctor.specialization}
                  </span>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="px-6 py-4 space-y-2.5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[#688ca2]">Experience</span>
                <span className="font-semibold text-[#243a50]">
                  {doctor.experience}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#688ca2]">Consultation Fee</span>
                <span className="font-bold text-[#00416a]">
                  ₹{doctor.feesPerConsultation}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#688ca2]">Contact</span>
                <span className="font-medium text-[#243a50]">
                  {doctor.phoneNum}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[#688ca2]">Status</span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    doctor.appointmentStatus
                      ? "bg-orange-100 text-orange-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {doctor.appointmentStatus ? "Booked" : "Available"}
                </span>
              </div>
            </div>

            {/* Card footer */}
            <div className="px-6 pb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full bg-[#00416a] hover:bg-[#003255] text-white font-bold py-2.5 px-4 rounded-xl transition-colors duration-200 text-sm hover:shadow-md">
                    Book Appointment
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md rounded-2xl">
                  <DialogHeader className="text-left">
                    <DialogTitle className="text-[#243a50] font-bold text-xl">
                      Book with {doctor.name}
                    </DialogTitle>
                    <DialogDescription className="text-[#688ca2]">
                      Select your preferred date and time for the consultation.
                    </DialogDescription>
                  </DialogHeader>

                  {/* Doctor summary inside dialog */}
                  <div className="flex items-center gap-3 bg-[#f0f4f8] rounded-xl p-3 mb-2">
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10"
                    />
                    <div>
                      <p className="font-semibold text-[#243a50] text-sm">
                        {doctor.name}
                      </p>
                      <p className="text-[#688ca2] text-xs">
                        {doctor.specialization} · ₹{doctor.feesPerConsultation}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Date picker */}
                    <div>
                      <label className="text-xs font-semibold text-[#688ca2] uppercase tracking-wider mb-1.5 block">
                        Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-[#e4e5e6] hover:border-[#00416a] rounded-xl",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-[#688ca2]" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-xl border-[#e4e5e6]">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(value: Date | undefined) => setDate(value)}
                            initialFocus
                            disabled={(d) => d < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time picker */}
                    <div>
                      <label className="text-xs font-semibold text-[#688ca2] uppercase tracking-wider mb-1.5 block">
                        Time
                      </label>
                      <div className="flex items-center gap-2 border border-[#e4e5e6] hover:border-[#00416a] rounded-xl px-3 py-2 transition-colors">
                        <CiClock1 className="text-[#688ca2]" size={18} />
                        <input
                          type="time"
                          className="flex-1 text-sm text-[#243a50] bg-transparent focus:outline-none"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <DialogFooter className="gap-2 mt-2">
                    <DialogClose asChild>
                      <Button variant="outline" className="rounded-xl border-[#e4e5e6]">
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <button
                        onClick={() => bookAppointment(doctor.name)}
                        className="bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-2 px-6 rounded-xl transition-colors duration-200 text-sm"
                      >
                        Confirm Booking
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default DoctorList;
