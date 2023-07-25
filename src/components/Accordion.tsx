import React from "react";
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import { ResultWithFilename } from "@/types";
import { FaChevronDown } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  data: ResultWithFilename[];
}

const Accordion = ({ data }: Props) => {
  return (
    <Root
      type="single"
      collapsible
      className="scrollbar grid gap-y-4 overflow-y-auto lg:max-h-[65%] lg:pr-2">
      {data.map((item, index) => {
        const value = parseFloat(item.result.aiGeneratedPercentage);
        const pathColor = `${
          value >= 90
            ? "#ef4444"
            : value < 90 && value > 10
            ? "#f97316"
            : "#0ea5e9"
        }`;
        const textColor = pathColor;
        return (
          <Item asChild value={`item-${index}`} key={index}>
            <Header className="rounded-md border border-slate-300/80">
              <Trigger className="grid w-full grid-cols-[1fr_auto_auto] gap-x-4 p-4 text-left items-center">
                <span>{item.filename}</span>
                <div className="w-12">
                  <CircularProgressbar
                    minValue={0}
                    maxValue={100}
                    text={`${item.result.aiGeneratedPercentage}%`}
                    value={value}
                    styles={buildStyles({
                      pathColor: pathColor,
                      textColor: textColor,
                    })}
                  />
                </div>
                <FaChevronDown size={16} />
              </Trigger>
              <Content>Hello World</Content>
            </Header>
          </Item>
        );
      })}
    </Root>
  );
};

export default Accordion;
