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

export default async function getTextFromFiles(files: File[]) {
  /* These two constants are defining the MIME types for PDF and DOCX files, respectively. They are
  used later in the function to check if a given file is of type PDF or DOCX. */
  const pdfFileType = "application/pdf";
  const docxFileType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  const extractedText: FileInfo[] = []
  
  for (const file of files) {
    let text = "";

    if (file.type === pdfFileType) {
      /* Creates a new FormData object and appends the PDF file to it. Then it sends a POST request to the '/api/fileHandler' endpoint. The response from the server is then converted to JSON format and the extracted text is appended to the 'text' variable. Finally, an object containing the filename and extracted text is pushed to the 'extractedText' array. */
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
      // Extract text from DOCX using mammoth library.
      const result = await mammoth.extractRawText({
        arrayBuffer: await file.arrayBuffer(),
      });
      text += result.value;
      extractedText.push({filename: file.name, extractedText: text})
    }
  }

  return extractedText;
};