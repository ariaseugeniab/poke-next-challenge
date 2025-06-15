'use client';

import SearchBar from '@/components/home/search-bar';
import PokemonList from '@/components/pokemon/pokemon-list';
import { usePokemonDetailsList, usePokemonList } from '@/hooks/use-pokemon';
import { useQueryParams } from '@/hooks/use-query-params';
import { QueryParamsSearchPokemonSchema } from '@/schemas/search';

const Page = () => {
  const { queryParams } = useQueryParams(QueryParamsSearchPokemonSchema);

  const { data: pokemonList, isLoading: isLoadingList } = usePokemonList(
    20,
    0,
    queryParams.name
  );
  const pokemonNames =
    pokemonList?.results.map((pokemon) => pokemon.name) ?? [];

  console.log(pokemonList);

  const { data: pokemonDetails, isLoading: isLoadingDetails } =
    usePokemonDetailsList(pokemonNames);

  return (
    <div>
      <SearchBar />

      <PokemonList
        pokemonDetails={pokemonDetails ?? []}
        isLoading={isLoadingDetails || isLoadingList}
      />
    </div>
  );
};

export default Page;
