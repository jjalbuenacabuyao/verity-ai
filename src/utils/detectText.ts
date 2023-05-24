interface Result {
  label: string;
  score: number;
}

export default async function detectText(data: string) {
  const apiUrl = process.env.API_URL!;
  const header = {
    headers: {
      Authorization: process.env.ACCESS_TOKEN!,
    },
    method: "POST",
    body: JSON.stringify(data),
  }
  const response = await fetch(apiUrl, header);
  const result: Result[] = await response.json();
  return result;
}