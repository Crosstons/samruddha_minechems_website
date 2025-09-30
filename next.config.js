/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "devstrapi-shared.up.railway.app",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
