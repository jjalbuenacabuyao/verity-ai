"use client";

import React from "react";
import {
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import LogInModal from "./LogInModal";

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
