import Image from "next/image";
import { workSans, inter } from "@/fonts";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { CircularProgress } from "@nextui-org/progress";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center gap-24 px-6 lg:grid lg:grid-cols-2">
      <div className="absolute bottom-6 left-1/2 right-6 rounded-lg shadow-lg shadow-slate-300 overflow-hidden">
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

      <div className="grid gap-4 pt-6">
        <h1
          className={`${workSans.className} text-4xl font-semibold tracking-[-0.25px] text-slate-900`}
        >
          Advanced AI Content Detector For The Academe
        </h1>
        <p className={`${inter.className}`}>
          Educator's partner in detecting Artificial Intelligence(AI) generated texts from academic
          submissions using state-of-the-art Large Language Model(LLM).
        </p>
        <Button
          color="primary"
          radius="sm"
          size="lg"
          className="mt-4 font-semibold hover:bg-blue-800 hover:shadow-lg"
        >
          Get Started
        </Button>
      </div>

      <div className="relative pb-10">
        <div className="grid grid-cols-[auto_auto] gap-2">
          <div className="rounded-lg border shadow-lg overflow-hidden">
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
          <div className="flex flex-col justify-center gap-2 pr-2">
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

        <div className="relative mt-2 grid grid-cols-[auto_auto_1fr] gap-6">
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
            <CircularProgress
              value={32}
              color="danger"
              size="md"
              showValueLabel
              classNames={{
                value: "text-[7px] font-semibold",
              }}
              strokeWidth={4}
            />
            <CircularProgress
              value={68}
              color="primary"
              size="md"
              showValueLabel
              classNames={{
                value: "text-[7px] font-semibold",
              }}
              strokeWidth={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
