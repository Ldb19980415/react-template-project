import { createContext } from "react";

interface authDictType {
  [key: string]: any;
}

export const GlobalContext = createContext<{
  theme?: string;
  authDict?: authDictType;
  setTheme?: (value: string) => void;
}>({});
