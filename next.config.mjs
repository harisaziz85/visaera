/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", // 👈 This enables static export
  images: {
    unoptimized: true, // 👈 REQUIRED for static export!
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
