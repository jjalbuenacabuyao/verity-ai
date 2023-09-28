import React from "react";
import Subheading from "./Subheading";
import FaqAccordion from "./FaqAccordion";

/**
 * Renders a list of frequently asked questions and answers.
 *
 * @returns {JSX.Element} The rendered FAQ component.
 */

const FAQ = () => {
  return (
    <div id="faqs" className="pt-[4.5rem]">
      <Subheading title="Frequently Asked Questions" />
      <FaqAccordion />
    </div>
  );
};

export default FAQ;
