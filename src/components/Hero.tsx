import { workSans, inter } from "@/fonts";
import { Button } from "@nextui-org/button";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center gap-32 lg:grid lg:grid-cols-2">
      <div className="grid gap-4 pt-10">
        <h1
          className={`${workSans.className} text-4xl font-bold tracking-[-0.25px] text-slate-900`}
        >
          Advanced AI Generated Text Detector For The Academe
        </h1>
        <p className={`${inter.className}`}>
          Educator&apos;s partner in detecting Artificial Intelligence(AI) generated texts from academic
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

      <HeroIllustration />
    </div>
  );
};

export default Hero;
