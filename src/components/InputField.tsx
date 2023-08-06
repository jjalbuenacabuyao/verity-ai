"use client";

import React, { ChangeEvent, useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import Button from "./Button";

interface Props {
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  required: boolean;
  label: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const InputField = ({ type, id, name, required, label, error, value, onChange }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const userNotExist = error === "User does not exist";
  const incorrectPassword = error === "Incorrect password";

  return (
    <div className="relative mb-6">
      <input
        className={`peer h-12 w-full rounded-md border border-gray-400 px-3 placeholder-transparent autofill:bg-transparent focus:outline-sky-500 ${
          type === "password" ? "pr-9" : ""
        } ${
          userNotExist || incorrectPassword
            ? "border-red-600 focus:outline-red-600"
            : ""
        }`}
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        name={name}
        required={required}
        placeholder={label}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e)
          }
        }}
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

      {userNotExist && (
        <p className="text-sm text-red-600">User does not exist</p>
      )}

      {incorrectPassword && (
        <p className="text-sm text-red-600">Incorrect password</p>
      )}
    </div>
  );
};

export default InputField;
