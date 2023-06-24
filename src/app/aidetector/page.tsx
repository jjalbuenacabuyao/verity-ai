"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components";
import FileContext from "@/hooks/FileContext";
import AiDetectorMain from "@/components/AiDetectorMain";

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
      <FileContext.Provider value={{files, setFiles, isLoading, setIsLoading}}>
        <AiDetectorMain />
      </FileContext.Provider>
    </>
  );
};

export default AiDetector;
