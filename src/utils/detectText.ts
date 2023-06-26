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
  return { label: scoreLabel, score: aiGenerated };
}