export interface DetectionResult {
  aiGeneratedPercentage: number | string;
  aiGeneratedTexts:
    | {
        text: string;
        score: number;
        label: string;
      }[]
    | string;
}

export interface InferenceApiResult {
  label: string;
  score: number;
}
