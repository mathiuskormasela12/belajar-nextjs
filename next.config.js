/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // setup agar bisa nampilin foto dri luar project
  images: {
    domains: ['api-portofolio.mathiuskormasela.my.id'],
  },
};

module.exports = nextConfig;
