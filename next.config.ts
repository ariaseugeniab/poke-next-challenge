import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/poke-next-challenge',
  distDir: 'out',
  experimental: {
    // Disable PPR for static export
    ppr: false,
  },
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
