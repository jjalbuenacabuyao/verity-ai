import mammoth from "mammoth";

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
