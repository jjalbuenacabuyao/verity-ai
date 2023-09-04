"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { MdVideoLibrary } from "react-icons/md";
import { BsFillFileRichtextFill } from "react-icons/bs";
import React from "react";
import Subheading from "./Subheading";

type Props = {};

const Tutorials = (props: Props) => {
  return (
    <div>
      <Subheading title="Tutorials" />
      <div className="flex justify-center">
        <Tabs aria-label="Tutorial options" color="primary" variant="light">
          <Tab
            key="Video"
            title={
              <div className="flex items-center gap-2">
                <MdVideoLibrary size={24} />
                <span>Video</span>
              </div>
            }
          />
          <Tab
            key="Text"
            title={
              <div className="flex items-center gap-2">
                <BsFillFileRichtextFill size={24} />
                <span>Text</span>
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
};

export default Tutorials;
