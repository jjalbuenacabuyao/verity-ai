"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import PlusIcon from "../utilities/PlusIcon";
import AddUserModal from "./AddUserModal";

interface Props {
  userAdded: boolean;
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

const AddUserButton = ({ setUserAdded, userAdded }: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        endContent={<PlusIcon />}
        fullWidth
        className="bg-blue-500 font-semibold tracking-wide text-white"
      >
        Add user
      </Button>

      <AddUserModal
        isOpen={isOpen}
        userAdded={userAdded}
        setUserAdded={setUserAdded}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};
export default AddUserButton;
