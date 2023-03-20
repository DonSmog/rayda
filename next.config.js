/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dm1ta9lno/image/upload/",
  },
};

module.exports = nextConfig;
