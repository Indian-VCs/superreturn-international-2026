import type { MetadataRoute } from "next";

import { site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/our-take", "/schedule", "/side-events"];

  return routes.map((route) => ({
    url: `${site.homepage}${route}`,
    lastModified: new Date(),
  }));
}
