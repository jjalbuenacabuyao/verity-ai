"use client";

import React, { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import Button from "./Button";

interface Props {
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  required: boolean;
  label: string;
}

const InputField = ({ type, id, name, required, label }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative mb-6">
      <input
        className={`peer h-12 w-full rounded-md border border-gray-400 px-3 placeholder-transparent autofill:bg-transparent focus:outline-sky-500 ${
          type === "password" ? "pr-9" : ""
        }`}
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        name={name}
        required={required}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5  peer-focus:text-sm peer-focus:text-gray-600">
        {label}
      </label>

      {type === "password" && (
        <Button
          variant="toggler"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3.5">
          {showPassword ? <BiShowAlt size={20} /> : <BiHide size={20} />}
        </Button>
      )}
    </div>
  );
};

export default InputField;
