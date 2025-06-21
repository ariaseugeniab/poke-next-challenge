import PokemonTypeLabel from '@/components/pokemon/pokemon-type-label';
import type { PokemonType } from '@/types/pokemon';
import type { DamageRelations } from '@/types/pokemon';

const Damages = ({
  damageRelationsDamages,
}: { damageRelationsDamages: DamageRelations }) => {
  if (
    damageRelationsDamages.double_damage_from.length > 0 ||
    damageRelationsDamages.double_damage_to.length > 0
  ) {
    return (
      <div>
        <p className="text-lg font-semibold">Damage Relations:</p>

        {damageRelationsDamages?.double_damage_from && (
          <div className="md:my-5 my-2">
            <p className="text-sm text-gray-500">Double Damage From:</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {damageRelationsDamages?.double_damage_from.map((damage) => (
                <PokemonTypeLabel
                  key={damage.name}
                  type={damage.name as PokemonType}
                />
              ))}
            </div>
          </div>
        )}

        {damageRelationsDamages?.double_damage_to.length > 0 && (
          <div className="md:my-5 my-2">
            <p className="text-sm text-gray-500">Double Damage To:</p>

            <div className="flex gap-2 mt-2 flex-wrap">
              {damageRelationsDamages?.double_damage_to.map((damage) => (
                <PokemonTypeLabel
                  key={damage.name}
                  type={damage.name as PokemonType}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Damages;
