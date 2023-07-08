import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

interface Props {
  filename: string;
  aiGeneratedPercentage: number | string;
}

const Result = ({ filename, aiGeneratedPercentage }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <span>{filename}</span>
      <div className="h-auto w-12">
        <CircularProgressbar
          minValue={0}
          maxValue={100}
          text={`${aiGeneratedPercentage}%`}
          value={
            typeof aiGeneratedPercentage === "string"
              ? parseFloat(aiGeneratedPercentage)
              : aiGeneratedPercentage
          }
        />
      </div>
    </div>
  );
};

export default Result;
