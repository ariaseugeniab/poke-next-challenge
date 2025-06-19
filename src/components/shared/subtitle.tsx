import { cn } from '@/lib/utils';

const Subtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h2 className={cn('text-sm text-gray-500', className)}>{children}</h2>;

export default Subtitle;
