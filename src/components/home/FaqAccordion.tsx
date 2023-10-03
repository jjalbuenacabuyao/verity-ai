"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

/**
 * Renders an accordion component with a list of questions and answers.
 *
 * @returns {JSX.Element} The rendered accordion component.
 */

const FaqAccordion = () => {
  const questionsAndAnswers = [
    {
      question: "How does this tool detect AI-generated text?",
      answer:
        "VerityAI detects AI-generated text using a machine learning model known as RoBERTa base OpenAI detector. RoBERTa is a transformer-based model that has been pre-trained on a large corpus of text, allowing it to understand the nuances of human language. The model is then fine-tuned on a dataset of AI-generated and human-written text, enabling it to learn the subtle differences between the two. RoBERTa model analyzes the text and predicts whether it was likely written by a human or an AI. This process involves examining various aspects of the text, such as its syntax, semantics, and stylistic features.",
    },
    {
      question: "Is the detection of AI-generated text always accurate?",
      answer:
        "While VerityAI strives for accuracy, no tool is 100% infallible. The accuracy of AI-generated text detection can vary based on the sophistication of the AI that generated the text and the amount and quality of the data the detection model was trained on. It's also important to note that as AI technology advances, the line between human-written and AI-generated text is becoming increasingly blurred, which can pose challenges for detection. In the meantime, it's important to use this tool as one of several resources for determining the origin of a text, rather than relying on it exclusively.",
    },
    {
      question: "What languages can VerityAI analyze?",
      answer:
        "VerityAI is currently limited to analyzing text in English. The underlying RoBERTa base OpenAI detector model has been trained on English language data, and as such, it is optimized for detecting AI-generated text in English. While the technology has the potential to be adapted for other languages, this would require additional training data in those languages and potentially further development of the web app.",
    },
    {
      question: "How does VerityAI handle privacy and data security?",
      answer:
        "VerityAI takes privacy and data security very seriously. It is designed to ensure that the documents it analyzes, especially those coming from students, are not stored on its servers and database. This practice helps to safeguard the personal and academic data of the users. In addition to this, VerityAI uses a modern encryption library to encrypt user passwords. It adds an extra layer of security, making it extremely difficult for unauthorized individuals to decipher the encrypted passwords. These measures collectively help to protect user data and maintain the privacy of the users.",
    },
  ];

  return (
    <Accordion variant="splitted" className="mx-auto max-w-2xl gap-4">
      {questionsAndAnswers.map(({ question, answer }, index) => (
        <AccordionItem
          key={question}
          aria-label={`Question ${index + 1}`}
          title={question}
          classNames={{
            content: "text-justify"
          }}
        >
          {answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
