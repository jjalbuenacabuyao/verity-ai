import Link from "next/link";
import React from "react";
import Image from "next/image";
import { workSans } from "@/fonts";
import { NavbarBrand } from "@nextui-org/navbar";

const Logo = () => {
  return (
    <Link href={"/"}>
      <NavbarBrand>
        <Image src="/logo.svg" width={36} height={36} alt="VerityAI" unoptimized />
        <p className={`${workSans.className} lg:text-lg sm:hidden lg:block`}>VerityAI</p>
      </NavbarBrand>
    </Link>
  );
};

export default Logo;
