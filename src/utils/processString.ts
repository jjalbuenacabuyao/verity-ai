export default function processString(str: string) {
  const splitString = str.split("\n");
  splitString.map((item: string, index: number) => {
    const trimmedString = item.trim();
    if(trimmedString === "" 
       || trimmedString === " " 
       || !(trimmedString.endsWith(".") || trimmedString.endsWith("?") || trimmedString.endsWith("!"))){
        delete splitString[index];
       }
  });
  //kukuha ng 10 sentences sa splitString array
  // for(let i = 0; i <= splitString.length; i++){
    
  // }
  // function is_correct_Sentence(input_str) {
  //   var first_char = input_str[0];
  //   var last_char = input_str[input_str.length - 1];
  //   return /[A-Z]/.test(first_char) && last_char == "."
  // }

  //remove all kinds of line breaks.
  //someText = someText.replace(/(\r\n|\n|\r)/gm, "");
  //or
  // /\r?\n|\r/

  return splitString;
}