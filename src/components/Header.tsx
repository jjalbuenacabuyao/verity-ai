"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b-[1px] border-solid border-transparent px-6 py-4 transition-colors duration-75 ease-linear lg:px-12 ${
        scrollPosition !== 0
          ? "border-b-off-black bg-header backdrop-blur backdrop-saturate-50"
          : ""
      }`}>
      <Logo />
      
      <Nav navOpen={navOpen} />

      <Button variant="toggler" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? (
          <AiOutlineClose size={24} fill="#030712" />
        ) : (
          <FiMenu size={24} fill="#030712" />
        )}
      </Button>
    </header>
  );
};

export default Header;
