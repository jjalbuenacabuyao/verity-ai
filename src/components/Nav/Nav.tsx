"use client";

import Link from "next/link";
import LogInModal from "../LogInModal/LogInModal";
import { useEffect } from "react";
import React from "react";

interface Props {
  navOpen: boolean;
}

const Nav = ({ navOpen }: Props) => {
  useEffect(() => {
    const body = document.body.style;
    navOpen ? (body.overflowY = "hidden") : (body.overflowY = "auto");
  }, [navOpen]);

  const links = [
    {
      href: "/",
      link: "Home",
    },
    {
      href: "#features",
      link: "Features",
    },
    {
      href: "#tutorial",
      link: "Tutorial",
    },
    {
      href: "#faq",
      link: "FAQs",
    },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 bg-white px-6 py-16 transition-transform duration-300 ${
        navOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="grid gap-4">
        {links.map(({ href, link }) => (
          <li key={link}>
            <Link href={href}>{link}</Link>
          </li>
        ))}
        <li>
          <LogInModal />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
