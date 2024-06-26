"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

type Props = {
  setTermsAndConditionsAccepted: Dispatch<SetStateAction<boolean>>;
  setRegistrationPhase: Dispatch<SetStateAction<string>>;
  termsAndConditionAccepted: boolean;
};

const TermsAndCondition = ({
  setTermsAndConditionsAccepted,
  setRegistrationPhase,
  termsAndConditionAccepted,
}: Props) => {
  return (
    <div className="text-justify">
      <h2 className="mb-4 text-lg font-medium">Terms and Conditions</h2>
      <p className="mb-2">
        This website provides a service that allows users to upload their
        academic texts and check if they are generated by artificial
        intelligence (AI) tools. The purpose of this service is to help users
        improve their academic integrity and avoid plagiarism.
      </p>
      <p>
        By using this website, you agree to the following terms and conditions:
      </p>
      <ul className="mb-6 grid list-disc gap-2 pl-5">
        <li>
          This website does not guarantee 100% accuracy, completeness, or
          reliability of the results. You should always verify the originality
          of your texts with other sources and methods.
        </li>
        <li>
          You grant this website permission process, and display your texts for
          the purpose of providing the service. You retain the ownership and
          intellectual property rights of your texts.
        </li>
        <li>
          You will not use this website for any unlawful, fraudulent, or
          malicious purposes.
        </li>
        <li>
          You will respect the privacy and security of other users. You will not
          share or disclose any personal or confidential information that you
          may obtain from this website.
        </li>
        <li>
          You acknowledge that this website may use third-party services or
          tools to perform the analysis of your texts. You also acknowledge that
          this website may collect and use some data about your usage of the
          service for statistical and improvement purposes.
        </li>
        <li>
          You agree to indemnify and hold harmless this website and its owners,
          operators, employees, agents, and affiliates from any claims, damages,
          liabilities, costs, or expenses arising from your breach of these
          terms and conditions or your use of the service.
        </li>
        <li>
          This website reserves the right to modify, suspend, or terminate the
          service at any time without prior notice or liability. This website
          also reserves the right to change these terms and conditions at any
          time by posting the updated version on this page. Your continued use
          of the service after such changes constitutes your acceptance of the
          new terms and conditions.
        </li>
        <li>
          You understand that the results of this service are not conclusive
          evidence of AI-generated texts.
        </li>
        <li>
          You agree not to accuse or penalize any student solely based on the
          results of this service. You should always conduct a fair and thorough
          investigation before taking any action against a student suspected of
          using AI-generated texts.
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <Checkbox
          isSelected={termsAndConditionAccepted}
          onValueChange={setTermsAndConditionsAccepted}
        >
          I agree to the Terms and Conditions
        </Checkbox>
        <Button
          variant="solid"
          isDisabled={!termsAndConditionAccepted}
          className="bg-blue-500 text-sm font-semibold tracking-wide text-white"
          onClick={() => setRegistrationPhase("dataPrivacyConsent")}
        >
          Continue
        </Button>
        <Button
          variant="flat"
          onClick={() => setRegistrationPhase("emailAndPassword")}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default TermsAndCondition;
