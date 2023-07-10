import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  filename: string;
  aiGeneratedPercentage: string;
}

const Result = ({ filename, aiGeneratedPercentage }: Props) => {
  const value = parseFloat(aiGeneratedPercentage);
  const pathColor = `${value >= 90
      ? "#ef4444"
      : value < 90 && value > 10
        ? "#f97316"
        : "#0ea5e9"
    }`;
  const textColor = pathColor;
  
  return (
    <div className="grid grid-cols-[75%_25%] items-center p-3 border rounded-md shadow-sm">
      <span className="text-sm">{filename}</span>
      <div className="h-auto w-12">
        <CircularProgressbar
          minValue={0}
          maxValue={100}
          text={`${aiGeneratedPercentage}%`}
          value={value}
          styles={buildStyles({
            pathColor: pathColor,
            textColor: textColor
          })}
        />
      </div>
    </div>
  );
};

export default Result;
