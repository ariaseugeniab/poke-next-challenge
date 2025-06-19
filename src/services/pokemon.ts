import type {
  DamageRelationsDamage,
  Pokemon,
  PokemonCharacteristic,
  PokemonListResponse,
} from '@/types/pokemon';

export async function getPokemonList(
  limit = 20,
  offset = 0,
  name?: string
): Promise<PokemonListResponse> {
  if (name) {
    try {
      const pokemon = await getPokemonDetails(name);
      return {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: pokemon.name,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pokemon/${pokemon.id}`,
          },
        ],
      };
    } catch {
      return {
        count: 0,
        next: null,
        previous: null,
        results: [],
      };
    }
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
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

export async function getPokemonCharacteristics(
  id: string
): Promise<PokemonCharacteristic> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/characteristic/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon characteristics for ${id}`);
  }
  return response.json();
}

export async function getPokemonEvolutions(id: string): Promise<Pokemon> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/evolution-chain/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon evolution for ${id}`);
  }
  return response.json();
}

export async function getDamageRelationsDamages(
  id: string
): Promise<DamageRelationsDamage> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/type/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Damage Relations Damages for ${id}`);
  }
  return response.json();
}
