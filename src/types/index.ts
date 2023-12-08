import { User, Name } from "@prisma/client";

export interface DetectionResult {
  aiGeneratedPercentage: number;
  texts:
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
  email: string;
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

export type UserType = (User & {
  name: Name | null;
})[];

export interface RegistrationData {
  email: string;
  password: string;
  role: string;
  firstname: string;
  middlename: string;
  lastname: string;
}
