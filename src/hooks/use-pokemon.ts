import {
  getPokemonDetails,
  getPokemonEvolutions,
  getPokemonList,
} from '@/services/pokemon';
import { useQuery } from '@tanstack/react-query';

export function usePokemonList(limit = 20, offset = 0, name?: string) {
  return useQuery({
    queryKey: ['pokemon-list', limit, offset, name],
    queryFn: () => getPokemonList(limit, offset, name),
  });
}

export function usePokemonDetails(id: string) {
  return useQuery({
    queryKey: ['pokemon-details', id],
    queryFn: () => getPokemonDetails(id),
    enabled: !!id,
  });
}

export function usePokemonEvolution(id: string) {
  return useQuery({
    queryKey: ['pokemon-evolution', id],
    queryFn: () => getPokemonEvolutions(id),
    enabled: !!id,
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
