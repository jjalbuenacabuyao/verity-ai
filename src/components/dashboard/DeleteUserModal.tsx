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
              <Button color="default" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="danger" className="font-semibold" isLoading={isLoading} onPress={deleteUser}>
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
