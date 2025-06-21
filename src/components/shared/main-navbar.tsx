'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import { PokenextLogo } from './pokenext-logo';

const MainNavbar = () => (
  <nav
    className="w-full fixed top-0 left-0 border-b border-gray-200 py-2 md:px-4 px-1 bg-white z-50"
    aria-label="Main navigation"
  >
    <div className="max-w-[1440px] mx-auto flex items-center justify-between md:w-full w-11/12">
      <PokenextLogo />

      <div className="flex items-center justify-end gap-4">
        <Link
          href="/favorites"
          className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          aria-label="View favorite Pokémon"
        >
          <Heart className="text-secondary w-5 h-5" aria-hidden="true" />
          <span className="sr-only">Favorites</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default MainNavbar;
