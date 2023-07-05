import { countWords, detectText } from "@/utils";
import detectTextUsingHF from "@/utils/detectTextUsingHF";
import { NextApiRequest, NextApiResponse } from "next";

interface DetectionResult {
  aiGeneratedPercentage: number | string;
  aiGeneratedTexts: Object | string;
}

export default async function detectionHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { extractedText } = request.body;
  const formatedText = extractedText
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
  const aiGenerated = "LABEL_0";
  const humanWritten = "LABEL_1";

  if (overallWordCount <= wordCountLimit) {
    const result = await detectTextUsingHF(paragraphText);
    const { label, score } = result;

    if (label === humanWritten && score >= 90) {
      const detectionResult: DetectionResult = {
        aiGeneratedPercentage: 0,
        aiGeneratedTexts: "All text are possibly NOT AI-GENERATED.",
      };
      return response.status(200).send(detectionResult);
    }

    if (label === aiGenerated && score >= 90) {
      const detectionResult: DetectionResult = {
        aiGeneratedPercentage: 100,
        aiGeneratedTexts: "All text are possibly AI-GENERATED.",
      };
      return response.status(200).send(detectionResult);
    }
  }

  const results = [];

  for (let i = 0; i < sentences.length; i += 10) {
    const slicedSentence = sentences.slice(i, i + 10).join(" ");
    const result = await detectTextUsingHF(slicedSentence);
    results.push({ text: slicedSentence, result: result });
  }

  // const aiGeneratedResults = results.map(({ text, result }) => {
  //   if (result.label === "LABEL_0") {
  //     return result.score;
  //   }

  //   return 100 - Math.trunc(result.score);
  // });

  const aiGeneratedTexts = results.filter(
    (item) => item.result.label === "LABEL_0"
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
    aiGeneratedPercentage: totalPercentage.toFixed(2),
    aiGeneratedTexts: results.map(({ text, result }) => {
      const { score, label } = result;
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

  return response.status(200).json(detectionResult);
}
