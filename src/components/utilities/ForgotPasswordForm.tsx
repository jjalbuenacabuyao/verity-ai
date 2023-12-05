"use client";

import { Input } from "@nextui-org/input";
import React, { ChangeEvent, FormEvent, useState } from "react";
import PasswordVisibilityToggler from "./PasswordVisibilityToggler";
import axios from "axios";
import { Button } from "@nextui-org/button";
import Toast from "./Toast";
import { useRouter } from "next/navigation";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessToastOpen, setIsSuccessToastOpen] = useState(false);
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsPasswordInvalid(false);
    setIsLoading(true);

    if (passwords.newPassword.length < 8) {
      setIsPasswordInvalid(true);
      setIsLoading(false);
      return;
    }

    const response: {
      status: 200 | 500;
    } = await axios
      .post("/api/resetPassword", {
        id: id,
        password: passwords.verifyPassword,
      })
        .then((res) => res.data);
    
    setIsLoading(false);

    if (response.status == 200) {
      setIsSuccessToastOpen(true);
      router.push("/");
    } else {
      setIsErrorToastOpen(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="m-auto flex max-w-lg flex-col gap-4 px-6 py-10"
      >
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
          errorMessage={
            isPasswordInvalid ? "Minimum 8 characters required." : ""
          }
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
          isLoading={isLoading}
          type="submit"
          variant="solid"
          className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
        >
          Submit
        </Button>
      </form>

      <Toast
        type="fileLimitExceeded"
        isOpen={isErrorToastOpen}
        onOpenChange={setIsErrorToastOpen}
        description="An error occured."
      />

      <Toast
        type="userIsAdded"
        isOpen={isSuccessToastOpen}
        onOpenChange={setIsSuccessToastOpen}
        description="Password reset successfully."
      />
    </div>
  );
};

export default ForgotPasswordForm;
