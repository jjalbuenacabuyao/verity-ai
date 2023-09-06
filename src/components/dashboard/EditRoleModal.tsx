"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Title, Close, Viewport, Root } from "@radix-ui/react-toast";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  id: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  firstName: string;
  role: string;
}

const EditRoleModal = ({
  id,
  isOpen,
  onOpenChange,
  onClose,
  firstName,
  role,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(false);

    setIsLoading(true);
    const response: { success: boolean } = await axios
      .post("/api/changerole", {
        id: id,
        role: role === "ADMIN" ? "USER" : "ADMIN",
      })
      .then((res) => res.data);

    if (!response.success) {
      setIsError(true);
    } else {
      setIsSuccessToastOpen(true);
      onClose();
      location.reload();
    }

    setIsLoading(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="m-4">
        <form onSubmit={handleSubmit}>
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
                    label={`Change ${firstName}'s role to:`}
                    name="role"
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
                  <p
                    className={`${
                      isError ? "block" : "hidden"
                    } text-sm text-red-500`}
                  >
                    An error occured while changing the role. Please chack your
                    internet connection and try again.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit" isLoading={isLoading} className="font-semibold">
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>

      <>
        <Root
          open={isSuccessToastOpen}
          onOpenChange={setIsSuccessToastOpen}
          className="flex items-center gap-4 rounded-md border bg-green-500 p-5 text-white shadow-lg data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        >
          <Title className="font-semibold">Role changed successfully.</Title>
          <Close>
            <AiFillCloseCircle size={20} />
          </Close>
        </Root>
        <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
      </>
    </>
  );
};

export default EditRoleModal;
