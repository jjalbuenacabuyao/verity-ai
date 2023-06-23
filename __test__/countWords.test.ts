import countWords from "../src/utils/countWords";

describe("countWords", () => {
  it("should count the number of words in a string", () => {
    const input = "This is a test with five words";
    const expectedOutput = 7;
    expect(countWords(input)).toBe(expectedOutput);
  });

  it("should ignore extra spaces between words", () => {
    const input = "This is a test with five words";
    const expectedOutput = 7;
    expect(countWords(input)).toBe(expectedOutput);
  });

  it("should return zero for an empty string", () => {
    const input = "";
    const expectedOutput = 0;
    expect(countWords(input)).toBe(expectedOutput);
  });
});
