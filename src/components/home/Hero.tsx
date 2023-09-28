"use client";

import { workSans, inter } from "@/fonts";
import { Button } from "@nextui-org/button";
import HeroIllustration from "./HeroIllustration";
import { useDisclosure } from "@nextui-org/modal";
import { LogInModal } from "../utilities";
import { useCurrentUserContext } from "@/hooks/userContext";
import { useRouter } from "next/navigation";

/**
 * Renders a Hero component that displays a heading, description, button, and an illustration.
 * The component also includes a modal for logging in.
 *
 * @returns {JSX.Element}
 */

const Hero = () => {
  const currentUser = useCurrentUserContext();
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div
      id="top"
      className="relative flex flex-col items-center gap-32 lg:grid lg:h-[calc(100%-64px)] lg:max-h-[560px] lg:grid-cols-2 lg:items-center lg:gap-0 lg:supports-vh:h-[calc(100vh-64px)] lg:supports-dvh:h-[calc(100dvh-64px)]"
    >
      <div className="grid gap-4 pt-12 sm:pt-16 md:justify-items-start md:pt-20 lg:pr-5 lg:pt-0">
        <h1
          className={`${workSans.className} text-4xl font-bold leading-[1.125] tracking-[-0.25px] text-slate-900 supports-clamp:text-heading-fluid`}
        >
          Advanced AI generated text detector
        </h1>
        <p
          className={`${inter.className} supports-clamp:text-description-fluid text-base lg:leading-7`}
        >
          Educator&apos;s partner in detecting Artificial Intelligence(AI)
          generated texts from academic submissions using state-of-the-art Large
          Language Model(LLM).
        </p>
        <Button
          color="primary"
          radius="sm"
          size="lg"
          className="mt-4 font-semibold hover:bg-blue-800 hover:shadow-lg"
          onPress={currentUser ? () => router.push("/detector") : onOpen}
        >
          Get Started
        </Button>
        <LogInModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
        />
      </div>

      <HeroIllustration />
    </div>
  );
};

export default Hero;
