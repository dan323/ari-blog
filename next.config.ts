import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  // GitHub Pages often serves under a subpath for project sites, e.g. /repo-name
  // Detect repo name from CI if available. Override with BASE_PATH env if needed.
  basePath: process.env.BASE_PATH || "/ari-blog", // prefijo para rutas internas
  assetPrefix: process.env.BASE_PATH || "/ari-blog", // prefijo para CSS/JS/images
  // Ensure paths end with a trailing slash so GitHub Pages serves index.html correctly
  trailingSlash: true,
  // If you use next/image, disable optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
