import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "goldengateinstitute.org",
          },
        ],
        destination: "https://www.goldengateinstitute.org/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

export default nextConfig;
