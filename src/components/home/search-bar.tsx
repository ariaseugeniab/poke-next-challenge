import { useQueryParams } from '@/hooks/use-query-params';
import { cn } from '@/lib/utils';
import {
  type QueryParamsSearchPokemonForm,
  QueryParamsSearchPokemonSchema,
} from '@/schemas/search';
import { POKEMON_TYPES } from '@/types/pokemon';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../shared/button';
import { Form } from '../shared/forms/form';
import Input from '../shared/forms/input';
import { SelectItem } from '../shared/forms/select';
import SelectField from '../shared/forms/select-field';
import Subtitle from '../shared/subtitle';
import Title from '../shared/title';

const SearchBar = () => {
  const { queryParams, setQueryParams } = useQueryParams(
    QueryParamsSearchPokemonSchema,
    {
      debouncedValues: ['name', 'type'],
    }
  );

  const form = useForm<QueryParamsSearchPokemonForm>({
    resolver: zodResolver(QueryParamsSearchPokemonSchema),
    defaultValues: {
      name: queryParams.name ?? '',
      type: queryParams.type ?? '',
      page: queryParams.page ?? '1',
    },
  });

  const handleClear = () => {
    form.reset();
    setQueryParams({ name: '', type: '', page: '1' });
  };

  useEffect(() => {
    if (queryParams.name) {
      form.setValue('name', queryParams.name);
    }

    if (queryParams.type) {
      form.setValue('type', queryParams.type);
    }

    if (queryParams.page) {
      form.setValue('page', queryParams.page);
    }
  }, [queryParams, form]);

  return (
    <div className="flex flex-col gap-2 mb-3">
      <Title>Find a Pokémon</Title>

      <Subtitle>You can filter Pokémon by type or name</Subtitle>

      <Form {...form}>
        <form className="flex items-center gap-2">
          <div className="flex items-center gap-2 border border-white rounded-md">
            <SearchIcon className="text-grey w-5 h-5 ml-2" />

            <Input
              control={form.control}
              name="name"
              placeholder="Search by name"
              onClear={() => {
                form.setValue('name', '');
                setQueryParams({
                  name: '',
                });
              }}
              onChange={(e) => {
                form.setValue('name', e.target.value);
                setQueryParams({
                  name: e.target.value,
                });
              }}
              isClearable
            />
          </div>

          <SelectField
            control={form.control}
            name="type"
            placeholder="All types"
            onChange={(value) => {
              form.setValue('type', value);
              setQueryParams({
                type: value,
              });
            }}
          >
            {POKEMON_TYPES.map((type) => (
              <SelectItem key={type} value={type} className={cn(`bg-${type}`)}>
                {type}
              </SelectItem>
            ))}
          </SelectField>

          <Button
            type="submit"
            variant="outline"
            className="bg-secondary text-white cursor-pointer"
          >
            Search
          </Button>

          <Button
            type="button"
            variant="outline"
            className="bg-white text-black cursor-pointer"
            onClick={handleClear}
          >
            Clear
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
