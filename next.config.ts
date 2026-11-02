import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/", statusCode: 301 },
      { source: "/writing", destination: "/", statusCode: 301 },
      { source: "/writing/:path*", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
