export interface DetectionResult {
  aiGeneratedPercentage: string;
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

export interface CurrentUser {
  name: string;
  role: string;
}
