'use client';

import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserContextType = {
  favorites: string[];
  toggleFavorite: (pokemonId: string) => void;
  isFavorite: (pokemonId: string) => boolean;
};

export const UserContext = createContext<UserContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

const FAVORITES_KEY = 'favorites';

const getFavorites = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    console.error('Failed to get favorites');
    return [];
  }
};

const setFavorites = (favorites: string[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch {
    console.error('Failed to set favorites');
  }
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavoritesState] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load favorites from localStorage only on client side
  useEffect(() => {
    setMounted(true);
    const storedFavorites = getFavorites();
    setFavoritesState(storedFavorites);
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    if (mounted) {
      setFavorites(favorites);
    }
  }, [favorites, mounted]);

  const isFavorite = (pokemonId: string) => favorites.includes(pokemonId);

  const toggleFavorite = (pokemonId: string) =>
    isFavorite(pokemonId)
      ? setFavoritesState((prev) => prev.filter((id) => id !== pokemonId))
      : setFavoritesState((prev) => [...prev, pokemonId]);

  return (
    <UserContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
