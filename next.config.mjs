/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://52.73.106.225/api/:path*",
      },
    ];
  },
};

export default nextConfig;
