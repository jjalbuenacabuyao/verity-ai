"use client";

import { Hero } from "@/components";
import Features from "@/components/Features";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ y: "40vh", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{once: true}}
      transition={{
        duration: 0.3,
        ease: "easeIn",
        type: "spring",
      }}
      className="grid gap-10"
    >
      <Hero />
      <Features />
    </motion.div>
  );
};

export default Page;
