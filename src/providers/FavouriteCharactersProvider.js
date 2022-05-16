import { createContext, useState } from "react";

export const FavouriteCharactersContext = createContext([[], () => {}]);

export const FavouriteCharactersProvider = ({ children }) => {
  const favouriteCharacters = useState([]);
  return (
    <FavouriteCharactersContext.Provider value={favouriteCharacters}>
      {children}
    </FavouriteCharactersContext.Provider>
  );
};
