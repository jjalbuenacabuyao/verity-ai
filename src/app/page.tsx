"use client";

import { Features, Hero } from "@/components";

const Page = () => {
  return (
    <div className="grid gap-10 px-6 supports-clamp:px-fluid md:px-16 md:supports-clamp:px-fluid lg:px-24 lg:supports-clamp:px-fluid xl:px-28 xl:supports-clamp:px-fluid">
      <Hero />
      <Features />
    </div>
  );
};

export default Page;
