"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { MailIcon, Toast } from "../utilities";
import { Input } from "@nextui-org/input";
import axios from "axios";
import { validateEmail } from "@/utils";

type Props = {};

const SendRegistrationLinkButton = (props: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailNotSent, setIsEmailNotSent] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEmailInvalid(false);
    setIsLoading(true);

    if (!validateEmail(email)) {
      setIsEmailInvalid(true);
      setIsLoading(false);
      return;
    }

    const response: { status: 200 | 500 } = await axios.post("/api/sendregistrationlink", {
      email: email
    }).then(res => res.data);

    if (response.status == 200) {
      setIsEmailSent(true);
      setIsLoading(false);
      onClose()
    } else {
      setIsEmailNotSent(true);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Button
        onPress={onOpen}
        endContent={<MailIcon />}
        fullWidth
        className="bg-blue-500 font-semibold tracking-wide text-white"
      >
        Send Registration Link
      </Button>

      <>
        <Modal
          isDismissable={false}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          scrollBehavior="inside"
          className="m-4"
        >
          <form onSubmit={handleSubmit}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Send registration link
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      label="Email"
                      name="email"
                      variant="bordered"
                      type="text"
                      isRequired
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      validationState={isEmailInvalid ? "invalid" : "valid"}
                      errorMessage={isEmailInvalid ? "Invalid email." : ""}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onClick={onClose}>
                      Close
                    </Button>
                    <Button isLoading={isLoading} color="primary" type="submit">
                      Send Registration Link
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </form>
        </Modal>

        {isEmailSent && (
          <Toast
            type="userIsAdded"
            title="Registration link sent successfully."
            isOpen={isEmailSent}
            onOpenChange={setIsEmailSent}
          />
        )}

        {isEmailNotSent && (
          <Toast
            type="fileLimitExceeded"
            title="Email not sent."
            isOpen={isEmailSent}
            onOpenChange={setIsEmailSent}
          />
        )}
      </>
    </>
  );
};

export default SendRegistrationLinkButton;
