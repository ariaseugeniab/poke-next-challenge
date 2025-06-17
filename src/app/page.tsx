'use client';

import SearchBar from '@/components/home/search-bar';
import PokemonList from '@/components/pokemon/pokemon-list';
import PagePaginator from '@/components/shared/pagination/page-paginator';
import { usePokemonDetailsList, usePokemonList } from '@/hooks/use-pokemon';
import { useQueryParams } from '@/hooks/use-query-params';
import { QueryParamsSearchPokemonSchema } from '@/schemas/search';
import { useCallback, useState } from 'react';

const ITEMS_PER_PAGE = 27;

const Page = () => {
  const { queryParams, setQueryParams } = useQueryParams(
    QueryParamsSearchPokemonSchema
  );

  const [currentPage, setCurrentPage] = useState(
    queryParams.page ? Number.parseInt(queryParams.page) : 1
  );

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { data: pokemonList, isLoading: isLoadingList } = usePokemonList(
    ITEMS_PER_PAGE,
    offset,
    queryParams.name
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

  const totalPages = Math.ceil((pokemonList?.count ?? 0) / ITEMS_PER_PAGE);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      setQueryParams({
        ...queryParams,
        page: page.toString(),
      });
    },
    [queryParams, setQueryParams]
  );

  console.log('pokemonList', pokemonDetails);

  return (
    <div className="space-y-4">
      <SearchBar />

      <PokemonList
        pokemonDetails={pokemonDetails ?? []}
        isLoading={isLoadingDetails || isLoadingList}
      />

      {totalPages > 1 && (
        <PagePaginator
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Page;
