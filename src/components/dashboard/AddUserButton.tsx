"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import AddUserModal from "./AddUserModal";
import { PlusIcon } from "../utilities";

interface Props {
  userAdded: boolean;
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

/**
 * Renders a button to add a user and opens a modal window for adding a user when clicked.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setUserAdded - A function to update the state of whether a user has been added.
 * @param {boolean} props.userAdded - A boolean value indicating whether a user has been added.
 *
 * @returns {JSX.Element} The rendered component.
 */
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
