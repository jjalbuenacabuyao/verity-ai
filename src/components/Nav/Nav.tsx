"use client";

import Link from 'next/link'
import style from "./nav.module.css";
import LogInButton from '../LogInButton/LogInButton';

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className={style.nav}>
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

      <LogInButton />
    </nav>
  )
}

export default Nav