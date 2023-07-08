import { HfInference } from "@huggingface/inference";
import { InferenceApiResult } from "@/types"

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
