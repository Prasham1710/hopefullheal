import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00416a] to-[#003255] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[#b1c0ca] text-sm font-semibold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="text-white font-black text-7xl sm:text-9xl mb-4">404</h1>
        <h2 className="text-white font-bold text-2xl sm:text-3xl mb-4">
          Page Not Found
        </h2>
        <p className="text-[#b1c0ca] text-base mb-10 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-[#ff6f61] hover:bg-[#e85d50] text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#ff6f61]/30"
          >
            Go Home
          </Link>
          <Link
            href="/appointment"
            className="border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
