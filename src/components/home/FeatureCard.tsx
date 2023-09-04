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
      className="group flex flex-col gap-4 rounded-2xl border p-5 shadow duration-1000 ease-in transition-colors hover:bg-blue-500 md:last:col-span-2"
    >
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
          className="rounded-full bg-blue-100 p-3 text-blue-500 group-hover:bg-white"
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-semibold group-hover:text-white">
          {title}
        </h3>
      </div>
      <p className="text-slate-500 group-hover:text-white">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
