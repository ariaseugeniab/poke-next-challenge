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
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export const POKEMON_TYPES = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
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

export type DamageRelationsResponse = {
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

export type DamageRelations = {
  double_damage_from: {
    name: string;
    url: string;
  }[];
  double_damage_to: {
    name: string;
    url: string;
  }[];
};
