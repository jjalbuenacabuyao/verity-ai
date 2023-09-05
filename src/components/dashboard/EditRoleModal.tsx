"use client";

import { useCurrentUserContext } from "@/hooks/userContext";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Radio, RadioGroup } from "@nextui-org/radio";
import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  firstName: string;
  role: string;
}

const EditRoleModal = ({ isOpen, onOpenChange, onClose, firstName, role }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="m-4">
      <form action="">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit user&apos;s role
              </ModalHeader>
              <ModalBody className="gap-6">
                <p>
                  {firstName}&apos;s role is currently:{" "}
                  <span className="font-semibold capitalize">
                    {role.toLocaleLowerCase()}
                  </span>
                </p>
                <RadioGroup
                  label={`Change ${firstName}'s to:`}
                  defaultValue={role === "ADMIN" ? "USER" : "ADMIN"}
                >
                  {["Admin", "User"].map((item) => (
                    <Radio
                      key={item}
                      value={item.toUpperCase()}
                      isDisabled={role === item.toUpperCase()}
                    >
                      {item}
                    </Radio>
                  ))}
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit" isLoading={isLoading}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </form>
    </Modal>
  );
};

export default EditRoleModal;
