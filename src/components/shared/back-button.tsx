import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="text-white cursor-pointer border border-white rounded-full"
      variant="ghost"
    >
      <ArrowLeftIcon className="w-10 h-10" />
    </Button>
  );
};

export default BackButton;
