import type { MetadataRoute } from "next";

const BASE_URL = "https://youfeedthem.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "about", priority: 0.8, changeFrequency: "monthly" },
    { path: "programs", priority: 0.8, changeFrequency: "monthly" },
    { path: "impact", priority: 0.8, changeFrequency: "monthly" },
    { path: "media", priority: 0.6, changeFrequency: "monthly" },
    { path: "donate", priority: 0.9, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}
