import { cleanText, countWords, detectAiGeneratedText } from "@/utils";
import { DetectionResult, SliceSentenceResult } from "@/types";
import { NextResponse } from "next/server";

/**
 * Handles a POST request and processes the extracted text.
 *
 * @param {Request} request - The POST request object containing a JSON payload with an `extractedText` property.
 * @returns {Promise<Response>} - A promise that resolves to a response with the AI-generated percentage and the texts with their scores and labels.
 */

export async function POST(request: Request) {
  const body = await request.json();
  const { extractedText } = body;
  const formatedText: string[] = extractedText
    .trim()
    .split(/[.?!]/g)
    .filter((item: string) => item !== " ");

  const sentences = formatedText.map((item: string, index: number) => {
    if (item.startsWith(" \n") || (item.startsWith("\n") && index !== 0)) {
      if (item.slice(2).includes("\n") || item.slice(1).includes("\n")) {
        return "\n" + item.slice(1).split("\n").join("").concat(".");
      }
    }
    if (item !== "") {
      return item.replace(/\n+/g, "").concat(".");
    }
  });

  const paragraphText = sentences.join("");
  const overallWordCount = countWords(paragraphText);
  const wordCountLimit = 200;

  if (overallWordCount <= wordCountLimit) {
    const result = await detectAiGeneratedText(paragraphText);
    const { label, score } = result;
    const aiGenerated = label === "LABEL_0" || label === "Fake";
    const humanWritten = label === "LABEL_1" || label === "Real";

    if (humanWritten && score >= 90) {
      const detectionResult: DetectionResult = {
        aiGeneratedPercentage: 0,
        texts: "All texts are possibly NOT AI-GENERATED.",
      };
      return NextResponse.json(detectionResult);
    }

    if (aiGenerated && score >= 90) {
      const detectionResult: DetectionResult = {
        aiGeneratedPercentage: 100,
        texts: "All texts are possibly AI-GENERATED.",
      };
      return NextResponse.json(detectionResult);
    }
  }

  const results: SliceSentenceResult[] = [];

  let sliceSize = 10;

  for (let i = 0; i < sentences.length; i += sliceSize) {
    while (sliceSize > 2) {
      try {
        const slicedSentence = sentences.slice(i, i + sliceSize).join(" ");
        const result = await detectAiGeneratedText(slicedSentence);
        results.push({ text: slicedSentence, result: result });
        sliceSize = 10;
        break;
      } catch (error: any) {
        sliceSize -= 2;
      }
    }
    
  }

  const aiGeneratedTexts = results.filter(
    (item) => item.result.label === "LABEL_0" || item.result.label === "Fake"
  );

  const totalPercentage =
    (aiGeneratedTexts
      .map(({ text }) => countWords(text))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) *
      100) /
    overallWordCount;

  const detectionResult: DetectionResult = {
    aiGeneratedPercentage: Math.round(totalPercentage),
    texts: results.map(({ text, result }) => {
      let { score, label } = result;
      text = cleanText(text);
      label = label === "Fake" ? "LABEL_0" : "LABEL_1";
      return { text, score, label };
    }),
  };

  return NextResponse.json(detectionResult);
}
