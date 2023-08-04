/**
 * Counts the number of words in a given string. The function trims the input text to remove leading and trailing whitespace, replaces line breaks with spaces, replace two or more spaces with a single space, splits the text into an array of words, and then filters out empty strings. Finally, it returns the count of non-empty words in the text.
 * 
 * @param { string } text - The input text for which the number of words needs to be counted.
 * @returns the number of words in the input text string.
 */

export default function countWords(text: string): number {
  return text
    .trim()
    .replace(/(\r\n|\n|\r|\t)/gm, " ")
    .replace(/[ ]{2,}/gi, " ")
    .split(" ")
    .filter((str) => str !== "")
    .length;
}
