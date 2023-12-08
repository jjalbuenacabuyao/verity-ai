"use client";

import React, { useState } from "react";
import NameInput from "./NameInput";
import { RegistrationData } from "@/types";
import EmailAndPasswordInput from "./EmailAndPasswordInput";

const Registration = () => {
  const [registrationPhase, setRegistrationPhase] = useState("name");
  const [termsAndConditionAccepted, setTermsAndConditionsAccepted] =
    useState(false);
  const [dataConsentAccepted, setDataConsentAccepted] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    email: "",
    password: "",
    role: "USER",
    firstname: "",
    middlename: "",
    lastname: "",
  });

  return (
    <div className="mx-6 my-10 max-w-lg p-6 sm:mx-auto">
      <h1>Registration</h1>
      {registrationPhase === "name" && (
        <NameInput
          setRegistrationPhase={setRegistrationPhase}
          registrationData={registrationData}
          setRegistrationData={setRegistrationData}
        />
      )}

      {registrationPhase === "emailAndPassword" && (
        <EmailAndPasswordInput
          setRegistrationPhase={setRegistrationPhase}
          registrationData={registrationData}
          setRegistrationData={setRegistrationData}
        />
      )}
    </div>
  );
};

export default Registration;
