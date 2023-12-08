"use client";

import { RegistrationData } from "@/types";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

type Props = {
  registrationData: RegistrationData;
  setRegistrationData: Dispatch<SetStateAction<RegistrationData>>;
  setRegistrationPhase: Dispatch<SetStateAction<string>>;
};

const NameInput = ({
  registrationData,
  setRegistrationData,
  setRegistrationPhase,
}: Props) => {
  const [inputsInvalid, setInputsInvalid] = useState({
    firstName: false,
    middleName: false,
    lastName: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({
      ...registrationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const { firstname, middlename, lastname } = registrationData;
    const { firstName, middleName, lastName } = inputsInvalid;

    if (!firstName && !middleName && !lastName) {
      setIsLoading(true);
      setRegistrationPhase("emailAndPassword");
      return;
    }

    if (firstname === "") {
      setInputsInvalid({ ...inputsInvalid, firstName: true });
    }

    if (middlename === "") {
      setInputsInvalid({ ...inputsInvalid, middleName: true });
    }

    if (lastname === "") {
      setInputsInvalid({ ...inputsInvalid, lastName: true });
    }

    return;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">
      <fieldset className="grid gap-5">
        <Input
          autoFocus
          label="Firstname"
          name="firstname"
          value={registrationData.firstname}
          isRequired
          variant="bordered"
          validationState={inputsInvalid.firstName ? "invalid" : "valid"}
          errorMessage={inputsInvalid.firstName ? "Invalid firstname." : ""}
          onChange={handleChange}
        />
        <Input
          label="Middle name"
          name="middlename"
          value={registrationData.middlename}
          isRequired
          variant="bordered"
          validationState={inputsInvalid.middleName ? "invalid" : "valid"}
          errorMessage={inputsInvalid.middleName ? "Invalid middle name." : ""}
          onChange={handleChange}
        />
        <Input
          label="Last name"
          name="lastname"
          value={registrationData.lastname}
          isRequired
          variant="bordered"
          validationState={inputsInvalid.lastName ? "invalid" : "valid"}
          errorMessage={inputsInvalid.lastName ? "Invalid last name." : ""}
          onChange={handleChange}
        />
      </fieldset>

      <div className="flex justify-end">
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

export default NameInput;
