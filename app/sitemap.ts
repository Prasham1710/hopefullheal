import { MetadataRoute } from "next";

const BASE_URL = "https://hopeforheals.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${BASE_URL}/appointment`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/appointment/doctors`,     lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE_URL}/doctor`,                  lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE_URL}/CancerTypes`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/CancerTypes/Lung`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/AboutCancer/Understanding`,lastModified: new Date(),changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/AboutCancer/Diag`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/AboutCancer/Advanced`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/AboutCancer/Causes`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/AboutCancer/Managing`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/AboutCancer/Coping`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
