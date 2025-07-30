import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PokemonTypeLabel from '@/components/pokemon/pokemon-type-label';
import type { PokemonType } from '@/types/pokemon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pokemon/PokemonTypeLabel',
  component: PokemonTypeLabel,
  parameters: {
    className: 'w-full',
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: [
        'bug',
        'dark',
        'dragon',
        'electric',
        'fairy',
        'fighting',
        'fire',
        'flying',
        'ghost',
        'grass',
        'ground',
        'ice',
        'normal',
        'poison',
        'psychic',
        'rock',
        'steel',
        'water',
      ] as PokemonType[],
    },
  },
} satisfies Meta<typeof PokemonTypeLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Bug: Story = {
  args: {
    type: 'bug',
  },
};

export const Dark: Story = {
  args: {
    type: 'dark',
  },
};

export const Dragon: Story = {
  args: {
    type: 'dragon',
  },
};

export const Electric: Story = {
  args: {
    type: 'electric',
  },
};

export const Fairy: Story = {
  args: {
    type: 'fairy',
  },
};

export const Fighting: Story = {
  args: {
    type: 'fighting',
  },
};

export const Fire: Story = {
  args: {
    type: 'fire',
  },
};

export const Flying: Story = {
  args: {
    type: 'flying',
  },
};

export const Ghost: Story = {
  args: {
    type: 'ghost',
  },
};

export const Grass: Story = {
  args: {
    type: 'grass',
  },
};

export const Ground: Story = {
  args: {
    type: 'ground',
  },
};

export const Ice: Story = {
  args: {
    type: 'ice',
  },
};

export const Normal: Story = {
  args: {
    type: 'normal',
  },
};

export const Poison: Story = {
  args: {
    type: 'poison',
  },
};

export const Psychic: Story = {
  args: {
    type: 'psychic',
  },
};

export const Rock: Story = {
  args: {
    type: 'rock',
  },
};

export const Steel: Story = {
  args: {
    type: 'steel',
  },
};

export const Water: Story = {
  args: {
    type: 'water',
  },
};

// Example with custom className
export const CustomStyling: Story = {
  args: {
    type: 'fire',
    className: 'text-lg font-bold',
  },
};
