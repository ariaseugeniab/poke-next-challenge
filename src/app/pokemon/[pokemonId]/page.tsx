import PokemonDetails from '@/components/pokemon-details/pokemon-details';

const PokemonPage = () => <PokemonDetails />;

export default PokemonPage;

export async function generateStaticParams() {
  // Count: 1302 from https://pokeapi.co/api/v2/pokemon
  const count = 1302;

  const pokemonIds = Array.from({ length: count }, (_, i) => ({
    pokemonId: (i + 1).toString(),
  }));

  return pokemonIds;
}
