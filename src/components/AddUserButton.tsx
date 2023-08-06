"use client";
import React, { useState } from "react";
import { Root, Trigger } from "@radix-ui/react-dialog";
import Button from "./Button";
import AddUserModal from "./AddUserModal";

const AddUserButton = () => {
  return (
    <Root>
      <Trigger asChild>
        <Button variant="primary" text="Add User" />
      </Trigger>
      <AddUserModal />
    </Root>
  )
}

export default AddUserButton