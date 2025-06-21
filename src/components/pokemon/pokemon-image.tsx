'use client';

import { basePath, cn } from '@/lib/utils';
import Image from 'next/image';

const PokemonImage = ({
  imageUrl,
  alt,
  imageClassName,
}: { imageUrl?: string; alt: string; imageClassName?: string }) => (
  <div
    className={cn(
      'relative w-full mb-4 rounded-full',
      imageClassName ?? 'h-48 w-full bg-white'
    )}
  >
    <Image
      src={imageUrl ?? `${basePath}/utils/missingno.webp`}
      alt={alt}
      className="object-contain p-1"
      fill
    />
  </div>
);

export default PokemonImage;
