"use client";

import React, { useState } from "react";
import { Aside, ResultContainer, AccessDenied } from "@/components";
import { useCurrentUserContext } from "@/hooks/userContext";
import { useRouter } from "next/navigation";
import { useIdleTimer } from "react-idle-timer";

const Detector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const currentUser = useCurrentUserContext();
  const router = useRouter();

  const onIdle = () => {
    router.refresh();
  };

  useIdleTimer({
    onIdle,
    timeout: 1000 * 60 * 30, // 30 minutes
  });

  if (!currentUser) {
    return <AccessDenied />;
  }

  return (
    <div className="px-6 pb-10 supports-clamp:px-fluid md:px-16 md:supports-clamp:px-fluid lg:grid lg:grid-cols-[1fr_2.5fr] lg:gap-10 lg:px-24 lg:supports-clamp:px-fluid xl:px-28 xl:supports-clamp:px-fluid">
      <Aside setFiles={setFiles} />
      <ResultContainer files={files} />
    </div>
  );
};

export default Detector;
