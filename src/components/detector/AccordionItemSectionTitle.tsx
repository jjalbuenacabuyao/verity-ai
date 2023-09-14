import React from "react";
import { DiTerminalBadge } from "react-icons/di";

interface Props {
  title: string;
  description: string;
}

const AccordionItemSectionTitle = ({ title, description }: Props) => {
  return (
    <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
      <DiTerminalBadge size={24} data-testid="terminalIcon" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AccordionItemSectionTitle;
