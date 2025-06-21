import type { useQueryParams } from '@/hooks/use-query-params';
import {
  POKEMON_ORDER_OPTIONS,
  type QueryParamsSearchPokemonForm,
  QueryParamsSearchPokemonSchema,
} from '@/schemas/search';
import { POKEMON_TYPES } from '@/types/pokemon';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PokemonTypeLabel from '../pokemon/pokemon-type-label';
import { Button } from '../shared/button';
import { Form } from '../shared/forms/form';
import Input from '../shared/forms/input';
import { SelectItem } from '../shared/forms/select';
import SelectField from '../shared/forms/select-field';
import Subtitle from '../shared/subtitle';
import Title from '../shared/title';

const SearchBar = ({
  queryParams,
  setQueryParams,
}: ReturnType<
  typeof useQueryParams<typeof QueryParamsSearchPokemonSchema>
>) => {
  const selectClassName =
    'h-8 focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-0 w-full md:w-auto';
  const form = useForm<QueryParamsSearchPokemonForm>({
    resolver: zodResolver(QueryParamsSearchPokemonSchema),
    defaultValues: {
      name: queryParams.name ?? '',
      type: queryParams.type ?? '',
      page: queryParams.page ?? '1',
      orderBy: queryParams.orderBy ?? POKEMON_ORDER_OPTIONS[0].value,
    },
  });

  const handleClear = () => {
    form.reset();
    setQueryParams({ name: '', type: '', page: '1', orderBy: '' });
  };

  const onSearchInputChange = (newValue: string) =>
    setQueryParams({
      name: newValue,
      page: '1',
    });

  const onTypeSearchChange = (newValue: QueryParamsSearchPokemonForm['type']) =>
    setQueryParams({
      type: newValue,
      page: '1',
    });

  const onOrderBySearchChange = (
    newValue: QueryParamsSearchPokemonForm['orderBy']
  ) =>
    setQueryParams({
      orderBy: newValue,
      page: '1',
    });

  // Sync form with query parameters when they change
  useEffect(() => {
    const newValues = {
      name: queryParams.name ?? '',
      type: queryParams.type ?? '',
      page: queryParams.page ?? '1',
      orderBy: queryParams.orderBy ?? POKEMON_ORDER_OPTIONS[0].value,
    };

    const currentValues = form.getValues();
    const hasChanged = Object.keys(newValues).some(
      (key) =>
        newValues[key as keyof typeof newValues] !==
        currentValues[key as keyof typeof currentValues]
    );

    if (hasChanged) {
      form.reset(newValues);
    }
  }, [queryParams, form]);

  return (
    <section
      className="flex flex-col gap-2 mb-3"
      aria-labelledby="search-title"
    >
      <Title id="search-title" className="text-2xl md:text-left text-center">
        Find a Pokémon
      </Title>

      <Subtitle className="text-sm md:text-left text-center">
        You can filter Pokémon by type or name
      </Subtitle>

      <Form {...form}>
        <form
          className="flex md:flex-row flex-col md:items-center gap-2"
          aria-label="Pokemon search form"
        >
          <fieldset className="contents">
            <legend className="sr-only">Search and filter Pokémon</legend>

            <div className="flex items-center gap-2 border border-white rounded-md shadow-xs mb-1.5">
              <SearchIcon
                className="text-grey w-5 h-5 ml-2"
                aria-hidden="true"
              />

              <Input
                control={form.control}
                name="name"
                label="Search by Pokémon name"
                placeholder="Search by name"
                onClear={() => {
                  setQueryParams({
                    name: '',
                    page: '1',
                  });
                }}
                onChange={onSearchInputChange}
                isClearable
                className="w-full md:w-auto"
              />
            </div>

            <SelectField
              control={form.control}
              name="type"
              label="Filter by Pokémon type"
              placeholder="All types"
              onChange={onTypeSearchChange}
              hiddenLabel
              classNameTrigger={selectClassName}
            >
              {POKEMON_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  <PokemonTypeLabel type={type} className="w-full" />
                </SelectItem>
              ))}
            </SelectField>

            <SelectField
              control={form.control}
              name="orderBy"
              label="Sort Pokémon results"
              placeholder="Order by"
              onChange={onOrderBySearchChange}
              hiddenLabel
              classNameTrigger={selectClassName}
            >
              {POKEMON_ORDER_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectField>
          </fieldset>

          <Button
            type="button"
            variant="outline"
            className="bg-transparent text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 h-8 mb-1.5"
            onClick={handleClear}
            aria-label="Clear all search filters"
          >
            Clear
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default SearchBar;
