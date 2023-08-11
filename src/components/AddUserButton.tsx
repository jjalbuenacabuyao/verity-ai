"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import PlusIcon from "./PlusIcon";
import AddUserModal from "./AddUserModal";

interface Props {
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

const AddUserButton = ({ setUserAdded }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        endContent={<PlusIcon />}
        className="bg-blue-500 font-semibold tracking-wide text-white">
        Add user
      </Button>

      <AddUserModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
export default AddUserButton;
