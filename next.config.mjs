/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.famitea.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
