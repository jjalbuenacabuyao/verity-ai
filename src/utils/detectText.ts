interface Result {
  label: string;
  score: number;
}

export default async function detectText(text: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
  const apiTokens = process.env.NEXT_PUBLIC_ACCESS_TOKEN!.split(", ");

  const apiKey = apiTokens[Math.floor(Math.random() * apiTokens.length)];

  const header = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    method: "POST",
    body: JSON.stringify(text),
  }
  const response = await fetch(apiUrl, header);
  const result = await response.json();
  const [[{ label: scoreLabel, score: aiGenerated }]] = result;
  const data: Result = { label: scoreLabel, score: (Math.trunc(aiGenerated * 100)) };
  return data;
}