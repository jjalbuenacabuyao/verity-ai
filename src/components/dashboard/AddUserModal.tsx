"use client";

import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import axios from "axios";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { useRouter } from "next/navigation";
import { EmailAlreadyExistToast, PasswordVisibilityToggler, UserAddedToast } from "../utilities";

interface User {
  email: string;
  password: string;
  role: string;
  firstname: string;
  middlename: string;
  lastname: string;
}

interface Props {
  isOpen: boolean;
  userAdded: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

const AddUserModal = ({
  isOpen,
  onOpenChange,
  setUserAdded,
  userAdded,
  onClose,
}: Props) => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    role: "USER",
    firstname: "",
    middlename: "",
    lastname: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post("/api/register", user);
      setIsLoading(false);
      onClose();
      setUserAdded(true);
      router.refresh();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const nameInputFields = ["firstname", "middlename", "lastname"];

  return (
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
                  Add user
                </ModalHeader>
                <ModalBody className="gap-7">
                  <fieldset className="grid gap-3 capitalize">
                    <p className="font-semibold">Name</p>
                    {nameInputFields.map((field) => (
                      <Input
                        key={field}
                        autoFocus={field === "firstname"}
                        label={field === "middlename" ? "Middle name" : field}
                        name={field}
                        variant="bordered"
                        autoComplete="off"
                        isRequired
                        onChange={handleChange}
                      />
                    ))}
                  </fieldset>
                  <fieldset className="grid gap-3">
                    <p className="font-semibold">Role</p>
                    <RadioGroup
                      defaultValue="USER"
                      orientation="horizontal"
                      name="role"
                      //@ts-ignore
                      onChange={handleChange}
                    >
                      <Radio
                        value="USER"
                        className="rounded-lg border px-4 py-2"
                      >
                        <p className="font-semibold">User</p>
                        <ul className="text-xs">
                          <li>✅ AI-Detector</li>
                          <li>❌ Dashboard</li>
                        </ul>
                      </Radio>
                      <Radio
                        value="ADMIN"
                        className="ml-4 rounded-lg border px-4 py-2"
                      >
                        <p className="font-semibold">Admin</p>
                        <ul className="text-xs">
                          <li>✅ AI-Detector</li>
                          <li>✅ Dashboard</li>
                        </ul>
                      </Radio>
                    </RadioGroup>
                  </fieldset>
                  <fieldset className="grid gap-3">
                    <p className="font-semibold">Email and Password</p>
                    <Input
                      label="Email"
                      name="email"
                      variant="bordered"
                      isRequired
                      onChange={handleChange}
                    />
                    <Input
                      label="Password"
                      variant="bordered"
                      name="password"
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
                  </fieldset>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button isLoading={isLoading} color="primary" type="submit">
                    Create user
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
      {userAdded && (
        <UserAddedToast userAdded={userAdded} setUserAdded={setUserAdded} />
      )}
      {isError && (
        <EmailAlreadyExistToast isError={isError} setIsError={setIsError} />
      )}
    </>
  );
};

export default AddUserModal;