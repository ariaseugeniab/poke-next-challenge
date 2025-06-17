import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
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
