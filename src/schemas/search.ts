import z from 'zod';

export const QueryParamsSearchPokemonSchema = z.object({
  name: z.string().optional(),
  page: z.string().optional(),
  type: z.string().optional(),
});

export type QueryParamsSearchPokemonForm = z.infer<
  typeof QueryParamsSearchPokemonSchema
>;
