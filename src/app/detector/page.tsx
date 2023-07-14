"use client";

import React, { useState } from "react";
import { Aside, ResultContainer } from "@/components";
import { useCurrentUserContext } from "@/hooks/userContext";

const Detector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const currentUser = useCurrentUserContext();

  return (
    <div className="mx-6">
      <Aside setFiles={setFiles} />
      <ResultContainer files={files} />
    </div>
  );
};

export default Detector;
