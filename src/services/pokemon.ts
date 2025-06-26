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
  }

  const response = await fetch(
    `${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error('Unable to load Pokemon list. Please try again later.');
  }
  return response.json();
}

export async function getPokemonByType(
  type: string
): Promise<PokemonListResponse> {
  const response = await fetch(`${POKEAPI_BASE_URL}/type/${type}`);
  if (!response.ok) {
    throw new Error(
      `Pokemon type "${type}" not found. Please check the type name.`
    );
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
    throw new Error('Unable to load Pokemon details. Please try again later.');
  }
  return response.json();
}

export async function getPokemonCharacteristics(
  id: string
): Promise<PokemonCharacteristic> {
  const response = await fetch(`${POKEAPI_BASE_URL}/characteristic/${id}`);
  if (!response.ok) {
    throw new Error(
      'Unable to load Pokemon characteristics. Please try again later.'
    );
  }
  return response.json();
}

export async function getPokemonEvolutions(id: string): Promise<Pokemon> {
  const response = await fetch(`${POKEAPI_BASE_URL}/evolution-chain/${id}`);
  if (!response.ok) {
    throw new Error(
      'Unable to load Pokemon evolution data. Please try again later.'
    );
  }
  return response.json();
}

export async function getDamageRelations(
  id: string
): Promise<DamageRelationsResponse> {
  const response = await fetch(`${POKEAPI_BASE_URL}/type/${id}`);

  if (!response.ok) {
    throw new Error('Unable to load damage relations. Please try again later.');
  }
  return response.json();
}
