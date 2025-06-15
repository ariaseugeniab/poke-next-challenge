import { Heart } from 'lucide-react';
import Link from 'next/link';
import { PokenextLogo } from './pokenext-logo';

const MainNavbar = () => (
  <nav className="w-full fixed top-0 left-0 border-b border-gray-200 py-2 px-4 bg-white z-50">
    <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
      <PokenextLogo />

      <div className="flex items-center justify-end gap-4 hover:cursor-pointer">
        <Link href="/favorites">
          <Heart className="text-secondary w-5 h-5" />
        </Link>
      </div>
    </div>
  </nav>
);

export default MainNavbar;
