import type { Pokemon } from '@/types/pokemon';
import { Loader2 } from 'lucide-react';
import PokemonCard from './pokemon-card';

type PokemonListProps = {
  pokemonDetails: Pokemon[];
  isLoading: boolean;
};

const PokemonList = ({ pokemonDetails, isLoading }: PokemonListProps) => (
  <>
    {isLoading ? (
      <div className="flex items-center justify-center h-[50vh]">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonDetails?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    )}
  </>
);

export default PokemonList;
