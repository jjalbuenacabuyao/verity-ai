import { ResultWithFilename } from "@/types";
import { AccordionItem, Accordion } from "@nextui-org/accordion";
import { FaRobot } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import React from "react";
import CircularProgressbarWithLabel from "./CircularProgressbarWithLabel";
import ResultBreakdownTable from "./ResultBreakdownTable";
import AccordionItemSectionTitle from "./AccordionItemSectionTitle";

interface Props {
  data: ResultWithFilename[];
}

const ResultsAccordion = ({ data }: Props) => {
  return (
    <Accordion
      variant="splitted"
      defaultExpandedKeys={["0"]}
      itemClasses={{
        title: "text-sm lg:text-base font-semibold text-inherit",
        subtitle:
          "text-xs opacity-100 h-auto data-[open=true]:opacity-0 data-[open=true]:h-0 transition-all",
        indicator: "text-inherit",
        heading: "data-[open=true]:border-b",
      }}
      className="px-0"
    >
      {data.map((item, index) => {
        const { filename, result } = item;
        const { aiGeneratedPercentage, texts } = result;
        const label = `${filename} AI Detection Result`;
        return (
          <AccordionItem
            key={index}
            aria-label={label}
            subtitle="Click to expand"
            title={filename}
          >
            <div>
              <div className="mb-6">
                <AccordionItemSectionTitle
                  title="Overall Result"
                  description="This represents how much of the entire text in the document was likely created by an AI."
                />
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <CircularProgressbarWithLabel
                    label="AI-Generated"
                    icon={<FaRobot size={20} />}
                    value={aiGeneratedPercentage}
                  />
                  <CircularProgressbarWithLabel
                    label="Human Written"
                    icon={<ImUser size={20} />}
                    value={100 - aiGeneratedPercentage}
                  />
                </div>
              </div>

              {typeof texts !== "string" && (
                <div className="px-1">
                  <AccordionItemSectionTitle
                    title="Breakdown of Result"
                    description="This section allows you to see which specific paragraphs are more likely to have been created by an AI."
                  />
                  <ResultBreakdownTable texts={texts} />
                </div>
              )}
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default ResultsAccordion;
