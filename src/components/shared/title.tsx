'use client';

import { cn } from '@/lib/utils';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Title = ({ children, className, id }: TitleProps) => (
  <h3 className={cn('text-2xl mb-2', className)} id={id}>
    {children}
  </h3>
);

export default Title;
