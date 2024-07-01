/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.123.22:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
