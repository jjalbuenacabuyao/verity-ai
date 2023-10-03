import Link from "next/link";
import React from "react";
import Image from "next/image";
import { workSans } from "@/fonts";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 pt-[4.5rem] pb-10">
      <Link href={"/"} className="flex gap-1">
        <Image
          src="/logo.svg"
          width={36}
          height={36}
          alt="VerityAI"
          unoptimized
        />
        <p className={`${workSans.className} lg:text-lg`}>VerityAI</p>
      </Link>
      <p className="text-sm">&copy; 2023 VerityAI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
