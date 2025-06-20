import Image from 'next/image';
import Link from 'next/link';

export const PokenextLogo = () => (
  <Link
    href={'/'}
    className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md p-1 transition-colors hover:bg-gray-50"
    aria-label="PokeNext - Go to homepage"
  >
    <div className="flex items-center justify-center w-10 h-10">
      <Image
        src="/pokenext-logo.png"
        alt="PokeNext logo"
        width={80}
        height={80}
        priority
      />
    </div>

    <h1 className="text-secondary text-xl font-bold font-manrope tracking-wider">
      PokeNext
    </h1>
  </Link>
);
