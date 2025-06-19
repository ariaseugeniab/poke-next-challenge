'use client';

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
  useDamageRelationsDamages,
  usePokemonCharacteristics,
  usePokemonDetails,
} from '@/hooks/use-pokemon';
import type { PokemonType } from '@/types/pokemon';
import { useParams } from 'next/navigation';

const PokemonPage = () => {
  const { pokemonId } = useParams();

  const { data: pokemon, isLoading } = usePokemonDetails(pokemonId as string);

  const {
    data: pokemonCharacteristics,
    isLoading: isLoadingPokemonCharacteristics,
  } = usePokemonCharacteristics(pokemonId as string);

  const {
    data: damageRelationsDamages,
    isLoading: isLoadingDamageRelationsDamages,
  } = useDamageRelationsDamages(pokemonId as string);

  // const { data: evolutionChain, isLoading: isLoadingEvolutionChain } =
  //   usePokemonEvolution(pokemonId as string);

  // console.log(evolutionChain);

  if (
    isLoading ||
    !pokemon ||
    isLoadingPokemonCharacteristics ||
    isLoadingDamageRelationsDamages
  )
    return <Loading />;

  const englishDescription = pokemonCharacteristics?.descriptions.find(
    (desc) => desc.language.name === 'en'
  )?.description;

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
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
              imageClassName="w-full h-80"
            />

            <div className="flex flex-col gap-2 w-4/5 mx-auto">
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

              <Subtitle>N° {pokemon?.id}</Subtitle>

              <p className="mt-4 text-gray-700">
                {englishDescription || 'No description available'}
              </p>

              {damageRelationsDamages && (
                <>
                  <p className="text-lg font-semibold">Damage Relations:</p>

                  <p className="text-sm text-gray-500">Double Damage From:</p>
                  <div className="flex gap-2 mt-2">
                    {damageRelationsDamages?.damage_relations.double_damage_from.map(
                      (damage) => (
                        <PokemonTypeLabel
                          key={damage.name}
                          type={damage.name as PokemonType}
                        />
                      )
                    )}
                  </div>

                  <p className="text-sm text-gray-500">Double Damage To:</p>
                  <div className="flex gap-2 mt-2">
                    {damageRelationsDamages?.damage_relations.double_damage_to.map(
                      (damage) => (
                        <PokemonTypeLabel
                          key={damage.name}
                          type={damage.name as PokemonType}
                        />
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
