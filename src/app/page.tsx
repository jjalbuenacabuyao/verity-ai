"use client";

import { useState, ChangeEvent } from "react";
import FileUpload from "@/components/FileUpload";

export default function Home() {
  // const [file, setFile] = useState<FileList>();
  // const [extractedText, setExtractedText] = useState<string | ArrayBuffer | null>("");
  // const [result, setResult] = useState<Array<Object>>();

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const docxFileType =
  //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  //   const pdfFileType = "application/pdf";

  //   if (e.target.files && e.target.files?.length) {
  //     for (let i = 0; i < e.target?.files?.length; i++) {
  //       if (
  //         e.target.files.item(i)?.type !== pdfFileType &&
  //         e.target.files.item(i)?.type !== docxFileType
  //       ) {
  //         alert("The uploaded file is not a docx or pdf file.");
  //         return;
  //       }
  //     }

  //     setFile(e.target.files);

  //     const fr = new FileReader();
  //     fr.onload = () => {
  //       // setExtractedText(fr.result);
  //       getItems(fr.result);
  //     };
  //     fr.readAsArrayBuffer(e.target.files[0]);

  //     query(extractedText).then(([data, length]) => setResult(data));
  //   }
  // };

  // async function query(data: string | ArrayBuffer | null) {
  //   const response = await fetch(
  //     "https://api-inference.huggingface.co/models/roberta-base-openai-detector",
  //     {
  //       headers: {
  //         Authorization: "Bearer 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",
  //       },
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     }
  //   );
  //   const result = await response.json();
  //   return result;
  // }

  // console.log(result);

  return (
    // <form action="">
    //   <input
    //     type="file"
    //     name="file"
    //     id="file"
    //     multiple
    //     onChange={(e) => handleChange(e)}
    //   />
    //   <p></p>
    // </form>
    <FileUpload />
  );
}
