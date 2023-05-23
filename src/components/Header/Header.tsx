import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import LogInButton from "../LogInButton/LogInButton";
import style from "./header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={`${style.container}`}>
      <div className={`${style.wrapper}`}>
        <Logo />
        <Nav />
      </div>
      <LogInButton />
    </header>
  );
};

export default Header;
