"use client";

import React from "react";
import {
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import LogInModal from "./LogInModal";

/**
 * Renders a button with the label "Log in". When the button is clicked, it opens a modal window for user login.
 *
 * @returns The rendered LogInButton component.
 */

const LogInButton = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        variant="solid"
        radius="full"
        className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
      >
        Log in
      </Button>
      <LogInModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};

export default LogInButton;
