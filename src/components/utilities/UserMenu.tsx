"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import React, { ChangeEvent, useState } from "react";
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

interface Props {
  currentUser: CurrentUser;
}

const UserMenu = ({ currentUser }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const userNameArray = currentUser.name.split(" ");
  const initials =
    userNameArray[0].charAt(0) +
    userNameArray[userNameArray.length - 1].charAt(0);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPasswordInput({ ...passwordInput, [e.target.name]: e.target.value });
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <form action="">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Change Password
                </ModalHeader>
                <ModalBody className="gap-6">
                  <div className="grid gap-2">
                    <p>
                      Enter your{" "}
                      <span className="font-semibold">current password</span>
                    </p>
                    <Input
                      label="Current password"
                      variant="bordered"
                      name="currentPassword"
                      isRequired
                      onChange={handleChange}
                      endContent={
                        <PasswordVisibilityToggler
                          toggleVisibility={toggleVisibility}
                          isVisible={isVisible}
                        />
                      }
                      type={isVisible ? "text" : "password"}
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
                          toggleVisibility={toggleVisibility}
                          isVisible={isVisible}
                        />
                      }
                      type={isVisible ? "text" : "password"}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default UserMenu;
