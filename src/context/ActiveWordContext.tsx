import { Dispatch, SetStateAction, createContext, useState } from "react";

import { ActiveWord } from "../types";
import { ContextInterface } from "../types";

interface ActiveWordInterface {
  activeWord: ActiveWord;
  setActiveWord: Dispatch<SetStateAction<ActiveWord>>;
}

export const ActiveWordContext = createContext<ActiveWordInterface>(null!);

export const ActiveWordProvider = ({ children }: ContextInterface) => {
  const [activeWord, setActiveWord] = useState<ActiveWord>();
  return (
    <ActiveWordContext.Provider value={{ activeWord, setActiveWord }}>
      {children}
    </ActiveWordContext.Provider>
  );
};
