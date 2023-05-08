import { createContext, useContext, Dispatch, SetStateAction  } from "react";

interface FileContextTypes {
  file: FileList | null;
  setFile: Dispatch<SetStateAction<FileList>>;
}

const FileContext = createContext<FileContextTypes>({
  file: null,
  setFile: () => {},
})

export function useFileContext(): FileContextTypes {
  return useContext(FileContext);
}