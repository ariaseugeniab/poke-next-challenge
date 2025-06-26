'use client';

import {
  getDamageRelations,
  getPokemonByType,
  getPokemonCharacteristics,
  getPokemonDetails,
  getPokemonEvolutions,
  getPokemonList,
} from '@/services/pokemon';
import { useQuery } from '@tanstack/react-query';

export function usePokemonList(
  limit = 20,
  offset = 0,
  name?: string,
  type?: string
) {
  return useQuery({
    queryKey: ['pokemon-list', limit, offset, name, type],
    queryFn: () => {
      if (type && !name) {
        // If type is specified and no name, get Pokemon by type
        return getPokemonByType(type);
      }
      // Otherwise use the regular list endpoint
      return getPokemonList(limit, offset, name);
    },
    enabled: !!name || !!type || !!limit || !!offset,
    retry: false,
  });
}

export function usePokemonByType(type: string) {
  return useQuery({
    queryKey: ['pokemon-by-type', type],
    queryFn: () => getPokemonByType(type),
    enabled: !!type,
  });
}

export function usePokemonDetails(id: string) {
  return useQuery({
    queryKey: ['pokemon-details', id],
    queryFn: () => getPokemonDetails(id),
    enabled: !!id,
  });
}

export function usePokemonCharacteristics(id: string) {
  return useQuery({
    queryKey: ['pokemon-characteristics', id],
    queryFn: () => getPokemonCharacteristics(id),
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

export function usePokemonDetailsList(ids: string[]) {
  return useQuery({
    queryKey: ['pokemon-details-list', ids],
    queryFn: async () => {
      const details = await Promise.all(ids.map((id) => getPokemonDetails(id)));
      return details;
    },
    enabled: ids.length > 0,
  });
}

export function useDamageRelations(id: string) {
  return useQuery({
    queryKey: ['damage-relations', id],
    queryFn: async () => {
      const data = await getDamageRelations(id);
      return data.damage_relations;
    },
    enabled: !!id,
  });
}
