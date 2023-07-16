import React from "react";

interface Props {
  variant: "primary" | "secondary" | "toggler";
  type?: "button" | "reset" | "submit";
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant, type, text, onClick, children }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant} rounded-full px-6 py-2 text-sm`}>
      {text}
      {children}
    </button>
  );
};

export default Button;
