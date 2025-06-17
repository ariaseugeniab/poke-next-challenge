import { cn } from '@/lib/utils';
import type { Pokemon, PokemonType } from '@/types/pokemon';
import Link from 'next/link';
import FavoriteButton from '../shared/favorite-button';
import PokemonImage from './pokemon-image';
import PokemonTypeLabel from './pokemon-type-label';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
    <div
      className={cn(
        `absolute inset-0 bg-${pokemon.types[0].type.name} opacity-50 rounded-lg`
      )}
    />

    <div className="relative p-4">
      <FavoriteButton pokemonId={pokemon.id.toString()} />

      <Link href={`/pokemon/${pokemon.id}`}>
        <PokemonImage
          imageUrl={pokemon.sprites.front_default}
          alt={pokemon.name}
        />

        <p className="text-sm text-gray-500">No. {pokemon.id}</p>
        <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>

        <div className="flex gap-2 mt-2">
          {pokemon.types.map((type) => (
            <PokemonTypeLabel
              key={type.type.name}
              type={type.type.name as PokemonType}
            />
          ))}
        </div>
      </Link>
    </div>
  </div>
);

export default PokemonCard;
