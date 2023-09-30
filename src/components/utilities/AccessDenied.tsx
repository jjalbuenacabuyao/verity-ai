"use client";

import Image from "next/image";
import React from "react";
import { workSans } from "@/fonts";
import LogInButton from "./LogInButton";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

/**
 * Renders a page for displaying an access denied message.
 * 
 * @returns {JSX.Element} - The rendered access denied page with an image, a heading, a paragraph, a login button, and a button to navigate back to the homepage.
 */

const AccessDenied = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-6 pb-10 pt-5 text-center lg:grid lg:max-w-5xl lg:grid-cols-[40%_60%] lg:pt-10">
      <div className="flex flex-col gap-2 lg:col-start-2">
        <Image
          src="/access-denied-illustration.jpg"
          alt="Access denied"
          width={100}
          height={100}
          quality={100}
          priority
          className="mx-auto h-auto w-[75%]"
          unoptimized
        />
        <p className="text-[8px]">
          <a
            target="_blank"
            href="https://www.freepik.com/free-vector/tiny-people-standing-near-stop-sign-flat-vector-illustration-huge-red-sign-with-hand-symbolizing-ban-entry-danger-warning-caution-prohibited-actions-alert-risk-gesture-concept_24644976.htm#query=access%20denied&position=16&from_view=keyword&track=ais"
          >
            Image by pch.vector
          </a>{" "}
          on Freepik
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1 lg:text-left">
        <h1
          className={`${workSans.className} text-5xl font-bold text-blue-500`}
        >
          Access Denied
        </h1>
        <p>
          We&apos;re sorry, but the page you&apos;re trying to access requires
          you to be logged in. Please log in to your account to continue.
        </p>
        <div className="flex justify-center gap-3 lg:justify-start">
          <LogInButton />
          <Button
            color="primary"
            variant="bordered"
            radius="full"
            onPress={() => router.push("/")}
          >
            Back to homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
