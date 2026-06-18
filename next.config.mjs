/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
  allowedDevOrigins: ['192.168.100.10', 'http://192.168.100.10:3000'],
}

export default nextConfig
