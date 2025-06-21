'use client';

import useIsMobile from '@/hooks/use-is-mobile';
import { basePath } from '@/lib/utils';
import Image from 'next/image';

const Loading = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Image
        src={`${basePath}/utils/loading.gif`}
        alt="Loading"
        width={80}
        height={80}
        className="mx-auto mt-5"
      />
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src={`${basePath}/utils/loading.gif`}
        alt="Loading"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Loading;
