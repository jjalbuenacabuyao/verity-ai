"use client";

import { RegistrationData } from "@/types";
import { Input } from "@nextui-org/input";
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { MailIcon, PasswordVisibilityToggler } from "../utilities";
import { Button } from "@nextui-org/button";
import { validateEmail } from "@/utils";
import axios from "axios";

type Props = {
  registrationData: RegistrationData;
  setRegistrationData: Dispatch<SetStateAction<RegistrationData>>;
  setRegistrationPhase: Dispatch<SetStateAction<string>>;
};

const EmailAndPasswordInput = ({
  registrationData,
  setRegistrationData,
  setRegistrationPhase,
}: Props) => {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [userDoesNotExist, setUserDoesNotExist] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({ ...registrationData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    setIsEmailInvalid(false);
    setIsPasswordInvalid(false);
    setUserDoesNotExist(false);
    setIsLoading(true);

    if (!validateEmail(registrationData.email)) {
      setIsEmailInvalid(true);
      setIsLoading(false);
      return;
    }

    if (registrationData.password.length < 8) {
      setIsPasswordInvalid(true);
      setIsLoading(false);
      return;
    }

    const response: {
      status: 200 | 500
    } = await axios.post("/checkuseremail", {
      email: registrationData.email
    }).then(res => res.data);

    if (response.status == 200) {
      setIsLoading(false);
      setRegistrationPhase("termsAndCondition");
      return;
    } else {
      setIsLoading(false);
      setUserDoesNotExist(true);
      return;
    }
  }

  return (
    <form className="grid gap-8" onSubmit={handleSubmit}>
      <fieldset className="grid gap-5">
        <Input
          autoFocus
          endContent={
            <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
          }
          label="Email"
          name="email"
          value={registrationData.email}
          isRequired
          variant="bordered"
          validationState={
            userDoesNotExist || isEmailInvalid ? "invalid" : "valid"
          }
          errorMessage={
            userDoesNotExist
              ? "User does not exist"
              : isEmailInvalid
              ? "Invalid email."
              : ""
          }
          onChange={handleChange}
        />

        <Input
          endContent={
            <PasswordVisibilityToggler
              toggleVisibility={toggleVisibility}
              isVisible={isVisible}
            />
          }
          isRequired
          label="Password"
          name="password"
          value={registrationData.password}
          type={isVisible ? "text" : "password"}
          variant="bordered"
          validationState={isPasswordInvalid ? "invalid" : "valid"}
          errorMessage={
            isPasswordInvalid ? "Minimum 8 characters required." : ""
          }
          onChange={handleChange}
        />
      </fieldset>
      <div className="flex justify-end gap-4">
        <Button color="danger" variant="flat" onClick={() => setRegistrationPhase("name")}>
          Back
        </Button>
        <Button
          isLoading={isLoading}
          type="submit"
          variant="solid"
          className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default EmailAndPasswordInput;
