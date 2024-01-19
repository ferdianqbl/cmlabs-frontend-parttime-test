/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.themealdb.com",
      },
      {
        hostname: "source.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
