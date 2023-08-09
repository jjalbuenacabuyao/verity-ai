export default function cleanText(text: string): string {
  const trimmedText: string = text.trim();
  const normalizedString: string = trimmedText
    .replace(/(\r\n|\n|\r)/gm, " ")
    .replace(/ +/g, ' ');
    // .replace(/[ ]{2,}/gi, " ");
  return normalizedString;
}
