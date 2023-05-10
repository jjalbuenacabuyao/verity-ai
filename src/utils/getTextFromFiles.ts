import mammoth from "mammoth";

export default async function getTextFromFiles(files: File[]) {
  let text = "";
  for (const file of files) {
    if (file.type === "application/pdf") {
      // Extract text from PDF using mammoth
      const result = await mammoth.extractRawText({
        arrayBuffer: await file.arrayBuffer(),
      });
      text += result.value;
    } else if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      // Extract text from DOCX using mammoth
      const result = await mammoth.extractRawText({
        arrayBuffer: await file.arrayBuffer(),
      });
      text += result.value;
    }
  }
  return text;
};