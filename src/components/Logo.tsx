import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"} className="z-[9999] flex items-center font-work-sans">
      <Image src="/logo.svg" width={36} height={32} alt="Veracity" />
      <span className="font-bold">VerityAI</span>
    </Link>
  );
};

export default Logo;
