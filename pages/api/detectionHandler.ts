import { countWords, detectText } from "@/utils";
import detectTextUsingHF from "@/utils/detectTextUsingHF";
import { NextApiRequest, NextApiResponse } from "next";

enum Label {
  HumanWritten = "Humman written",
  AiGenerated = "AI-generated",
  PartlyAiGenerated = "Partly AI-generated",
  MostlyAiGenerated = "Mostly AI-generated",
  MostlyHumanWritten = "Mostly Human written",
}

interface DetectionResult {
  label: Label;
  score: number;
  aiGeneratedTexts: string[] | string;
}

export default async function detectionHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { extractedText } = request.body;
  const formatedText = extractedText
    .split(/[.?!]/g)
    .filter((item: string) => !(item === " "));
  const sentences = formatedText.map((item: string, index: number) => {
    if (item.startsWith(" \n") || item.startsWith("\n") && !(index === 0)) {
      if (item.slice(2).includes("\n") || item.slice(1).includes("\n")) {
        return "\n" + item.slice(1).split("\n").join("").concat(".");
      }
    }

    return item.replace(/\n+/g, '').concat(".");
  });

  const paragraphText = sentences.join("");
  const wordCount = countWords(paragraphText);
  const wordCountLimit = 300;
  const aiGenerated = "LABEL_0";
  const humanWritten = "LABEL_1";

  if (wordCount <= wordCountLimit) {
    const result = await detectTextUsingHF(paragraphText);
    const { label, score } = result;
    console.log(result)

    if (label === humanWritten && score >= 90) {
      const detectionResult: DetectionResult = {
        label: Label.HumanWritten,
        score: score,
        aiGeneratedTexts: "All text are possibly NOT AI-GENERATED.",
      };
      return response.status(200).send(detectionResult);
    }

    if (label === aiGenerated && score >= 90) {
      const detectionResult: DetectionResult = {
        label: Label.AiGenerated,
        score: score,
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

  const aiGeneratedResults = results.map(({ text, result }) => {
    if (result.label === "LABEL_0") {
      return result.score;
    }

    return 100 - Math.trunc(result.score);
  });

  console.log(sentences)
  console.log(aiGeneratedResults)

  const aiGeneratedTexts = results.filter(
    (item) => item.result.label === "LABEL_0"
  );

  const totalScore =
    aiGeneratedResults.reduce(
      // @ts-ignore
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )! / aiGeneratedResults.length;

  const detectionResult: DetectionResult = {
    label: Label.HumanWritten,
    score: totalScore,
    aiGeneratedTexts: aiGeneratedTexts.map(({ text }) => text),
  };

  if (totalScore >= 95) {
    detectionResult.label = Label.AiGenerated;
  } else if (totalScore <= 94 && totalScore >= 56) {
    detectionResult.label = Label.MostlyAiGenerated;
  } else if (totalScore <= 55 && totalScore >= 45) {
    detectionResult.label = Label.PartlyAiGenerated;
  } else if (totalScore <= 44 && totalScore >= 6) {
    detectionResult.label = Label.MostlyHumanWritten;
  } else {
    detectionResult.label = Label.HumanWritten;
  }

  return response.status(200).json(detectionResult);
}
