'use client';

import {
  type PropsWithChildren,
  createContext,
  useContext,
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

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const isFavorite = (pokemonId: string) => favorites.includes(pokemonId);

  const toggleFavorite = (pokemonId: string) =>
    isFavorite(pokemonId)
      ? setFavorites((prev) => prev.filter((id) => id !== pokemonId))
      : setFavorites((prev) => [...prev, pokemonId]);

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
