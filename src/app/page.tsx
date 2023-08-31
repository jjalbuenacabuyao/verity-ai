"use client";

import { Hero } from "@/components";
import Features from "@/components/Features";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ y: "40vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
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
