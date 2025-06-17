'use client';

import PokemonColorBackground from '@/components/pokemon/pokemon-color-background';
import PokemonImage from '@/components/pokemon/pokemon-image';
import PokemonTypeLabel from '@/components/pokemon/pokemon-type-label';
import BackButton from '@/components/shared/back-button';
import FavoriteButton from '@/components/shared/favorite-button';
import Loading from '@/components/shared/loading';
import Subtitle from '@/components/shared/subtitle';
import Title from '@/components/shared/title';
import { usePokemonDetails, usePokemonEvolution } from '@/hooks/use-pokemon';
import type { PokemonType } from '@/types/pokemon';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const PokemonPage = () => {
  const { pokemonId } = useParams();

  const { data: pokemon, isLoading } = usePokemonDetails(pokemonId as string);

  const { data: evolutions, isLoading: isLoadingEvolutions } =
    usePokemonEvolution(pokemonId as string);

  console.log(evolutions);

  if (isLoadingEvolutions || isLoading || !pokemon) <Loading />;

  // if (!pokemon) return <div>Pokemon not found</div>;

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 relative w-full">
          <PokemonColorBackground
            pokemonTypeColor={pokemon?.types[0].type.name as PokemonType}
          />

          <Image
            src={`/icons/${pokemon?.types[0].type.name}.png`}
            alt={pokemon?.types[0].type.name ?? 'Pokemon'}
            width={150}
            height={150}
            className="grayscale brightness-0 invert absolute top-0 left-[50%] translate-x-[-50%] translate-y-[20%]"
          />

          <div className="relative p-4 w-full h-full">
            <BackButton />

            <FavoriteButton pokemonId={pokemonId?.toString() ?? ''} />

            <PokemonImage
              imageUrl={pokemon?.sprites.front_default}
              alt={pokemon?.name ?? 'Pokemon'}
              imageClassName="w-full h-80"
            />

            <Title className="text-2xl font-semibold capitalize">
              {pokemon?.name}
            </Title>

            <Subtitle>N° {pokemon?.id}</Subtitle>

            <div className="flex gap-2 mt-2">
              {pokemon?.types.map((type) => (
                <PokemonTypeLabel
                  key={type.type.name}
                  type={type.type.name as PokemonType}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
