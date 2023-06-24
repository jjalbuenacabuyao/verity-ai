import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-6 py-24 text-center">
      <Image src={"/logo.svg"} width={200} height={200} alt="Veracity" />
      <div className="grid gap-4">
        <h1 className="bg-gradient-to-tr from-light-violet to-light-blue bg-clip-text font-work-sans text-2xl font-black text-transparent">
          VerityAI
        </h1>
        <p>Detect AI-Generated Academic Submissions</p>
      </div>
    </div>
  );
};

export default Hero;
