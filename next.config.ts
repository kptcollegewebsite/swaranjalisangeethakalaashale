import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ["example.com", "cdn.example.com"], // Add allowed image domains
  },
};

export default nextConfig;
