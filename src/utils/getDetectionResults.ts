import cleanText from "./cleanText";
import countWords from "./countWords";
import detectText from "./detectText";
import filterSentences from "./filterSentences";
import getTextFromFiles from "./getTextFromFiles";

export default async function getDetectionResult(files: File[]) {
  const textFromFiles = await getTextFromFiles(files);

  const extractedText = textFromFiles.map((item) => item.extractedText);

  const normalizedText = extractedText.map(text => cleanText(text))

  const sentences = normalizedText.map(text => filterSentences(text).join(" "));

  const allText = sentences.map(sentence => sentence);

  const result = allText.map(async (item) => {
    const wordCount = countWords(item);
    if (wordCount === 0) {
      return "The document does not contain text.";
    }
  
    if (wordCount <= 300) {
      const data = await detectText(item);
      return data;
    }
  })

  return result;
}