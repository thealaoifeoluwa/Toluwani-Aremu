/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export

  env: {
    API_KEY: process.env.API_KEY,
  },

  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
