import { cleanText, countWords, detectText, filterSentences, getTextFromFiles } from "@/utils";
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";


export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function detectionHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const form = new formidable.IncomingForm();
  form.parse(request, async (err, fields, files) => {
    const file: formidable.File = files.file as formidable.File;

    const { originalFilename } = file;

    const { extractedText } = await getTextFromFiles(file as unknown as File);
    
    const normalizedText = cleanText(extractedText);

    const wordCount = countWords(normalizedText);
    //initial pa lang
    // if (wordCount <= 250) {
    //   const detectionResult = await detectText(normalizedText);
    //   const { label, score } = detectionResult;
    //   const humanWritten = "LABEL_0";
    //   const aiGenerated = "LABEL_1";
    //   if (label === humanWritten && !(Math.trunc(score * 100) >= 5)) {
    //     response.status(200).json({ filename: filename, label: label, score: score })
    //   }
    // }

    const result = await detectText(normalizedText);
    response.status(200).json([originalFilename, result])
  })
}
