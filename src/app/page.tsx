import HomeComponent from '@/components/home/home-component';
import Loading from '@/components/shared/loading';
import { Suspense } from 'react';

const Page = () => (
  <div className="space-y-4 pt-10 w-full">
    <Suspense fallback={<Loading />}>
      <HomeComponent />
    </Suspense>
  </div>
);

export default Page;
