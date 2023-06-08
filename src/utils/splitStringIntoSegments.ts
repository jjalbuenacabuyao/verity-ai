import { split } from "sentence-splitter"

/**
 * The function takes in a string, normalizes it, splits it into sentences, groups them into segments of 8, and returns an array of the segments.
 * @param {string} extractedText - The input string that needs to be processed and split into segments.
 * @returns {string[]} - An array of strings, where each string is a concatenation of 8 sentences from the input string.
*/

export default function splitStringIntoSegments(extractedText: string): string[] {
  /* removes any leading or trailing white spaces */
  const trimmedText: string = extractedText.trim();

  /* replaces all occurrences of line breaks with a single space character. */
  const normalizedString: string = trimmedText.replace(/(\r\n|\n|\r)/gm, " ");

  /* split the `normalizedString` into an array of sentence objects */
  const splitSentences = split(normalizedString);

  /* filters out any non-sentence items from the `splitSentences` array */
  const filteredSentences = splitSentences.filter(item => item.type === "Sentence");

  /* 
   * maps the `filteredSentences` array and extracting the `raw` property of each sentence object
   * `raw` property contains the original text of the sentence
  */
  const sentenceArray = filteredSentences.map(item => item.raw);

  /* creates segments of 8 sentences from the `sentenceArray` and pushing them into a new
  array called `sentenceSegments` */
  const sentenceSegments = [];

  for (let i = 0; i < sentenceArray.length; i += 8) {
    const segments = sentenceArray.slice(i, i + 8);
    sentenceSegments.push(segments.join(""));
  }

  return sentenceSegments;
}