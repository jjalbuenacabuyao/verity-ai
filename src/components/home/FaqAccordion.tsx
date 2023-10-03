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
      question: "What is an AI-generated text?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What's an AI-generated text?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Accordion variant="splitted" className="mx-auto max-w-2xl gap-4">
      {questionsAndAnswers.map(({ question, answer }, index) => (
        <AccordionItem
          key={question}
          aria-label={`Question ${index + 1}`}
          title={question}
        >
          {answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;