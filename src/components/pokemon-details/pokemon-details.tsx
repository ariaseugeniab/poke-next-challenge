'use client';

import Damages from '@/components/pokemon/damages';
import PokemonColorBackground from '@/components/pokemon/pokemon-color-background';
import PokemonImage from '@/components/pokemon/pokemon-image';
import PokemonTypeImage from '@/components/pokemon/pokemon-type-image';
import PokemonTypeLabel from '@/components/pokemon/pokemon-type-label';
import BackButton from '@/components/shared/back-button';
import FavoriteButton from '@/components/shared/favorite-button';
import Loading from '@/components/shared/loading';
import Subtitle from '@/components/shared/subtitle';
import Title from '@/components/shared/title';
import {
  useDamageRelations,
  usePokemonCharacteristics,
  usePokemonDetails,
} from '@/hooks/use-pokemon';
import type { PokemonType } from '@/types/pokemon';
import { useParams } from 'next/navigation';

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const { data: pokemon, isLoading } = usePokemonDetails(pokemonId as string);

  const {
    data: pokemonCharacteristics,
    isLoading: isLoadingPokemonCharacteristics,
  } = usePokemonCharacteristics(pokemonId as string);

  const { data: damageRelations, isLoading: isLoadingDamageRelations } =
    useDamageRelations(pokemonId as string);

  if (
    isLoading ||
    !pokemon ||
    isLoadingPokemonCharacteristics ||
    isLoadingDamageRelations
  )
    return <Loading />;

  const englishDescription = pokemonCharacteristics?.descriptions.find(
    (desc) => desc.language.name === 'en'
  )?.description;

  return (
    <div className="flex flex-col items-center justify-center md:mt-2 mt-8">
      <div className="flex flex-col items-center justify-center gap-2 relative w-full">
        <PokemonColorBackground
          pokemonTypeColor={pokemon?.types[0].type.name as PokemonType}
        />

        <PokemonTypeImage
          type={pokemon?.types[0].type.name as PokemonType}
          alt={pokemon?.name ?? 'Pokemon'}
        />

        <div className="relative p-4 w-full h-full">
          <BackButton />

          <FavoriteButton
            pokemonId={pokemonId?.toString() ?? ''}
            className="w-10 h-10"
          />

          <PokemonImage
            imageUrl={pokemon?.sprites.front_default}
            alt={pokemon?.name ?? 'Pokemon'}
            imageClassName="w-full md:h-80 h-60"
          />

          <div className="flex flex-col gap-2 md:w-4/5 w-full mx-auto">
            <div className="flex gap-4 items-center">
              <Title className="text-2xl font-semibold capitalize m-0">
                {pokemon?.name}
              </Title>

              <div className="flex gap-2 mt-2">
                {pokemon?.types.map((type) => (
                  <PokemonTypeLabel
                    key={type.type.name}
                    type={type.type.name as PokemonType}
                  />
                ))}
              </div>
            </div>

            <Subtitle>No. {pokemon?.id}</Subtitle>

            <p className="mt-2 text-gray-700">
              Description: {englishDescription || 'No description available'}
            </p>

            {(damageRelations?.double_damage_from ||
              damageRelations?.double_damage_to) && (
              <Damages damageRelationsDamages={damageRelations} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
