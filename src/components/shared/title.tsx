import { cn } from '@/lib/utils';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => (
  <h3 className={cn('text-2xl mb-2', className)}>{children}</h3>
);

export default Title;
