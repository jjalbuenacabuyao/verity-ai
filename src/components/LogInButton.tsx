"use client";

import React from "react";
import { Root, Trigger } from "@radix-ui/react-dialog";
import LogInModal from "./LogInModal";
import Button from "./Button";

interface Props {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInButton = ({ setNavOpen }: Props) => {
  return (
    <Root>
      <Trigger asChild>
        <Button variant="primary" text="Log in" />
      </Trigger>
      <LogInModal setNavOpen={setNavOpen} />
    </Root>
  )
};

export default LogInButton;
