import { createContext } from "react";

const FavouriteContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return <FavoritesContextProvider>{children}</FavoritesContextProvider>;
}

export default FavoritesContextProvider;
