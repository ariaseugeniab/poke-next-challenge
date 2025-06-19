export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonListItem = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonType =
  | 'water'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'ghost'
  | 'fire'
  | 'ice'
  | 'grass'
  | 'bug'
  | 'fighting'
  | 'normal'
  | 'dark'
  | 'steel'
  | 'rock'
  | 'psychic'
  | 'ground'
  | 'poison'
  | 'flying';

export const POKEMON_TYPES = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
] as const;

export type PokemonCharacteristic = {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: {
    name: string;
    url: string;
  };
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
    };
  }[];
};

export type DamageRelations = {
  damage_relations: {
    double_damage_from: {
      name: string;
      url: string;
    }[];
    double_damage_to: {
      name: string;
      url: string;
    }[];
  };
};
