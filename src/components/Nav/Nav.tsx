"use client";

import Link from 'next/link'
import style from "./nav.module.css";
import LogInButton from '../LogInButton/LogInButton';
import LogInModal from '../LogInModal/LogInModal';
import { useEffect } from 'react';

interface Props {
  navOpen: boolean
}

const Nav = ({ navOpen }: Props) => {
  useEffect(() => {
    const body = document.body.style;
    navOpen ? body.overflowY = "hidden" : body.overflowY = "auto";
  }, [navOpen])

  return (
    <nav className={style.nav} data-navopen={navOpen ? "true" : "false"}>
      <ul className={style.list}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"#features"}>Features</Link>
        </li>
        <li>
          <Link href={"#tutorial"}>Tutorial</Link>
        </li>
        <li>
          <Link href={"#faq"}>FAQs</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav