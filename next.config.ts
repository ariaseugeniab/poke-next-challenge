import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  basePath: '/',
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/**',
      },
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
