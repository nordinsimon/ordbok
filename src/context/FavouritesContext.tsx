import { Dispatch, SetStateAction, createContext, useState } from "react";

import { Word } from "../types";
import { ContextInterface } from "../types";

interface FavouritesInterface {
  favourites: Word[];
  setFavourites: Dispatch<SetStateAction<Word[]>>;
}

export const FavouritesContext = createContext<FavouritesInterface>(null!);

export const FavouritesProvider = ({ children }: ContextInterface) => {
  const [favourites, setFavourites] = useState<Word[]>([]);
  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};
