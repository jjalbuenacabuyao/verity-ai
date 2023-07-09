"use client";

import React, { useEffect, useState } from "react";
import { Aside, Header, ResultContainer } from "@/components";

const AiDetector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      <main className="mx-6">
        <Aside setFiles={setFiles} setIsLoading={setIsLoading} />
        <ResultContainer
          files={files}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </main>
    </>
  );
};

export default AiDetector;
