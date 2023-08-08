import { ResultWithFilename } from "@/types";
import { AccordionItem, Accordion } from "@nextui-org/accordion";
import React from "react";

interface Props {
  data: ResultWithFilename[];
}

const ResultsAccordion = ({ data }: Props) => {
  return (
    <Accordion
      variant="splitted"
      defaultExpandedKeys={["0"]}
      itemClasses={{
        title: "text-sm lg:text-base font-semibold",
        subtitle: "text-xs",
      }}
      className="px-0">
      {data.map((item, index) => {
        const { filename, result } = item;
        const label = `${filename} AI Detection Result`;
        return (
          <AccordionItem
            key={index}
            aria-label={label}
            subtitle="Click to expand"
            title={filename}>
            test
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default ResultsAccordion;
