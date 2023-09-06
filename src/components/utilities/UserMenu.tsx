"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { CurrentUser } from "@/types";
import { signOut } from "next-auth/react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import PasswordVisibilityToggler from "./PasswordVisibilityToggler";
import axios from "axios";
import { Close, Root, Title, Viewport } from "@radix-ui/react-toast";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  currentUser: CurrentUser;
}

const UserMenu = ({ currentUser }: Props) => {
  const [isCurrentPassVisible, setIsCurrentPassVisible] = useState(false);
  const [isNewPassVisible, setIsNewPassVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const [passwordInput, setPasswordInput] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const userNameArray = currentUser.name.split(" ");
  const initials =
    userNameArray[0].charAt(0) +
    userNameArray[userNameArray.length - 1].charAt(0);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPasswordInput({ ...passwordInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await axios
      .post("/api/changepassword", {
        email: currentUser.email,
        ...passwordInput,
      })
      .then((res) => res.data);

    const { isError, message }: {
      isError: boolean;
      message: string
    } = response;

    if (isError) {
      setError({
        isError: true,
        errorMessage: message
      })
    } else {
      setIsSuccessToastOpen(true);
      onClose();
    }

    setIsLoading(false);
  };

  return (
    <>
      <Dropdown
        showArrow
        radius="sm"
        placement="bottom"
        trigger="press"
        shouldBlockScroll={false}
        classNames={{
          base: "border-small border-divider bg-background",
        }}
      >
        <DropdownTrigger>
          <Avatar
            size="sm"
            name={initials}
            isBordered
            color="primary"
            classNames={{
              base: "cursor-pointer hover:scale-90 hover:ring-offset-[3px] transition-all",
              name: "font-bold uppercase",
            }}
          />
        </DropdownTrigger>

        <DropdownMenu
          aria-label="User menu"
          variant="shadow"
          color="primary"
          onAction={(key) => {
            key === "logout" && signOut({ callbackUrl: "/" });
          }}
        >
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="text-sm font-semibold">{currentUser.name}</p>
            <p className="text-xs font-semibold capitalize">
              {currentUser.role.toLowerCase()}
            </p>
          </DropdownItem>
          <DropdownItem key="change-password" onClick={onOpen}>
            Change Password
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="m-4">
        <form onSubmit={handleSubmit}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Change Password
                </ModalHeader>
                <ModalBody className="gap-6">
                  <div>
                    <p className="mb-2">
                      Enter your{" "}
                      <span className="font-semibold">current password</span>
                    </p>
                    <Input
                      label="Current password"
                      variant="bordered"
                      name="currentPassword"
                      isRequired
                      onChange={handleChange}
                      validationState={error.isError ? "invalid" : "valid"}
                      errorMessage={error.errorMessage}
                      endContent={
                        <PasswordVisibilityToggler
                          toggleVisibility={() =>
                            setIsCurrentPassVisible(!isCurrentPassVisible)
                          }
                          isVisible={isCurrentPassVisible}
                        />
                      }
                      type={isCurrentPassVisible ? "text" : "password"}
                    />
                  </div>
                  <div className="grid gap-2">
                    <p>
                      Enter your{" "}
                      <span className="font-semibold">new password</span>
                    </p>
                    <Input
                      label="New password"
                      variant="bordered"
                      name="newPassword"
                      isRequired
                      onChange={handleChange}
                      endContent={
                        <PasswordVisibilityToggler
                          toggleVisibility={() =>
                            setIsNewPassVisible(!isNewPassVisible)
                          }
                          isVisible={isNewPassVisible}
                        />
                      }
                      type={isNewPassVisible ? "text" : "password"}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit" isLoading={isLoading} className="font-semibold">
                    Submit
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
            <Title className="font-semibold">Password updated successfully.</Title>
            <Close>
              <AiFillCloseCircle size={20} />
            </Close>
          </Root>
          <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
        </>
    </>
  );
};

export default UserMenu;
