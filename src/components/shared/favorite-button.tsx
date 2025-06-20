import { useUserContext } from '@/context/user-context';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { Button } from './button';

interface FavoriteButtonProps {
  pokemonId: string;
  className?: string;
}

const FavoriteButton = ({ pokemonId, className }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useUserContext();
  const isFav = isFavorite(pokemonId);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(pokemonId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(pokemonId);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        'absolute top-2 right-2 z-10 hover:cursor-pointer border-2 border-white rounded-full bg-gray transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
        isFav && 'border-fighting',
        className
      )}
      onClick={handleFavoriteClick}
      onKeyDown={handleKeyDown}
      aria-label={
        isFav
          ? `Remove Pokémon ${pokemonId} from favorites`
          : `Add Pokémon ${pokemonId} to favorites`
      }
      aria-pressed={isFav}
      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={cn(
          'h-5 w-5 transition-all duration-300',
          isFav ? 'fill-fighting text-fighting' : 'fill-white text-white'
        )}
        aria-hidden="true"
      />
      <span className="sr-only">
        {isFav ? 'Remove from favorites' : 'Add to favorites'}
      </span>
    </Button>
  );
};

export default FavoriteButton;
