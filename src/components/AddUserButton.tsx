"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Root, Trigger } from "@radix-ui/react-dialog";
import Button from "./Button";
import AddUserModal from "./AddUserModal";

interface Props {
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

const AddUserButton = ({ setUserAdded }: Props) => {
  return (
    <Root>
      <Trigger asChild>
        <Button variant="primary" text="Add User" />
      </Trigger>
      <AddUserModal setUserAdded={setUserAdded} />
    </Root>
  )
}

export default AddUserButton