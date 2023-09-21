import React from "react";
import Subheading from "./Subheading";
import FaqAccordion from "./FaqAccordion";

const FAQ = () => {
  return (
    <div id="faqs" className="pt-[4.5rem]">
      <Subheading title="Frequently Asked Questions" />
      <FaqAccordion />
    </div>
  );
};

export default FAQ;
