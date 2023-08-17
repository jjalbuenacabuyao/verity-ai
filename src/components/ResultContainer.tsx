"use client";

import React, { useEffect, useState } from "react";
import { getTextFromFiles } from "@/utils";
import { DetectionResult, ResultWithFilename } from "@/types";
import Toast from "./Toast";
import DownloadReportButton from "./DownloadReportButton";
import Loader from "./Loader";
import ResultsAccordion from "./ResultsAccordion";
import axios from "axios";

interface Props {
  files: File[];
}

const ResultContainer = ({ files }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [errorResult, setErrorResult] = useState<string[]>([]);
  const [results, setResults] = useState<ResultWithFilename[]>([]);

  useEffect(() => {
    const storedState = localStorage.getItem("detectionResult");
    if (storedState) {
      setResults(JSON.parse(storedState));
      setIsLoading(false);
    }

    if (files?.length !== 0) {
      setIsLoading(true);
      const result = files!.map(async (file) => {
        const extractedText = await getTextFromFiles(file);

        // const response = await fetch("/api/detectionHandler", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ extractedText }),
        // });
        const response = await axios.post("/api/detectaitext", {extractedText})

        const data: DetectionResult = await response.data;

        return {
          filename: file.name,
          result: data,
        };
      });

      Promise.allSettled(result).then((values) => {
        const fulfilledValues = values
          .filter(
            (
              value
            ): value is PromiseFulfilledResult<{
              filename: string;
              result: DetectionResult;
            }> => value.status === "fulfilled"
          )
          .map((value) => value.value);

        setResults(fulfilledValues);
        localStorage.setItem(
          "detectionResult",
          JSON.stringify(fulfilledValues)
        );
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
    <div className="mb-8 border-t pt-16 lg:mb-0 lg:border-t-0 lg:pt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bold">Results</h2>
        <DownloadReportButton results={results} isLoading={isLoading} />
      </div>

      <div>
        {isLoading && <Loader />}

        {results.length === 0 && isLoading === false && (
          <p className="py-6 text-center text-sm text-slate-400 lg:pt-10 lg:text-base">
            Results will be shown here.
          </p>
        )}

        {results.length !== 0 && isLoading === false && (
          <>
            <ResultsAccordion data={results} />
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
