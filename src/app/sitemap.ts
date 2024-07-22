import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://riskycase.in",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
