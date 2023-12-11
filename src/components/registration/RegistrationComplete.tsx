"use client";

import React from "react";
import { LogInButton } from "../utilities";

type Props = {};

const RegistrationComplete = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <h1 className="text-4xl font-bold text-blue-500 leading-4">Registration Complete</h1>
      <LogInButton />
    </div>
  );
};

export default RegistrationComplete;
