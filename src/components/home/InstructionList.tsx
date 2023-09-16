import React from "react";
import Image from "next/image";

interface Props {
  data: {
    instruction: React.ReactNode,
    imgSource: string,
    altText: string,
  }[];
}

const InstructionList = ({ data }: Props) => {
  return (
    <ol className="flex flex-col gap-8">
      {data.map(({ instruction, imgSource, altText }, index) => (
        <li className="grid gap-4" key={index}>
          {instruction}
          <Image
            src={imgSource}
            alt={altText}
            width={100}
            height={100}
            className="mx-auto h-auto w-full max-w-lg rounded-lg border shadow-md"
            quality={100}
            unoptimized
            priority
          />
        </li>
      ))}
    </ol>
  );
};

export default InstructionList;
