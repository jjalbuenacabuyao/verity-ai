import mammoth from "mammoth";

/**
 * Extracts text from either a PDF or a DOCX file.
 * 
 * @param file - The file from which to extract text. It can be either a PDF or a DOCX file.
 * @returns {string} The extracted text from the file.
 */

export default async function getTextFromFiles(file: File) {
  const pdfFileType = "application/pdf";
  const docxFileType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  let extractedTexts: string = "";

  if (file.type === pdfFileType) {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/pdfHandler", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    extractedTexts = data.text;
  }
  
  else if (file.type === docxFileType) {
    // Extract text from DOCX using mammoth library.
    const result = await mammoth.extractRawText({
      arrayBuffer: await file.arrayBuffer(),
    });
    extractedTexts = result.value;
  }

  return extractedTexts;
}
