import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["atphdev.wordpress.com"],
    unoptimized: true,
  },
  basePath: isProd ? "/atph-website" : "",
  assetPrefix: isProd ? "/atph-website/" : "",
};

export default nextConfig;
