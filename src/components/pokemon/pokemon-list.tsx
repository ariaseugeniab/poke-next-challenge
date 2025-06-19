import type { Pokemon } from '@/types/pokemon';
import Image from 'next/image';
import Loading from '../shared/loading';
import Subtitle from '../shared/subtitle';
import Title from '../shared/title';
import PokemonCard from './pokemon-card';

type PokemonListProps = {
  pokemonDetails: Pokemon[];
  isLoading: boolean;
};

const PokemonList = ({ pokemonDetails, isLoading }: PokemonListProps) => (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <div>
        {pokemonDetails.length > 0 ? (
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {pokemonDetails.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] w-full">
            <Image
              src="/utils/psyduck.png"
              alt="No Pokémon found"
              width={200}
              height={100}
            />

            <Title>No Pokémon found :(</Title>

            <Subtitle>Try searching for a different Pokémon name</Subtitle>
          </div>
        )}
      </div>
    )}
  </>
);

export default PokemonList;
