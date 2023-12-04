"use client";

import { Input } from "@nextui-org/input";
import React, { ChangeEvent, FormEvent, useState } from "react";
import PasswordVisibilityToggler from "./PasswordVisibilityToggler";
import axios from "axios";
import { Button } from "@nextui-org/button";

type Props = {
  id: string;
};

const ForgotPasswordForm = ({ id }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    verifyPassword: "",
  });
  const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsPasswordInvalid(false);

    if (passwords.newPassword.length < 8) {
      setIsPasswordInvalid(true);
      return;
    }

    const response = await axios.post("/api/resetPassword", {
      id: id,
      password: passwords.verifyPassword,
    }).then(res => res.data);

    console.log(response)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Set new password"
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
        validationState={isPasswordInvalid ? "invalid" : "valid"}
        errorMessage={isPasswordInvalid ? "Minimum 8 characters required." : ""}
      />

      <Input
        label="Verify new password"
        variant="bordered"
        name="verifyPassword"
        isRequired
        onChange={handleChange}
        endContent={
          <PasswordVisibilityToggler
            toggleVisibility={toggleVisibility}
            isVisible={isVisible}
          />
        }
        type={isVisible ? "text" : "password"}
        validationState={
          passwords.newPassword !== passwords.verifyPassword
            ? "invalid"
            : "valid"
        }
        errorMessage={
          passwords.newPassword !== passwords.verifyPassword
            ? "Password does not match."
            : ""
        }
      />
      <Button
        type="submit"
        variant="solid"
        className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
      >
        Submit
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
