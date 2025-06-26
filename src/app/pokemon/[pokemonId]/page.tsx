import PokemonDetails from '@/components/pokemon-details/pokemon-details';

const PokemonPage = () => <PokemonDetails />;

export default PokemonPage;

export async function generateStaticParams() {
  const count = await fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((data) => data.count);

  const pokemonIds = Array.from({ length: count }, (_, i) => ({
    pokemonId: (i + 1).toString(),
  }));

  return pokemonIds;
}
