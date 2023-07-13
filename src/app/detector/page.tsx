"use client";

import React, { useEffect, useState } from "react";
import { Aside, ResultContainer } from "@/components";

const Detector = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="mx-6">
      <Aside setFiles={setFiles} />
      <ResultContainer files={files} />
    </div>
  );
};

export default Detector;
