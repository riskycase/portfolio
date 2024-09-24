import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/$", "/sitemap.xml", "/robots.txt", "/.well-known"],
      disallow: "/"
    },
    sitemap: "https://riskycase.in/sitemap.xml",
  };
}
