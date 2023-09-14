import { FavouritesProvider } from "./FavouritesContext";
import { ActiveWordProvider } from "./ActiveWordContext";

import { ContextInterface } from "../types";

const AllContexts = ({ children }: ContextInterface) => {
  return (
    <FavouritesProvider>
      <ActiveWordProvider>{children}</ActiveWordProvider>
    </FavouritesProvider>
  );
};

export default AllContexts;
