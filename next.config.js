/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
