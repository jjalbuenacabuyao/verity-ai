import { detectText, getTextFromFiles, splitStringIntoSegments } from "@/utils";
import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";

export default function FileUploadForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const extractedText = await getTextFromFiles(files);
    for (let text of extractedText) {
      const processedString = splitStringIntoSegments(text.extractedText);
      console.log(processedString);
      for (let str of processedString) {
        if (str) {
          console.log(str);
          const result = await detectText(str);
          console.log(result);
        }
      }
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target.files;
    if (fileInput) {
      if (fileInput.length > 50) {
        return;
      }

      let fileArray: File[] = [];
      for (let i = 0; i < fileInput.length; i++) {
        fileArray.push(files[i]);
      }
      setFiles(fileArray);
    }
  };

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
