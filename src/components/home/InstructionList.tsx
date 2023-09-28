import React from "react";
import Image from "next/image";

interface Props {
  data: {
    instruction: React.ReactNode;
    imgSource: string;
    altText: string;
  }[];
}

/**
 * Renders an ordered list with instructions and images.
 *
 * @component
 *
 * @param {Object[]} data - An array of objects containing the instructions and image details.
 * @param {React.ReactNode} data[].instruction - The instruction to be displayed.
 * @param {string} data[].imgSource - The source URL of the image.
 * @param {string} data[].altText - The alternative text for the image.
 *
 * @returns {JSX.Element} The rendered ordered list with instructions and images.
 */

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
