'use client';

import { basePath, cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

interface ErrorDisplayProps {
  error: Error | null;
  className?: string;
}

const ErrorDisplay = ({ error, className = '' }: ErrorDisplayProps) => {
  if (!error) return null;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-6 text-center',
        className
      )}
    >
      <Image
        src={`${basePath}/utils/porygonz-error.png`}
        alt="Error"
        width={200}
        height={200}
      />

      <p className="text-lg font-semibold my-5">An Error Occurred :(</p>

      <p className="text-gray-600 mb-4 max-w-md">{error.message}</p>

      <Link href="/">
        <Button variant="link" className="text-lg font-semibold">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorDisplay;
