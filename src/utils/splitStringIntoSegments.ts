import { split } from "sentence-splitter"

/**
 * The function takes in a string, normalizes it, splits it into sentences, groups them into segments of 8, and returns an array of the segments.
 * @param {string} extractedText - The input string that needs to be processed and split into segments.
 * @returns {string[]} - An array of strings, where each string is a concatenation of 8 sentences from the input string.
*/

export default function splitStringIntoSegments(extractedText: string): string[] {
  /* Removes any leading or trailing white spaces and new line charaters. */
  const trimmedText: string = extractedText.trim();

  /* Replaces all occurrences of line breaks with a single space character. */
  const normalizedString: string = trimmedText.replace(/(\r\n|\n|\r)/gm, " ");

  /* Split the `normalizedString` into an array of sentence objects */
  const splitSentences = split(normalizedString);

  /* Filters out any non-sentence items from the `splitSentences` array */
  const filteredSentences = splitSentences.filter(item => item.type === "Sentence");

  /* 
   * Maps the `filteredSentences` array and extracting the `raw` property of each sentence object
   * `raw` property contains the original text of the sentence
  */
  const sentenceArray = filteredSentences.map(item => item.raw);

  /* Creates segments of 8 sentences from the `sentenceArray` and pushing them into a new
  array called `sentenceSegments` */
  const sentenceSegments: string[] = [];

  for (let i = 0; i < sentenceArray.length; i += 8) {
    const segments = sentenceArray.slice(i, i + 8);
    sentenceSegments.push(segments.join(""));
  }

  return sentenceSegments;
}