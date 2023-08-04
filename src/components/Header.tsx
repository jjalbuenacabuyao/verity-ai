"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { usePathname } from "next/navigation";
import NavOpenContext from "@/hooks/navOpenContext";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavOpen(false);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavOpenContext.Provider value={{value: navOpen, updater: setNavOpen}}>
      <header
      className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b-[1px] border-solid border-transparent px-6 py-4 transition-colors duration-75 ease-linear lg:px-16 ${
        scrollPosition !== 0
          ? "border-b-off-black bg-header backdrop-blur backdrop-saturate-50"
          : ""
      } ${
        pathname === "/detector" || pathname === "/dashboard"
          ? "lg:border-b-off-black"
          : ""
      }`}>
      <Logo />

      <Nav />

      <Button
        variant="toggler"
        onClick={() => setNavOpen(!navOpen)}
        className="lg:hidden">
        {navOpen ? (
          <AiOutlineClose size={24} title="Close Menu" fill="#334155" />
        ) : (
          <FiMenu size={24} title="Menu" fill="#334155" />
        )}
      </Button>
    </header>
    </NavOpenContext.Provider>
    
  );
};

export default Header;
