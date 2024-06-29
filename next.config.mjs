/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://fancy-adequately-fish.ngrok-free.app//api/:path*",
      },
    ];
  },
};

export default nextConfig;
