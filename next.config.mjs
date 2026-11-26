/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ketapangindahhotel.com',
      },
      {
        protocol: 'https',
        hostname: 'ketapangindahhotel.com',
      },
    ],
  },
};

export default nextConfig;
