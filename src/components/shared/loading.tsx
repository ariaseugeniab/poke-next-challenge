import Image from 'next/image';

const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <Image src="/utils/loading.gif" alt="Loading" width={200} height={200} />
  </div>
);

export default Loading;
