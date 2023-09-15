"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { MdVideoLibrary } from "react-icons/md";
import { BsFillFileRichtextFill } from "react-icons/bs";
import React, { useState } from "react";
import Subheading from "./Subheading";
import Image from "next/image";

const Tutorials = () => {
  const [selected, setSelected] = useState("Video");
  return (
    <div id="tutorial" className="pt-[4.5rem]">
      <Subheading title="Tutorial" />
      <div className="flex flex-col justify-center">
        <Tabs
          aria-label="Tutorial options"
          color="primary"
          variant="solid"
          radius="full"
          classNames={{
            base: "flex justify-center",
            tab: "h-12 px-5",
            tabList: "gap-5",
          }}
          selectedKey={selected}
          //@ts-ignore
          onSelectionChange={setSelected}
          disableAnimation
        >
          <Tab
            key="Video"
            title={
              <div className="flex items-center gap-2">
                <MdVideoLibrary size={24} />
                <span className="font-semibold">Video</span>
              </div>
            }
          >
            <div className="mx-auto max-w-2xl overflow-hidden rounded-xl">
              <iframe
                allowFullScreen
                src="https://www.youtube.com/embed/j2snrPFEfIw"
                className="min-h-[280px] w-full supports-aspect-ratio:aspect-video"
              ></iframe>
            </div>
          </Tab>
          <Tab
            key="Text"
            title={
              <div className="flex items-center gap-2">
                <BsFillFileRichtextFill size={24} />
                <span className="font-semibold">Text</span>
              </div>
            }
          >
            <div className="mx-auto max-w-2xl lg:text-lg">
              <h3 className="mb-8 mt-4 text-center text-3xl font-semibold">
                VerityAI Step-by-Step Instructions
              </h3>
              <ol className="flex flex-col gap-8">
                <li className="grid gap-4">
                  <p>
                    1. In the VerityAI homepage, click the{" "}
                    <span className="font-semibold">Log in</span> button.
                  </p>
                  <Image
                    src={"/login.png"}
                    alt="Screenshot of VerityAI homepage with arrow pointing to the Login button"
                    width={100}
                    height={100}
                    className="mx-auto h-auto w-full max-w-lg rounded-lg border shadow-md"
                    quality={100}
                    unoptimized
                    priority
                  />
                </li>

                <li className="grid gap-4">
                  <p>
                    2. Enter your <span className="font-semibold">email</span> and{" "}
                    <span className="font-semibold">password</span> and click
                    Log in.
                  </p>
                  <Image
                    src={"/emailandpassword.png"}
                    alt="Screenshot of VerityAI homepage with arrow pointing to the Login button"
                    width={100}
                    height={100}
                    className="mx-auto h-auto w-full max-w-lg rounded-lg border shadow-md"
                    quality={100}
                    unoptimized
                    priority
                  />
                </li>
              </ol>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Tutorials;
