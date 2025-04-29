import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "goldengateinstitute.org",
          },
        ],
        destination: "https://www.goldengateinstitute.org",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

export default nextConfig;
