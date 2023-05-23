import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import LogInButton from "../LogInButton/LogInButton";
import "@styles/utility.css";
import style from "./header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex" 
      data-justify-between 
      data-items-center
    >
      <div className={`${style.wrapper} flex`}>
        <Logo />
        <Nav />
      </div>
      <LogInButton />
    </header>
  );
};

export default Header;
