import type { Pokemon, PokemonType } from '@/types/pokemon';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../shared/badge';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="relative w-full h-48 mb-4">
        <Image
          src={pokemon.sprites.front_default ?? ''}
          alt={pokemon.name}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>

      <div className="flex gap-2 mt-2">
        {pokemon.types.map((type) => (
          <Badge key={type.type.name} variant={type.type.name as PokemonType}>
            {type.type.name}
          </Badge>
        ))}
      </div>
    </Link>
  </div>
);

export default PokemonCard;
