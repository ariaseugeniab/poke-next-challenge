import PokemonTypeLabel from '@/components/pokemon/pokemon-type-label';
import type { PokemonType } from '@/types/pokemon';
import type { DamageRelations } from '@/types/pokemon';

const Damages = ({
  damageRelationsDamages,
}: { damageRelationsDamages: DamageRelations }) => (
  <div>
    <p className="text-lg font-semibold">Damage Relations:</p>

    <p className="text-sm text-gray-500">Double Damage From:</p>
    <div className="flex gap-2 mt-2">
      {damageRelationsDamages?.damage_relations.double_damage_from.map(
        (damage) => (
          <PokemonTypeLabel
            key={damage.name}
            type={damage.name as PokemonType}
          />
        )
      )}
    </div>

    <p className="text-sm text-gray-500">Double Damage To:</p>
    <div className="flex gap-2 mt-2">
      {damageRelationsDamages?.damage_relations.double_damage_to.map(
        (damage) => (
          <PokemonTypeLabel
            key={damage.name}
            type={damage.name as PokemonType}
          />
        )
      )}
    </div>
  </div>
);

export default Damages;
