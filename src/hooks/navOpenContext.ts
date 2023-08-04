import { createContext, useContext } from "react";
import { Dispatch, SetStateAction } from "react";

const NavOpenContext = createContext<{
  value: boolean;
  updater: Dispatch<SetStateAction<boolean>>
} | null>(null);

export function useNavOpenContext() {
  const context = useContext(NavOpenContext);
  return context;
}

export default NavOpenContext;