import { useContext } from "react";
import { FavouritesContext } from "./FavouritesContext";
import { ActiveWordContext } from "./ActiveWordContext";

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const useActiveWord = () => {
  return useContext(ActiveWordContext);
};
