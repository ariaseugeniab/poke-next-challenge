'use client';

import SearchBar from '@/components/home/search-bar';
import PokemonList from '@/components/pokemon/pokemon-list';
import PagePaginator from '@/components/shared/pagination/page-paginator';
import useIsMobile from '@/hooks/use-is-mobile';
import { usePokemonDetailsList, usePokemonList } from '@/hooks/use-pokemon';
import { useQueryParams } from '@/hooks/use-query-params';
import {
  type QueryParamsSearchPokemonForm,
  QueryParamsSearchPokemonSchema,
} from '@/schemas/search';
import type { Pokemon } from '@/types/pokemon';
import { useEffect, useState } from 'react';
import Loading from '../shared/loading';
import SearchBarMobile from './search-bar-mobile';

const ITEMS_PER_PAGE = 20;

const HomeComponent = () => {
  const isMobile = useIsMobile();

  const { queryParams, setQueryParams } = useQueryParams(
    QueryParamsSearchPokemonSchema,
    {
      debouncedValues: ['name'],
    }
  );

  // Initialize currentPage with default value to prevent hydration mismatch
  const [currentPage, setCurrentPage] = useState(1);

  const [searchResultsAnnouncement, setSearchResultsAnnouncement] =
    useState('');

  // Sync currentPage with queryParams.page after query params are loaded
  useEffect(() => {
    if (queryParams.page) {
      setCurrentPage(Number.parseInt(queryParams.page));
    }
  }, [queryParams.page]);

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

  const sortPokemonDetails = (pokemonList: Pokemon[], orderBy: string) => {
    if (!orderBy) return pokemonList;

    const [field, direction] = orderBy.split('-');
    const isAscending = direction === 'asc';

    return [...pokemonList].sort((a, b) => {
      let comparison = 0;

      if (field === 'id') {
        comparison = a.id - b.id;
      } else if (field === 'name') {
        comparison = a.name.localeCompare(b.name);
      }

      return isAscending ? comparison : -comparison;
    });
  };

  const filteredPokemonDetails = sortPokemonDetails(
    pokemonDetails ?? [],
    queryParams.orderBy ?? ''
  );

  const totalPages = Math.ceil((pokemonList?.count ?? 0) / ITEMS_PER_PAGE);

  useEffect(() => {
    if (!isLoadingDetails && !isLoadingList && filteredPokemonDetails) {
      const count = filteredPokemonDetails.length;
      const hasFilters = queryParams.name || queryParams.type;

      if (hasFilters) {
        setSearchResultsAnnouncement(
          count === 0
            ? 'No Pokémon found'
            : `Found ${count} Pokémon${count === 1 ? '' : 's'}`
        );
      } else {
        setSearchResultsAnnouncement(
          `Showing ${count} Pokémon${count === 1 ? '' : 's'}`
        );
      }
    }
  }, [
    filteredPokemonDetails,
    isLoadingDetails,
    isLoadingList,
    queryParams.name,
    queryParams.type,
  ]);

  const handleMobileSearch = (data: QueryParamsSearchPokemonForm) => {
    setQueryParams(data);
  };

  return (
    <div className="space-y-4 md:w-11/12 w-full mx-auto">
      <h1 className="text-2xl font-bold md:text-left text-center">
        Welcome to the Poke-Next
      </h1>

      {isMobile ? (
        <SearchBarMobile onSubmit={handleMobileSearch} />
      ) : (
        <SearchBar queryParams={queryParams} setQueryParams={setQueryParams} />
      )}

      {(queryParams.name || queryParams.type) &&
        filteredPokemonDetails.length > 0 && (
          <p className="text-sm text-gray-500">{searchResultsAnnouncement}</p>
        )}

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {searchResultsAnnouncement}
      </div>

      {(isLoadingDetails || isLoadingList) && (
        <div className="sr-only" aria-live="polite">
          <Loading />
        </div>
      )}

      <main aria-label="Pokemon search results">
        <PokemonList
          pokemonDetails={filteredPokemonDetails}
          isLoading={isLoadingDetails || isLoadingList}
        />
      </main>

      {totalPages > 1 && (
        <nav aria-label="Pokemon results pagination">
          <PagePaginator
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            queryParams={queryParams}
            setQueryParams={setQueryParams}
          />
        </nav>
      )}
    </div>
  );
};

export default HomeComponent;
