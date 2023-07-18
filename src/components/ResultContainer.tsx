"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { getTextFromFiles } from "@/utils";
import { DetectionResult } from "@/types";
import Result from "./Result";
import Button from "./Button";

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
    <div className="mb-8 border-t pt-16 lg:pt-0 lg:border-t-0 lg:mb-0 lg:mt-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold">Results</h2>
        <Button text="Download Report" variant="secondary" className="text-sm" />
      </div>

      <div className="h-full">
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
            {results.map(({ filename, result }) => (
              <Result
                key={filename}
                filename={filename}
                aiGeneratedPercentage={result.aiGeneratedPercentage}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultContainer;
