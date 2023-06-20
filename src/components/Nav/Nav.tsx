"use client";

import Link from 'next/link'
import LogInModal from '../LogInModal/LogInModal';
import { useEffect } from 'react';
import React from 'react';

interface Props {
  navOpen: boolean
}

const Nav = ({ navOpen }: Props) => {
  useEffect(() => {
    const body = document.body.style;
    navOpen ? body.overflowY = "hidden" : body.overflowY = "auto";
  }, [navOpen])

  return (
    <nav className={`fixed top-0 inset-x-0 py-16 px-6 bg-white translate-x-full transition-transform duration-300 ${navOpen ? "translate-x-0" : ""}`}>
      <ul className="grid gap-4">
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
        <li>
          <LogInModal />
        </li>
      </ul>
    </nav>
  )
}

export default Nav