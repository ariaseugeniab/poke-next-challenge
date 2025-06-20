import type {
  DamageRelationsResponse,
  Pokemon,
  PokemonCharacteristic,
  PokemonListResponse,
} from '@/types/pokemon';

// Type for the Pokemon API response structure
type PokemonTypeResponse = {
  pokemon: Array<{
    pokemon: {
      name: string;
      url: string;
    };
  }>;
};

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

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
            url: `${POKEAPI_BASE_URL}/pokemon/${pokemon.id}`,
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
    `${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list');
  }
  return response.json();
}

export async function getPokemonByType(
  type: string
): Promise<PokemonListResponse> {
  const response = await fetch(`${POKEAPI_BASE_URL}/type/${type}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon by type ${type}`);
  }

  const data: PokemonTypeResponse = await response.json();

  // Transform the type API response to match PokemonListResponse format
  return {
    count: data.pokemon.length,
    next: null,
    previous: null,
    results: data.pokemon.map((pokemon) => ({
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url,
    })),
  };
}

export async function getPokemonDetails(id: string): Promise<Pokemon> {
  const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon details for ${id}`);
  }
  return response.json();
}

export async function getPokemonCharacteristics(
  id: string
): Promise<PokemonCharacteristic> {
  const response = await fetch(`${POKEAPI_BASE_URL}/characteristic/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon characteristics for ${id}`);
  }
  return response.json();
}

export async function getPokemonEvolutions(id: string): Promise<Pokemon> {
  const response = await fetch(`${POKEAPI_BASE_URL}/evolution-chain/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon evolution for ${id}`);
  }
  return response.json();
}

export async function getDamageRelations(
  id: string
): Promise<DamageRelationsResponse> {
  const response = await fetch(`${POKEAPI_BASE_URL}/type/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Damage Relations Damages for ${id}`);
  }
  return response.json();
}
