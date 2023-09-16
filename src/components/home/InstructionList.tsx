import React from "react";
import Image from "next/image";

type Props = {};

const InstructionList = (props: Props) => {
  const instructions = [
    {
      instruction: (
        <p>
          1. In the VerityAI homepage, click the{" "}
          <span className="font-semibold">Log in</span> button.
        </p>
      ),
      imgSource: "/login.png",
      altText:
        "Screenshot of VerityAI homepage with arrow pointing to the Login button",
    },
    {
      instruction: (
        <p>
          2. Enter your <span className="font-semibold">email</span> and{" "}
          <span className="font-semibold">password</span> and click Log in.
          After logging in, you will be automatically redirected to the detector
          page.
        </p>
      ),
      imgSource: "/emailandpassword.png",
      altText: "Screenshot of Login Modal",
    },
    {
      instruction: (
        <p>
          3. To upload files, click the{" "}
          <span className="font-semibold">Browse Files</span> button.
        </p>
      ),
      imgSource: "/emailandpassword.png",
      altText: "Screenshot of Login Modal",
    },
    {
      instruction: (
        <p>
          4. Select the files that you want to check and click the <span>Open</span> button. It is important to remember that you can only upload 20 files each time.
        </p>
      ),
      imgSource: "/emailandpassword.png",
      altText: "Screenshot of Login Modal",
    },
  ];
  return (
    <ol className="flex flex-col gap-8">
      {instructions.map(({ instruction, imgSource, altText }) => (
        <li className="grid gap-4">
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
