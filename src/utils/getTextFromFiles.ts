import mammoth from "mammoth";

export default async function getTextFromFiles(files: File[]) {
  const pdfFileType = "application/pdf";
  const docxFileType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  const extractedText = []
  
  for (const file of files) {
    let text = "";
    if (file.type === pdfFileType) {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/fileHandler', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      text += data.text;
      extractedText.push({filename: file.name, extractedText: text})
    } else if (file.type === docxFileType) {
      // Extract text from DOCX using mammoth
      const result = await mammoth.extractRawText({
        arrayBuffer: await file.arrayBuffer(),
      });
      text += result.value;
      extractedText.push({filename: file.name, extractedText: text})
    }
  }

  return extractedText;
};