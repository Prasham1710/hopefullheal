"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Users, BookOpen, CheckCircle } from "lucide-react";

const presets = [500, 1000, 2000, 5000];

const causes = [
  { id: "research",  Icon: BookOpen,    label: "Cancer Research",     desc: "Fund breakthrough cancer research in India" },
  { id: "patients",  Icon: Users,       label: "Patient Support",     desc: "Help patients with treatment costs" },
  { id: "education", Icon: ShieldCheck, label: "Awareness & Education",desc: "Spread cancer awareness in rural India" },
];

const impacts = [
  { amount: "₹500",   impact: "Funds a cancer awareness camp for 10 people" },
  { amount: "₹1,000", impact: "Covers lab tests for one underprivileged patient" },
  { amount: "₹2,000", impact: "Subsidises one chemo session for a patient in need" },
  { amount: "₹5,000", impact: "Sponsors a full month of palliative care support" },
];

export default function DonatePage() {
  const [amount, setAmount]   = useState<number | "">(1000);
  const [custom, setCustom]   = useState("");
  const [cause, setCause]     = useState("patients");
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = custom ? Number(custom) : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !finalAmount) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00416a] to-[#003255] px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-14 h-14 bg-[#ff6f61] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Heart size={26} className="text-white" fill="white" />
          </div>
          <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-3">
            Make a Difference
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">
            Donate to Hopeful Heals
          </h1>
          <p className="text-[#b1c0ca] text-lg max-w-2xl mx-auto leading-relaxed">
            Your contribution directly funds cancer research, patient support, and
            awareness programmes across India. Every rupee counts.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Donation form ── */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="font-bold text-[#243a50] text-2xl mb-3">Thank You, {name}!</h2>
                <p className="text-[#688ca2] text-sm leading-relaxed mb-3">
                  We&apos;ve received your donation intent of <strong className="text-[#00416a]">₹{finalAmount?.toLocaleString()}</strong> for <strong className="text-[#00416a]">{causes.find(c => c.id === cause)?.label}</strong>.
                </p>
                <p className="text-[#688ca2] text-sm mb-8">
                  Our team will reach out to <strong>{email}</strong> with payment details within 24 hours.
                </p>
                <Link href="/"
                  className="inline-block bg-[#00416a] hover:bg-[#003255] text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-7 space-y-7">
                {/* Step 1 — Choose cause */}
                <div>
                  <h2 className="font-bold text-[#243a50] text-base mb-4">
                    1. Choose a Cause
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {causes.map(({ id, Icon, label, desc }) => (
                      <button type="button" key={id}
                        onClick={() => setCause(id)}
                        className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                          cause === id
                            ? "border-[#00416a] bg-[#00416a]/5"
                            : "border-[#e4e5e6] hover:border-[#00416a]/30"
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                          cause === id ? "bg-[#00416a]" : "bg-[#f0f4f8]"
                        }`}>
                          <Icon size={16} className={cause === id ? "text-white" : "text-[#688ca2]"} />
                        </div>
                        <p className="font-bold text-[#243a50] text-sm">{label}</p>
                        <p className="text-[#688ca2] text-xs mt-0.5 leading-snug">{desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 — Choose amount */}
                <div>
                  <h2 className="font-bold text-[#243a50] text-base mb-4">
                    2. Select Amount
                  </h2>
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    {presets.map((p) => (
                      <button type="button" key={p}
                        onClick={() => { setAmount(p); setCustom(""); }}
                        className={`py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                          amount === p && !custom
                            ? "border-[#00416a] bg-[#00416a] text-white"
                            : "border-[#e4e5e6] text-[#243a50] hover:border-[#00416a]/40"
                        }`}
                      >
                        ₹{p.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#688ca2] font-bold">₹</span>
                    <input
                      type="number"
                      min={1}
                      placeholder="Enter custom amount"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setAmount(""); }}
                      className="w-full pl-8 pr-4 py-3 border border-[#e4e5e6] rounded-xl text-[#243a50] text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition-all placeholder-[#b1c0ca]"
                    />
                  </div>
                </div>

                {/* Step 3 — Your details */}
                <div>
                  <h2 className="font-bold text-[#243a50] text-base mb-4">
                    3. Your Details
                  </h2>
                  <div className="space-y-3">
                    <input required type="text" placeholder="Full Name" value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-[#e4e5e6] rounded-xl text-[#243a50] text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition-all placeholder-[#b1c0ca]"
                    />
                    <input required type="email" placeholder="Email Address" value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-[#e4e5e6] rounded-xl text-[#243a50] text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition-all placeholder-[#b1c0ca]"
                    />
                  </div>
                </div>

                <button type="submit"
                  className="w-full bg-[#ff6f61] hover:bg-[#e85d50] text-white font-black py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#ff6f61]/30 text-base hover:scale-[1.01]">
                  Donate ₹{finalAmount ? Number(finalAmount).toLocaleString() : "—"}
                </button>

                <p className="text-[#688ca2] text-xs text-center">
                  Our team will contact you within 24 hours with secure payment instructions.
                  Your donation is eligible for 80G tax exemption.
                </p>
              </form>
            )}
          </div>

          {/* ── Impact sidebar ── */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-6">
              <h3 className="font-bold text-[#243a50] text-sm mb-4 uppercase tracking-wider">
                Your Impact
              </h3>
              <div className="space-y-4">
                {impacts.map(({ amount: amt, impact }) => (
                  <div key={amt} className="flex gap-3">
                    <span className="font-black text-[#00416a] text-sm shrink-0 w-16">{amt}</span>
                    <p className="text-[#688ca2] text-xs leading-relaxed">{impact}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00416a] to-[#003255] rounded-2xl p-6 text-center">
              <Heart size={24} className="text-[#ff6f61] mx-auto mb-3" fill="#ff6f61" />
              <p className="text-white font-bold text-sm mb-1">80G Tax Exemption</p>
              <p className="text-[#b1c0ca] text-xs leading-relaxed">
                All donations to Hopeful Heals are eligible for tax deduction under Section 80G.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#e4e5e6] shadow-sm p-6">
              <h3 className="font-bold text-[#243a50] text-sm mb-3">Other Ways to Help</h3>
              <div className="space-y-2">
                <Link href="/appointment/doctors" className="flex items-center gap-2 text-[#00416a] text-sm hover:underline">
                  <Users size={14} /> Volunteer as a Doctor
                </Link>
                <Link href="/CancerTypes" className="flex items-center gap-2 text-[#00416a] text-sm hover:underline">
                  <BookOpen size={14} /> Spread Awareness
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
