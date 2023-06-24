import { createContext, useContext, Dispatch, SetStateAction  } from "react";

interface FileContextTypes {
  files: File[] | null;
  setFiles: Dispatch<SetStateAction<File[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FileContext = createContext<FileContextTypes>({
  files: null,
  setFiles: () => { },
  isLoading: false,
  setIsLoading: () => {}
})

export function useFileContext(): FileContextTypes {
  return useContext(FileContext);
}

export default FileContext;