import mammoth from "mammoth";

export default async function getTextFromFiles(files: File[]) {
  const pdfFileType = "application/pdf";
  const docxFileType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  
  let text = "";
  for (const file of files) {
    if (file.type === pdfFileType) {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/fileHandler', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      text += data.text;
    } else if (file.type === docxFileType) {
      // Extract text from DOCX using mammoth
      const result = await mammoth.extractRawText({
        arrayBuffer: await file.arrayBuffer(),
      });
      text += result.value;
    }
  }

  return text;
};