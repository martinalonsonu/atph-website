import type { NextConfig } from "next";

const isProd = process.env.APP_ENVIRONMENT === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["atphdev.wordpress.com"],
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
