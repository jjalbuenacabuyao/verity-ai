"use client";

import Link from "next/link";
import { useEffect } from "react";
import React from "react";
import { useCurrentUserContext } from "@/hooks/userContext";
import { signOut } from "next-auth/react";
import LogInButton from "./LogInButton";
import Button from "./Button";

interface Props {
  navOpen: boolean;
}

const Nav = ({ navOpen }: Props) => {
  const currentUser = useCurrentUserContext();

  useEffect(() => {
    const body = document.body.style;
    navOpen ? (body.overflowY = "hidden") : (body.overflowY = "auto");
  }, [currentUser, navOpen]);

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
      className={`fixed inset-x-0 top-0 bg-white px-6 py-16 transition-transform duration-300 lg:transform-none lg:bg-transparent lg:p-0 lg:static ${
        navOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <ul className="grid gap-4 lg:flex lg:items-center font-medium lg:gap-6">
        {links.map(({ href, link }) => (
          <li key={link}>
            <Link href={href} className="hover:text-sky-500 transition-colors duration-300">{link}</Link>
          </li>
        ))}

        {currentUser?.role === "ADMIN" && (
          <li>
            <Link className="hover:text-sky-500 transition-colors duration-300" href={"/dashboard"}>Dashboard</Link>
          </li>
        )}

        {currentUser ? (
          <>
            <li>
              <Link className="hover:text-sky-500 transition-colors duration-300" href={"/detector"}>Detector</Link>
            </li>
            <li>
              <Button
                onClick={() => signOut({ callbackUrl: "/" })}
                variant={"primary"}
                text="Log out"
              />
            </li>
          </>
        ) : (
          <li>
            <LogInButton />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
