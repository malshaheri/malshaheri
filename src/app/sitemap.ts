import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      path: "/de",
      priority: 1,
    },
    {
      path: "/en",
      priority: 0.9,
    },
    {
      path: "/de/projects/abbod-delivery",
      priority: 0.85,
    },
    {
      path: "/en/projects/abbod-delivery",
      priority: 0.8,
    },
  ];

  return pages.map((page) => ({
    url: `${siteConfig.siteUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}