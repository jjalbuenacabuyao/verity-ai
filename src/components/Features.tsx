import React from "react";
import { IoFlash } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdCreditCardOff } from "react-icons/md";
import { BsFillCpuFill } from "react-icons/bs"
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Fast",
      description: "",
      icon: <IoFlash size={28} />,
    },
    {
      title: "Downloadable Detection Report",
      description: "",
      icon: <HiDocumentText size={28} />,
    },
    {
      title: "Secure",
      description: "",
      icon: <BsFillShieldLockFill size={28} />,
    },
    {
      title: "Cutting Edge LLM",
      description: "",
      icon: <BsFillCpuFill size={28} />,
    },
    {
      title: "Free",
      description: "",
      icon: <MdCreditCardOff size={28} />,
    },
  ];
  return (
    <section id="features" className="mt-10 px-6">
      <h2 className="text-center text-3xl font-semibold mb-8">Features</h2>
      <div className="flex flex-col gap-6">
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
