import { useFileContext } from "@/hooks/FileContext";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { ChangeEvent, useState } from "react";

export default function FileUploadForm() {
  const { setFiles, setIsLoading } = useFileContext();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const fileInput = event.target.files;
    if (fileInput) {
      if (fileInput.length > 50) {
        return;
      }

      const fileArray: File[] = [...fileInput];
      // for (let i = 0; i < fileInput.length; i++) {
      //   fileArray.push(fileInput[i]);
      // }
      setFiles(fileArray);
    }
  };

  // useEffect(() => {
  //   if (files.length > 0) {
  //     const res = getDetectionResult(files);
  //     console.log(res);
  //   }
  // }, [files]);

  return (
    <label
      htmlFor="file"
      className="flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2 text-sm text-white"
    >
      Browse Files
      <input
        className="hidden"
        id="file"
        type="file"
        onChange={handleFileChange}
        multiple
        accept=".doc,.docx,.pdf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />
    </label>
  );
}
