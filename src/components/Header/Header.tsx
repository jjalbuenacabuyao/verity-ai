"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
  }, [scrollPosition]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b-[1px] border-solid border-transparent bg-header px-6 py-4 backdrop-blur backdrop-saturate-50 transition-colors duration-75 ease-linear ${
        scrollPosition !== 0 ? "border-b-off-black" : ""
      }`}
    >
      <Logo />
      <Nav navOpen={navOpen} />

      <button onClick={() => setNavOpen(!navOpen)} className="z-10">
        {navOpen ? (
          <AiOutlineClose size={24} fill="#030712" />
        ) : (
          <FiMenu size={24} fill="#030712" />
        )}
      </button>
    </header>
  );
};

export default Header;
