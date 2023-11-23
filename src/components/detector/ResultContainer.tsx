"use client";

import React, { useEffect, useState } from "react";
import { getTextFromFiles } from "@/utils";
import { DetectionResult, ResultWithFilename } from "@/types";
import { Toast } from "../utilities";
import DownloadReportButton from "./DownloadReportButton";
import ResultsAccordion from "./ResultsAccordion";
import axios from "axios";
import { Spinner } from "@nextui-org/spinner";


interface Props {
  files: File[];
  userEmail: string;
}

/**
 * Renders a React functional component that displays the results of a text detection process.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.files - An array of files to be processed for text detection.
 *
 * @returns {JSX.Element} The rendered component displaying the results, a download button, and error toasts if there are any rejected results.
 *
 * @example
 * <ResultContainer files={files} />
 *
 * @summary
 * This component uses state hooks to manage loading status, error results, and the detected text results. It handles API calls to detect text in files and stores the results in local storage for persistence.
 *
 * @description
 * This component initializes state variables for loading status, error results, and detected text results. On component mount or when the `files` prop changes, it checks if there are stored results in local storage. If found, it sets the results and marks loading as complete. If there are more than 20 files in the `files` prop, it sets the `isFileLimitExceeded` state variable to `true` and returns early. If there are files to process, it sets loading status to `true` and starts processing each file asynchronously. For each file, it extracts the text content using the `getTextFromFiles` utility function and sends a POST request to the `/api/detectaitext` endpoint with the extracted text. The component waits for all the requests to settle using `Promise.allSettled` and processes the results. Fulfilled results are stored in the `results` state variable and also saved in local storage. If there are rejected results, the component sets the `errorResult` state variable with the filenames of the rejected files and displays an error toast. Finally, the component renders the results, a download button, and error toasts based on the state variables.
 */
const ResultContainer = ({ files, userEmail }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [errorResult, setErrorResult] = useState<string[]>([]);
  const [results, setResults] = useState<ResultWithFilename[]>([]);
  const [isFileLimitExceeded, setIsFileLimitExceeded] = useState(false);

  useEffect(() => {
    const storedUserEmail = localStorage.getItem("userEmail");
    const storedState = localStorage.getItem("detectionResult");

    if (storedState && JSON.parse(storedUserEmail!) === userEmail) {
      setResults(JSON.parse(storedState));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }

    if (files.length > 20) {
      setIsFileLimitExceeded(true);
      return;
    }

    if (files?.length !== 0) {
      setIsLoading(true);
      const result = files!.map(async (file) => {
        const extractedText = await getTextFromFiles(file);
        const response = await axios.post("/api/detectaitext", {
          extractedText,
        });

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
  }, [files, setIsLoading, userEmail]);

  return (
    <div className="mb-8 border-t pt-16 lg:mb-0 lg:border-t-0 lg:pt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bold lg:text-xl">Results</h2>
        <DownloadReportButton results={results} isLoading={isLoading} />
      </div>

      <div className={`${isLoading ? "flex justify-center pt-12" : ""}`}>
        {isLoading && <Spinner size="lg" label="Loading..." />}

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
            type="detectionError"
            key={index}
            description={filename}
            isOpen={isToastOpen}
            onOpenChange={setIsToastOpen}
            title="Error occured while processing:"
          />
        ))}
      
      <Toast
        type="fileLimitExceeded"
        isOpen={isFileLimitExceeded}
        onOpenChange={setIsFileLimitExceeded}
        description="You can only upload a maximum of 20 files each time."
      />
    </div>
  );
};

export default ResultContainer;
