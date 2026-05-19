/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },

  // Disable Next.js image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
