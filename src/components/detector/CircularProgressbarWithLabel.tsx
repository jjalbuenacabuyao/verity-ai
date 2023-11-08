import { CircularProgress } from "@nextui-org/progress";
import React from "react";

interface Props {
  value: number;
  icon: React.ReactNode;
  label: string;
}

/**
 * Renders a circular progress bar with a label and an icon.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {number} props.value - The value of the progress bar, ranging from 0 to 100.
 * @param {ReactElement} props.icon - An optional icon to display next to the label.
 * @param {string} props.label - The label to display below the progress bar.
 * @returns {JSX.Element} - The rendered component.
 */
const CircularProgressbarWithLabel = ({ value, icon, label }: Props) => {
  return (
    <div className="flex items-center">
      <CircularProgress
        aria-label="Percentage of AI-generated text"
        size="lg"
        value={value}
        showValueLabel={true}
        classNames={{
          svg: `${
            label === "AI-Generated" ? "text-red-500" : "text-blue-500"
          } w-16 h-16`,
          value: "text-xs font-semibold",
        }}
      />
      <div className="ml-3 flex items-center gap-2 rounded-md border p-2 shadow-md">
        {icon}
        <p className="text-xs font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default CircularProgressbarWithLabel;
