import Image from "next/image";
import { workSans } from "@/fonts";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-6 text-center lg:grid lg:grid-cols-2">
      <div className="grid gap-4">
        <h1
          className={`${workSans.className} bg-gradient-to-tr from-light-violet to-light-blue bg-clip-text  text-2xl font-black text-transparent`}
        >
          VerityAI
        </h1>
        <p className="text-2xl font-bold">
          Detect AI-Generated Academic Submissions
        </p>
      </div>

      <div className="relative">
        <Image
          src={"/home-illustration.png"}
          width={100}
          height={100}
          quality={100}
          unoptimized
          priority
          alt="Photo of AI-detector"
          className="h-auto w-full border shadow-md rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
