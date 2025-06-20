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
  <section aria-labelledby="pokemon-results-title">
    {isLoading ? (
      <div aria-live="polite">
        <Loading />
      </div>
    ) : (
      <div>
        {pokemonDetails.length > 0 ? (
          <>
            <h2 id="pokemon-results-title" className="sr-only">
              Pokemon Results ({pokemonDetails.length} found)
            </h2>

            <div
              className="flex flex-wrap md:gap-2 gap-3 items-center justify-center"
              aria-label={`List of ${pokemonDetails.length} Pokemon`}
            >
              {pokemonDetails.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          </>
        ) : (
          <div
            className="flex flex-col items-center justify-center h-[50vh] w-full"
            aria-live="polite"
          >
            <Image
              src="/utils/psyduck.png"
              alt="Confused Psyduck indicating no Pokemon were found"
              width={200}
              height={100}
            />

            <Title>No Pokémon found :(</Title>

            <Subtitle>Try searching for a different Pokémon name</Subtitle>
          </div>
        )}
      </div>
    )}
  </section>
);

export default PokemonList;
