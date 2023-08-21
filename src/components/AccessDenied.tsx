import Image from "next/image";
import React from "react";
import { workSans } from "@/fonts";

const AccessDenied = () => {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-6 text-center">
      <div className="flex flex-col gap-2 w-full">
        <Image src="/access-denied.jpg" alt="Access denied" width={100} height={100} quality={100} priority className="w-full h-48" unoptimized />
        <p className="text-xs">
          <a target="_blank" href="https://www.freepik.com/free-vector/tiny-people-standing-near-stop-sign-flat-vector-illustration-huge-red-sign-with-hand-symbolizing-ban-entry-danger-warning-caution-prohibited-actions-alert-risk-gesture-concept_24644976.htm#query=access%20denied&position=16&from_view=keyword&track=ais">Image by pch.vector</a> on Freepik</p>
      </div>
      <h1 className={`${workSans.className} text-5xl font-bold text-blue-500`}>
        Access Denied
      </h1>
      <p>
        We&apos;re sorry, but the page you&apos;re trying to access requires you
        to be logged in. Please log in to your account to continue.
      </p>
    </div>
  );
};

export default AccessDenied;
