import React from "react";
import { IoFlash } from "react-icons/io5";
import { HiDocument } from "react-icons/hi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { MdCreditCardOff } from "react-icons/md";

const Features = () => {
  const features = [
    {
      title: "Fast",
      description: "",
      icon: <IoFlash size={24} />,
    },
    {
      title: "Downloadable Detection Report",
      description: "",
      icon: <HiDocument size={24} />,
    },
    {
      title: "Secure",
      description: "",
      icon: <BsFillShieldLockFill size={24} />,
    },
    {
      title: "Cutting Edge LLM",
      description: "",
      icon: <GiProcessor size={24} />,
    },
    {
      title: "Free",
      description: "",
      icon: <MdCreditCardOff size={24} />,
    },
  ];
  return <section id="features"></section>;
};

export default Features;
