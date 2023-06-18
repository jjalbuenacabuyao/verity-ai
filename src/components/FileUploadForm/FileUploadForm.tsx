// @ts-ignore
import { detectText, getTextFromFiles, splitStringIntoSegments } from "@/utils";
import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import styles from "./fileuploadform.module.css"

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

  // const handleDrop = async (acceptedFiles: File[]) => {
  //   setFiles(acceptedFiles);
  // };

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
    <label htmlFor="file" className={styles.upload}>
      <AiFillFileAdd size={16} />
      Upload Files
      <input
        className={styles.input}
        id="file"
        type="file"
        onChange={handleFileChange}
        multiple
        accept=".doc,.docx,.pdf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />
    </label>
  );
}
