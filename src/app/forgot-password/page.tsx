"use client";

import { MailIcon, Toast } from "@/components/utilities";
import { validateEmail } from "@/utils";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import axios from "axios";
import React, { FormEvent, useState } from "react";


const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [userExist, setUserExist] = useState(true);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUserExist(true);
    setIsLoading(true);

    const email = event.currentTarget.email.value;

    if (!validateEmail(email)) {
      setIsEmailInvalid(true);
      setIsLoading(false);
      return;
    }

    setIsEmailInvalid(false);

    const response: {
      status: 200 | 500;
    } = await axios
      .post("/api/forgotPassword", {
        email: email,
      })
      .then((res) => res.data);

    response.status == 200 ? setIsEmailSent(true) : setUserExist(false);

    setIsLoading(false);
  };

  return (
    <div className="mx-auto max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-6 py-10"
      >
        <p className="mb-4 font-bold">
          Enter your user account&apos;s email address and we will send you a
          password reset link.
        </p>
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
            userExist == false || isEmailInvalid ? "invalid" : "valid"
          }
          errorMessage={
            userExist == false
              ? "User does not exist."
              : isEmailInvalid
              ? "Invalid email."
              : ""
          }
        />
        <Button
          isLoading={isLoading}
          type="submit"
          variant="solid"
          className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
        >
          {isLoading ? "Sending" : "Send password reset email"}
        </Button>
        <Toast
          type="userIsAdded"
          isOpen={isEmailSent}
          onOpenChange={setIsEmailSent}
          description="An email for password rest was sent."
        />
      </form>
    </div>
  );
};

export default Page;
