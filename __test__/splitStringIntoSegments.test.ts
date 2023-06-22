import splitStringIntoSegments from "../src/utils/filterSentences";

describe("splitStringIntoSegments", () => {
  test("should return an empty array if the input string is empty", () => {
    expect(splitStringIntoSegments("")).toStrictEqual([]);
  });

  test("should return an array of segments with each segment containing 8 sentences", () => {
    const input =
      "The advancement in the field of machine learning, neural network and data science results to the emergence of different Artificial Intelligence (AI) technologies. One of the most popular AI technology is the Large Language Model (LLM) (Zhai et al., 2021). LLMs uses machine learning algorithms to understand and generate text that is close to what human can create (Prine, 2023). As stated by Mitchell et al. (2023), the development of LLMs make them a desirable substitute for human writers in a variety of fields, including education, journalism, and the arts. There is a rising demand for techniques to detect the human origin of certain information with high educational relevance, even though language models can have legitimate uses in these disciplines. This is crucial when factual accuracy, rather than merely fluency, is required. It is critical in academic institutions like Southern Luzon State University Tayabas City Campus to guarantee that students present original work in order to maintain academic integrity and promote critical thinking among students. As a result, the capability to recognize AI-generated content in student submissions is an important part of modern education. To meet this growing demand, the researchers propose the creation of VeracityAI, a web-based system for detecting AI-generated text that utilizes RoBERTa Base OpenAI GPT detector LLM.";
    const expectedOutput = [
      "The advancement in the field of machine learning, neural network and data science results to the emergence of different Artificial Intelligence (AI) technologies.One of the most popular AI technology is the Large Language Model (LLM) (Zhai et al., 2021).LLMs uses machine learning algorithms to understand and generate text that is close to what human can create (Prine, 2023).As stated by Mitchell et al. (2023), the development of LLMs make them a desirable substitute for human writers in a variety of fields, including education, journalism, and the arts.There is a rising demand for techniques to detect the human origin of certain information with high educational relevance, even though language models can have legitimate uses in these disciplines.This is crucial when factual accuracy, rather than merely fluency, is required.It is critical in academic institutions like Southern Luzon State University Tayabas City Campus to guarantee that students present original work in order to maintain academic integrity and promote critical thinking among students.As a result, the capability to recognize AI-generated content in student submissions is an important part of modern education.",
      "To meet this growing demand, the researchers propose the creation of VeracityAI, a web-based system for detecting AI-generated text that utilizes RoBERTa Base OpenAI GPT detector LLM.",
    ];
    expect(splitStringIntoSegments(input)).toStrictEqual(expectedOutput);
  });

  test("should trim leading and trailing white spaces and new line characters from the input string", () => {
    const input =
      " \nTo meet this growing demand, the researchers propose the creation of VeracityAI, a web-based system for detecting AI-generated text that utilizes RoBERTa Base OpenAI GPT detector LLM.\n ";
    const expectedOutput = [
      "To meet this growing demand, the researchers propose the creation of VeracityAI, a web-based system for detecting AI-generated text that utilizes RoBERTa Base OpenAI GPT detector LLM.",
    ];
    expect(splitStringIntoSegments(input)).toStrictEqual(expectedOutput);
  });

  test("should replace all occurrences of line breaks with a single space character", () => {
    const input =
      "To meet this growing demand, the researchers propose the creation of VeracityAI, a web-based system for detecting AI-generated\n text that utilizes RoBERTa Base OpenAI GPT detector LLM.";
    const expectedOutput = [
      "To meet this growing demand, the researchers propose the creation of VeracityAI, a web-based system for detecting AI-generated  text that utilizes RoBERTa Base OpenAI GPT detector LLM.",
    ];
    expect(splitStringIntoSegments(input)).toStrictEqual(expectedOutput);
  });
});
