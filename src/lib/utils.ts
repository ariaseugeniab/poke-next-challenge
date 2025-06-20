import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FAVORITES_KEY = 'favorites';

export const favoritesStorage = {
  get: (): string[] => {
    if (typeof window === 'undefined') return [];

    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      console.error('Failed to get favorites');
      return [];
    }
  },

  set: (favorites: string[]): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      console.error('Failed to set favorites');
    }
  },
};
