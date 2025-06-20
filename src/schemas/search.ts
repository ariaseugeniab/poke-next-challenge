import z from 'zod';

export const QueryParamsSearchPokemonSchema = z.object({
  name: z.string().optional(),
  page: z.string().optional(),
  type: z.string().optional(),
  orderBy: z.string().optional(),
});

export type QueryParamsSearchPokemonForm = z.infer<
  typeof QueryParamsSearchPokemonSchema
>;

export const POKEMON_ORDER_OPTIONS = [
  { value: 'id-asc', label: 'Pokemon No. (Asc)' },
  { value: 'id-desc', label: 'Pokemon No. (Desc)' },
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'type-asc', label: 'Type (A-Z)' },
  { value: 'type-desc', label: 'Type (Z-A)' },
] as const;
