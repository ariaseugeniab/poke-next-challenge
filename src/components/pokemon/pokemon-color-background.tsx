import type { PokemonType } from '@/types/pokemon';

const PokemonColorBackground = ({
  pokemonTypeColor,
}: { pokemonTypeColor: PokemonType }) => (
  <div
    className={`absolute inset-0 bg-${pokemonTypeColor} opacity-50 rounded-lg rounded-b-full w-[110%] left-[-5%] h-[250px]`}
  >
    <div
      className="absolute inset-0 rounded-b-full h-full w-full"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, #FFF 100%)',
      }}
    />
  </div>
);

export default PokemonColorBackground;
