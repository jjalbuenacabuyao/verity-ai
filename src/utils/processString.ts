export default function processString(str: string) {
  const splitString = str.trim().split(".");
  for (let sentence of splitString) {
    if (sentence === " " || sentence === "") {
      delete splitString[splitString.indexOf(sentence)]
    }
  }
  return splitString.map(text => text.trim().replace(/(\r\n|\n|\r)/gm, "").concat("."))
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