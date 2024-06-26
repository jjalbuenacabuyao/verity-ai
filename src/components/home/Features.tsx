import React from "react";
import { IoFlash } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdCreditCardOff } from "react-icons/md";
import { BsFillCpuFill } from "react-icons/bs";
import FeatureCard from "./FeatureCard";
import Subheading from "./Subheading";

/**
 * Renders a section with a list of features.
 * Each feature is represented by a `FeatureCard` component, which displays an icon, title, and description.
 *
 * @returns {JSX.Element}
 */

const Features = () => {
  const iconSize = 28;

  const features = [
    {
      title: "Fast",
      description:
        "VerityAI is designed to provide fast and efficient way of detecting AI-generated text.",
      icon: <IoFlash size={iconSize} />,
    },
    {
      title: "Downloadable Detection Report",
      description:
        "Detection result can be downloaded for more comprehensive view of the result and for future reference.",
      icon: <HiDocumentText size={iconSize} />,
    },
    {
      title: "Secure",
      description:
        "Only authorized educators can access the website, ensuring the security of your data.",
      icon: <BsFillShieldLockFill size={iconSize} />,
    },
    {
      title: "Cutting Edge LLM",
      description:
        "VerityAI uses RoBERTa Base Open AI detector, a modern Large Language Model(LLM), to analyze the texts and provide the detection results.",
      icon: <BsFillCpuFill size={iconSize} />,
    },
    {
      title: "Free",
      description:
        "Best part? VerityAI is completely free to use as it built using Open-source LLM so enjoy our services without any cost.",
      icon: <MdCreditCardOff size={iconSize} />,
    },
  ];

  return (
    <section
      id="features"
      className="relative mt-10 overflow-hidden pt-[4.5rem] lg:mt-0"
    >
      <Subheading title="Features" />
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, icon }) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
