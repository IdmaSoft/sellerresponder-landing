import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.1"],

  basePath: process.env.BASE_PATH || "",

};

export default nextConfig;