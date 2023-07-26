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
import "react-circular-progressbar/dist/styles.css";
import CircularProgress from "./CircularProgress";

interface Props {
  data: ResultWithFilename[];
}

const Accordion = ({ data }: Props) => {
  return (
    <Root
      type="single"
      collapsible
      className="scrollbar grid gap-y-4 overflow-y-auto lg:max-h-[65%] lg:pr-2">
      {data.map((item, index) => (
          <Item asChild value={`item-${index}`} key={index}>
            <Header className="rounded-md border border-slate-300/80">
              <Trigger className="grid w-full grid-cols-[1fr_auto_auto] gap-x-4 p-4 text-left items-center">
                <span>{item.filename}</span>
                <CircularProgress value={item.result.aiGeneratedPercentage} />
                <FaChevronDown size={16} />
              </Trigger>
              <Content>Hello World</Content>
            </Header>
          </Item>
        )
      )}
    </Root>
  );
};

export default Accordion;
