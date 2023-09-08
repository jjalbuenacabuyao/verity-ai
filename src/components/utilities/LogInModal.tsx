"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import React, { FormEvent, useState } from "react";
import MailIcon from "./MailIcon";
import PasswordVisibilityToggler from "./PasswordVisibilityToggler";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

const LogInModal = ({ isOpen, onOpenChange, onClose }: Props) => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: { email: string; password: string } = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    setIsLoading(true);
    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
      setIsLoading(false);
    } else {
      router.push("/detector");
      router.refresh();
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      className="m-4"
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                endContent={
                  <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                }
                label="Email"
                name="email"
                isRequired
                variant="bordered"
                validationState={
                  error === "User does not exist" ? "invalid" : "valid"
                }
                errorMessage={
                  error === "User does not exist" ? "User does not exist" : ""
                }
              />
              <Input
                endContent={
                  <PasswordVisibilityToggler
                    toggleVisibility={toggleVisibility}
                    isVisible={isVisible}
                  />
                }
                isRequired
                label="Password"
                name="password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
                validationState={
                  error === "Incorrect password" ? "invalid" : "valid"
                }
                errorMessage={
                  error === "Incorrect password" ? "Incorrect password" : ""
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Close
              </Button>
              <Button
                isLoading={isLoading}
                type="submit"
                variant="solid"
                className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
              >
                {isLoading ? "Logging in" : "Log in"}
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LogInModal;
