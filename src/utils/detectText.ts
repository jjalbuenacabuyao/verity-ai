export default async function detectText(data: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
  const header = {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
    },
    method: "POST",
    body: JSON.stringify(data),
  }
  const response = await fetch(apiUrl, header);
  const result = await response.json();
  return result;
}