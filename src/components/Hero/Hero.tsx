"use client";

import Image from "next/image";
import style from "./hero.module.css";

const Hero = () => {
  return (
    <div className={style.container}>
      <Image src={"/logo.svg"} width={200} height={200} alt="Veracity" />
      <h1>Detect AI-Generated Text on Student&apos;s Academic Submissions</h1>
    </div>
  )
}

export default Hero