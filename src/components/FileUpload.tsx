"use client";

import React, { useState } from "react";
import Dropzone, { DropzoneState } from "react-dropzone";
import {processString, detectText, getTextFromFiles} from "@/utils";

interface FileUploadProps {}

const FileUpload: React.FC<FileUploadProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [text1, setText1] = useState("")

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const handleExtract = async () => {
    const text = await getTextFromFiles(files);
    setText1(text);
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
      <p>{text1}</p>
    </div>
  );
};

export default FileUpload;
