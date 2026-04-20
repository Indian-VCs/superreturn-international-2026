/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ── Mount path ──
  // Must match the mount path you picked in Webflow Cloud
  // e.g. /superreturn → mysite.webflow.io/superreturn
  basePath: "/superreturn",
  assetPrefix: "/superreturn",
};

export default nextConfig;
