"use client";

import { useCurrentUserContext } from "@/hooks/userContext";
import { Divider } from "@nextui-org/divider";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LogInButtonAndModal from "./LogInButtonAndModal";
import LogOutButton from "./LogOutButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const currentUser = useCurrentUserContext();

  const menuItems = ["Home", "Features", "Tutorial", "FAQs"];

  return (
    <Navbar
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      onScrollPositionChange={(position) => setScrollPosition(position)}
      isBordered={scrollPosition === 0 ? false : true}
      disableScrollHandler={false}
      classNames={{
        wrapper: "max-w-7xl sm:px-8 lg:px-10",
      }}>
      <ul>
        <NavbarBrand>
          <Image src={"/logo.svg"} width={36} height={36} alt="VerityAI" />
          <p className="font-bold text-inherit">VerityAI</p>
        </NavbarBrand>
      </ul>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="start">
        <Divider
          orientation="vertical"
          className="hidden h-auto py-3 sm:block"
        />

        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link
              href={`/${item === "Home" ? "/" : `/#${item.toLowerCase()}`}`}
              className="text-sm font-semibold">
              {item}
            </Link>
          </NavbarItem>
        ))}

        {currentUser && (
          <NavbarItem>
            <Link href={"/detector"} className="text-sm font-semibold">
              Detector
            </Link>
          </NavbarItem>
        )}

        {currentUser?.role === "ADMIN" && (
          <NavbarItem>
            <Link href={"/dashboard"} className="text-sm font-semibold">
              Dashboard
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          {currentUser ? <LogOutButton /> : <LogInButtonAndModal />}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              href={`/${item === "Home" ? "/" : `/#${item.toLowerCase()}`}`}
              className="text-sm font-semibold"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        {currentUser && (
          <NavbarMenuItem>
            <Link href={"/detector"} className="text-sm font-semibold">
              Detector
            </Link>
          </NavbarMenuItem>
        )}

        {currentUser?.role === "ADMIN" && (
          <NavbarMenuItem>
            <Link href={"/dashboard"} className="text-sm font-semibold">
              Dashboard
            </Link>
          </NavbarMenuItem>
        )}

        <NavbarItem>
          {currentUser ? <LogOutButton /> : <LogInButtonAndModal />}
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
