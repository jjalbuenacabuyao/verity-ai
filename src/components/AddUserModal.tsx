"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Portal, Overlay, Content, Title } from "@radix-ui/react-dialog";
import axios from "axios";
import InputField from "./InputField";
import Button from "./Button";
import { TailSpin } from "react-loader-spinner";

interface User {
  email: string;
  password: string;
  role: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

const AddUserModal = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    role: "USER",
    firstName: "",
    middleName: "",
    lastName: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    const response = await axios.post("/api/register", user);

    if (response.statusText === "OK") {
      setIsLoading(false);
      setUser({
        email: "",
        password: "",
        role: "USER",
        firstName: "",
        middleName: "",
        lastName: "",
      });
    }
  };

  return (
    <Portal>
      <Overlay className="fixed inset-0 z-20 animate-overlayShow bg-black/[0.44]" />
      <Content className="fixed left-1/2 top-1/2 z-20 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow overflow-auto rounded-md bg-white p-8 shadow-dialog-content lg:max-w-2xl">
        <Title>Add New User</Title>
        <form onSubmit={handleSubmit}>
          <fieldset className="grid grid-cols-3 gap-x-3 gap-y-5">
            <p className="col-span-3">Name</p>
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

          <fieldset>
            <p>Role</p>
            <label htmlFor="user">
              <input
                type="radio"
                name="role"
                id="user"
                value="USER"
                onChange={handleChange}
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
            <p>Email and Password</p>
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
