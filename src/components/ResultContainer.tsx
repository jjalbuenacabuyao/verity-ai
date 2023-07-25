"use client";

import React, { useEffect, useState } from "react";
import { getTextFromFiles } from "@/utils";
import { DetectionResult, ResultWithFilename } from "@/types";
import Result from "./Result";
import Toast from "./Toast";
import DownloadReportButton from "./DownloadReportButton";
import Loader from "./Loader";
import Accordion from "./Accordion";

interface Props {
  files: File[];
}

const ResultContainer = ({ files }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [errorResult, setErrorResult] = useState<string[]>([]);
  const [results, setResults] = useState<ResultWithFilename[]>([]);

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

        if (rejectedValues.length > 0) {
          const filenames = files.map((file) => file.name);
          const fulfilledFiles = fulfilledValues.map(
            (value) => value?.filename
          );
          const rejectedFiles = filenames.filter(
            (filename) => !fulfilledFiles.includes(filename)
          );
          setErrorResult(rejectedFiles);
          setIsToastOpen(true);
          setIsLoading(false);
        }
      });
    }
  }, [files, setIsLoading]);

  return (
    <div className="mb-8 border-t pt-16 lg:mb-0 lg:border-t-0 lg:pt-0">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bold">Results</h2>
        <DownloadReportButton results={results} />
      </div>

      <div className="h-full">
        {results.length === 0 && isLoading === false && (
          <p className="py-6 text-center text-sm text-slate-400 lg:pt-10 lg:text-base">
            Results will be shown here.
          </p>
        )}

        {isLoading && <Loader />}

        {results.length !== 0 && isLoading === false && (
          <>
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span>Filename</span>
              <span>% of AI-generated text</span>
            </div>
            <Accordion data={results} />
          </>
        )}
      </div>

      {errorResult.length > 0 &&
        errorResult.map((filename, index) => (
          <Toast
            key={index}
            filename={filename}
            isOpen={isToastOpen}
            setIsOpen={setIsToastOpen}
          />
        ))}
    </div>
  );
};

export default ResultContainer;
