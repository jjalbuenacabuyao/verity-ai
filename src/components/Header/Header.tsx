"use client";

import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import style from "./header.module.css";
import { FiMenu } from "react-icons/fi"

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={style.header}>
      <Logo />
      <Nav />
      <FiMenu size={24} fill="#030712" />
    </header>
  );
};

export default Header;
