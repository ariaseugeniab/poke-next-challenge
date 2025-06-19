'use client';

import PokemonCard from '@/components/pokemon/pokemon-card';
import Subtitle from '@/components/shared/subtitle';
import Title from '@/components/shared/title';
import { useUserContext } from '@/context/user-context';
import { usePokemonDetailsList } from '@/hooks/use-pokemon';
import Image from 'next/image';
import Loading from '../shared/loading';

const FavoritesList = () => {
  const { favorites } = useUserContext();

  const { data: pokemonDetails, isLoading: isLoadingDetails } =
    usePokemonDetailsList(favorites);

  if (isLoadingDetails) {
    return <Loading />;
  }

  if (!favorites || !pokemonDetails) {
    return (
      <div className="flex flex-col items-center gap-2 w-full pt-10">
        <Image
          src="/utils/magikarp.png"
          alt="Magikarp"
          width={100}
          height={100}
        />

        <Title>You don&apos;t have your favorite Pokémon</Title>

        <Subtitle>
          Click the heart icon on your favorite Pokémon and they will appear
          here.
        </Subtitle>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full pt-10">
      <Title>Your Favorite Pokémon</Title>

      <Subtitle className="mb-5">
        {pokemonDetails.length} Pokémon in your favorites
      </Subtitle>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {pokemonDetails.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
