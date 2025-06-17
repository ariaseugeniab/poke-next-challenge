'use client';

import PokemonCard from '@/components/pokemon/pokemon-card';
import Subtitle from '@/components/shared/subtitle';
import Title from '@/components/shared/title';
import { useUserContext } from '@/context/user-context';
import { usePokemonDetails } from '@/hooks/use-pokemon';
import Image from 'next/image';

const FavoritesList = () => {
  const { favorites } = useUserContext();

  const { data: pokemons } = usePokemonDetails(favorites[0]);

  if (!favorites || !pokemons) {
    return (
      <div className="flex flex-col items-center gap-2 w-full">
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
    <div className="flex flex-col items-center gap-2 w-full">
      <Title>Your Favorite Pokémon</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PokemonCard key={pokemons.id} pokemon={pokemons} />
      </div>
    </div>
  );
};

export default FavoritesList;
