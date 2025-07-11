import type { Pokemon } from '@/types/pokemon';
import { BicepsFlexed, Ruler, Weight } from 'lucide-react';

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => (
  <div className="flex flex-col gap-2 w-full my-4">
    <p className="text-lg font-semibold">Stats:</p>

    <div className="flex gap-5 items-center my-2">
      <p className="flex items-center gap-2">
        <Weight className="text-gray-500" />
        Weight: {pokemon?.weight} kg.
      </p>

      <p className="flex items-center gap-2">
        <Ruler className="text-gray-500" />
        Height: {pokemon?.height} m.
      </p>
    </div>

    <div className="flex gap-2 items-center">
      <BicepsFlexed className="text-gray-500" />
      <p>Abilities:</p>

      <div className="flex flex-wrap items-center gap-2 my-2 w-full">
        {pokemon?.abilities.map((ability, index) => (
          <div key={ability.ability.name} className="flex items-center gap-2">
            <p className="text-sm capitalize text-gray-500">
              {ability.ability.name}
            </p>

            {index < pokemon.abilities.length - 1 && (
              <span className="text-gray-500"> - </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PokemonStats;
