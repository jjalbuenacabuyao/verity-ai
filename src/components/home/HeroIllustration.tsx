import React from "react";
import Image from "next/image";
import { Avatar } from "@nextui-org/avatar";
import { CircularProgress } from "@nextui-org/progress";
import { Button } from "@nextui-org/button";

/**
 * Renders a hero illustration with images, avatars, circular progress bars, and a button.
 *
 * @returns {JSX.Element }representing the hero illustration.
 */

const HeroIllustration = () => {
  return (
    <div className="relative pb-10 sm:pt-16 md:pt-20 lg:pb-0">
      <div className="absolute bottom-2 left-1/2 right-0 z-[1] overflow-hidden rounded-lg border shadow-lg shadow-slate-300 lg:-bottom-5">
        <Image
          src={"/detection-report.png"}
          width={100}
          height={100}
          quality={100}
          unoptimized
          priority
          alt="Photo of detection report"
          className="static h-auto w-full"
        />
      </div>
      <div className="grid grid-cols-[auto_auto] gap-2">
        <div className="z-10 overflow-hidden rounded-lg border shadow-lg">
          <Image
            src={"/home-illustration.png"}
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            alt="Photo of AI-detector"
            className="h-auto w-full"
          />
        </div>
        <div className="z-10 flex flex-col justify-center gap-2 pr-2">
          {["/pdf.png", "/docx-file.png"].map((imgSource, index) => (
            <Image
              key={imgSource}
              src={imgSource}
              width={28}
              height={36}
              quality={100}
              unoptimized
              priority
              alt={index === 0 ? "PDF file icon" : "DOCX file icon"}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-2 grid grid-cols-[auto_auto_1fr] gap-6">
        <div className="flex items-center gap-1 pl-4">
          {["JC", "NO", "KN"].map((initials) => (
            <Avatar
              key={initials}
              name={initials}
              size="sm"
              color="primary"
              data-testid="avatar"
              classNames={{
                name: "font-semibold text-[6px] sm:text-[10px]",
                base: "w-5 h-5 sm:w-7 sm:h-7 ",
              }}
            />
          ))}
        </div>

        <div>
          <Button
            variant="bordered"
            color="primary"
            radius="full"
            className="h-6 px-2 text-[6px] leading-none md:h-10 md:px-6 md:text-xs lg:h-8 lg:px-3 lg:text-[8px]"
          >
            Download Report
          </Button>
        </div>

        <div className="absolute bottom-2 left-[55%] right-2 flex justify-evenly rounded-md border bg-white/10 py-2 shadow-lg backdrop-blur">
          {[32, 68].map((value) => (
            <CircularProgress
              key={value}
              value={value}
              color={value === 32 ? "danger" : "primary"}
              size="md"
              data-testid="circularProgress"
              showValueLabel
              classNames={{
                value: "text-[10px] font-semibold md:text-base lg:text-xs",
                svg: "w-12 h-12 md:w-20 md:h-20 lg:w-14 lg:h-14",
              }}
              strokeWidth={4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;
