"use client";

import React, { useEffect, useState } from "react";
import { Aside, ResultContainer } from "@/components";
import { useCurrentUserContext } from "@/hooks/userContext";
import { useRouter } from "next/navigation";

const Detector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const currentUser = useCurrentUserContext();
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router])

  return (
    <div className="mx-6 pt-24 lg:pt-28 lg:mx-16 lg:grid lg:grid-cols-[1fr_2.5fr] lg:gap-10 lg:h-screen lg:max-h-screen lg:overflow-hidden">
      <Aside setFiles={setFiles} />
      <ResultContainer files={files} />
    </div>
  );
};

export default Detector;
