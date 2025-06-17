import { useUserContext } from '@/context/user-context';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { Button } from './button';

interface FavoriteButtonProps {
  pokemonId: string;
}

const FavoriteButton = ({ pokemonId }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useUserContext();
  const isFav = isFavorite(pokemonId);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(pokemonId);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        'absolute top-2 right-2 z-10 hover:cursor-pointer border border-white rounded-full bg-gray transition-all duration-300',
        isFav && 'border-fighting'
      )}
      onClick={handleFavoriteClick}
    >
      <Heart
        className={cn(
          'h-5 w-5 transition-all duration-300',
          isFav ? 'fill-fighting text-fighting' : 'text-white'
        )}
      />
    </Button>
  );
};

export default FavoriteButton;
