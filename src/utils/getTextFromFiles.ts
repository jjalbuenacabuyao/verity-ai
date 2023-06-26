import mammoth from "mammoth";

/**
 * This function extracts text from PDF and DOCX files and returns an array of objects containing the
 * filename and extracted text.
 * @param {File[]} files - an array of File objects, which represent files selected by the user through a file input field. These files can be of type PDF or DOCX. The function extracts text from these files.
 * @returns an array of objects, where each object contains the filename and the extracted text from
 * the corresponding file.
 */

interface FileInfo {
  filename: string;
  extractedText: string;
}

export default async function getTextFromFiles(file: File) {
  const pdfFileType = "application/pdf";
  const docxFileType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  let extractionInfo: FileInfo = {filename: file.name, extractedText: ""};
  let text = "";

  if (file.type === pdfFileType) {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/pdfHandler", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    text += data.text;
    extractionInfo.extractedText = text;
  }
  
  else if (file.type === docxFileType) {
    // Extract text from DOCX using mammoth library.
    const result = await mammoth.extractRawText({
      arrayBuffer: await file.arrayBuffer(),
    });
    text += result.value;
    extractionInfo.extractedText = text;
  }

  return extractionInfo;
}
