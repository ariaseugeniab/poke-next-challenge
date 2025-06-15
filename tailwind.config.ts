import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        water: '#5090D6',
        dragon: '#0B6DC3',
        electric: '#F8D030',
        fairy: '#EE99AC',
        ghost: '#705898',
        fire: '#F08030',
        ice: '#98D8D8',
        grass: '#78C850',
        bug: '#A8B820',
        fighter: '#CE416B',
        normal: '#919AA2',
        nocturne: '#5A5465',
        metal: '#B8B8D0',
        stone: '#C5B78C',
        psychic: '#FA7179',
        earth: '#D97845',
        poison: '#B567CE',
        flying: '#89AAE3',
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
