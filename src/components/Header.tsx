"use client";

import { useCurrentUserContext } from "@/hooks/userContext";
import { Divider } from "@nextui-org/divider";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogInButtonAndModal from "./LogInButtonAndModal";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";

const Header = () => {
  const currentUser = useCurrentUserContext();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const currentPath = usePathname();
  const pathIsDetectorOrDashboard =
    currentPath === "/detector" || currentPath === "/dashboard";

  const menuItems = ["Home", "Features", "Tutorial", "FAQs"];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      onScrollPositionChange={(position) => setScrollPosition(position)}
      isBordered={
        scrollPosition !== 0 || pathIsDetectorOrDashboard
      }
      disableScrollHandler={false}
      classNames={{
        wrapper: "max-w-7xl",
        toggle: "w-8",
        toggleIcon: "before:w-8 after:w-8 before:h-0.5 after:h-0.5",
      }}>
      <ul>
        <Logo />
      </ul>

      <NavbarContent className="sm:hidden" justify="end">
        {currentUser && <UserMenu currentUser={currentUser} />}
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
              className="text-base font-semibold sm:text-sm">
              {item}
            </Link>
          </NavbarItem>
        ))}

        {currentUser && (
          <NavbarItem>
            <Link
              href={"/detector"}
              className="text-base font-semibold sm:text-sm">
              Detector
            </Link>
          </NavbarItem>
        )}

        {currentUser?.role === "ADMIN" && (
          <NavbarItem>
            <Link
              href={"/dashboard"}
              className="text-base font-semibold sm:text-sm">
              Dashboard
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          {currentUser ? <UserMenu currentUser={currentUser} /> : <LogInButtonAndModal />}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              href={`/${item === "Home" ? "/" : `/#${item.toLowerCase()}`}`}
              className="text-base font-semibold sm:text-sm"
              onClick={() => setIsMenuOpen(false)}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        {currentUser && (
          <NavbarMenuItem>
            <Link
              href={"/detector"}
              className="text-base font-semibold sm:text-sm"
              onClick={() => setIsMenuOpen(false)}>
              Detector
            </Link>
          </NavbarMenuItem>
        )}

        {currentUser?.role === "ADMIN" && (
          <NavbarMenuItem>
            <Link
              href={"/dashboard"}
              className="text-base font-semibold sm:text-sm"
              onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
          </NavbarMenuItem>
        )}

        <NavbarItem>
          {!currentUser && <LogInButtonAndModal />}
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
