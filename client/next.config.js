/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "https://dt4-backend.onrender.com/api/v1",
    // BASE_URL: "http://localhost:8000/api/v1",
  },
  images: {
    domains: ["res.cloudinary.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
