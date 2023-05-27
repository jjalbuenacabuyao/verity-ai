"use client";

import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import style from "./header.module.css";
import { FiMenu } from "react-icons/fi"

type Props = {};

const Header = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
  }, [scrollPosition])

  return (
    <header className={`${style.header} ${scrollPosition !== 0 ? style.showBorder : ""}`}>
      <Logo />
      <Nav />
      <FiMenu size={24} fill="#030712" />
    </header>
  );
};

export default Header;
