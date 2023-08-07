"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Root, Trigger } from "@radix-ui/react-dialog";
import Button from "./Button";
import AddUserModal from "./AddUserModal";

interface Props {
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

const AddUserButton = ({ setUserAdded }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <Button variant="primary" text="Add User" />
      </Trigger>
      <AddUserModal setUserAdded={setUserAdded} setIsOpen={setIsOpen} />
    </Root>
  )
}

export default AddUserButton