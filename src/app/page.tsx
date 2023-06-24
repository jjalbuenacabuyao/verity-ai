"use client";

import { Header, Hero } from "@/components";
import { useEffect, useState } from "react";

const Page = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        scrollPosition={scrollPosition}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Page;
