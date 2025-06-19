'use client';

import SearchBar from '@/components/home/search-bar';
import PokemonList from '@/components/pokemon/pokemon-list';
import PagePaginator from '@/components/shared/pagination/page-paginator';
import { usePokemonDetailsList, usePokemonList } from '@/hooks/use-pokemon';
import { useQueryParams } from '@/hooks/use-query-params';
import { QueryParamsSearchPokemonSchema } from '@/schemas/search';
import { useState } from 'react';

const ITEMS_PER_PAGE = 27;

const HomeComponent = () => {
  const { queryParams, setQueryParams } = useQueryParams(
    QueryParamsSearchPokemonSchema,
    {
      debouncedValues: ['name', 'type'],
    }
  );

  const [currentPage, setCurrentPage] = useState(
    queryParams.page ? Number.parseInt(queryParams.page) : 1
  );

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { data: pokemonList, isLoading: isLoadingList } = usePokemonList(
    ITEMS_PER_PAGE,
    offset,
    queryParams.name,
    queryParams.type
  );

  const pokemonNames =
    pokemonList?.results
      .filter(
        (pokemon) =>
          !queryParams.name ||
          pokemon.name.toLowerCase().includes(queryParams.name.toLowerCase())
      )
      .map((pokemon) => pokemon.name) ?? [];

  const { data: pokemonDetails, isLoading: isLoadingDetails } =
    usePokemonDetailsList(pokemonNames);

  // No need for client-side type filtering since we're now using the API
  const filteredPokemonDetails = pokemonDetails ?? [];

  const totalPages = Math.ceil((pokemonList?.count ?? 0) / ITEMS_PER_PAGE);

  console.log('queryParams', queryParams);

  return (
    <div className="space-y-4 w-11/12 mx-auto">
      <SearchBar />

      <PokemonList
        pokemonDetails={filteredPokemonDetails}
        isLoading={isLoadingDetails || isLoadingList}
      />

      {totalPages > 1 && (
        <PagePaginator
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          queryParams={queryParams}
          setQueryParams={setQueryParams}
        />
      )}
    </div>
  );
};

export default HomeComponent;
