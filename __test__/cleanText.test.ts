import cleanText from '../src/utils/cleanText';

describe('cleanText', () => {
  it('should trim and normalize the input text', () => {
    const input = '  This is a test\nwith multiple lines\r\nand extra spaces.  ';
    const expectedOutput = 'This is a test with multiple lines and extra spaces.';
    expect(cleanText(input)).toBe(expectedOutput);
  });

  it('should remove line breaks', () => {
    const input = 'This is a test\nwith multiple lines\r\nand no extra spaces.';
    const expectedOutput = 'This is a test with multiple lines and no extra spaces.';
    expect(cleanText(input)).toBe(expectedOutput);
  });

  it('should remove extra spaces', () => {
    const input = 'This is a test with multiple lines and   extra spaces.';
    const expectedOutput = 'This is a test with multiple lines and extra spaces.';
    expect(cleanText(input)).toBe(expectedOutput);
  });
});