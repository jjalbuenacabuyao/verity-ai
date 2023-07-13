"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
} from "@radix-ui/react-dialog";
import axios from "axios";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(user);
    await axios.post("/api/register", user);
    console.log("User created");
  };

  return (
    <Root>
      <Trigger asChild>
        <button>+ Add New Account</button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Add New Account</Title>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Role:
              <select
                name="role"
                value={user.role}
                onChange={handleSelectChange}
              >
                <option value={"USER"}>User</option>
                <option value={"ADMIN"}>Admin</option>
              </select>
            </label>
            <br />
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Middle Name:
              <input
                type="text"
                name="middleName"
                value={user.middleName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Create User</button>
          </form>
        </Content>
      </Portal>
    </Root>
  );
};

export default AddUserModal;
