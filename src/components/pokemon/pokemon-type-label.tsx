import type { PokemonType } from '@/types/pokemon';
import Image from 'next/image';
import { Badge } from '../shared/badge';

const PokemonTypeLabel = ({ type }: { type: PokemonType }) => (
  <Badge variant={type} className="flex items-center gap-2 rounded-4xl">
    <div className="flex items-center gap-2 bg-white rounded-full p-2">
      <Image src={`/icons/${type}.png`} alt={type} width={10} height={10} />
    </div>

    {type}
  </Badge>
);

export default PokemonTypeLabel;
