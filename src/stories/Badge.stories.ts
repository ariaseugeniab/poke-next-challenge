import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from '@/components/shared/badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Badge',
  component: Badge,
  parameters: {
    className: 'w-full',
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'water',
        'dragon',
        'electric',
        'fairy',
        'ghost',
        'fire',
        'ice',
        'grass',
        'bug',
        'fighting',
        'normal',
        'dark',
        'steel',
        'rock',
        'psychic',
        'ground',
        'poison',
        'flying',
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Badge',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Badge',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Badge',
  },
};

// Pokemon Type Variants
export const Water: Story = {
  args: {
    variant: 'water',
    children: 'Water',
  },
};

export const Dragon: Story = {
  args: {
    variant: 'dragon',
    children: 'Dragon',
  },
};

export const Electric: Story = {
  args: {
    variant: 'electric',
    children: 'Electric',
  },
};

export const Fairy: Story = {
  args: {
    variant: 'fairy',
    children: 'Fairy',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Fire: Story = {
  args: {
    variant: 'fire',
    children: 'Fire',
  },
};

export const Ice: Story = {
  args: {
    variant: 'ice',
    children: 'Ice',
  },
};

export const Grass: Story = {
  args: {
    variant: 'grass',
    children: 'Grass',
  },
};

export const Bug: Story = {
  args: {
    variant: 'bug',
    children: 'Bug',
  },
};

export const Fighting: Story = {
  args: {
    variant: 'fighting',
    children: 'Fighting',
  },
};

export const Normal: Story = {
  args: {
    variant: 'normal',
    children: 'Normal',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
};

export const Steel: Story = {
  args: {
    variant: 'steel',
    children: 'Steel',
  },
};

export const Rock: Story = {
  args: {
    variant: 'rock',
    children: 'Rock',
  },
};

export const Psychic: Story = {
  args: {
    variant: 'psychic',
    children: 'Psychic',
  },
};

export const Ground: Story = {
  args: {
    variant: 'ground',
    children: 'Ground',
  },
};

export const Poison: Story = {
  args: {
    variant: 'poison',
    children: 'Poison',
  },
};

export const Flying: Story = {
  args: {
    variant: 'flying',
    children: 'Flying',
  },
};

// Example with asChild prop
export const AsChild: Story = {
  args: {
    variant: 'default',
    asChild: true,
    children: 'Link Badge',
  },
};

// Example with custom className
export const CustomStyling: Story = {
  args: {
    variant: 'default',
    className: 'text-lg font-bold',
    children: 'Custom Badge',
  },
};
