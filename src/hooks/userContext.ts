import { CurrentUser } from "@/types";
import { useContext, createContext } from "react";

const CurrentUserContext = createContext<CurrentUser | null>(null);

export function useCurrentUserContext() {
  const context = useContext(CurrentUserContext);
  return context;
}

export default CurrentUserContext;