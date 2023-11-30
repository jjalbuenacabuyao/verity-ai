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

/**
 * Renders a modal window with email and password input for user login.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Indicates whether the login modal is open or closed.
 * @param {function} props.onOpenChange - Callback function to handle the open/close state change of the modal.
 * @param {function} props.onClose - Callback function to handle the close event of the modal.
 * @returns {JSX.Element} The rendered component.
 */

const LogInModal = ({ isOpen, onOpenChange, onClose }: Props) => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string) =>
    value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    if (!validateEmail(email)) {
      setIsEmailInvalid(true);
      setIsLoading(false);
      return;
    }

    const data: { email: string; password: string } = {
      email: email,
      password: password,
    };

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
                  error === "User does not exist" || isEmailInvalid
                    ? "invalid"
                    : "valid"
                }
                errorMessage={
                  error === "User does not exist"
                    ? "User does not exist"
                    : isEmailInvalid
                    ? "Invalid email."
                    : ""
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
