import React, { Dispatch, SetStateAction } from "react";
import Loader from "./Loader";

interface Props {
  files: File[];
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Result = ({ files, setIsLoading, isLoading }: Props) => {
  return (
    <div className="grid gap-6 border-t pt-16 mb-8">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Results</h2>
        <button className="text-xs text-sky-500 border border-sky-400 bg-slate-50 py-2 px-4 rounded-full" title="Download detection Report (.docx)">Download Report</button>
      </div>
      <div className="text-center border rounded-xl py-16 shadow-2xl">
        {files.length === 0 && isLoading === false && (
          <span className="text-slate-400 text-sm">Results will be shown here.</span>
        )}

        { isLoading && <Loader /> }
      </div>
    </div>
  );
};

export default Result;
