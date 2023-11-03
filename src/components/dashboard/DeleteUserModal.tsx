"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  id: string;
  isOpen: boolean;
  username: string;
  onOpenChange: () => void;
  onClose: () => void;
  setUserDeleted: Dispatch<SetStateAction<boolean>>;
}

/**
 * Renders a modal dialog for deleting a user.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the user to be deleted.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {string} props.username - The username of the user to be deleted.
 * @param {function} props.onOpenChange - Callback function to handle the open state of the modal.
 * @param {function} props.onClose - Callback function to handle the close event of the modal.
 * @param {function} props.setUserDeleted - Callback function to update the state indicating whether the user has been deleted.
 *
 * @returns {JSX.Element} The rendered DeleteUserModal component.
 */
const DeleteUserModal = ({
  id,
  isOpen,
  username,
  onOpenChange,
  onClose,
  setUserDeleted,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const deleteUser = async () => {
    setIsLoading(true);
    const response = await axios.post("/api/delete", { id });
    setUserDeleted(true);
    setIsLoading(false);
    onClose();
    router.refresh();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Delete User
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to delete the account of{" "}
                <span className="font-semibold underline">{username}</span>?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="danger"
                className="font-semibold"
                isLoading={isLoading}
                onPress={deleteUser}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteUserModal;
