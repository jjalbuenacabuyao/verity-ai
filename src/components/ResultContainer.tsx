import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useFileContext } from "@/hooks/FileContext";

const ResultContainer = () => {
  const { files, isLoading, setIsLoading } = useFileContext();
  const [result, setResult] = useState();
  useEffect(() => {
    
  }, [])

  return (
    <div className="mb-8 grid gap-6 border-t pt-16">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Results</h2>
        <button
          className="rounded-full border border-sky-400 bg-slate-50 px-4 py-2 text-xs text-sky-500"
          title="Download detection Report (.docx)">
          Download Report
        </button>
      </div>
      <div className="rounded-xl border py-16 text-center shadow-2xl">
        {files && isLoading === false && (
          <span className="text-sm text-slate-400">
            Results will be shown here.
          </span>
        )}

        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default ResultContainer;
