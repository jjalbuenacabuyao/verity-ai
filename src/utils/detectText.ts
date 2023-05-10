interface Result {
  label: string;
  score: number;
}

export default async function detectText(data: string) {
  const apiUrl = "https://api-inference.huggingface.co/models/roberta-base-openai-detector";
  const header = {
    headers: {
      Authorization: "Bearer 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",
    },
    method: "POST",
    body: JSON.stringify(data),
  }
  const response = await fetch(apiUrl, header);
  const result: Result[] = await response.json();
  return result;
}