import { HfInference } from "@huggingface/inference";
import { InferenceApiResult } from "@/types"

/**
 * Detects if the given text is AI-generated or not using the Hugging Face Inference API.
 * @param text - The input text to be classified.
 * @returns An object containing the label and score of the text classification result.
 * @example
 * const text = "This is a sample text.";
 * const result = await detectAiGeneratedText(text);
 * console.log(result);
 * // Output: { label: "AI-generated", score: 99 }
 */

export default async function detectAiGeneratedText(text: string) {
  const apiTokens = process.env.NEXT_PUBLIC_ACCESS_TOKEN!.split(", ");

  const apiKey = apiTokens[Math.floor(Math.random() * apiTokens.length)];

  const inference = new HfInference(apiKey, {
    wait_for_model: true,
    retry_on_error: true,
    use_cache: true,
  });

  const result = await inference.textClassification({
    model: "roberta-base-openai-detector",
    inputs: text,
  });

  const [{ label: scoreLabel, score: score }] = result;
  const data: InferenceApiResult = {
    label: scoreLabel,
    score: Math.round(score * 100),
  };

  return data;
}
