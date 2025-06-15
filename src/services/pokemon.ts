import type { Pokemon, PokemonListResponse } from '@/types/pokemon';

export async function getPokemonList(
  limit = 20,
  offset = 0,
  name?: string
): Promise<PokemonListResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/pokemon?limit=${limit}&offset=${offset}${name ? `&name=${name}` : ''}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list');
  }
  return response.json();
}

export async function getPokemonDetails(name: string): Promise<Pokemon> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/pokemon/${name}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon details for ${name}`);
  }
  return response.json();
}
