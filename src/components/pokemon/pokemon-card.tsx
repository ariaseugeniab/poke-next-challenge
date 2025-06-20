import { cn } from '@/lib/utils';
import type { Pokemon, PokemonType } from '@/types/pokemon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { KeyboardEvent } from 'react';
import FavoriteButton from '../shared/favorite-button';
import Subtitle from '../shared/subtitle';
import Title from '../shared/title';
import PokemonImage from './pokemon-image';
import PokemonTypeLabel from './pokemon-type-label';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const router = useRouter();

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      router.push(`/pokemon/${pokemon.id}`);
    }
  };

  const pokemonTypes = pokemon.types.map((type) => type.type.name).join(', ');

  return (
    <article
      className="rounded-lg shadow-md hover:shadow-lg transition-shadow relative md:w-[49%] lg:w-[24%] w-full focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2"
      aria-labelledby={`pokemon-name-${pokemon.id}`}
      aria-describedby={`pokemon-types-${pokemon.id}`}
    >
      <div
        className={cn(
          `absolute inset-0 bg-${pokemon.types[0].type.name} opacity-50 rounded-lg`
        )}
      />

      <div className="relative p-4">
        <FavoriteButton pokemonId={pokemon.id.toString()} />

        <Link
          href={`/pokemon/${pokemon.id}`}
          scroll={false}
          className="block focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md"
          aria-label={`View details for ${pokemon.name}, number ${pokemon.id}, types: ${pokemonTypes}`}
        >
          <div
            onKeyDown={handleKeyDown}
            aria-label={`View ${pokemon.name} details`}
            className="focus:outline-none flex md:flex-col flex-row-reverse md:items-start items-center md:justify-start justify-between"
          >
            <PokemonImage
              imageUrl={pokemon.sprites.front_default}
              alt={`${pokemon.name} image`}
              imageClassName="md:w-48 md:h-48 w-30 h-30 bg-white mx-auto"
            />

            <div className="w-3/5 md:w-full">
              <Subtitle
                className="text-sm text-gray-500"
                aria-label={`Pokemon number ${pokemon.id}`}
              >
                No. {pokemon.id}
              </Subtitle>

              <Title
                id={`pokemon-name-${pokemon.id}`}
                className="text-lg font-semibold capitalize"
              >
                {pokemon.name}
              </Title>

              <div
                className="flex gap-2 mt-2"
                id={`pokemon-types-${pokemon.id}`}
                aria-label={`Pokemon types: ${pokemonTypes}`}
              >
                {pokemon.types.map((type) => (
                  <PokemonTypeLabel
                    key={type.type.name}
                    type={type.type.name as PokemonType}
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default PokemonCard;
