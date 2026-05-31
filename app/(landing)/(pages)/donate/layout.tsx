import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate — Hopeful Heals",
  description:
    "Support cancer patients and research in India. Your donation funds treatment, awareness, and research programmes. 80G tax exemption available.",
  openGraph: {
    type: "website",
    siteName: "Hopeful Heals",
    title: "Donate to Hopeful Heals",
    description:
      "Support cancer patients and research in India. Every rupee makes a difference. 80G tax exemption available.",
  },
  twitter: {
    card: "summary",
    title: "Donate to Hopeful Heals",
    description:
      "Support cancer patients and research in India. Every rupee makes a difference.",
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
