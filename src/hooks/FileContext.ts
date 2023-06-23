import { createContext, useContext, Dispatch, SetStateAction  } from "react";

interface FileContextTypes {
  file: File[] | null;
  setFile: Dispatch<SetStateAction<File[]>>;
}

const FileContext = createContext<FileContextTypes>({
  file: null,
  setFile: () => {},
})

export function useFileContext(): FileContextTypes {
  return useContext(FileContext);
}