import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface Props {
  value: string;
}

const CircularProgress = ({ value }: Props) => {
  const numberTypeValue = parseFloat(value);
  const pathColor = `${
    numberTypeValue >= 90
      ? "#ef4444"
      : numberTypeValue < 90 && numberTypeValue > 10
      ? "#f97316"
      : "#0ea5e9"
  }`;
  const textColor = pathColor;
  return (
    <div className="w-12">
      <CircularProgressbar
        minValue={0}
        maxValue={100}
        text={`${value}%`}
        value={numberTypeValue}
        className="font-bold"
        styles={buildStyles({
          pathColor: pathColor,
          textColor: textColor,
        })}
      />
    </div>
  );
};

export default CircularProgress;
