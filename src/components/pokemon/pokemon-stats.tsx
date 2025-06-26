import type { Pokemon } from '@/types/pokemon';
import { BicepsFlexed, Ruler, Weight } from 'lucide-react';

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => (
  <div className="flex flex-col gap-2 w-full my-4">
    <div className="flex gap-5 items-center my-2">
      <p className="flex items-center gap-2">
        <Weight />
        Weight: {pokemon?.weight} kg.
      </p>

      <p className="flex items-center gap-2">
        <Ruler />
        Height: {pokemon?.height} m.
      </p>
    </div>

    <div className="flex gap-2 items-center">
      <BicepsFlexed />
      <p>Abilities:</p>

      <div className="flex flex-wrap items-center gap-2 my-2">
        {pokemon?.abilities.map((ability, index) => (
          <>
            <p
              key={ability.ability.name}
              className="text-sm capitalize text-gray-500"
            >
              {ability.ability.name}
            </p>

            {index < pokemon.abilities.length - 1 && (
              <span className="text-gray-500"> - </span>
            )}
          </>
        ))}
      </div>
    </div>
  </div>
);

export default PokemonStats;
