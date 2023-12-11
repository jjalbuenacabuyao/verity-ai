"use client";

import { Checkbox } from "@nextui-org/react";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Button } from "@nextui-org/button";
import { RegistrationData } from "@/types";
import axios from "axios";
import { Toast } from "../utilities";

type Props = {
  dataConsentAccepted: boolean;
  setDataConsentAccepted: Dispatch<SetStateAction<boolean>>;
  setRegistrationPhase: Dispatch<SetStateAction<string>>;
  registrationData: RegistrationData;
  token: string;
};

const DataPrivacyConsent = ({
  dataConsentAccepted,
  setDataConsentAccepted,
  setRegistrationPhase,
  registrationData,
  token,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("/api/register", registrationData);
      await axios.post("/api/deletetoken", token);
      setIsLoading(false);
      setRegistrationPhase("registrationComplete");
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <>
      <div className="text-justify">
        <h2 className="mb-6 text-lg font-medium">DataPrivacyConsent</h2>
        <p className="mb-4">
          We are committed to protecting your personal data and respecting your
          privacy. This consent form explains how we collect, use, and share
          your personal data when you visit our website or use our services.
        </p>
        <p className="mb-4">
          By using our website or services, you agree to provide us with some
          personal data, such as your name, email, log time, and password. We
          need this data to create and manage your account, to provide you with
          the best service possible, and to improve our website and services. We
          do not sell or share your personal data with third parties for
          marketing purposes. You have the right to withdraw your consent to
          your personal data at any time. You can do this by contacting us.
        </p>
        <p>
          By clicking &quot;I agree&quot; below, you confirm that you have read
          and understood this consent form and that you consent to the
          collection, use, and sharing of your personal data as described above.
        </p>

        <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
          <Checkbox
            isSelected={dataConsentAccepted}
            onValueChange={setDataConsentAccepted}
          >
            I agree
          </Checkbox>
          <Button
            type="submit"
            variant="solid"
            isDisabled={!dataConsentAccepted}
            className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
            isLoading={isLoading}
          >
            Continue
          </Button>
          <Button
            type="button"
            variant="flat"
            onClick={() => setRegistrationPhase("termsAndCondition")}
          >
            Back
          </Button>
        </form>
      </div>

      {isError && (
        <Toast
          type="fileSizeExceeded"
          isOpen={isError}
          onOpenChange={setIsError}
          description="Please try again."
        />
      )}
    </>
  );
};

export default DataPrivacyConsent;
