'use client';

import type { PokemonType } from '@/types/pokemon';

const PokemonColorBackground = ({
  pokemonTypeColor,
}: { pokemonTypeColor: PokemonType }) => (
  <div
    className={`absolute inset-0 bg-${pokemonTypeColor} opacity-50 rounded-lg md:rounded-b-none rounded-b-full h-[280px] overflow-hidden`}
  >
    <div
      className="absolute inset-0 md:rounded-b-none rounded-b-full h-full w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, white 100%)',
      }}
    />
  </div>
);

export default PokemonColorBackground;
