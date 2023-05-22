import { detectText, getTextFromFiles, processString } from "@/utils";
import { ChangeEvent, FormEvent, useState } from "react";
import Dropzone, { DropzoneState } from "react-dropzone";

export default function FileUploadForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [text, setText] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const extractedText = await getTextFromFiles(files);
    // const processedString = processString(extractedText);
    extractedText.map(async item => {
      const result = await detectText(item.extractedText);
      console.log(result)
    })
  };

  // const handleDrop = async (acceptedFiles: File[]) => {
  //   setFiles(acceptedFiles);
  // };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      let fileArray = [];
      for (let i = 0; i < event.target.files.length; i++) {
        fileArray.push(event.target.files[i]);
      }
      setFiles(fileArray);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={handleFileChange}
        multiple
        accept=".doc,.docx,.pdf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />
      <button type="submit">Upload</button>
      <p>{text}</p>
    </form>
  );
}
