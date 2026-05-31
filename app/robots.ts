import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/doctor/add-product"],
    },
    sitemap: "https://hopefulheals.vercel.app/sitemap.xml",
  };
}
