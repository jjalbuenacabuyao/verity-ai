import Image from "next/image";
import { workSans } from "@/fonts";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-6 py-24 text-center">
      <Image src={"/logo.svg"} width={200} height={200} alt="Verity" />
      <div className="grid gap-4">
        <h1
          className={`${workSans.className} bg-gradient-to-tr from-light-violet to-light-blue bg-clip-text  text-2xl font-black text-transparent`}>
          VerityAI
        </h1>
        <p className="text-2xl font-bold">Detect AI-Generated Academic Submissions</p>
      </div>
    </div>
  );
};

export default Hero;
