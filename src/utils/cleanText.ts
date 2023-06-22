export default function cleanText(text: string): string {
  const trimmedText: string = text.trim();
  const normalizedString: string = trimmedText
    .replace(/(\r\n|\n|\r)/gm, " ")
    .replace(/[ ]{2,}/gi, " ");
  return normalizedString;
}
