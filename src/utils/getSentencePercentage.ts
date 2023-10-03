/**
 * Calculates the percentage of sentence characters in relation to the total number of characters in a given text.
 *
 * @param {string} text - The input text for which the sentence percentage needs to be calculated.
 * @param {number} totalCharacters - The total number of characters in the text.
 * @returns {number} The percentage of sentence characters in relation to the total number of characters in the text.
 */

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
