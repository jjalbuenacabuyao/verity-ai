import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  scrollPosition: number;
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ scrollPosition, navOpen, setNavOpen }: Props) => {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b-[1px] border-solid border-transparent px-6 py-4 transition-colors duration-75 ease-linear ${
        scrollPosition !== 0
          ? "border-b-off-black bg-header backdrop-blur backdrop-saturate-50"
          : ""
      }`}>
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
