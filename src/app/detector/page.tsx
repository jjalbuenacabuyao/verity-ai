"use client";

import React, { useState } from "react";
import { useCurrentUserContext } from "@/hooks/userContext";
import { AccessDenied } from "@/components/utilities";
import { Aside, ResultContainer } from "@/components/detector";

/**
 * Renders the detector page.
 * 
 * React component that checks if the user is logged in and renders the AccessDenied component if not. 
 * It consists of an `Aside` component for file upload and a `ResultContainer` component for displaying
 * the detection results.
 * 
 * @returns {React.JSX.Element} The rendered component based on the user's authentication status.
 */

const Detector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const currentUser = useCurrentUserContext();

  if (!currentUser) {
    return <AccessDenied />;
  }

  return (
    <div className="px-6 pb-10 supports-clamp:px-fluid md:px-16 md:supports-clamp:px-fluid lg:grid 
    lg:grid-cols-[1fr_2.5fr] lg:gap-10 lg:px-24 lg:supports-clamp:px-fluid xl:px-28
    xl:supports-clamp:px-fluid">
      <Aside setFiles={setFiles} />
      <ResultContainer files={files} />
    </div>
  );
};

export default Detector;
