import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="bg-white border-white text-black cursor-pointer"
      variant="ghost"
    >
      <ArrowLeftIcon className="w-4 h-4" />
    </Button>
  );
};

export default BackButton;
