"use client";

import Image from "next/image";
import style from "./hero.module.css";

const Hero = () => {
  return (
    <div className={style.container}>
      <Image src={"/logo.svg"} width={200} height={200} alt="Veracity" />
      <div className={style.textWrapper}>
        <h1>VeracityAI</h1>
        <p>Detect AI-Generated Academic Submissions</p>
      </div>
    </div>
  )
}

export default Hero