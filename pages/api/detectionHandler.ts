import { countWords, detectText, filterSentences } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function detectionHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { normalizedText } = request.body;
  const sentences = filterSentences(normalizedText);
  const wordCount = countWords(normalizedText);
  const wordCountLimit = 300;

  const result = await detectText(normalizedText);

  const humanWritten = result.label === "LABEL_0";
  const aiGenerated = result.label === "LABEL_1";

  const resultAndDescription = { result: result, description: "" };

  if (humanWritten && wordCount <= wordCountLimit && result.score >= 90) {
    resultAndDescription.description = "Unlikely to be AI-generated.";
    response.status(200).json(resultAndDescription)
  } else if (aiGenerated && wordCount <= 300 && result.score >= 90) {
    resultAndDescription.description = "Possibly AI-generated.";
    response.status(200).json(resultAndDescription)
  }

  if (wordCount > wordCountLimit) {
    const results = [];

    for (let i = 0; i < sentences.length; i += 10) {
      const slicedSentence = sentences.slice(i, i + 9).join(" ");
      const result = await detectText(slicedSentence);
      results.push({ text: slicedSentence, result: result });
    }

    const aiGeneratedResults = results.map(({ text, result }) => {
      if (result.label === "LABEL_0") {
        return result.score;
      }
    });

    const aiGeneratedTexts = results.map(({ text, result }) => {
      if (result.label === "LABEL_0") {
        return text;
      }
    });

    const totalScore = aiGeneratedResults.reduce( // @ts-ignore
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    response.status(200).json({ totalScore: totalScore, aiGeneratedTexts: aiGeneratedTexts })
  }
}
