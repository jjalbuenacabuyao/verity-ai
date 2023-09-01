import { workSans, inter } from "@/fonts";
import { Button } from "@nextui-org/button";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center gap-32 lg:grid lg:h-[calc(100%-64px)] lg:grid-cols-2 lg:supports-vh:h-[calc(100vh-64px)] lg:supports-dvh:h-[calc(100dvh-64px)] lg:items-center lg:gap-0 lg:max-h-[560px]">
      <div className="grid gap-4 pt-10 lg:pt-0 lg:justify-items-start lg:pr-5">
        <h1
          className={`${workSans.className} text-4xl font-bold leading-none tracking-[-0.25px] text-slate-900 supports-clamp:text-heading-fluid`}
        >
          Advanced AI Generated Text Detector For The Academe
        </h1>
        <p className={`${inter.className}`}>
          Educator&apos;s partner in detecting Artificial Intelligence(AI)
          generated texts from academic submissions using state-of-the-art Large
          Language Model(LLM).
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
