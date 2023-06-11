export default function getSentencePercentage(
  text: string,
  totalCharacters: number
): number {
  if (!text || !totalCharacters || totalCharacters === 0) {
    return 0;
  }

  const sentenceCharacters = text.length;

  return (sentenceCharacters / totalCharacters) * 100;
}
