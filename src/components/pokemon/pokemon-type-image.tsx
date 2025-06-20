import { basePath } from '@/lib/utils';
import type { PokemonType } from '@/types/pokemon';
import Image from 'next/image';

const PokemonTypeImage = ({
  type,
  alt,
}: { type: PokemonType; alt: string }) => (
  <Image
    src={`${basePath}/icons/${type}.png`}
    alt={alt}
    width={150}
    height={150}
    className="grayscale brightness-0 invert absolute top-0 left-[50%] translate-x-[-50%] translate-y-[20%]"
  />
);

export default PokemonTypeImage;
