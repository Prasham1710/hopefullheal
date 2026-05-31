import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About Cancer — Hopeful Heals",
    template: "%s — Hopeful Heals",
  },
  description:
    "Learn about cancer — understanding, diagnosis, treatment, causes, prevention, and coping strategies from India's trusted cancer care platform.",
  openGraph: {
    type: "website",
    siteName: "Hopeful Heals",
    title: "About Cancer — Hopeful Heals",
    description:
      "Learn about cancer — understanding, diagnosis, treatment, causes, prevention, and coping strategies.",
  },
  twitter: {
    card: "summary",
    title: "About Cancer — Hopeful Heals",
    description:
      "Learn about cancer — understanding, diagnosis, treatment, causes, prevention, and coping strategies.",
  },
};

export default function AboutCancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
