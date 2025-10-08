import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
        {
        protocol: "https",
        hostname: "gruvgear.com",
      },
        {
        protocol: "https",
        hostname: "static.dw.com",
      }
    ],
  },
};

export default nextConfig;
