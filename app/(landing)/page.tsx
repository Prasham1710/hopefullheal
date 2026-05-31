import LandingPage from "./_components/LandingPage";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Hopeful Heals",
    url: "https://hopeforheals.vercel.app",
    logo: "https://hopeforheals.vercel.app/icon.png",
    description:
      "India's trusted cancer care platform — connecting patients with oncologists, authentic medications, and cancer resources.",
    medicalSpecialty: "Oncology",
    availableService: [
      { "@type": "MedicalTherapy", name: "Online Oncology Consultation" },
      { "@type": "MedicalTherapy", name: "Cancer Medication Delivery" },
      { "@type": "MedicalWebPage",  name: "Cancer Information & Resources" },
    ],
    sameAs: [
      "https://facebook.com/hopefulheals",
      "https://twitter.com/hopefulheals",
      "https://instagram.com/hopefulheals",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <LandingPage />
      </main>
    </>
  );
}
