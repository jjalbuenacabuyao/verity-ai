import React from "react";
import EyeSlashFilledIcon from "./EyeSlashFilledIcon";
import EyeFilledIcon from "./EyeFilledIcon";

interface Props {
  toggleVisibility: () => void;
  isVisible: boolean;
}

/*
  * The toggler for showing or hiding the password.
*/

const PasswordVisibilityToggler = ({ toggleVisibility, isVisible }: Props) => {
  return (
    <button
      className="focus:outline-none"
      type="button"
      onClick={toggleVisibility}
    >
      {isVisible ? (
        <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
      ) : (
        <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
      )}
    </button>
  );
};

export default PasswordVisibilityToggler;
