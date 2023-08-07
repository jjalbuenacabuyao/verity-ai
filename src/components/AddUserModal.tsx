"use client";

import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Portal, Overlay, Content, Title } from "@radix-ui/react-dialog";
import axios from "axios";
import InputField from "./InputField";
import Button from "./Button";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
  role: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

interface Props {
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

const AddUserModal = ({ setUserAdded }: Props) => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    role: "USER",
    firstName: "",
    middleName: "",
    lastName: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    const response = await axios.post("/api/register", user);

    if (response.statusText === "OK") {
      setIsLoading(false);
      setUserAdded(true)
    }
  };

  return (
    <Portal>
      <Overlay className="fixed inset-0 z-20 animate-overlayShow bg-black/[0.44]" />
      <Content className="fixed left-1/2 top-1/2 z-20 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow overflow-auto rounded-md bg-white p-8 shadow-dialog-content lg:max-w-2xl">
        <Title className="mb-5 text-lg font-bold">Add New User</Title>
        <form onSubmit={handleSubmit}>
          <fieldset className="grid grid-cols-3 gap-x-4">
            <p className="col-span-3 mb-5 font-bold">Name</p>
            <InputField
              id="firstname"
              type="text"
              required
              label="First name"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />

            <InputField
              id="middlename"
              type="text"
              required
              label="Middle name"
              name="middleName"
              value={user.middleName}
              onChange={handleChange}
            />

            <InputField
              id="lastname"
              type="text"
              required
              label="Last name"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="mb-5">
            <p className="mb-5 font-bold">Role</p>
            <label htmlFor="user">
              <input
                type="radio"
                name="role"
                id="user"
                value="USER"
                onChange={handleChange}
                required
              />
              User
            </label>
            <label htmlFor="admin">
              <input
                type="radio"
                name="role"
                id="admin"
                value="ADMIN"
                onChange={handleChange}
              />
              Admin
            </label>
          </fieldset>

          <fieldset>
            <p className="mb-5 font-bold">Email and Password</p>
            <InputField
              id="email"
              type="email"
              required
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />

            <InputField
              id="password"
              type="password"
              required
              label="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </fieldset>

          <Button
            variant="primary"
            type="submit"
            className={`${
              isLoading
                ? "pointer-events-none flex h-10 w-24 items-center justify-center"
                : ""
            }`}>
            {isLoading ? (
              <TailSpin
                height="24"
                width="24"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <span>Add user</span>
            )}
          </Button>
        </form>
      </Content>
    </Portal>
  );
};

export default AddUserModal;
