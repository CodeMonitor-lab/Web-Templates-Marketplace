import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@tanstack/react-query"],
  reactCompiler: true,
};

export default nextConfig;
