import React from "react";
import Image from "next/image";
import { Avatar } from "@nextui-org/avatar";
import { CircularProgress } from "@nextui-org/progress";
import { Button } from "@nextui-org/button";

const HeroIllustration = () => {
  return (
    <div className="relative pb-10">
      <div className="absolute bottom-2 left-1/2 right-0 z-[1] overflow-hidden rounded-lg shadow-lg shadow-slate-300 border">
        <Image
          src={"/detection-report.png"}
          width={100}
          height={100}
          quality={100}
          unoptimized
          priority
          alt="Photo of AI-detector"
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
              classNames={{
                name: "font-semibold text-[6px]",
                base: "w-4 h-4",
              }}
            />
          ))}
        </div>

        <div>
          <Button
            variant="bordered"
            color="primary"
            radius="full"
            className="h-6 px-2 text-[6px] leading-none"
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
              showValueLabel
              classNames={{
                value: "text-[10px] font-semibold",
                svg: "w-12 h-12",
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
