"use client";

import React, { useState } from "react";
import Dropzone, { DropzoneState } from "react-dropzone";
import { saveAs } from "file-saver";
import mammoth from "mammoth";

interface FileUploadProps {}

const FileUpload: React.FC<FileUploadProps> = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const handleExtract = async () => {
    const text = await getTextFromFiles(files);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "extracted_text.txt");
  };

  const getTextFromFiles = async (files: File[]) => {
    let text = "";
    for (const file of files) {
      if (file.type === "application/pdf") {
        // Extract text from PDF using mammoth
        const result = await mammoth.extractRawText({
          arrayBuffer: await file.arrayBuffer(),
        });
        text += result.value;
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        // Extract text from DOCX using mammoth
        const result = await mammoth.extractRawText({
          arrayBuffer: await file.arrayBuffer(),
        });
        text += result.value;
      } else {
        console.log("Unsupported file type:", file.type);
      }
    }
    return text;
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps, isDragActive }: DropzoneState) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag and drop some files here, or click to select files</p>
            )}
          </div>
        )}
      </Dropzone>
      <button onClick={handleExtract}>Extract Text</button>
    </div>
  );
};

export default FileUpload;
