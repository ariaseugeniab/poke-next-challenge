import { cn } from '@/lib/utils';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => (
  <h1 className={cn('text-2xl mb-2', className)}>{children}</h1>
);

export default Title;
