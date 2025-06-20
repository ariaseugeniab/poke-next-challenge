import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBack();
    }
  };

  return (
    <Button
      onClick={handleBack}
      onKeyDown={handleKeyDown}
      className="text-white cursor-pointer border-2 border-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      variant="ghost"
      aria-label="Go back to previous page"
      title="Go back"
    >
      <ArrowLeftIcon className="w-10 h-10 fill-white" aria-hidden="true" />
      <span className="sr-only">Back</span>
    </Button>
  );
};

export default BackButton;
