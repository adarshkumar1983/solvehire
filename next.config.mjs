/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
  async rewrites() {
    return [
        {
            source: '/api/:path*',
            destination: `${process.env.API_BASE_URL}/:path*`,
        },
    ];
},
};

export default nextConfig;