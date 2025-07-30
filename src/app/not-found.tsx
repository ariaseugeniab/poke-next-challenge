'use client';

import Subtitle from '@/components/shared/subtitle';
import Title from '@/components/shared/title';
import { basePath } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => (
  <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 p-4 text-center">
    <h1 className="text-4xl font-bold text-primary">404</h1>
    <Title>Page Not Found</Title>

    <Subtitle>
      Oops! The Page you&apos;re looking for seems to not exist.
    </Subtitle>

    <Image
      src={`${basePath}/utils/ditto-not-found.png`}
      alt="Pokemon Not Found"
      width={200}
      height={200}
    />

    <Link
      href="/"
      className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
    >
      Return to Home
    </Link>
  </div>
);

export default NotFound;
