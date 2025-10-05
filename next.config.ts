import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["atphdev.wordpress.com"],
    unoptimized: true,
  },
  basePath: "/atph-website",
  assetPrefix: "/atph-website/",
};

export default nextConfig;
