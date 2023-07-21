import Link from "next/link";
import React from "react";
import Image from "next/image";
import { workSans } from "@/fonts";

const Logo = () => {
  return (
    <Link href={"/"} className="z-[9999] flex items-center">
      <Image src="/logo.svg" width={40} height={40} alt="VerityAI" />
      <span className={`${workSans.className} lg:text-lg`}>VerityAI</span>
    </Link>
  );
};

export default Logo;
