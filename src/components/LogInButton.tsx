"use client";

import React, { useState } from "react";
import { Root, Trigger } from "@radix-ui/react-dialog";
import LogInModal from "./LogInModal";
import Button from "./Button";

interface Props {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInButton = ({ setNavOpen }: Props) => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <Root open={open} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <Button variant="primary" text="Log in" />
      </Trigger>
      <LogInModal setIsOpen={setIsOpen} setNavOpen={setNavOpen} />
    </Root>
  )
};

export default LogInButton;
