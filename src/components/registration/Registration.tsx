"use client";

import React, { useState } from "react";
import NameInput from "./NameInput";
import { RegistrationData } from "@/types";
import EmailAndPasswordInput from "./EmailAndPasswordInput";
import TermsAndCondition from "./TermsAndCondition";

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
  const [emailVerified, setEmailVerified] = useState(false);

  return (
    <div className="mx-6 my-10 max-w-lg p-6 sm:mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Registration</h1>
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
          emailVerified={emailVerified}
          setEmailVerified={setEmailVerified}
        />
      )}

      {registrationPhase === "termsAndCondition" && (
        <TermsAndCondition
          setRegistrationPhase={setRegistrationPhase}
          setTermsAndConditionsAccepted={setTermsAndConditionsAccepted}
          termsAndConditionAccepted={termsAndConditionAccepted}
        />
      )}
    </div>
  );
};

export default Registration;
