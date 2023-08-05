import { User, Name } from "@prisma/client";

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

export interface ResultWithFilename {
  filename: string;
  result: DetectionResult;
}

export interface SliceSentenceResult {
  text: string;
  result: InferenceApiResult;
}

export type UserType =
  | (User & {
      name: Name | null;
    })[]
  | null;
