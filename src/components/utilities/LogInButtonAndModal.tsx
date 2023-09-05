"use client";

import React, { FormEvent, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import MailIcon from "./MailIcon";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import PasswordVisibilityToggler from "./PasswordVisibilityToggler";

const LogInButtonAndModal = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
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
    <>
      <Button
        onPress={onOpen}
        variant="solid"
        radius="full"
        className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
      >
        Log in
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="m-4"
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
                <div className="flex justify-end px-1 py-2">
                  <Link href="#" className="text-sm text-blue-500">
                    Forgot password?
                  </Link>
                </div>
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
    </>
  );
};

export default LogInButtonAndModal;
