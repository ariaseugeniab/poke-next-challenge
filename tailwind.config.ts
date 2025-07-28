import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E98C49',
        secondary: '#045187',
        black: '#020202',
        grey: '#ABABAB',
        'light-grey': '#D7D7D7',
        white: '#F6F6F6',
        bug: '#91C12F',
        dark: '#5A5465',
        dragon: '#0B6DC3',
        electric: '#F8D030',
        fairy: '#EC8FE6',
        fighting: '#CE416B',
        fire: '#FF9D55',
        flying: '#89AAE3',
        ghost: '#5269AD',
        grass: '#78C850',
        ground: '#D97845',
        ice: '#98D8D8',
        normal: '#919AA2',
        poison: '#B567CE',
        psychic: '#FA7179',
        rock: '#C5B78C',
        steel: '#5A8EA2',
        water: '#5090D6',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};

export default config;
