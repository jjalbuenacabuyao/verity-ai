import countWords from "./countWords";

export default function processString(str: string) {
  const normalizedString = str.trim().replace(/(\r\n|\n|\r)/gm, "");
  const sentenceArray = normalizedString.split(/[a-z]*[?!.]/g);
  const sentenceSegments: string[][] = [];

  for (let i = 0; i < sentenceArray.length - 1; i += 10) {
    const segments = sentenceArray.slice(i, i + 10);
    sentenceSegments.push(segments);
  }

  console.log(sentenceSegments)
  return sentenceSegments;

  // const splitString = str.trim().split("\n");
  // for (let sentence of splitString) {
  //   if (sentence === " " || sentence === "") {
  //     delete splitString[splitString.indexOf(sentence)]
  //   }
  // }

  // console.log(splitString.join("").split(/\s+/))
  // return splitString.map(text => text.trim().replace(/(\r\n|\n|\r)/gm, "").concat("."))
  // splitString.map((item: string, index: number) => {
  //   const trimmedString = item.trim();
  //   if(trimmedString === "" 
  //      || trimmedString === " " 
  //      || !(trimmedString.endsWith(".") || trimmedString.endsWith("?") || trimmedString.endsWith("!"))){
  //       delete splitString[index];
  //      }
  // });

  // return splitString;
}