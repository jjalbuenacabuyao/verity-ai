"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn", type: "spring" }}
      className="flex flex-col gap-4 rounded-2xl border p-5"
    >
      <div className="flex items-center gap-3">
        <motion.div
          initial={{scale: 0.5}}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
          className="rounded-full bg-blue-100 p-3 text-blue-500"
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-slate-500">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
