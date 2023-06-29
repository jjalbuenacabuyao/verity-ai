import { countWords, detectText, filterSentences } from "@/utils";
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
  description: string;
  aiGeneratedTexts: string[] | string;
}

export default async function detectionHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { normalizedText } = request.body;
  const sentences = filterSentences(normalizedText);
  const wordCount = countWords(normalizedText);
  const wordCountLimit = 300;

  const result = await detectText(normalizedText);
  const { label, score } = result;

  const humanWritten = label === "LABEL_0";
  const aiGenerated = label === "LABEL_1";

  if (humanWritten && wordCount <= wordCountLimit && score >= 95) {
    const detectionResult: DetectionResult = {
      label: Label.HumanWritten,
      score: score,
      description: "Unlikely to be AI-generated.",
      aiGeneratedTexts: "All text are possibly NOT AI-GENERATED.",
    };
    response.status(200).json(detectionResult);
  }

  if (aiGenerated && wordCount <= wordCountLimit && score >= 95) {
    const detectionResult: DetectionResult = {
      label: Label.AiGenerated,
      score: score,
      description: "Possibly AI-generated.",
      aiGeneratedTexts: "All text are possibly AI-GENERATED.",
    };
    response.status(200).json(detectionResult);
  }

  const results = [];

  for (let i = 0; i < sentences.length; i += 10) {
    const slicedSentence = sentences.slice(i, i + 9).join(" ");
    console.log(slicedSentence)
    const result = await detectText(slicedSentence);
    results.push({ text: slicedSentence, result: result });
  }

  const aiGeneratedResults = results.map(({ text, result }) => {
    if (result.label === "LABEL_1") {
      return result.score;
    }
  });

  const aiGeneratedTexts = results.map(({ text, result }) => {
    if (result.label === "LABEL_1") {
      return text;
    }
  });

  const totalScore =
    aiGeneratedResults.reduce(
      // @ts-ignore
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )! / aiGeneratedResults.length;

  const detectionResult: DetectionResult = {
    label: Label.HumanWritten,
    score: totalScore,
    description: "",
    aiGeneratedTexts: aiGeneratedTexts as string[],
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

  response.status(200).json(detectionResult);
}
