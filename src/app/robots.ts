import type { MetadataRoute } from "next";

// Live domain. Switch back to youfeedthem.com after the .com migration lands (see vault, Jul 10).
const BASE_URL = "https://youfeedthem.ca";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
