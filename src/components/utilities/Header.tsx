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
import LogInButton from "./LogInButton";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";

/**
 * Represents the header section of a website that contains the logo, links, button and user menu.
 *
 * @returns {JSX.Element} The rendered header component.
 */

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
      isBordered={scrollPosition !== 0 || pathIsDetectorOrDashboard}
      disableScrollHandler={false}
      classNames={{
        wrapper:
          "max-w-none px-4 md:px-16 lg:px-24 xl:px-28 supports-clamp:px-fluid md:supports-clamp:px-fluid lg:supports-clamp:px-fluid xl:supports-clamp:px-fluid",
        toggle: "w-8",
        toggleIcon: "before:w-8 after:w-8 before:h-0.5 after:h-0.5",
      }}
    >
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

        {/* If the user is in the homepage, the href attribute of Home link will be "#top". If the user is in the other pages such as Detector or Dashboard, the value of href attribute will be "/" */}
        {menuItems.map((item) => (
          <NavbarItem key={item}>
            <Link
              href={`${
                item === "Home" && currentPath !== "/"
                  ? "/"
                  : item === "Home" && currentPath === "/"
                  ? "#top"
                  : `/#${item.toLowerCase()}`
              }`}
              className="text-base font-semibold sm:text-sm"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}

        {currentUser && (
          <NavbarItem>
            <Link
              href={"/detector"}
              className="text-base font-semibold sm:text-sm"
            >
              Detector
            </Link>
          </NavbarItem>
        )}

        {currentUser?.role === "ADMIN" && (
          <NavbarItem>
            <Link
              href={"/dashboard"}
              className="text-base font-semibold sm:text-sm"
            >
              Dashboard
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          {currentUser ? (
            <UserMenu currentUser={currentUser} />
          ) : (
            <LogInButton />
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              href={`/${item === "Home" ? "/" : `/#${item.toLowerCase()}`}`}
              className="text-base font-semibold sm:text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        {currentUser && (
          <NavbarMenuItem>
            <Link
              href={"/detector"}
              className="text-base font-semibold sm:text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Detector
            </Link>
          </NavbarMenuItem>
        )}

        {currentUser?.role === "ADMIN" && (
          <NavbarMenuItem>
            <Link
              href={"/dashboard"}
              className="text-base font-semibold sm:text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </NavbarMenuItem>
        )}

        <NavbarItem>{!currentUser && <LogInButton />}</NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
