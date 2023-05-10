export default function processString(str: string) {
  const splitString = str.split("\n");
  splitString.map((item, index) => {
    if (item === "" || item === " " || !(item.trim().endsWith(".") || item.trim().endsWith("?") || item.trim().endsWith("!"))) {
      delete splitString[index];
    }
  })
  //remove tab in string

  const modifiedString = splitString.join("").trim();

  // if (modifiedString.split(" ").length > 500) {
  //   for (let i = 0; i < modifiedString.length; i++) {
  //     if (i >= 400 && (modifiedString[i] === "." || modifiedString[i] === "?" || modifiedString[i] === "!")) {
  //       return modifiedString.slice(0, i);
  //     }
  //   }
  // }

  return modifiedString;
}