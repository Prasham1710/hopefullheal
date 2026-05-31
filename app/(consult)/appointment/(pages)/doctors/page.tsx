import DoctorList from "@/app/(consult)/appointment/_components/ProductCard/page";
import { BadgeCheck, Zap, Video, ShieldCheck } from "lucide-react";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-3">
            Hopeful Heals
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-3">
            Find a Doctor
          </h1>
          <p className="text-[#b1c0ca] text-lg max-w-2xl">
            Book an online consultation with India's top oncology specialists —
            from the comfort of your home.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3 mt-7">
            {[
              { Icon: BadgeCheck, text: "Verified Oncologists" },
              { Icon: Zap,        text: "Instant Booking"      },
              { Icon: Video,      text: "Video & Chat Consult" },
              { Icon: ShieldCheck,text: "Secure & Confidential"},
            ].map(({ Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full"
              >
                <Icon size={12} />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Doctors grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <DoctorList />
      </div>
    </div>
  );
}
