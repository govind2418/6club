import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const PAGES = [
  { path: "/", priority: 1 },
  { path: "/6club-register", priority: 0.8 },
  { path: "/6club-login", priority: 0.8 },
  { path: "/6club-game", priority: 0.8 },
  { path: "/6club-apk-download", priority: 0.8 },
  { path: "/6club-official", priority: 0.6 },
  { path: "/recommended-games", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
