import { getPokemonDetails, getPokemonList } from '@/services/pokemon';
import { useQuery } from '@tanstack/react-query';

export function usePokemonList(limit = 20, offset = 0, name?: string) {
  return useQuery({
    queryKey: ['pokemon-list', limit, offset, name],
    queryFn: () => getPokemonList(limit, offset, name),
  });
}

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: ['pokemon-details', name],
    queryFn: () => getPokemonDetails(name),
    enabled: !!name,
  });
}

export function usePokemonDetailsList(names: string[]) {
  return useQuery({
    queryKey: ['pokemon-details-list', names],
    queryFn: async () => {
      const details = await Promise.all(
        names.map((name) => getPokemonDetails(name))
      );
      return details;
    },
    enabled: names.length > 0,
  });
}
