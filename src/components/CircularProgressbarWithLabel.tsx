import { CircularProgress } from "@nextui-org/progress";
import React from "react";

interface Props {
  value: number;
  icon: React.ReactNode;
  label: string;
}

const CircularProgressbarWithLabel = ({
  value,
  icon,
  label,
}: Props) => {
  return (
    <div className="flex items-center">
      <CircularProgress
        aria-label="Percentage of AI-generated text"
        size="lg"
        value={value}
        showValueLabel={true}
        classNames={{
          svg: `${label === "AI-Generated" ? "text-red-500" : "text-blue-500"} w-16 h-16`,
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
