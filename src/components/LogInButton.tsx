"use client";

import React from "react";
import { Root, Trigger } from "@radix-ui/react-dialog";
import LogInModal from "./LogInModal";
import Button from "./Button";

const LogInButton = () => {
  return (
    <Root>
      <Trigger asChild>
        <Button variant="primary" text="Login" />
      </Trigger>
      <LogInModal />
    </Root>
  )
};

export default LogInButton;
