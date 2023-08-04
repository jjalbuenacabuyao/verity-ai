"use client";

import React, { useState } from "react";
import { Root, Trigger } from "@radix-ui/react-dialog";
import LogInModal from "./LogInModal";
import Button from "./Button";

const LogInButton = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <Root open={open} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <Button variant="primary" text="Log in" />
      </Trigger>
      <LogInModal setIsOpen={setIsOpen} />
    </Root>
  )
};

export default LogInButton;
