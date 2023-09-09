import { cleanText, countWords, detectAiGeneratedText } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { DetectionResult, SliceSentenceResult } from "@/types";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
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
  const wordCountLimit = 300;
  // const aiGenerated = "LABEL_0" || "Fake";
  // const humanWritten = "LABEL_1";

  if (overallWordCount <= wordCountLimit) {
    const result = await detectAiGeneratedText(paragraphText);
    const { label, score } = result;
    const aiGenerated = label === "LABEL_0" || label === "Fake";
    const humanWritten = label === "LABEL_1" || label === "Real";

    if (humanWritten && score >= 90) {
      const detectionResult: DetectionResult = {
        aiGeneratedPercentage: 0,
        aiGeneratedTexts: "All texts are possibly NOT AI-GENERATED.",
      };
      return NextResponse.json(detectionResult);
    }

    if (aiGenerated && score >= 90) {
      const detectionResult: DetectionResult = {
        aiGeneratedPercentage: 100,
        aiGeneratedTexts: "All texts are possibly AI-GENERATED.",
      };
      return NextResponse.json(detectionResult);
    }
  }

  const results: SliceSentenceResult[] = [];

  for (let i = 0; i < sentences.length; i += 10) {
    const slicedSentence = sentences.slice(i, i + 10).join(" ");
    const result = await detectAiGeneratedText(slicedSentence);
    results.push({ text: slicedSentence, result: result });
  }

  // const aiGeneratedResults = results.map(({ text, result }) => {
  //   if (result.label === "LABEL_0") {
  //     return result.score;
  //   }

  //   return 100 - Math.trunc(result.score);
  // });

  const aiGeneratedTexts = results.filter(
    (item) => item.result.label === "LABEL_0" || item.result.label === "Fake"
  );

  const totalPercentage =
    (aiGeneratedTexts
      .map(({ text }) => countWords(text))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) *
      100) /
    overallWordCount;

  // const totalScore =
  //   aiGeneratedResults.reduce(
  //     // @ts-ignore
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0
  //   )! / aiGeneratedResults.length;

  const detectionResult: DetectionResult = {
    aiGeneratedPercentage: Math.round(totalPercentage),
    aiGeneratedTexts: results.map(({ text, result }) => {
      let { score, label } = result;
      text = cleanText(text)
      label = label === "Fake" ? "LABEL_0" : "LABEL_1";
      return { text, score, label }
    }),
  };

  // if (totalScore >= 95) {
  //   detectionResult.label = Label.AiGenerated;
  // } else if (totalScore <= 94 && totalScore >= 56) {
  //   detectionResult.label = Label.MostlyAiGenerated;
  // } else if (totalScore <= 55 && totalScore >= 45) {
  //   detectionResult.label = Label.PartlyAiGenerated;
  // } else if (totalScore <= 44 && totalScore >= 6) {
  //   detectionResult.label = Label.MostlyHumanWritten;
  // } else {
  //   detectionResult.label = Label.HumanWritten;
  // }

  return NextResponse.json(detectionResult);
}
