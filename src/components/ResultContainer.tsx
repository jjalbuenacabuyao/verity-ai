import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Loader from "./Loader";
import { getTextFromFiles } from "@/utils";
import { DetectionResult } from "@/types";
import Result from "./Result";

interface Props {
  files: File[];
}

const ResultContainer = ({ files }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<
    { filename: string; result: DetectionResult }[]
  >([]);

  useEffect(() => {
    if (files?.length !== 0) {
      setIsLoading(true);
      const result = files!.map(async (file) => {
        const extractedText = await getTextFromFiles(file);

        const response = await fetch("/api/detectionHandler", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ extractedText }),
        });

        const data: DetectionResult = await response.json();

        return {
          filename: file.name,
          result: data,
        };
      });

      // Promise.all(result).then(values => {
      //   setResults(values);
      //   setIsLoading(false);
      // })

      Promise.allSettled(result).then((values) => {
        const fulfilledValues = values
          .filter((value) => value.status === "fulfilled")
          .map((value) => {
            if (value.status === "fulfilled") {
              return value.value;
            }
          });
        //@ts-ignore
        setResults(fulfilledValues);
        setIsLoading(false);

        const rejectedValues = values.filter(
          (value) => value.status === "rejected"
        );
        // if (rejectedValues.length > 0) {
        //   // Handle the errors here
        //   rejectedValues.forEach(value => {
        //     console.error(`Error processing file: ${value.reason}`);
        //   });
        // }
      });
    }
  }, [files, setIsLoading]);

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

      <div>
        {files?.length === 0 && results.length === 0 && isLoading === false && (
          <p className="py-6 text-center text-sm text-slate-400">
            Results will be shown here.
          </p>
        )}

        {isLoading && <Loader />}

        {results.length !== 0 && isLoading === false && (
          <div className="grid gap-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Filename</span>
              <span>% of AI-generated text</span>
            </div>
            {results.map((item) => (
              <Result
                key={item.filename}
                filename={item.filename}
                aiGeneratedPercentage={item.result.aiGeneratedPercentage}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultContainer;
