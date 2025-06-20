import { basePath, cn } from '@/lib/utils';
import type { PokemonType } from '@/types/pokemon';
import Image from 'next/image';
import { Badge } from '../shared/badge';

const PokemonTypeLabel = ({
  type,
  className,
}: {
  type: PokemonType;
  className?: string;
}) => (
  <Badge
    variant={type}
    className={cn('flex items-center gap-2 rounded-4xl pl-1', className)}
  >
    <div className="flex items-center gap-2 bg-white rounded-full p-2 h-6 w-6 relative">
      <Image
        src={`${basePath}/icons/${type}.png`}
        alt={type}
        fill
        className="object-contain p-1"
      />
    </div>

    {type}
  </Badge>
);

export default PokemonTypeLabel;
