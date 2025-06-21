'use client';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        water: 'bg-water border-water text-white',
        dragon: 'bg-dragon border-dragon text-white',
        electric: 'bg-electric border-electric',
        fairy: 'bg-fairy border-fairy',
        ghost: 'bg-ghost border-ghost text-white',
        fire: 'bg-fire border-fire',
        ice: 'bg-ice border-ice',
        grass: 'bg-grass border-grass',
        bug: 'bg-bug border-bug',
        fighting: 'bg-fighting border-fighting text-white',
        normal: 'bg-normal border-normal',
        dark: 'bg-dark border-dark text-white',
        steel: 'bg-steel border-steel',
        rock: 'bg-rock border-rock',
        psychic: 'bg-psychic border-psychic',
        ground: 'bg-ground border-ground',
        poison: 'bg-poison border-poison',
        flying: 'bg-flying border-flying',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
