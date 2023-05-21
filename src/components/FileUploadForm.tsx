import { detectText, getTextFromFiles, processString } from "@/utils";
import { ChangeEvent, FormEvent, useState } from "react";
import Dropzone, { DropzoneState } from "react-dropzone";

export default function FileUploadForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [text, setText] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const extractedText = await getTextFromFiles(files);
    const processedString = processString(extractedText);
    console.log(processedString);
    
    setText(processedString)
    // const result = await detectText(processedString);
    // console.log(result);
  };

  // const handleDrop = async (acceptedFiles: File[]) => {
  //   setFiles(acceptedFiles);
  // };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      let fileArray = [];
      for(let i = 0; i < event.target.files.length; i++){
        fileArray.push(event.target.files[i]);
      }
      setFiles(fileArray);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
      <p>{text}</p>
    </form>
  );
}
