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
  | 'fighter'
  | 'normal'
  | 'nocturne'
  | 'metal'
  | 'stone'
  | 'psychic'
  | 'earth'
  | 'poison'
  | 'flying';
