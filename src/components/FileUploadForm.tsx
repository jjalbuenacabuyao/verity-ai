import { detectText, getTextFromFiles, splitStringIntoSegments } from "@/utils";
import { ChangeEvent, FormEvent, useState } from "react";
import Dropzone, { DropzoneState } from "react-dropzone";

export default function FileUploadForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [text, setText] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const extractedText = await getTextFromFiles(files);
    // console.log(await detectText(extractedText[0].extractedText))
    for (let text of extractedText) {
      const processedString = splitStringIntoSegments(text.extractedText)
      // for (let str of processedString) {
      //   if (str) {
      //     console.log(str);
      //     const result = await detectText(str);
      //     console.log(result);
      //   }
      // }
    }
  };

  // const handleDrop = async (acceptedFiles: File[]) => {
  //   setFiles(acceptedFiles);
  // };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      if (files.length > 50) {
        return;
      }

      let fileArray = [];
      for (let i = 0; i < files.length; i++) {
        fileArray.push(files[i]);
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
