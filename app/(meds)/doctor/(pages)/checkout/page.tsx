import Link from "next/link";
import { Construction } from "lucide-react";

export const metadata = {
  title: "Checkout — Hopeful Heals",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-12 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-[#00416a]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Construction size={30} className="text-[#00416a]" />
        </div>
        <h1 className="font-black text-[#243a50] text-2xl mb-3">
          Checkout Coming Soon
        </h1>
        <p className="text-[#688ca2] text-sm leading-relaxed mb-8">
          Our secure checkout is under development. For urgent medication needs,
          please contact us directly or consult one of our doctors.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/appointment/doctors"
            className="block w-full bg-[#00416a] hover:bg-[#003255] text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            Consult a Doctor
          </Link>
          <Link
            href="/doctor/cart"
            className="block w-full border border-[#e4e5e6] hover:border-[#00416a]/30 text-[#243a50] font-semibold py-3 rounded-xl transition-colors text-sm"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
