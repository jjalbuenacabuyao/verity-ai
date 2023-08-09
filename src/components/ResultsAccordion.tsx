import { ResultWithFilename } from "@/types";
import { AccordionItem, Accordion } from "@nextui-org/accordion";
import { FaRobot } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import React from "react";
import CircularProgressbarWithLabel from "./CircularProgressbarWithLabel";
import ResultBreakdownTable from "./ResultBreakdownTable";
import { DiTerminalBadge } from "react-icons/di";

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
      className="px-0">
      {data.map((item, index) => {
        const { filename, result } = item;
        const { aiGeneratedPercentage, aiGeneratedTexts } = result;
        const label = `${filename} AI Detection Result`;
        return (
          <AccordionItem
            key={index}
            aria-label={label}
            subtitle="Click to expand"
            title={filename}>
            <div>
              <div className="mb-6">
                <p className="mb-3 flex items-center gap-2">
                  <DiTerminalBadge size={20} />
                  <span>Overall Result</span>
                </p>
                <div className="flex flex-col gap-4 items-start lg:items-center lg:gap-8 lg:flex-row">
                  <CircularProgressbarWithLabel
                    label="AI-Generated"
                    icon={<FaRobot size={20} />}
                    value={Number.parseFloat(aiGeneratedPercentage)}
                  />
                  <CircularProgressbarWithLabel
                    label="Human Written"
                    icon={<ImUser size={20} />}
                    value={100 - Number(aiGeneratedPercentage)}
                  />
                </div>
              </div>

              {typeof aiGeneratedTexts !== "string" && (
                <div className="px-1">
                  <p className="mb-3 flex items-center gap-2">
                    <DiTerminalBadge size={20} />
                    <span>Breakdown of Result</span>
                  </p>
                  <ResultBreakdownTable
                    aiGeneratedTexts={aiGeneratedTexts}
                  />
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
