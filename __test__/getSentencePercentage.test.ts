import getSentencePercentage from "../src/utils/getSentencePercentage"

describe('getSentencePercentage', () => {
  test('should return 0 if text is empty', () => {
    expect(getSentencePercentage('', 10)).toBe(0);
  });

  test('should return 0 if totalCharacters is 0', () => {
    expect(getSentencePercentage('Hello', 0)).toBe(0);
  });

  test('should return 0 if totalCharacters is undefined', () => {
    // @ts-ignore
    expect(getSentencePercentage('Hello')).toBe(0);
  });

  test('should return the percentage of sentence characters in total characters', () => {
    expect(getSentencePercentage('Hello', 10)).toBe(50);
  });

  test('should return the percentage as a floating point number', () => {
    expect(getSentencePercentage('Hello', 12)).toBeCloseTo(41.67);
  });
});