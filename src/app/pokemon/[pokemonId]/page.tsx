import PokemonDetails from '@/components/pokemon-details/pokemon-details';

const PokemonPage = () => <PokemonDetails />;

export default PokemonPage;

export async function generateStaticParams() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();

  const pokemonIds = Array.from({ length: data.count }, (_, i) => ({
    pokemonId: (i + 1).toString(),
  }));

  return pokemonIds;
}
