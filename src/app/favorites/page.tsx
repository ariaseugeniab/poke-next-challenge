import Subtitle from '@/components/shared/subtitle';
import Title from '@/components/shared/title';
import Image from 'next/image';

const FavouritesPage = () => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Image
        src="/utils/magikarp.png"
        alt="Magikarp"
        width={100}
        height={100}
      />

      <Title>You don&apos;t have your favorite Pokémon</Title>

      <Subtitle>
        Click the heart icon on your favorite Pokémon and they will appear here.
      </Subtitle>
    </div>
  );
};

export default FavouritesPage;
