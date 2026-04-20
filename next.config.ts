import type { NextConfig } from "next";

// ── Mount path ──
// Must match the mount path picked in Webflow Cloud for this environment.
// Current mount: /events/superreturn-international-2026
const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "/events/superreturn-international-2026",
  assetPrefix: "/events/superreturn-international-2026",
};

export default nextConfig;
