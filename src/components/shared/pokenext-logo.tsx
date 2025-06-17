import Image from 'next/image';
import Link from 'next/link';

export const PokenextLogo = () => (
  <Link href="/">
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10">
        <Image src="/pokenext-logo.png" alt="logo" width={80} height={80} />
      </div>

      <h1 className="text-secondary text-xl font-bold font-manrope tracking-wider">
        PokeNext
      </h1>
    </div>
  </Link>
);
