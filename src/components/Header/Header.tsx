"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import style from "./header.module.css";
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
      className={`${style.header} ${
        scrollPosition !== 0 ? style.showBorder : ""
      }`}
    >
      <Logo />
      <Nav navOpen={navOpen} />

      <button onClick={() => setNavOpen(!navOpen)} className={style.menuButton}>
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
