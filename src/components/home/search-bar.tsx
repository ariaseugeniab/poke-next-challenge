import { useQueryParams } from '@/hooks/use-query-params';
import {
  type QueryParamsSearchPokemonForm,
  QueryParamsSearchPokemonSchema,
} from '@/schemas/search';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Form } from '../shared/forms/form';
import Input from '../shared/forms/input';
import Subtitle from '../shared/subtitle';
import Title from '../shared/title';

const SearchBar = () => {
  const { queryParams, setQueryParams } = useQueryParams(
    QueryParamsSearchPokemonSchema,
    {
      debouncedValues: ['name'],
    }
  );

  const form = useForm<QueryParamsSearchPokemonForm>({
    resolver: zodResolver(QueryParamsSearchPokemonSchema),
    defaultValues: {
      name: queryParams.name ?? '',
    },
  });

  return (
    <div className="flex flex-col gap-2 mb-3">
      <Title>Find a Pokémon</Title>

      <Subtitle>
        You can filter Pokémon by type, species, ability, and more
      </Subtitle>

      <Form {...form}>
        <form className="flex items-center gap-2">
          <div className="flex items-center gap-2 border border-white p-2 rounded-md">
            <SearchIcon className="text-grey w-5 h-5" />

            <Input
              control={form.control}
              name="name"
              placeholder="Search by name"
              onChange={(e) => setQueryParams({ name: e.target.value })}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
