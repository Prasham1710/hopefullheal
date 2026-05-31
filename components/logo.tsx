import Link from "next/link";

interface LogoProps {
  /** "light" = white text (for dark backgrounds), "dark" = dark text (for light backgrounds) */
  variant?: "light" | "dark";
  href?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "light", href = "/", size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? "w-7 h-7 text-xs" : size === "lg" ? "w-10 h-10 text-base" : "w-8 h-8 text-sm";
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";

  const primaryText = variant === "light" ? "text-[#b1c0ca]" : "text-[#688ca2]";
  const boldText    = variant === "light" ? "text-white"    : "text-[#243a50]";

  return (
    <Link href={href} className="flex items-center gap-2 group shrink-0">
      <div className={`${iconSize} rounded-xl bg-[#ff6f61] flex items-center justify-center font-black text-white shrink-0 group-hover:bg-[#e85d50] transition-colors`}>
        H
      </div>
      <span className={`${textSize} font-bold ${primaryText} group-hover:${boldText} transition-colors`}>
        Hopeful<span className={`font-black ${boldText}`}>Heals</span>
      </span>
    </Link>
  );
}
