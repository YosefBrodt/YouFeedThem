import type { MetadataRoute } from "next";

// Live domain. Switch back to youfeedthem.com after the .com migration lands (see vault, Jul 10).
const BASE_URL = "https://youfeedthem.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "about", priority: 0.8, changeFrequency: "monthly" },
    { path: "east-africa", priority: 0.8, changeFrequency: "monthly" },
    { path: "at-home", priority: 0.8, changeFrequency: "monthly" },
    { path: "impact", priority: 0.8, changeFrequency: "monthly" },
    { path: "missions", priority: 0.7, changeFrequency: "monthly" },
    { path: "media", priority: 0.6, changeFrequency: "monthly" },
    { path: "get-involved", priority: 0.7, changeFrequency: "monthly" },
    { path: "contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "donate", priority: 0.9, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}
