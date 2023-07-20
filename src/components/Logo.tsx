import Link from "next/link";
import React from "react";
import Image from "next/image";
import { workSans } from "@/fonts";

const Logo = () => {
  return (
    <Link href={"/"} className="z-[9999] flex items-center gap-x-1">
      <Image src="/logo.svg" width={36} height={32} alt="Veracity" />
      <span className={`${workSans.className} text-lg lg:text-xl`}>VerityAI</span>
    </Link>
  );
};

export default Logo;
