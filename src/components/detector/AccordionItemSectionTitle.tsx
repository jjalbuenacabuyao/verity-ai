import React from "react";
import { DiTerminalBadge } from "react-icons/di";

interface Props {
  title: string;
  description: string;
}

/**
 * Renders a section title and description within an accordion item.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 *
 * @returns {JSX.Element} The rendered component.
 */
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
