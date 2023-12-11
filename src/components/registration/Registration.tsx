"use client";

import React, { useState } from "react";
import NameInput from "./NameInput";
import { RegistrationData } from "@/types";
import EmailAndPasswordInput from "./EmailAndPasswordInput";
import TermsAndCondition from "./TermsAndCondition";
import DataPrivacyConsent from "./DataPrivacyConsent";
import RegistrationComplete from "./RegistrationComplete";

type Props = {
  token: string;
}

const Registration = ({ token }: Props) => {
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
      {registrationPhase !== "registrationComplete" && (
        <h1 className="mb-4 text-center text-2xl font-bold">Registration</h1>
      )}

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

      {registrationPhase === "dataPrivacyConsent" && (
        <DataPrivacyConsent
          token={token}
          dataConsentAccepted={dataConsentAccepted}
          registrationData={registrationData}
          setDataConsentAccepted={setDataConsentAccepted}
          setRegistrationPhase={setRegistrationPhase}
        />
      )}

      {registrationPhase === "registrationComplete" && (
        <RegistrationComplete />
      )}
    </div>
  );
};

export default Registration;
