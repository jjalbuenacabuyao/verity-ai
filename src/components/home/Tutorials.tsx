"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { MdVideoLibrary } from "react-icons/md";
import { BsFillFileRichtextFill } from "react-icons/bs";
import React, { useState } from "react";
import Subheading from "./Subheading";
import InstructionList from "./InstructionList";

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
              <InstructionList />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Tutorials;
