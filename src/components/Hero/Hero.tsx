"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-24 px-6 flex flex-col items-center text-center">
      <Image src={"/logo.svg"} width={200} height={200} alt="Veracity" />
      <div className="grid gap-4">
        <h1 className="bg-gradient-to-tr from-light-violet to-light-blue text-transparent bg-clip-text font-work-sans font-black text-2xl">VerityAI</h1>
        <p>Detect AI-Generated Academic Submissions</p>
      </div>
    </div>
  )
}

export default Hero